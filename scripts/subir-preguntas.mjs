#!/usr/bin/env node
// Sube el corpus de preguntas a Supabase.
//
//   SUPABASE_SERVICE_ROLE_KEY=... node scripts/subir-preguntas.mjs [--dry]
//
// El corpus no está en un JSON aparte: vive dentro de index.html, en los
// arrays BANCO + BANCO2..BANCO5, que es un bloque de datos puro. Se extrae
// ese bloque y se evalúa aislado, sin cargar el resto de la app.
//
// Es idempotente: usa upsert por id (Prefer: resolution=merge-duplicates),
// así que correrlo dos veces pisa las mismas filas en vez de duplicar.
// Va contra PostgREST con fetch para no depender de node_modules.

import { RAIZ, leerBanco, esDudosa } from "./lib/fuentes.mjs";

const LOTE = 100;

const URL_BASE = process.env.SUPABASE_URL || "https://ovngisrvygbzuamikguz.supabase.co";
const CLAVE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SECO = process.argv.includes("--dry");

function aFila(q) {
  return {
    id: q.id,
    origen_id: (q.procedencia && q.procedencia.id_original) || null,
    bloque: q.area || null,
    fecha: q.examen || null,
    caso_clinico: q.caso || null,
    enunciado: q.pregunta || null,
    opciones: (q.opciones || []).map((o, k) => ({
      letra: "abcdefghij"[k],
      texto: o.t,
      correcta: !!o.ok,
      nota: o.nota || null,
    })),
    n_correctas: q.n || (q.opciones || []).filter((o) => o.ok).length || 1,
    revisar: esDudosa(q),
  };
}

async function subir(lote) {
  const r = await fetch(URL_BASE + "/rest/v1/preguntas?on_conflict=id", {
    method: "POST",
    headers: {
      apikey: CLAVE,
      Authorization: "Bearer " + CLAVE,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(lote),
  });
  if (!r.ok) throw new Error("PostgREST " + r.status + ": " + (await r.text()));
}

const banco = leerBanco();
const vistos = new Set();
const filas = [];
for (const q of banco) {
  if (!q || !q.id) continue;
  if (vistos.has(q.id)) { console.warn("[aviso] id repetido en el banco, me quedo con el primero:", q.id); continue; }
  vistos.add(q.id);
  filas.push(aFila(q));
}

console.log(filas.length + " preguntas leídas de index.html ("
  + filas.filter((f) => f.revisar).length + " marcadas para revisar, "
  + filas.filter((f) => f.origen_id).length + " con id del pack).");

if (SECO) {
  console.log(JSON.stringify(filas[0], null, 2));
  console.log("--dry: no se subió nada.");
  process.exit(0);
}

if (!CLAVE) {
  console.error("Falta SUPABASE_SERVICE_ROLE_KEY en el entorno.");
  process.exit(1);
}

for (let k = 0; k < filas.length; k += LOTE) {
  const lote = filas.slice(k, k + LOTE);
  await subir(lote);
  console.log("subidas " + Math.min(k + LOTE, filas.length) + " / " + filas.length);
}
console.log("Listo.");
