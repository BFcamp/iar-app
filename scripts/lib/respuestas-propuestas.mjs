// Respuestas razonadas para las preguntas del banco que no tienen correcta.
//
// Esto NO se aplica nunca de forma automática: `validar-preguntas.mjs` lo usa
// solo para armar fichas de la canasta PROPUESTA (o de CUARENTENA cuando la
// correcta no está entre las opciones presentes). El único camino al banco es
// que el usuario apruebe la ficha.
//
// `enOpciones: false` significa que razoné la pregunta y la respuesta correcta
// NO figura entre las opciones que sobrevivieron a la extracción. Marcar algo
// ahí exigiría agregar una opción que no estaba, que es justamente lo que no
// se hace. Va a cuarentena con el motivo, no a propuesta.
//
// `coincideMarca` cruza con fuentes/marcadas_PACK_CHOICE.md; null = ese archivo
// no cubre esta pregunta.

export const RESPUESTAS_PROPUESTAS = {
  // Héctor, 50 años. Dolor en pantorrilla que aparece caminando y obliga a
  // detenerse, repetido, 60 días. Sin lesiones tróficas, ambos miembros a la
  // misma temperatura, femorales conservados, poplíteo izquierdo apenas
  // palpable, pedio ausente.
  "pc-162": {
    enOpciones: false,
    respuestaClinica: "Enfermedad arterial periférica crónica del miembro inferior izquierdo, con claudicación intermitente",
    correcta: "ninguna de las 3 opciones presentes",
    razon: "El cuadro es claudicación intermitente: dolor que aparece con la marcha, "
      + "cede con el reposo y reaparece, sostenido 60 días, con caída progresiva de "
      + "pulsos distales (poplíteo disminuido, pedio ausente). La opción a (obstrucción "
      + "ARTERIAL AGUDA) queda descartada por el propio caso: una isquemia aguda cursa "
      + "con frialdad y palidez del miembro, y acá los dos miembros están a la misma "
      + "temperatura y el cuadro lleva 60 días. La c (TVP) no da ausencia de pulsos ni "
      + "dolor desencadenado por la marcha. La b (canal medular estrecho) es el "
      + "diagnóstico diferencial correcto de la claudicación, pero lo que la descarta "
      + "es la ausencia de pulso pedio, que es un hallazgo vascular, no neurogénico. "
      + "La opción correcta no sobrevivió al recorte.",
    confianza: "alta",
    fuente: "razonamiento sobre el enunciado del propio banco",
    coincideMarca: null,
  },

  // Lita, 23 años, cuadro compatible con hemólisis. Qué pide para confirmarla.
  "pc-163": {
    enOpciones: false,
    respuestaClinica: "LDH, haptoglobina, bilirrubina INDIRECTA y recuento de reticulocitos",
    correcta: "ninguna de las 3 opciones presentes",
    razon: "La hemólisis se confirma con LDH alta, haptoglobina baja, bilirrubina "
      + "indirecta alta y reticulocitosis. La opción c dice bilirrubina DIRECTA, que es "
      + "justo la que no sube en la hemólisis: el hemo se cataboliza a bilirrubina no "
      + "conjugada. La a (PCR) es un reactante de fase aguda inespecífico y la b (CPK) "
      + "es muscular. Las dos opciones que la pregunta pide marcar no están en la lista.",
    confianza: "alta",
    fuente: "razonamiento sobre el enunciado del propio banco",
    coincideMarca: null,
  },

  // Encadenada con la anterior: ya diagnosticada la hemólisis, qué sigue.
  "pc-164": {
    enOpciones: true,
    respuestaClinica: "Prueba de Coombs",
    correcta: "c) Coombs indirecta",
    razon: "Confirmada la hemólisis, el paso que parte el árbol en dos es la prueba de "
      + "Coombs: separa la hemólisis inmune de la no inmune, y de eso depende todo el "
      + "manejo posterior. Las crioaglutininas (a) son un subtipo que solo se pide "
      + "después de un Coombs positivo, y la vitamina B12 (b) corresponde a anemia "
      + "megaloblástica, no hemolítica. "
      + "OJO: el estándar en este punto es el Coombs DIRECTO, que busca anticuerpos "
      + "sobre el glóbulo rojo del paciente; el indirecto busca anticuerpos libres en "
      + "el suero y se usa sobre todo para compatibilidad transfusional. O la opción "
      + "está mal transcripta, o la pregunta original decía directa. Es la única "
      + "opción de las tres que apunta al estudio correcto, pero no la apliques sin "
      + "mirar el papel.",
    confianza: "media",
    fuente: "razonamiento sobre el enunciado del propio banco",
    coincideMarca: null,
  },

  // Uma, 6 años. Poliuria, polidipsia, adelgazamiento con buen apetito.
  // Glucemia 380, glucosuria +++, cetonuria ++, pH 7,25, CO3H 13, EB -10.
  "pc-165": {
    enOpciones: false,
    respuestaClinica: "Debut de diabetes mellitus tipo 1 con cetoacidosis diabética, "
      + "y deshidratación con acidosis metabólica con anion gap aumentado",
    correcta: "ninguna de las 4 opciones presentes",
    razon: "Glucemia 380 con glucosuria +++ y cetonuria ++, más pH 7,25 con CO3H 13 y "
      + "EB -10, es cetoacidosis diabética: no hay otra lectura posible. La b dice "
      + "alcalosis metabólica y el EAB muestra acidosis, así que se cae sola. La d "
      + "propone diabetes insípida, que cursa con glucemia normal, no 380. La c "
      + "(infección urinaria con insuficiencia renal) no se sostiene: 5 leucocitos por "
      + "campo no es piuria, y la urea de 60 con creatinina 0,8 es prerrenal por la "
      + "deshidratación. La a es la más cercana pero habla de SHOCK hipovolémico, y la "
      + "niña está lúcida, con diuresis presente y mucosas semihúmedas: está "
      + "deshidratada, no en shock. La opción correcta quedó fuera del recorte.",
    confianza: "alta",
    fuente: "razonamiento sobre el enunciado del propio banco",
    coincideMarca: null,
  },
};
