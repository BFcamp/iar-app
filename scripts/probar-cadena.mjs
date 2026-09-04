#!/usr/bin/env node
// Prueba la Edge Function `cadena` contra una o varias preguntas reales.
//
//   node scripts/probar-cadena.mjs a25-8 o23-13 f26-1-1 [--regenerar]
//
// Por cada pregunta imprime el JSON formateado, cuánto tardó y si vino de
// caché, y después corre las verificaciones del esquema. Las opciones
// correctas/incorrectas salen de index.html, que es la fuente de verdad
// del banco, así que el conteo de descartes se chequea contra la pregunta
// real y no contra lo que el modelo dice que hay.
//
// Con SUPABASE_SERVICE_ROLE_KEY en el entorno además revisa si la pregunta
// dejó filas en cadenas_fallidas.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runInNewContext } from "node:vm";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");

const URL_BASE = process.env.SUPABASE_URL || "https://ovngisrvygbzuamikguz.supabase.co";
const ANON = process.env.SUPABASE_ANON_KEY
  || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bmdpc3J2eWdienVhbWlrZ3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxNDk1MzgsImV4cCI6MjEwMzcyNTUzOH0.8CtDdBq_mNo-DZyRlKG0kQhajdQPsKiIeGgufl4C0NY";
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

const MECANISMOS = new Set([
  "hipoperfusion", "obstruccion", "edema_inflamatorio", "consumo_deplecion",
  "compresion", "perdida_de_barrera", "falla_de_bomba", "disrritmia",
  "toxico_metabolico", "inmune_autoinmune", "proliferativo", "infeccioso_invasivo",
]);
const ERRORES = new Set(["ninguno", "equivocado", "fuera_de_tiempo", "dañina"]);
const LETRAS = "abcdefghij";

const ids = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const regenerar = process.argv.includes("--regenerar");
if (!ids.length) {
  console.error("Uso: node scripts/probar-cadena.mjs <pregunta_id> [más ids…] [--regenerar]");
  process.exit(1);
}

// ── banco local, para saber qué opciones son correctas ──
function leerBanco() {
  const html = readFileSync(join(RAIZ, "index.html"), "utf8");
  const A = "const BANCO = [", Z = "BANCO5.forEach(q => BANCO.push(q));";
  const a = html.indexOf(A), z = html.indexOf(Z);
  if (a < 0 || z < 0) return [];
  const ambito = {};
  runInNewContext(html.slice(a, z + Z.length) + "\n;__b = BANCO;", ambito, { timeout: 10000 });
  return ambito.__b;
}
const BANCO = leerBanco();

const ok = (b) => (b ? "  ok  " : " FALLA");
let fallas = 0;
function chequear(cond, texto) {
  if (!cond) fallas++;
  console.log("  [" + ok(cond) + "] " + texto);
}

async function fallidas(id) {
  if (!SERVICE) return null;
  const r = await fetch(URL_BASE + "/rest/v1/cadenas_fallidas?pregunta_id=eq."
    + encodeURIComponent(id) + "&select=id,creado_en", {
    headers: { apikey: SERVICE, Authorization: "Bearer " + SERVICE },
  });
  return r.ok ? await r.json() : null;
}

