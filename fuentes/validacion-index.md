# Validación de `index.html`

Generado por `scripts/validar-preguntas.mjs`. 257 preguntas leídas.

| canasta | preguntas | qué pasa con ellas |
|---|---|---|
| AUTO | 0 | se corrigen con `--aplicar`, sin preguntar |
| PROPUESTA | 51 | esperan OK, no se aplican |
| CUARENTENA | 16 | entran con `revisar: true` y motivo |

## Campo `bloque` — distinct crudo y mapeo propuesto

**No se aplica nada.** Los bloques tienen que poder crearse, renombrarse y recibir
preguntas movidas, así que el vocabulario no se congela desde acá. Esto es el
`select distinct` para que decidas.

| valor crudo | preguntas | mapeo propuesto |
|---|---|---|
| `Clínica Médica` | 113 | `Clínica Médica` |
| `Pediatría` | 41 | `Pediatría` |
| `Clínica` | 39 | `Clínica Médica` |
| `Gineco-Obstetricia` | 32 | `Gineco-Obstetricia` |
| `Cirugía` | 21 | `Cirugía` |
| `Ginecología` | 11 | `Gineco-Obstetricia` |

## Canasta AUTO — 0 preguntas

Transformaciones determinísticas y reversibles. Todas pasaron las invariantes:
mismas cifras, mismas opciones, ninguna respuesta marcada, ninguna palabra nueva.

## Canasta PROPUESTA — 51 preguntas

Nada de esto se aplica sin tu OK. `--aplicar` no las toca.

### `pc-008` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-009` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-012` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-017` · Pediatría

- **detecté:** 1 opción(es) cortada(s) a mitad de frase
  - **propongo:** completar el texto desde la gemela, sin agregar opciones nuevas
  - **fuente:** fuentes/pack_preguntas_texto.md / fuentes/transcripcion_PACK_CHOICE_imagenes.md
  - **confianza:** media
  - **antes:** `Indica que inicialmente comiencen con vegetales y que luego incorporen otros grupos de`

### `pc-028` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-029` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-073` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-074` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-100` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-135` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-144` · Clínica Médica

- **detecté:** el enunciado cuelga de un paciente que no aparece en el caso adjunto
  - **propongo:** recuperar la viñeta de la pregunta encadenada
  - **fuente:** fuentes/pack_preguntas_texto.md
  - **confianza:** media

### `pc-164` · Clínica Médica

- **detecté:** pregunta sin correcta marcada en el banco
  - **propongo:** correcta: c) Coombs indirecta. Confirmada la hemólisis, el paso que parte el árbol en dos es la prueba de Coombs: separa la hemólisis inmune de la no inmune, y de eso depende todo el manejo posterior. Las crioaglutininas (a) son un subtipo que solo se pide después de un Coombs positivo, y la vitamina B12 (b) corresponde a anemia megaloblástica, no hemolítica. OJO: el estándar en este punto es el Coombs DIRECTO, que busca anticuerpos sobre el glóbulo rojo del paciente; el indirecto busca anticuerpos libres en el suero y se usa sobre todo para compatibilidad transfusional. O la opción está mal transcripta, o la pregunta original decía directa. Es la única opción de las tres que apunta al estudio correcto, pero no la apliques sin mirar el papel.
  - **fuente:** razonamiento sobre el enunciado del propio banco · marcadas_PACK_CHOICE.md no cubre esta pregunta
  - **confianza:** media

### `pc-169` · Pediatría

- **detecté:** 2 opción(es) cortada(s) a mitad de frase
  - **propongo:** completar el texto desde la gemela, sin agregar opciones nuevas
  - **fuente:** fuentes/pack_preguntas_texto.md / fuentes/transcripcion_PACK_CHOICE_imagenes.md
  - **confianza:** media
  - **antes:** `Se debería aguardar a que alcanzara un peso y una talla en percentilo 50 para comenzar con`

### `pc-004` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-004
  - **confianza:** media

### `pc-026` · Cirugía

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-026
  - **confianza:** media

### `pc-051` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-051
  - **confianza:** media

### `pc-053` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-053
  - **confianza:** media

### `pc-054` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-054
  - **confianza:** media

### `pc-055` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-055
  - **confianza:** media

### `pc-056` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-056
  - **confianza:** media

### `pc-062` · Cirugía

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-062
  - **confianza:** media

### `pc-067` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-067
  - **confianza:** media

### `pc-068` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-068
  - **confianza:** media

### `pc-087` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-087
  - **confianza:** media

### `pc-088` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-088
  - **confianza:** media

### `pc-093` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-093
  - **confianza:** media

### `pc-094` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-094
  - **confianza:** media

### `pc-096` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-096
  - **confianza:** media

### `pc-099` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-099
  - **confianza:** media

### `pc-106` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-106
  - **confianza:** media

### `pc-107` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-107
  - **confianza:** media

### `pc-108` · Gineco-Obstetricia

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-108
  - **confianza:** media

### `pc-112` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-112
  - **confianza:** media

### `pc-114` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-114
  - **confianza:** media

### `pc-115` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-115
  - **confianza:** media

### `pc-116` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-116
  - **confianza:** media

### `pc-125` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-125
  - **confianza:** media

### `pc-131` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-131
  - **confianza:** media

### `pc-132` · Clínica Médica

- **detecté:** caso ajeno: al extraer se detectó una viñeta adyacente y se descartó por incoherente
  - **propongo:** recuperar la viñeta original de la cadena, sin reescribirla
  - **fuente:** fuentes/pack_preguntas_texto.md · `node scripts/triage-revisar.mjs --detalle` da el candidato de pc-132
  - **confianza:** media

