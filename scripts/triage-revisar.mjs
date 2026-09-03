#!/usr/bin/env node
// Triage de las preguntas marcadas `revisar`. SOLO diagnóstico: no repara
// nada, no toca index.html ni la base.
//
//   node scripts/triage-revisar.mjs [--detalle] [--tipo caso_ajeno]
//
// Cruza tres cosas:
//   1. el banco de index.html, que es lo que hoy ve el alumno
//   2. fuentes/pack_preguntas.json, la extracción cruda del PDF
//   3. fuentes/pack_preguntas_texto.md, la misma extracción en prosa
// y clasifica cada pregunta por el defecto que la dejó marcada, con la
// evidencia concreta que disparó esa clasificación.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runInNewContext } from "node:vm";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const DETALLE = process.argv.includes("--detalle");
const SOLO = (() => {
  const k = process.argv.indexOf("--tipo");
  return k >= 0 ? process.argv[k + 1] : null;
})();

// ── fuentes ──
const PACK_JSON = "fuentes/pack_preguntas.json";
const PACK_MD = "fuentes/pack_preguntas_texto.md";
const IMG_MD = "fuentes/transcripcion_PACK_CHOICE_imagenes.md";

const html = readFileSync(join(RAIZ, "index.html"), "utf8");
const pack = JSON.parse(readFileSync(join(RAIZ, PACK_JSON), "utf8"));
const md = readFileSync(join(RAIZ, PACK_MD), "utf8");
const img = readFileSync(join(RAIZ, IMG_MD), "utf8");
const mdLineas = md.split("\n");
const imgLineas = img.split("\n");

