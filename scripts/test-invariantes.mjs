// Verifica que las invariantes rechacen lo que tienen que rechazar.
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const src = readFileSync("scripts/validar-preguntas.mjs", "utf8");
// se extraen las piezas puras para probarlas aisladas
const mod = join(mkdtempSync(join(tmpdir(), "inv-")), "m.mjs");
const ini = src.indexOf("const MOJIBAKE");
const fin = src.indexOf("// ═══ detección");
writeFileSync(mod, 'import { BOILER_G } from "' + join(process.cwd(), "scripts/lib/fuentes.mjs")
  + '";\n' + src.slice(ini, fin)
  + "\nexport { normalizar, verificarInvariantes, REGLAS_AUTO, cifras };\n");

const { normalizar, verificarInvariantes } = await import(mod);

let fallos = 0;
const test = (nombre, ok) => { console.log((ok ? "  ok  " : " FALLA") + "  " + nombre); if (!ok) fallos++; };

// 1. una regla que se lleva puesta una cifra clínica → rechazada
const reglaMala = { nombre: "mala", aplica: (t) => t.replace("13", "1.3") };
test("una regla que corre un decimal es rechazada",
  verificarInvariantes("CO3H 13 EB -10", "CO3H 1.3 EB -10").length > 0);

// 2. una regla que inventa texto → rechazada
test("una regla que agrega palabras es rechazada",
  verificarInvariantes("dolor abdominal", "dolor abdominal agudo").length > 0);

// 3. el boilerplate SÍ puede llevarse su propio puntaje
const r = normalizar("Sin responder aún \nPuntúa como 1,00\nGlucosa 380 mg%");
test("borra el puntaje del aula y conserva la glucemia",
  !r.texto.includes("1,00") && r.texto.includes("380"));
test("ninguna transformación quedó rechazada en ese caso",
  r.cambios.every((c) => !c.rechazado));

// 4. una cifra clínica que coincide con el formato del puntaje NO se toca
const r2 = normalizar("Creatinina 1,00 mg/dl con urea 60");
test("una creatinina de 1,00 sobrevive (no hay frase de puntaje)",
  r2.texto.includes("1,00") && r2.texto.includes("60"));

// 5. la ligadura se expande sin que se la tome por palabra nueva
const r3 = normalizar("Perﬁl lipídico");
test("expande la ligadura sin rechazar", r3.texto === "Perfil lipídico");


// ── separarMarca: las marcas tipeadas se separan, las unidades y los
//    nombres de fármaco NO. Cada caso "no toca" salió de un falso positivo real.
const src2 = readFileSync("scripts/validar-preguntas.mjs", "utf8");
const mod2 = join(mkdtempSync(join(tmpdir(), "marca-")), "m.mjs");
writeFileSync(mod2,
  "const cifras = (t) => ((t || '').match(/\\d+(?:[.,]\\d+)?/g) || []).join('|');\n"
  + src2.slice(src2.indexOf("const MARCAS = ["), src2.indexOf("// Cifras que huelen"))
  + "\nexport { separarMarca };\n");
const { separarMarca } = await import(mod2);

const separa = (t) => { const r = separarMarca(t); return r ? r.util : null; };

console.log("");
test("separa una tira de letras", separa("Hepatograma b s") === "Hepatograma");
test("separa letra con signo", separa("Levotiroxina 125 mcg f?") === "Levotiroxina 125 mcg");
test("separa la tira previa al signo", separa("Levotiroxina 50 mcg b f? creo q") === "Levotiroxina 50 mcg");
test("separa el comentario", separa("Cilostazol esta? es para claudicacion ok") === "Cilostazol");
test("NO toca los gramos", separa("Fosfomicina 3 g dosis única") === null);
test("NO toca el peso en g", separa("peso supera los 2.000 g") === null);
test("NO toca Inmunoglobulina G", separa("Inmunoglobulina g anticore") === null);
test("NO toca anfotericina B", separa("Agregar anfotericina B al esquema elegido.") === null);
test("NO toca Ig M e Ig G", separa("Inmunoglobulina M e Inmunoglobulina G en muestras pareadas.") === null);
test("NO deja la opción vacía", separa("Fe b s f") === null);

console.log(fallos ? "\n" + fallos + " test(s) en falla." : "\nTodo en verde.");
process.exit(fallos ? 1 : 0);