function verificar(id, d) {
  const q = BANCO.find((x) => x.id === id);
  console.log("\n  verificación:");

  // 1. claves del esquema
  const faltan = ["mecanismo_indice", "mecanismo", "amenaza", "ventana",
    "intervenciones", "descartes", "regla_transferible", "advertencia"]
    .filter((k) => !(k in d));
  chequear(!faltan.length, "todas las claves del esquema" + (faltan.length ? " · faltan: " + faltan.join(", ") : ""));
  chequear(d.amenaza && typeof d.amenaza === "object" && "blanco" in d.amenaza && "texto" in d.amenaza,
    "amenaza con blanco y texto");
  chequear(d.ventana && typeof d.ventana === "object" && "escala" in d.ventana && "texto" in d.ventana,
    "ventana con escala y texto");
  chequear(["minutos", "horas", "dias", "semanas"].includes(d.ventana && d.ventana.escala),
    "ventana.escala en el enum · " + (d.ventana && d.ventana.escala));

  // 2. mecanismo_indice dentro del enum
  chequear(MECANISMOS.has(d.mecanismo_indice), "mecanismo_indice en el enum · " + d.mecanismo_indice);

  // 3. mecanismo: cadena causal, no el nombre del diagnóstico
  const flechas = (String(d.mecanismo || "").match(/→|->/g) || []).length;
  const palabras = String(d.mecanismo || "").trim().split(/\s+/).filter(Boolean).length;
  chequear(flechas >= 2, "mecanismo encadena (" + flechas + " flechas, " + palabras + " palabras)");
  chequear(palabras <= 60, "mecanismo dentro de las 60 palabras");

  // 4. descartes: uno por opción incorrecta, ni más ni menos
  if (!q) {
    console.log("  [ n/a  ] no encontré " + id + " en el banco local: no puedo contar descartes");
    return;
  }
  const malas = q.opciones.map((o, k) => (o.ok ? null : LETRAS[k])).filter(Boolean);
  const buenas = q.opciones.map((o, k) => (o.ok ? LETRAS[k] : null)).filter(Boolean);
  const dLetras = (d.descartes || []).map((x) => String(x.letra || "").toLowerCase());
  const sobran = dLetras.filter((l) => !malas.includes(l));
  const ausentes = malas.filter((l) => !dLetras.includes(l));
  const repetidas = dLetras.filter((l, k) => dLetras.indexOf(l) !== k);
  chequear(!sobran.length && !ausentes.length && !repetidas.length && dLetras.length === malas.length,
    "descartes = opciones incorrectas (" + malas.length + ") · devueltos " + dLetras.length
    + (ausentes.length ? " · faltan " + ausentes.join(",") : "")
    + (sobran.length ? " · sobran " + sobran.join(",") : "")
    + (repetidas.length ? " · repetidas " + repetidas.join(",") : ""));
  chequear((d.descartes || []).every((x) => ERRORES.has(x.error)), "cada descarte con un error del enum");

  const iLetras = (d.intervenciones || []).map((x) => String(x.letra || "").toLowerCase());
  chequear(iLetras.length === buenas.length && buenas.every((l) => iLetras.includes(l)),
    "intervenciones = opciones correctas (" + buenas.join(",") + ") · devueltas " + (iLetras.join(",") || "ninguna"));
}

for (const id of ids) {
  const t0 = Date.now();
  let r, crudo;
  try {
    r = await fetch(URL_BASE + "/functions/v1/cadena", {
      method: "POST",
      headers: { apikey: ANON, Authorization: "Bearer " + ANON, "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta_id: id, regenerar }),
    });
    crudo = await r.text();
  } catch (e) {
    console.log("── " + id + " ── no se pudo llamar a la función: " + e.message);
    fallas++;
    continue;
  }
  const ms = Date.now() - t0;

  let d;
  try {
    d = JSON.parse(crudo);
  } catch {
    console.log("── " + id + " ── HTTP " + r.status + " · " + ms + " ms · la respuesta NO es JSON:");
    console.log(crudo);
    fallas++;
    continue;
  }

  console.log("\n── " + id + " ── HTTP " + r.status + " · " + ms + " ms · "
    + (d.cacheada ? "de caché" : "generada") + (d.modelo ? " · " + d.modelo : ""));
  console.log(JSON.stringify(d, null, 2));

  if (!r.ok) { fallas++; console.log("\n  la función devolvió error, no verifico el esquema."); }
  else verificar(id, d);

  const f = await fallidas(id);
  if (f === null) console.log("  [ n/a  ] cadenas_fallidas: hace falta SUPABASE_SERVICE_ROLE_KEY para revisarlo");
  else chequear(f.length === 0, "cadenas_fallidas sin filas para " + id + " · " + f.length);
}

console.log("\n" + (fallas ? fallas + " verificación(es) en falla." : "Todo en verde."));
process.exit(fallas ? 1 : 0);