// La transcripción de las páginas-imagen viene en bloques "### Pregunta N".
const bloquesImg = (() => {
  const out = [];
  let actual = null;
  imgLineas.forEach((l, k) => {
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
})();

// Solapamiento entre dos listas de opciones: 1 = mismo juego de opciones.
const tokens = (t) => new Set((t || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean));
function solape(a, b) {
  if (!a.length || !b.length) return 0;
  const A = a.map(tokens), B = b.map(tokens);
  let suma = 0;
  for (const x of A) {
    if (!x.size) continue;
    let mejor = 0;
    for (const y of B) {
      const inter = [...x].filter((t) => y.has(t)).length;
      const union = new Set([...x, ...y]).size;
      mejor = Math.max(mejor, union ? inter / union : 0);
    }
    suma += mejor;
  }
  return suma / A.length;
}

function leerBanco() {
  const A = "const BANCO = [", Z = "BANCO5.forEach(q => BANCO.push(q));";
  const ambito = {};
  runInNewContext(html.slice(html.indexOf(A), html.indexOf(Z) + Z.length) + "\n;__b = BANCO;",
    ambito, { timeout: 10000 });
  return ambito.__b;
}

const BANDERAS = ["respuesta_ia_no_verificada", "caso_reconstruido",
  "respuesta_pendiente", "respuesta_correcta_no_disponible_en_el_pack"];

const banco = leerBanco();
const marcadas = banco.filter((q) => BANDERAS.some((f) => q[f]));
const porId = Object.fromEntries(pack.map((p) => [p.id, p]));
const porPagina = {};
pack.forEach((p) => (porPagina[p.pagina] = porPagina[p.pagina] || []).push(p));
const ordenPack = Object.fromEntries(pack.map((p, k) => [p.id, k]));

// ── heurísticas ──
// Boilerplate del aula virtual que se coló al extraer la capa de texto.
const BOILER = /sin responder a[úu]n|punt[úu]a como|marcar pregunta|enunciado de la pregunta|finalizar revisi[óo]n|comenzado el|se puntu[óa]/gi;
// Una opción que termina en conectivo quedó cortada a mitad de frase.
const CORTADA = /\b(y|o|de|del|la|el|los|las|en|con|que|por|para|un|una|se|su|al|sobre|entre|como|si|no)\s*$/i;
// "Fulana de 34 años", "Un varón de 6 meses": marca de que hay una viñeta.
const VINETA = /\b(de|tiene)\s+\d{1,3}\s*(años|meses|días|semanas)\b/i;
// El enunciado cuelga de un paciente que tiene que estar en otro lado.
const COLGADO = /\b(la|el)\s+paciente\b|\besta\s+paciente\b|\bdel?\s+caso\b|\bde\s+acuerdo\s+a\s+su\s+respuesta\s+anterior\b|\bcuadro\s+cl[íi]nico\s+descripto\b|\blos\s+datos\s+expuestos\b|\bdiagnosticado\s+el\b|\beste\s+paciente\b/i;

const limpio = (t) => (t || "").replace(/\s+/g, " ").trim();
const recorte = (t, n) => (limpio(t).length > n ? limpio(t).slice(0, n) + "…" : limpio(t));

function lineaMd(id) {
  const k = mdLineas.findIndex((l) => l.startsWith("## " + id + " "));
  return k >= 0 ? k + 1 : null;
}

// ¿Hay una viñeta reutilizable? Las encadenadas cuelgan de una viñeta que
// está en una pregunta ANTERIOR del mismo documento, no necesariamente en la
// misma página: el pack está en orden de lectura, así que se camina para
// atrás hasta encontrarla. Muchas vienen ancladas a un "EJERCICIO CLINICO
// Nro. N", que es el vínculo más fuerte cuando aparece.
const EJERCICIO = /EJERCICIO\s+CLINICO\s+N(?:ro)?\.?\s*(\d+)/i;
const VENTANA_ATRAS = 8;

// Coherencia mínima entre el enunciado colgado y la viñeta candidata: si el
// enunciado habla de "esta paciente" y la viñeta es un varón, el vínculo es
// falso por más cerca que esté. Es el mismo criterio que define caso_ajeno,
// aplicado ahora al candidato para no cambiar un caso ajeno por otro.
const FEM = /\b(la|esta|dicha)\s+paciente\b|\bla\s+(se[ñn]ora|mujer|ni[ñn]a|embarazada|purpera|pu[ée]rpera)\b/i;
const MASC = /\b(el|este|dicho)\s+paciente\b|\bel\s+(se[ñn]or|var[oó]n|ni[ñn]o|hombre)\b/i;
function sexo(t) {
  const f = FEM.test(t), m = MASC.test(t);
  if (f && !m) return "f";
  if (m && !f) return "m";
  return null;
}
function sexoVineta(t) {
  if (/\b(una mujer|la se[ñn]ora|sra\.|ni[ñn]a|embarazada|multipara|mult[ií]para|g\d+p\d+)\b/i.test(t)) return "f";
  if (/\b(un var[oó]n|un hombre|el se[ñn]or|sr\.|ni[ñn]o de)\b/i.test(t)) return "m";
  return null;
}

function tieneVineta(x) {
  const ctx = limpio(x.contexto);
  if (ctx.length > 150) return true;
  const t = ctx + " " + limpio(x.enunciado);
  return EJERCICIO.test(t) || (VINETA.test(t) && t.length > 200);
}

function marcarCoherencia(p, x, salto, via, firme) {
  const pedido = sexo(limpio(p.enunciado));
  const trae = sexoVineta(limpio(x.contexto) + " " + limpio(x.enunciado));
  const choca = pedido && trae && pedido !== trae;
  const lejos = Math.abs(x.pagina - p.pagina) > 2;
  const notas = [];
  if (choca) notas.push("el enunciado pide paciente " + (pedido === "f" ? "mujer" : "varón")
    + " y la viñeta es " + (trae === "f" ? "mujer" : "varón"));
  if (lejos) notas.push("están a " + Math.abs(x.pagina - p.pagina) + " páginas de distancia");
  return { id: x.id, linea: lineaMd(x.id), pagina: x.pagina, salto, via,
           firme: firme && !choca && !lejos, choca, notas };
}

function casoVecino(p) {
  const k = ordenPack[p.id];
  const mio = (limpio(p.contexto) + " " + limpio(p.enunciado)).match(EJERCICIO);
  const candidatos = [];

  // Se busca en las dos direcciones: la extracción no respeta el orden de
  // lectura de la página, así que la viñeta de una pregunta puede haber
  // quedado registrada DESPUÉS de ella (p. ej. PC-051, cuyo caso es el de
  // PC-052). Se prioriza misma página, después el ejercicio numerado, y
  // recién al final la cercanía.
  for (let j = Math.max(0, k - VENTANA_ATRAS); j <= Math.min(pack.length - 1, k + VENTANA_ATRAS); j++) {
    if (j === k) continue;
    const x = pack[j];
    if (!tieneVineta(x)) continue;
    const suyo = (limpio(x.contexto) + " " + limpio(x.enunciado)).match(EJERCICIO);
    const mismoEj = !!(mio && suyo && suyo[1] === mio[1]);
    const mismaPag = x.pagina === p.pagina;
    candidatos.push({
      x, j, mismoEj, mismaPag,
      dist: Math.abs(j - k),
      distPag: Math.abs(x.pagina - p.pagina),
      via: mismoEj ? "mismo EJERCICIO CLINICO Nro. " + mio[1]
        : mismaPag ? "misma página"
        : "p. " + x.pagina + (j < k ? ", anterior" : ", posterior"),
    });
  }
  if (!candidatos.length) return null;

  // El choque de sexo descarta, no solo penaliza: es cambiar un caso ajeno
  // por otro caso ajeno.
  const pedido = sexo(limpio(p.enunciado));
  const vivos = candidatos.filter((c) => {
    const trae = sexoVineta(limpio(c.x.contexto) + " " + limpio(c.x.enunciado));
    c.trae = trae;
    return !(pedido && trae && pedido !== trae);
  });
  const pool = vivos.length ? vivos : candidatos;

  pool.sort((a, b) =>
    (b.mismaPag - a.mismaPag) || (b.mismoEj - a.mismoEj) || (a.distPag - b.distPag) || (a.dist - b.dist));
  const g = pool[0];

  const notas = [];
  if (!vivos.length) notas.push("todas las viñetas cercanas chocan en el sexo del paciente");
  if (g.distPag > 2) notas.push("están a " + g.distPag + " páginas de distancia");
  if (!g.mismaPag && !g.mismoEj) notas.push("no comparten página ni número de ejercicio");
  if (pool.length > 1 && pool[1].mismaPag === g.mismaPag && pool[1].distPag === g.distPag) {
    notas.push("hay más de una viñeta igual de cerca (" + pool.slice(0, 3).map((c) => c.x.id).join(", ") + ")");
  }
  return {
    id: g.x.id, linea: lineaMd(g.x.id), pagina: g.x.pagina, salto: g.dist, via: g.via,
    firme: notas.length === 0, notas,
  };
}

// ── rescate de una consigna perdida ──
// Tres vías, en orden de confianza:
//   1. gemela en el propio pack. El PDF repite el mismo examen en varios
//      intentos: el bloque de pp. 265-274 trae una pregunta por página con
//      su caso entero, y el de pp. 323-336 lo repite partido en dos y sin
//      enunciado. Mismo juego de opciones = misma pregunta.
//   2. la transcripción de las páginas-imagen.
//   3. la compañera de página: las repreguntas ("¿y ahora qué conducta?")
//      no tienen gemela propia, pero cuelgan del caso de la pregunta de
//      al lado, que sí se recuperó.
function buscarConsigna(p) {
  const mias = p.opciones.map((o) => o.texto);
  const pruebas = [];

  let mejor = null;
  for (const q of pack) {
    if (q.id === p.id) continue;
    const sc = solape(mias, q.opciones.map((o) => o.texto));
    if (sc >= 0.8 && limpio(q.enunciado.replace(BOILER, " ")).length > 40) {
      if (!mejor || sc > mejor.sc) mejor = { q, sc };
    }
    BOILER.lastIndex = 0;
  }
  if (mejor) {
    pruebas.push("gemela exacta en el pack: " + mejor.q.id + " (p. " + mejor.q.pagina
      + ", solape de opciones " + mejor.sc.toFixed(2) + "), y esa sí conserva el enunciado");
    return { recuperable: "sí", fuente: PACK_MD + ":" + lineaMd(mejor.q.id)
      + " (gemela " + mejor.q.id + ", p. " + mejor.q.pagina + ")", pruebas };
  }

  let mejorImg = null;
  for (const b of bloquesImg) {
    const sc = solape(mias, b.opciones);
    if (sc >= 0.5 && (!mejorImg || sc > mejorImg.sc)) mejorImg = { b, sc };
  }
  if (mejorImg) {
    pruebas.push("aparece en la transcripción de páginas-imagen: " + mejorImg.b.titulo
      + " (solape de opciones " + mejorImg.sc.toFixed(2) + ")");
    if (mejorImg.sc < 0.95) {
      pruebas.push("el juego de opciones no es idéntico: son dos variantes de la misma pregunta,"
        + " sirve la consigna pero hay que respetar las opciones que trae el pack");
    }
    return { recuperable: mejorImg.sc < 0.95 ? "dudoso" : "sí", fuente: IMG_MD + ":" + mejorImg.b.linea
      + " (" + mejorImg.b.titulo + ")", pruebas };
  }

  // 3. compañera de página con gemela propia
  const companeras = (porPagina[p.pagina] || []).filter((x) => x.id !== p.id);
  for (const c of companeras) {
    const r = buscarGemelaSimple(c);
    if (r) {
      pruebas.push("es una repregunta: no tiene gemela propia, pero su compañera de página "
        + c.id + " sí (" + r.id + "), y de ahí sale el caso");
      pruebas.push("la consigna puntual de esta pregunta sigue perdida: se recupera el caso, no el texto de la pregunta");
      return { recuperable: "dudoso", fuente: PACK_MD + ":" + lineaMd(r.id)
        + " (caso vía " + c.id + " → " + r.id + ")", pruebas };
    }
  }

  return { recuperable: "no",
    fuente: "no aparece en ninguna de las tres fuentes del repo · haría falta el PDF original", pruebas };
}
function buscarGemelaSimple(p) {
  const mias = p.opciones.map((o) => o.texto);
  for (const q of pack) {
    if (q.id === p.id) continue;
    if (solape(mias, q.opciones.map((o) => o.texto)) >= 0.8) {
      BOILER.lastIndex = 0;
      if (limpio(q.enunciado.replace(BOILER, " ")).length > 40) return q;
    }
    BOILER.lastIndex = 0;
  }
  return null;
}

// ── clasificación ──
function clasificar(q) {
  const p = q.procedencia && porId[q.procedencia.id_original];
  const pruebas = [];
  let tipo = "otro";
  let recuperable = "no";   // "sí" | "dudoso" | "no"
  let fuente = "—";

  if (!p) {
    pruebas.push("no tiene procedencia hacia el pack: nació en el banco");
    return { tipo: "otro", recuperable: "no", fuente: "—", pruebas };
  }

  const enun = limpio(p.enunciado);
  const ctx = limpio(p.contexto);
  const opsCortadas = p.opciones.filter((o) => CORTADA.test(o.texto.trim()));
  const sinCorrecta = q.opciones.filter((o) => o.ok).length === 0;
  const ubic = PACK_MD + ":" + lineaMd(p.id) + " · " + PACK_JSON + " (" + p.id + ", p. " + p.pagina + ")";

  // El orden es la prioridad: gana el defecto que hay que arreglar primero.
  BOILER.lastIndex = 0;
  if (BOILER.test(enun)) {
    BOILER.lastIndex = 0;
    tipo = "contaminada";
    const resto = limpio(enun.replace(BOILER, " "));
    pruebas.push('el enunciado arranca con boilerplate del aula: "' + recorte(enun, 70) + '"');
    if (resto.length < 25) {
      pruebas.push("sacado el boilerplate no queda consigna (quedan " + resto.length
        + " caracteres): al extraer la capa de texto solo entró el encabezado del aula");
      const rescate = buscarConsigna(p);
      pruebas.push(...rescate.pruebas);
      recuperable = rescate.recuperable;
      fuente = rescate.fuente;
    } else {
      pruebas.push('debajo del boilerplate sí queda consigna: "' + recorte(resto, 60) + '"');
      recuperable = "sí";
      fuente = ubic;
    }
  } else if (p.contexto_descartado) {
    tipo = "caso_ajeno";
    pruebas.push("el pack detectó una viñeta adyacente y la descartó por incoherente (contexto_descartado)");
    pruebas.push("el caso que hoy muestra el banco lo escribió la IA, no sale de las fuentes");
    const v = casoVecino(p);
    if (v) {
      pruebas.push("viñeta candidata: " + v.id + " (" + v.via + ", a " + v.salto + " pregunta(s))");
      v.notas.forEach((n) => pruebas.push("vínculo dudoso: " + n));
      recuperable = v.firme ? "sí" : "dudoso";
      fuente = PACK_MD + ":" + v.linea + " (viñeta de " + v.id + ", p. " + v.pagina + ")";
    } else {
      fuente = ubic + " · sin viñeta en las " + VENTANA_ATRAS + " preguntas previas";
    }
  } else if (!ctx && COLGADO.test(enun) && !VINETA.test(enun)) {
    tipo = "sin_caso";
    pruebas.push('el enunciado cuelga de un paciente que no está en el texto adjunto: "' + recorte(enun, 70) + '"');
    const v = casoVecino(p);
    if (v) {
      pruebas.push("viñeta candidata: " + v.id + " (" + v.via + ", a " + v.salto + " pregunta(s))");
      v.notas.forEach((n) => pruebas.push("vínculo dudoso: " + n));
      recuperable = v.firme ? "sí" : "dudoso";
      fuente = PACK_MD + ":" + v.linea + " (viñeta de " + v.id + ", p. " + v.pagina + ")";
    } else {
      fuente = ubic + " · sin viñeta en las " + VENTANA_ATRAS + " preguntas previas";
    }
  } else if (opsCortadas.length) {
    tipo = "opciones_incompletas";
    pruebas.push(opsCortadas.length + " opción(es) cortada(s) a mitad de frase, p. ej.: \""
      + recorte(opsCortadas[0].texto, 70) + '"');
    pruebas.push("el corte ya viene de la extracción: el .md trae el mismo texto truncado");
    recuperable = "no";
    fuente = "no está completo en las fuentes del repo · hace falta el PDF";
  } else if (p.opciones.length !== q.opciones.length) {
    tipo = "opciones_incompletas";
    pruebas.push("el pack trae " + p.opciones.length + " opciones y el banco " + q.opciones.length
      + ": alguien completó o recortó la lista");
    recuperable = "sí";
    fuente = ubic;
  } else if (sinCorrecta) {
    tipo = "sin_respuesta";
    pruebas.push("la pregunta está completa pero ninguna opción tiene ok: true");
    pruebas.push("el pack se extrajo sin respuestas marcadas (lo dice el encabezado del .md)");
    recuperable = "no";
    fuente = "ninguna fuente del repo trae la correcta";
  } else {
    tipo = "otro";
    pruebas.push("no dispara ninguna regla: quedó marcada por la bandera "
      + BANDERAS.filter((f) => q[f]).join("+"));
    fuente = ubic;
    recuperable = "sí";
  }

  // observaciones que no cambian el tipo pero conviene ver
  if (tipo !== "sin_respuesta" && sinCorrecta) pruebas.push("además: sin opción correcta marcada");
  if (tipo !== "opciones_incompletas" && opsCortadas.length) {
    pruebas.push("además: " + opsCortadas.length + " opción(es) cortada(s)");
  }
  return { tipo, recuperable, fuente, pruebas };
}

// ── salida ──
const filas = marcadas.map((q) => ({ id: q.id, area: q.area, ...clasificar(q) }))
  .filter((f) => !SOLO || f.tipo === SOLO)
  .sort((a, b) => a.tipo.localeCompare(b.tipo) || a.id.localeCompare(b.id));

const anchos = {
  id: Math.max(2, ...filas.map((f) => f.id.length)),
  tipo: Math.max(4, ...filas.map((f) => f.tipo.length)),
  fuente: Math.max(6, ...filas.map((f) => f.fuente.length)),
};
const pad = (t, n) => t + " ".repeat(Math.max(0, n - t.length));

console.log(pad("id", anchos.id) + "  " + pad("tipo", anchos.tipo) + "  recup. fuente donde aparece");
console.log("-".repeat(anchos.id + anchos.tipo + anchos.fuente + 12));
for (const f of filas) {
  console.log(pad(f.id, anchos.id) + "  " + pad(f.tipo, anchos.tipo) + "  "
    + pad(f.recuperable, 6) + " " + f.fuente);
  if (DETALLE) f.pruebas.forEach((e) => console.log("      · " + e));
}

const conteo = {};
filas.forEach((f) => (conteo[f.tipo] = (conteo[f.tipo] || 0) + 1));
console.log("\nconteo por tipo");
Object.entries(conteo).sort((a, b) => b[1] - a[1])
  .forEach(([t, n]) => console.log("  " + pad(t, anchos.tipo) + "  " + n));
console.log("  " + pad("TOTAL", anchos.tipo) + "  " + filas.length
  + "\n  recuperables desde el repo: " + filas.filter((f) => f.recuperable === "sí").length
  + " firmes · " + filas.filter((f) => f.recuperable === "dudoso").length + " dudosas · "
  + filas.filter((f) => f.recuperable === "no").length + " no");
