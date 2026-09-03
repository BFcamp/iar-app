#!/usr/bin/env node
// Validador del corpus. Clasifica cada pregunta en tres canastas y escribe un
// reporte con el antes/después exacto de todo lo que tocaría.
//
//   node scripts/validar-preguntas.mjs [archivo] [--aplicar]
//
// Sin --aplicar no escribe nada fuera del reporte. Con --aplicar ejecuta SOLO
// la canasta AUTO y vuelca el resultado en fuentes/banco-normalizado.json;
// PROPUESTA y CUARENTENA quedan intactas siempre.
//
// La línea que no se cruza: AUTO no puede cambiar un número, agregar o quitar
// una opción, marcar una respuesta ni reescribir un enunciado. Eso no es una
// convención escrita en un comentario: son aserciones que corren después de
// cada transformación y la descartan si falla. Un decimal corrido cambia cuál
// es la conducta correcta.

import { writeFileSync } from "node:fs";
import { join, basename } from "node:path";
import {
  RAIZ, PACK_JSON, PACK_MD, IMG_MD, MARCADAS_MD, leer, leerBanco,
  limpio, recorte, BOILER, BOILER_G, solape, bloquesImagen,
} from "./lib/fuentes.mjs";
import { RESPUESTAS_PROPUESTAS } from "./lib/respuestas-propuestas.mjs";

const args = process.argv.slice(2);
const APLICAR = args.includes("--aplicar");
const ARCHIVO = args.find((a) => !a.startsWith("--")) || "index.html";

// ═══ canasta AUTO ═══
// Cada regla es { nombre, aplica(texto) → texto }: determinística y sin estado.

const MOJIBAKE = [
  ["Ã¡", "á"], ["Ã©", "é"], ["Ã­", "í"], ["Ã³", "ó"], ["Ãº", "ú"], ["Ã±", "ñ"],
  ["â€œ", '"'], ["â€", '"'], ["â€™", "'"], ["â€˜", "'"],
  ["â€“", "–"], ["â€”", "—"], ["Âº", "º"], ["Â°", "°"],
];
const LIGADURAS = [["ﬁ", "fi"], ["ﬂ", "fl"], ["ﬀ", "ff"],
  ["ﬃ", "ffi"], ["ﬄ", "ffl"]];

// Las únicas cifras que una regla tiene permitido hacer desaparecer: las que
// son parte del propio boilerplate. El puntaje va PEGADO a su frase ("Puntúa
// como 1,00"), nunca suelto, así que una glucemia de 380 no puede entrar acá
// ni por accidente. La invariante compara contra esto, no contra el texto
// crudo: si la limpieza se lleva puesta una cifra de afuera, se rechaza.
const CIFRAS_DE_BOILERPLATE =
  /punt[úu]a\s+como\s*\d+(?:[.,]\d+)?|pregunta\s+(?:nro\.?\s*)?\d+(?:\s+de\s+\d+)?|^[ \t]*\d+[ \t]*$/gim;

