// Edge Function: cadena fisiopatológica de una pregunta.
//
// POST { pregunta_id: string, regenerar?: boolean } → { ...payload, pregunta_id, modelo, generado_en }
//
// El enunciado NUNCA llega desde el cliente: se lee de la base por id.
// Si el front pudiera mandar texto libre, cualquiera con la anon key
// tendría una API de Anthropic gratis a nuestro nombre.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MODELO = "claude-sonnet-5";
const SYSTEM = await Deno.readTextFile(new URL("./system.txt", import.meta.url));

function json(cuerpo: unknown, status = 200) {
  return new Response(JSON.stringify(cuerpo), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

// El modelo a veces envuelve el JSON en ```json … ```. Se sacan las
// vallas y se recorta a las llaves externas antes de parsear.
function limpiar(texto: string): string {
  let t = texto.trim();
  t = t.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "");
  t = t.replace(/`/g, "").trim();
  const a = t.indexOf("{"), z = t.lastIndexOf("}");
  return (a >= 0 && z > a) ? t.slice(a, z + 1) : t;
}

// El enunciado que ve el modelo. Se arma acá, con lo que hay en la base.
function textoDePregunta(q: Record<string, unknown>): string {
  const partes: string[] = [];
  if (q.contexto) partes.push("Caso:\n" + String(q.contexto));
  if (q.enunciado) partes.push("Pregunta:\n" + String(q.enunciado));
  const ops = q.opciones as Array<Record<string, unknown>> | null;
  if (Array.isArray(ops) && ops.length) {
    partes.push("Opciones:\n" + ops.map((o, k) =>
      (o.letra ?? "abcdefghij"[k]) + ") " + (o.texto ?? o.t ?? "")).join("\n"));
  }
  if (q.respuestas_a_marcar) partes.push("Opciones a marcar: " + q.respuestas_a_marcar);
  if (q.area_tentativa) partes.push("Área: " + q.area_tentativa);
  return partes.join("\n\n");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Usá POST." }, 405);

  let cuerpo: { pregunta_id?: string; regenerar?: boolean };
  try {
    cuerpo = await req.json();
  } catch {
    return json({ error: "El cuerpo tiene que ser JSON." }, 400);
  }

  const preguntaId = (cuerpo.pregunta_id || "").trim();
  const regenerar = cuerpo.regenerar === true;
  if (!preguntaId) return json({ error: "Falta pregunta_id." }, 400);

  const sb = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // 1. caché: si ya está generada y no piden regenerar, no se llama al modelo
  if (!regenerar) {
    const { data: guardada } = await sb
      .from("cadenas")
      .select("*")
      .eq("pregunta_id", preguntaId)
      .maybeSingle();
    if (guardada) {
      return json({
        ...(guardada.payload as Record<string, unknown>),
        pregunta_id: guardada.pregunta_id,
        mecanismo_indice: guardada.mecanismo_indice,
        modelo: guardada.modelo,
        generado_en: guardada.generado_en,
        cacheada: true,
      });
    }
  }

  // 2. la pregunta sale de la base, no del cliente
  const { data: q, error: errQ } = await sb
    .from("preguntas")
    .select("*")
    .eq("id", preguntaId)
    .maybeSingle();

  if (errQ) return json({ error: "No se pudo leer la pregunta." }, 500);
  if (!q) return json({ error: "No existe esa pregunta." }, 404);
  if (q.revisar === true) {
    return json({ error: "Esta pregunta está marcada para revisar: no se le genera cadena." }, 409);
  }

  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) return json({ error: "Falta configurar ANTHROPIC_API_KEY." }, 500);

  // 3. modelo
  let resp: Response;
  try {
    resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODELO,
        max_tokens: 1600,
        system: SYSTEM,
        messages: [{ role: "user", content: textoDePregunta(q) }],
      }),
    });
  } catch {
    return json({ error: "No se pudo contactar al modelo." }, 502);
  }

  if (!resp.ok) {
    const detalle = await resp.text();
    console.error("[cadena] anthropic", resp.status, detalle);
    return json({ error: "El modelo no respondió (" + resp.status + ")." }, 502);
  }

  const salida = await resp.json();
  const crudo = (salida.content || [])
    .filter((b: { type?: string }) => b.type === "text")
    .map((b: { text?: string }) => b.text || "")
    .join("");

  // 4. parseo. Si falla, queda el crudo guardado y el front muestra un aviso
  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(limpiar(crudo));
  } catch {
    await sb.from("cadenas_fallidas").insert({ pregunta_id: preguntaId, crudo });
    return json({
      error: "La cadena volvió mal formada. Quedó guardada para revisar; probá de nuevo.",
    }, 400);
  }

  const mecanismo = String(payload.mecanismo_indice ?? payload.mecanismo ?? "").trim();
  if (!mecanismo) {
    await sb.from("cadenas_fallidas").insert({ pregunta_id: preguntaId, crudo });
    return json({ error: "La cadena vino sin mecanismo. Quedó guardada para revisar." }, 400);
  }

  // 5. guardar y devolver
  const fila = {
    pregunta_id: preguntaId,
    mecanismo_indice: mecanismo,
    payload,
    modelo: MODELO,
    generado_en: new Date().toISOString(),
  };
  const { error: errUp } = await sb.from("cadenas").upsert(fila, { onConflict: "pregunta_id" });
  if (errUp) console.error("[cadena] no se pudo guardar:", errUp);

  return json({ ...payload, ...fila, cacheada: false });
});