### `pc-149` · Cirugía

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-150` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-151` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-152` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-153` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-154` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-155` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-156` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-157` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-158` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-160` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

### `pc-161` · Clínica Médica

- **detecté:** el enunciado se perdió: de la capa de texto solo entró el encabezado del aula
  - **propongo:** tomar la consigna de la gemela del pack o de la transcripción de páginas-imagen
  - **fuente:** `node scripts/triage-revisar.mjs --tipo contaminada --detalle`
  - **confianza:** media

## Canasta CUARENTENA — 16 preguntas

No se importan corregidas y no se propone arreglo: completarlas sería inventar
contenido médico. Van al banco con `revisar: true` y el motivo, o quedan afuera.

### `pc-042` · Pediatría

- 1 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-052` · Clínica Médica

- 1 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-057` · Cirugía

- 2 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-059` · Clínica Médica

- 3 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-063` · Gineco-Obstetricia

- 1 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-064` · Gineco-Obstetricia

- 2 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-069` · Clínica Médica

- 4 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-085` · Clínica Médica

- 3 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-090` · Gineco-Obstetricia

- 1 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-091` · Gineco-Obstetricia

- 3 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-103` · Clínica Médica

- 1 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-129` · Clínica Médica

- 2 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

### `pc-162` · Clínica Médica

- la correcta no está entre las opciones presentes (Enfermedad arterial periférica crónica del miembro inferior izquierdo, con claudicación intermitente): marcarla exigiría agregar una opción que no estaba
- **la respondí igual, para que la tengas:** Enfermedad arterial periférica crónica del miembro inferior izquierdo, con claudicación intermitente
  - El cuadro es claudicación intermitente: dolor que aparece con la marcha, cede con el reposo y reaparece, sostenido 60 días, con caída progresiva de pulsos distales (poplíteo disminuido, pedio ausente). La opción a (obstrucción ARTERIAL AGUDA) queda descartada por el propio caso: una isquemia aguda cursa con frialdad y palidez del miembro, y acá los dos miembros están a la misma temperatura y el cuadro lleva 60 días. La c (TVP) no da ausencia de pulsos ni dolor desencadenado por la marcha. La b (canal medular estrecho) es el diagnóstico diferencial correcto de la claudicación, pero lo que la descarta es la ausencia de pulso pedio, que es un hallazgo vascular, no neurogénico. La opción correcta no sobrevivió al recorte.
  - confianza: alta
  - **no se aplica**: marcarla exigiría agregar una opción que no estaba.

### `pc-163` · Clínica Médica

- la correcta no está entre las opciones presentes (LDH, haptoglobina, bilirrubina INDIRECTA y recuento de reticulocitos): marcarla exigiría agregar una opción que no estaba
- **la respondí igual, para que la tengas:** LDH, haptoglobina, bilirrubina INDIRECTA y recuento de reticulocitos
  - La hemólisis se confirma con LDH alta, haptoglobina baja, bilirrubina indirecta alta y reticulocitosis. La opción c dice bilirrubina DIRECTA, que es justo la que no sube en la hemólisis: el hemo se cataboliza a bilirrubina no conjugada. La a (PCR) es un reactante de fase aguda inespecífico y la b (CPK) es muscular. Las dos opciones que la pregunta pide marcar no están en la lista.
  - confianza: alta
  - **no se aplica**: marcarla exigiría agregar una opción que no estaba.

### `pc-165` · Pediatría

- la correcta no está entre las opciones presentes (Debut de diabetes mellitus tipo 1 con cetoacidosis diabética, y deshidratación con acidosis metabólica con anion gap aumentado): marcarla exigiría agregar una opción que no estaba
- **la respondí igual, para que la tengas:** Debut de diabetes mellitus tipo 1 con cetoacidosis diabética, y deshidratación con acidosis metabólica con anion gap aumentado
  - Glucemia 380 con glucosuria +++ y cetonuria ++, más pH 7,25 con CO3H 13 y EB -10, es cetoacidosis diabética: no hay otra lectura posible. La b dice alcalosis metabólica y el EAB muestra acidosis, así que se cae sola. La d propone diabetes insípida, que cursa con glucemia normal, no 380. La c (infección urinaria con insuficiencia renal) no se sostiene: 5 leucocitos por campo no es piuria, y la urea de 60 con creatinina 0,8 es prerrenal por la deshidratación. La a es la más cercana pero habla de SHOCK hipovolémico, y la niña está lúcida, con diuresis presente y mucosas semihúmedas: está deshidratada, no en shock. La opción correcta quedó fuera del recorte.
  - confianza: alta
  - **no se aplica**: marcarla exigiría agregar una opción que no estaba.

### `pc-084` · Gineco-Obstetricia

- 2 opción(es) cortada(s) sin gemela ni variante en ninguna fuente

## `marcadas_PACK_CHOICE.md`

Trae 28 marcas. Son las de quien sacó las capturas, no una
clave de cátedra: el propio archivo lo aclara. 5 son internamente
contradictorias o vienen sin marca visible, así que no sirven ni como propuesta:
- Pregunta 8: d tildada; b y d resaltadas en amarillo
- Pregunta 9: c y d tildadas; d y e resaltadas en amarillo
- Pregunta 12: sin marca visible
- Pregunta 16: sin marca visible
- Pregunta 19: sin marca visible

Ninguna de estas marcas corresponde a una pregunta que hoy esté en el banco:
cubren las páginas-imagen (pp. 242–251, 262–263, 398, 420–424), que todavía no
se importaron. Sirven para cuando se importen, no para las 4 sin respuesta de ahora.