const REGLAS_AUTO = [
  {
    nombre: "boilerplate",
    permite: CIFRAS_DE_BOILERPLATE,
    aplica: (t) => t
      // el puntaje se consume junto con su frase, no como número suelto
      .replace(/punt[úu]a\s+como\s*\d+(?:[.,]\d+)?/gi, " ")
      .replace(/^[ \t]*Pregunta\s+(?:Nro\.?\s*)?\d+(?:\s+de\s+\d+)?[ \t]*/gim, "")
      .replace(BOILER_G, " ")
      .replace(/Seleccione\s+una\s+o\s+más\s+de\s+una\s*:?/gi, " ")
      .replace(/Seleccione\s+una\s*:?/gi, " ")
      .replace(/^[ \t]*\d+[ \t]*$/gm, ""),
  },
  { nombre: "ligaduras", aplica: (t) => LIGADURAS.reduce((s, [a, b]) => s.split(a).join(b), t) },
  { nombre: "mojibake", aplica: (t) => MOJIBAKE.reduce((s, [a, b]) => s.split(a).join(b), t) },
  {
    nombre: "corte-guion",
    // hipo-\ntiroidismo → hipotiroidismo. Minúscula a ambos lados nada más:
    // un guion entre mayúsculas o cifras puede ser parte del dato.
    aplica: (t) => t.replace(/([a-záéíóúñ])[-‐]\s*\n\s*([a-záéíóúñ])/g, "$1$2"),
  },
  {
    nombre: "tipograficas",
    aplica: (t) => t
      .replace(/[“”„]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/—/g, "–"),
  },
  {
    nombre: "espacios",
    aplica: (t) => t
      .replace(/[ \t ]+/g, " ")
      // salto de línea en medio de una oración: minúscula o coma → minúscula
      .replace(/([a-záéíóúñ,;])\s*\n\s*([a-záéíóúñ])/g, "$1 $2")
      .replace(/ +([?!,;:])/g, "$1")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  },
];

// ═══ invariantes ═══
// Corren después de transformar. Si alguna falla, el cambio se descarta y la
// pregunta queda como estaba.

const cifras = (t) => ((t || "").match(/\d+(?:[.,]\d+)?/g) || []).join("|");

// Para comparar palabras hay que canonizar primero los caracteres: "Perﬁl"
// con ligadura tokeniza como "perl", así que expandirla haría aparecer
// "perfil" como palabra nueva y la invariante rechazaría una sustitución
// legítima. Se canonizan los dos lados y recién ahí se comparan.
const canon = (t) => {
  let s = t || "";
  for (const [a, b] of LIGADURAS) s = s.split(a).join(b);
  for (const [a, b] of MOJIBAKE) s = s.split(a).join(b);
  return s;
};
const palabras = (t) => canon(t).toLowerCase()
  .replace(/[^a-záéíóúñ0-9]+/g, " ").trim().split(" ").filter(Boolean);

function verificarInvariantes(antes, despues, permite) {
  const fallas = [];
  // Las cifras que la regla declaró suyas pueden desaparecer; ninguna otra.
  const esperadas = cifras(permite ? antes.replace(permite, " ") : antes);
  if (esperadas !== cifras(despues)) {
    fallas.push("cambió una cifra: esperaba [" + esperadas + "] y quedó [" + cifras(despues) + "]");
  }
  // Una limpieza solo borra basura y junta espacios: no puede inventar texto.
  const previas = new Set(palabras(antes));
  const nuevas = palabras(despues).filter((w) => !previas.has(w));
  if (nuevas.length) {
    fallas.push("aparecieron palabras que no estaban: " + nuevas.slice(0, 5).join(", "));
  }
  return fallas;
}

function normalizar(texto) {
  const cambios = [];
  let actual = texto || "";
  for (const r of REGLAS_AUTO) {
    const antes = actual;
    let despues;
    try { despues = r.aplica(antes); } catch { continue; }
    if (despues === antes) continue;
    const fallas = verificarInvariantes(antes, despues, r.permite);
    if (fallas.length) {
      cambios.push({ regla: r.nombre, rechazado: true, motivo: fallas, antes, despues });
      continue;   // se descarta: el texto sigue sin tocar
    }
    cambios.push({ regla: r.nombre, antes, despues });
    actual = despues;
  }
  return { texto: actual, cambios };
}

// ═══ detección para PROPUESTA y CUARENTENA ═══

const CORTADA = /\b(y|o|de|del|la|el|los|las|en|con|que|por|para|un|una|se|su|al|sobre|entre|como|si|no)\s*$/i;
const COLGADO = /\b(?:la|el|est[ae])\s+paciente\b|\bde\s+acuerdo\s+a\s+su\s+respuesta\s+anterior\b|\bcuadro\s+cl[íi]nico\s+descripto\b|\blos\s+datos\s+expuestos\b|\bdiagnosticado\s+el\b/i;
const PIDE_N = /marque\s+(?:hasta\s+)?(\d|dos|tres|cuatro|cinco)\s*opci|seleccione\s+(\d|dos|tres)\b|marcar\s+(\d|dos|tres)\s*opci/i;
const NUM = { dos: 2, tres: 3, cuatro: 4, cinco: 5 };

