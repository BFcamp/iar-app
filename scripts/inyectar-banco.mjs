#!/usr/bin/env node
// Inyecta fuentes/banco-normalizado.json dentro de index.html.
//
//   node scripts/inyectar-banco.mjs [--verificar]
//
// El JSON es la fuente de verdad del corpus; index.html lo lleva embebido.
// Con --verificar no escribe: solo dice si el archivo está al día.
//
// Por qué embebido y no un fetch: la app corre en tres lugares y en dos de
// ellos un fetch relativo no funciona — desde file:// lo bloquea CORS, y
// dentro de un artefacto de Claude no hay archivo aparte que buscar. Un solo
// archivo autocontenido es un requisito del proyecto, no una comodidad.
// El precio es este paso de inyección, que es barato y verificable.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { RAIZ, leer } from "./lib/fuentes.mjs";

const VERIFICAR = process.argv.includes("--verificar");

const INICIO = "/* ═══ banco de preguntas · generado ═══";
const FIN = "/* fin del banco generado */";
// marcadores del banco viejo, escrito a mano en arrays BANCO..BANCO5
const VIEJO_A = "const BANCO = [";
const VIEJO_Z = "BANCO5.forEach(q => BANCO.push(q));";

const banco = JSON.parse(leer("fuentes/banco-normalizado.json"));

// JSON es JS válido salvo por dos caracteres que rompen un literal, y por
// "</script>", que cerraría la etiqueta antes de tiempo.
function comoLiteral(datos) {
  return JSON.stringify(datos, null, 1)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
    .replace(/</g, "\\u003c");
}

const bloque = INICIO + "\n"
  + "   Fuente: fuentes/banco-normalizado.json (" + banco.length + " preguntas).\n"
  + "   NO editar a mano: se regenera con `node scripts/inyectar-banco.mjs`,\n"
  + "   y cualquier cambio hecho acá se pierde en la próxima inyección.\n"
  + "   Las correcciones van al JSON, que es lo que valida validar-preguntas.mjs.\n"
  + "*/\n"
  + "const BANCO = " + comoLiteral(banco) + ";\n"
  + FIN;

const html = readFileSync(join(RAIZ, "index.html"), "utf8");

// Se acepta tanto el banco viejo (primera corrida) como el ya generado.
let a = html.indexOf(INICIO), z = html.indexOf(FIN);
let fin = z >= 0 ? z + FIN.length : -1;
if (a < 0) {
  a = html.indexOf(VIEJO_A);
  const zv = html.indexOf(VIEJO_Z);
  if (a < 0 || zv < 0) {
    console.error("No encontré el banco en index.html, ni el viejo ni el generado.");
    process.exit(1);
  }
  fin = zv + VIEJO_Z.length;
}

const nuevo = html.slice(0, a) + bloque + html.slice(fin);

if (nuevo === html) {
  console.log("index.html ya está al día (" + banco.length + " preguntas).");
  process.exit(0);
}
if (VERIFICAR) {
  console.error("index.html NO está al día con fuentes/banco-normalizado.json.");
  console.error("Corré: node scripts/inyectar-banco.mjs");
  process.exit(1);
}

writeFileSync(join(RAIZ, "index.html"), nuevo);
console.log("inyectadas " + banco.length + " preguntas en index.html");
console.log("  bloque anterior: " + (fin - a) + " caracteres");
console.log("  bloque nuevo:    " + bloque.length + " caracteres");
