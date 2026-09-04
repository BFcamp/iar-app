// Lectura de las fuentes y utilidades compartidas por los scripts de datos.
// Extraído de triage-revisar.mjs para que validar-preguntas.mjs no lo duplique.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runInNewContext } from "node:vm";

export const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

export const PACK_JSON = "fuentes/pack_preguntas.json";
export const PACK_MD = "fuentes/pack_preguntas_texto.md";
export const IMG_MD = "fuentes/transcripcion_PACK_CHOICE_imagenes.md";
export const MARCADAS_MD = "fuentes/marcadas_PACK_CHOICE.md";

export const leer = (rel) => readFileSync(join(RAIZ, rel), "utf8");

// El banco va embebido en index.html. Hay dos formatos posibles:
//   nuevo — un solo literal generado por scripts/inyectar-banco.mjs desde
//           fuentes/banco-normalizado.json, entre marcadores de comentario
//   viejo — los arrays BANCO + BANCO2..BANCO5 escritos a mano
// Los dos son datos puros, así que se cortan por marcador de texto (nunca por
// número de línea) y se evalúan aislados, sin cargar el resto de la app.
const NUEVO_A = "const BANCO = ", NUEVO_Z = "/* fin del banco generado */";
const VIEJO_A = "const BANCO = [", VIEJO_Z = "BANCO5.forEach(q => BANCO.push(q));";

export function leerBanco(rel = "index.html") {
  const html = leer(rel);

  const zNuevo = html.indexOf(NUEVO_Z);
  if (zNuevo >= 0) {
    const aNuevo = html.lastIndexOf(NUEVO_A, zNuevo);
    if (aNuevo < 0) throw new Error("Marcador de fin del banco sin su literal en " + rel);
    return JSON.parse(html.slice(aNuevo + NUEVO_A.length, zNuevo).trim().replace(/;$/, ""));
  }

  const a = html.indexOf(VIEJO_A), z = html.indexOf(VIEJO_Z);
  if (a < 0 || z < 0) {
    throw new Error("No encontré el bloque del corpus en " + rel
      + ". ¿Cambiaron los nombres de BANCO/BANCO5?");
  }
  const ambito = {};
  runInNewContext(html.slice(a, z + VIEJO_Z.length) + "\n;__b = BANCO;", ambito, { timeout: 10000 });
  return ambito.__b;
}

// Banderas que traía el banco original: respuesta reconstruida por IA, caso
// reconstruido, respuesta pendiente o ausente en el pack. Son las que usa el
// triage para elegir su universo de trabajo.
export const BANDERAS = ["respuesta_ia_no_verificada", "caso_reconstruido",
  "respuesta_pendiente", "respuesta_correcta_no_disponible_en_el_pack"];

// Mismo criterio que esDudosa() en index.html, y tiene que seguir siéndolo:
// si se separan, la app y la tabla `preguntas` marcarían cosas distintas.
// `revisar` lo pone validar-preguntas.mjs sobre las de cuarentena.
export const esDudosa = (q) => BANDERAS.some((f) => q[f]) || !!q.revisar;

export const limpio = (t) => (t || "").replace(/\s+/g, " ").trim();
export const recorte = (t, n) => (limpio(t).length > n ? limpio(t).slice(0, n) + "…" : limpio(t));

// Boilerplate del aula virtual que se coló al extraer la capa de texto.
// Sin /g: los llamadores hacen .test() y un lastIndex vivo daría falsos negativos.
// \s+ y no un espacio literal: el PDF parte estas frases con saltos de línea
// ("Seleccione \nuna:"), y con espacio fijo el patrón no las agarra.
export const BOILER = /sin\s+responder\s+a[úu]n|punt[úu]a\s+como|marcar\s+pregunta|enunciado\s+de\s+la\s+pregunta|finalizar\s+revisi[óo]n|comenzado\s+el|se\s+puntu[óa]/i;
export const BOILER_G = new RegExp(BOILER.source, "gi");

export const LETRAS = "abcdefghij";

// ── solape entre juegos de opciones: 1 = misma pregunta ──
export const tokens = (t) => new Set((t || "")
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean));

export function solape(a, b) {
  if (!a.length || !b.length) return 0;
  const A2 = a.map(tokens), B2 = b.map(tokens);
  let suma = 0;
  for (const x of A2) {
    if (!x.size) continue;
    let mejor = 0;
    for (const y of B2) {
      const inter = [...x].filter((t) => y.has(t)).length;
      const union = new Set([...x, ...y]).size;
      mejor = Math.max(mejor, union ? inter / union : 0);
    }
    suma += mejor;
  }
  return suma / A2.length;
}

// ── la transcripción de páginas-imagen, en bloques "### Pregunta N" ──
export function bloquesImagen(texto) {
  const lineas = texto.split("\n");
  const out = [];
  let actual = null;
  lineas.forEach((l, k) => {
    if (l.startsWith("### ")) {
      actual = { titulo: l.slice(4).trim(), linea: k + 1, cuerpo: [], opciones: [] };
      out.push(actual);
    } else if (actual) {
      actual.cuerpo.push(l);
      const m = l.match(/^([a-o])\.\s+(.*)$/);
      if (m) actual.opciones.push(m[2].trim());
    }
  });
  return out.filter((b) => b.opciones.length);
}