function nPedido(texto) {
  const m = (texto || "").match(PIDE_N);
  if (!m) return null;
  const v = m[1] || m[2] || m[3];
  return NUM[v] || parseInt(v, 10) || null;
}

// Cifras que huelen a error de OCR. Flag, nunca fix: las mira el usuario.
function cifrasSospechosas(texto) {
  const out = [];
  for (const m of (texto || "").matchAll(/\d+(?:[.,]\d+)?/g)) {
    const n = m[0];
    if (/[.,]\d{4,}$/.test(n)) out.push(n + " (¿decimal corrido?)");
  }
  return [...new Set(out)];
}

// ═══ marcadas: las opciones tildadas en las capturas ═══
// No es clave de cátedra. El propio archivo avisa que son las marcas de quien
// sacó las capturas y que pueden estar mal, y señala tres preguntas donde las
// marcas se contradicen entre sí. Esas van derecho a cuarentena.
function leerMarcadas() {
  const txt = leer(MARCADAS_MD);
  const filas = [];
  for (const l of txt.split("\n")) {
    const m = l.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/);
    if (!m || /^-+$/.test(m[1]) || /^(Pregunta|Caso)$/i.test(m[1])) continue;
    filas.push({ pregunta: m[1], marca: m[2] });
  }
  const contradictorias = filas.filter((f) =>
    /tildadas?;.*resaltadas?|sin marca visible/i.test(f.marca));
  return { filas, contradictorias };
}

// ═══ clasificación ═══

const pack = JSON.parse(leer(PACK_JSON));
const porIdPack = Object.fromEntries(pack.map((p) => [p.id, p]));
const bloquesImg = bloquesImagen(leer(IMG_MD));
const marcadas = leerMarcadas();

const banco = leerBanco(ARCHIVO);

const AUTO = [], PROPUESTA = [], CUARENTENA = [];
const distintosBloque = {};

for (const q of banco) {
  distintosBloque[q.area] = (distintosBloque[q.area] || 0) + 1;

  const campos = [["caso", q.caso], ["pregunta", q.pregunta]];
  q.opciones.forEach((o, k) => campos.push(["opciones[" + k + "].t", o.t]));

  const cambios = [], rechazos = [];
  for (const [campo, valor] of campos) {
    const r = normalizar(valor);
    r.cambios.forEach((c) => (c.rechazado ? rechazos : cambios).push({ campo, ...c }));
  }

  const p = q.procedencia && porIdPack[q.procedencia.id_original];
  const motivos = [], propuestas = [];

  // ── cuarentena: arreglar acá sería inventar contenido médico ──
  const sospechosas = cifrasSospechosas((q.caso || "") + " " + (q.pregunta || ""));
  if (sospechosas.length) {
    motivos.push("cifra sospechosa de OCR, sin tocar: " + sospechosas.join("; "));
  }

  const resp = RESPUESTAS_PROPUESTAS[q.id];
  const sinCorrecta = !q.opciones.some((o) => o.ok);
  if (sinCorrecta) {
    if (resp && resp.enOpciones === false) {
      motivos.push("la correcta no está entre las opciones presentes (" + resp.respuestaClinica
        + "): marcarla exigiría agregar una opción que no estaba");
    } else if (!resp) {
      motivos.push("sin opción correcta y ninguna fuente la trae: completarla sería inventarla");
    }
  }

  const cortadas = q.opciones.filter((o) => CORTADA.test((o.t || "").trim()));
  let rescatable = false;
  if (cortadas.length && p) {
    const mias = p.opciones.map((o) => o.texto);
    rescatable = pack.some((x) => x.id !== p.id && solape(mias, x.opciones.map((o) => o.texto)) >= 0.8)
      || bloquesImg.some((b) => solape(mias, b.opciones) >= 0.5);
    if (!rescatable) {
      motivos.push(cortadas.length + " opción(es) cortada(s) sin gemela ni variante en ninguna fuente");
    }
  }

  // ── propuesta: necesita criterio, espera OK ──
  if (p && p.contexto_descartado) {
    propuestas.push({
      que: "caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente",
      propongo: "recuperar la viñeta original de la cadena, sin reescribirla",
      confianza: "media",
      fuente: PACK_MD + " · `node scripts/triage-revisar.mjs --detalle` da el candidato de " + q.id,
    });
  }
  if (p && BOILER.test(limpio(p.enunciado))
      && limpio(p.enunciado.replace(BOILER_G, " ")).length < 25) {
    propuestas.push({
      que: "el enunciado se perdió: de la capa de texto solo entró el encabezado del aula",
      propongo: "tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen",
      confianza: "media",
      fuente: "`node scripts/triage-revisar.mjs --tipo contaminada --detalle`",
    });
  }
  const pedido = nPedido(q.pregunta);
  if (pedido && pedido !== q.n) {
    propuestas.push({
      que: "el enunciado pide " + pedido + " opciones y el banco tiene n=" + q.n,
      propongo: "definir cuál manda; AUTO no pisa n cuando hay desacuerdo",
      confianza: "alta",
      fuente: "el propio enunciado de la pregunta",
    });
  }
  if (!limpio(q.caso) && COLGADO.test(q.pregunta || "")) {
    propuestas.push({
      que: "el enunciado cuelga de un paciente que no aparece en el caso adjunto",
      propongo: "recuperar la viñeta de la pregunta encadenada",
      confianza: "media",
      fuente: PACK_MD,
    });
  }
  if (cortadas.length && rescatable) {
    propuestas.push({
      que: cortadas.length + " opción(es) cortada(s) a mitad de frase",
      propongo: "completar el texto desde la gemela, sin agregar opciones nuevas",
      confianza: "media",
      fuente: PACK_MD + " / " + IMG_MD,
      antes: recorte(cortadas[0].t, 90),
    });
  }
  if (resp && resp.enOpciones === true) {
    propuestas.push({
      que: "pregunta sin correcta marcada en el banco",
      propongo: "correcta: " + resp.correcta + ". " + resp.razon,
      confianza: resp.confianza,
      fuente: resp.fuente + (resp.coincideMarca === true ? " · coincide con la marca de las capturas"
        : resp.coincideMarca === false ? " · NO coincide con la marca de las capturas"
        : " · marcadas_PACK_CHOICE.md no cubre esta pregunta"),
    });
  }

  const ficha = { q, cambios, rechazos, motivos, propuestas, resp };
  if (motivos.length) CUARENTENA.push(ficha);
  else if (propuestas.length) PROPUESTA.push(ficha);
  if (cambios.length || rechazos.length) AUTO.push(ficha);
}

// ═══ reporte ═══

const bloqueMapeo = {
  "Clínica": "Clínica Médica", "Clínica Médica": "Clínica Médica",
  "Ginecología": "Gineco-Obstetricia", "Gineco-Obstetricia": "Gineco-Obstetricia",
  "Pediatría": "Pediatría", "Cirugía": "Cirugía",
};

const conCambios = AUTO.filter((f) => f.cambios.length);
const rechazadas = AUTO.reduce((n, f) => n + f.rechazos.length, 0);

const L = [];
L.push("# Validación de `" + ARCHIVO + "`");
L.push("");
L.push("Generado por `scripts/validar-preguntas.mjs`. " + banco.length + " preguntas leídas.");
L.push("");
L.push("| canasta | preguntas | qué pasa con ellas |");
L.push("|---|---|---|");
L.push("| AUTO | " + conCambios.length + " | se corrigen con `--aplicar`, sin preguntar |");
L.push("| PROPUESTA | " + PROPUESTA.length + " | esperan OK, no se aplican |");
L.push("| CUARENTENA | " + CUARENTENA.length + " | entran con `revisar: true` y motivo |");
L.push("");
if (rechazadas) {
  L.push("**" + rechazadas + " transformación(es) AUTO rechazada(s) por las invariantes.** "
    + "Están al final del reporte: son los casos donde limpiar habría cambiado una cifra "
    + "o agregado texto, así que el campo quedó sin tocar.");
  L.push("");
}

L.push("## Campo `bloque` — distinct crudo y mapeo propuesto");
L.push("");
L.push("**No se aplica nada.** Los bloques tienen que poder crearse, renombrarse y recibir");
L.push("preguntas movidas, así que el vocabulario no se congela desde acá. Esto es el");
L.push("`select distinct` para que decidas.");
L.push("");
L.push("| valor crudo | preguntas | mapeo propuesto |");
L.push("|---|---|---|");
Object.entries(distintosBloque).sort((a, b) => b[1] - a[1])
  .forEach(([v, n]) => L.push("| `" + v + "` | " + n + " | `" + (bloqueMapeo[v] || v) + "` |"));
L.push("");

L.push("## Canasta AUTO — " + conCambios.length + " preguntas");
L.push("");
L.push("Transformaciones determinísticas y reversibles. Todas pasaron las invariantes:");
L.push("mismas cifras, mismas opciones, ninguna respuesta marcada, ninguna palabra nueva.");
L.push("");
conCambios.forEach((f) => {
  L.push("### `" + f.q.id + "`");
  L.push("");
  f.cambios.forEach((c) => {
    L.push("- **" + c.campo + "** · regla `" + c.regla + "`");
    L.push("  - antes: `" + recorte(c.antes, 170) + "`");
    L.push("  - después: `" + recorte(c.despues, 170) + "`");
  });
  L.push("");
});

L.push("## Canasta PROPUESTA — " + PROPUESTA.length + " preguntas");
L.push("");
L.push("Nada de esto se aplica sin tu OK. `--aplicar` no las toca.");
L.push("");
PROPUESTA.forEach((f) => {
  L.push("### `" + f.q.id + "` · " + f.q.area);
  L.push("");
  f.propuestas.forEach((pr) => {
    L.push("- **detecté:** " + pr.que);
    L.push("  - **propongo:** " + pr.propongo);
    L.push("  - **fuente:** " + pr.fuente);
    L.push("  - **confianza:** " + pr.confianza);
    if (pr.antes) L.push("  - **antes:** `" + pr.antes + "`");
  });
  L.push("");
});

L.push("## Canasta CUARENTENA — " + CUARENTENA.length + " preguntas");
L.push("");
L.push("No se importan corregidas y no se propone arreglo: completarlas sería inventar");
L.push("contenido médico. Van al banco con `revisar: true` y el motivo, o quedan afuera.");
L.push("");
CUARENTENA.forEach((f) => {
  L.push("### `" + f.q.id + "` · " + f.q.area);
  L.push("");
  f.motivos.forEach((m) => L.push("- " + m));
  if (f.resp) {
    L.push("- **la respondí igual, para que la tengas:** " + f.resp.respuestaClinica);
    L.push("  - " + f.resp.razon);
    L.push("  - confianza: " + f.resp.confianza);
    L.push("  - **no se aplica**: marcarla exigiría agregar una opción que no estaba.");
  }
  L.push("");
});

L.push("## `marcadas_PACK_CHOICE.md`");
L.push("");
L.push("Trae " + marcadas.filas.length + " marcas. Son las de quien sacó las capturas, no una");
L.push("clave de cátedra: el propio archivo lo aclara. " + marcadas.contradictorias.length
  + " son internamente");
L.push("contradictorias o vienen sin marca visible, así que no sirven ni como propuesta:");
marcadas.contradictorias.forEach((c) => L.push("- Pregunta " + c.pregunta + ": " + c.marca));
L.push("");
L.push("Ninguna de estas marcas corresponde a una pregunta que hoy esté en el banco:");
L.push("cubren las páginas-imagen (pp. 242–251, 262–263, 398, 420–424), que todavía no");
L.push("se importaron. Sirven para cuando se importen, no para las 4 sin respuesta de ahora.");
L.push("");

if (rechazadas) {
  L.push("## Transformaciones rechazadas por las invariantes");
  L.push("");
  AUTO.forEach((f) => f.rechazos.forEach((c) => {
    L.push("- `" + f.q.id + "` · " + c.campo + " · regla `" + c.regla + "` — " + c.motivo.join("; "));
    L.push("  - antes: `" + recorte(c.antes, 130) + "`");
    L.push("  - rechazado: `" + recorte(c.despues, 130) + "`");
  }));
  L.push("");
}

const salida = "fuentes/validacion-" + basename(ARCHIVO).replace(/\.[^.]+$/, "") + ".md";
writeFileSync(join(RAIZ, salida), L.join("\n"));

console.log("archivo:     " + ARCHIVO + "  (" + banco.length + " preguntas)");
console.log("AUTO:        " + conCambios.length);
console.log("PROPUESTA:   " + PROPUESTA.length);
console.log("CUARENTENA:  " + CUARENTENA.length);
if (rechazadas) console.log("rechazadas por invariantes: " + rechazadas);
console.log("reporte:     " + salida);
console.log("");
console.log("bloque — distinct crudo (no se aplica nada):");
Object.entries(distintosBloque).sort((a, b) => b[1] - a[1]).forEach(([v, n]) =>
  console.log("  " + v.padEnd(20) + String(n).padStart(4) + "   → " + (bloqueMapeo[v] || v)));

if (!APLICAR) {
  console.log("");
  console.log("Corrida en seco: no se escribió el banco.");
  console.log("Con --aplicar se ejecuta SOLO la canasta AUTO.");
  process.exit(0);
}

// ═══ --aplicar: solo AUTO ═══

const normalizado = banco.map((q) => {
  const n = { ...q, opciones: q.opciones.map((o) => ({ ...o })) };
  n.caso = normalizar(q.caso).texto;
  n.pregunta = normalizar(q.pregunta).texto;
  n.opciones.forEach((o) => (o.t = normalizar(o.t).texto));
  const cuar = CUARENTENA.find((f) => f.q.id === q.id);
  if (cuar) { n.revisar = true; n.motivo_revisar = cuar.motivos.join(" · "); }
  return n;
});

// Última red antes de escribir: el banco entero conserva cifras y opciones.
const huella = (lista, descontar) => lista.map((q) => {
  const t = (q.caso || "") + (q.pregunta || "") + q.opciones.map((o) => o.t).join("");
  return cifras(descontar ? t.replace(CIFRAS_DE_BOILERPLATE, " ") : t);
}).join("|");
if (huella(banco, true) !== huella(normalizado, false)) {
  console.error("ABORTADO: el banco normalizado no conserva las cifras. No se escribió nada.");
  process.exit(1);
}
if (banco.some((q, k) => q.opciones.length !== normalizado[k].opciones.length)) {
  console.error("ABORTADO: cambió el conteo de opciones. No se escribió nada.");
  process.exit(1);
}
if (banco.some((q, k) => q.opciones.filter((o) => o.ok).length
    !== normalizado[k].opciones.filter((o) => o.ok).length)) {
  console.error("ABORTADO: cambió alguna respuesta marcada. No se escribió nada.");
  process.exit(1);
}

writeFileSync(join(RAIZ, "fuentes/banco-normalizado.json"), JSON.stringify(normalizado, null, 1));
console.log("");
console.log("escrito: fuentes/banco-normalizado.json (" + normalizado.length + " preguntas)");
