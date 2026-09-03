# Validación de `index.html`

Generado por `scripts/validar-preguntas.mjs`. 257 preguntas leídas.

| canasta | preguntas | qué pasa con ellas |
|---|---|---|
| AUTO | 164 | se corrigen con `--aplicar`, sin preguntar |
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

## Canasta AUTO — 164 preguntas

Transformaciones determinísticas y reversibles. Todas pasaron las invariantes:
mismas cifras, mismas opciones, ninguna respuesta marcada, ninguna palabra nueva.

### `pc-001`

- **pregunta** · regla `espacios`
  - antes: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`
  - después: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`

### `pc-002`

- **caso** · regla `espacios`
  - antes: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`
  - después: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`

### `pc-003`

- **pregunta** · regla `espacios`
  - antes: `Claudia de 26 años ingresa por palpitaciones. En el examen físico se detecta pulso irregular y no se observa ninguna otra alteración. Se realiza la tira de ritmo y se obs…`
  - después: `Claudia de 26 años ingresa por palpitaciones. En el examen físico se detecta pulso irregular y no se observa ninguna otra alteración. Se realiza la tira de ritmo y se obs…`

### `pc-005`

- **pregunta** · regla `espacios`
  - antes: `Pablo de 21 años consulta por intensa astenia de cuatro días de evolución. Al examen clínico se registran parámetros normales. No posee antecedentes patológicos. En el la…`
  - después: `Pablo de 21 años consulta por intensa astenia de cuatro días de evolución. Al examen clínico se registran parámetros normales. No posee antecedentes patológicos. En el la…`

### `pc-006`

- **pregunta** · regla `espacios`
  - antes: `Para corroborar o descartar su hipótesis diagnóstica usted debe solicitar otros exámenes complementarios, ¿cuál de los siguientes estudios lo considera el de mayor utilid…`
  - después: `Para corroborar o descartar su hipótesis diagnóstica usted debe solicitar otros exámenes complementarios, ¿cuál de los siguientes estudios lo considera el de mayor utilid…`

### `pc-007`

- **pregunta** · regla `espacios`
  - antes: `Edmundo de 54 años tiene E.P.O.C y hace 10 años le diagnosticaron hipertensión. Actualmente, sus exámenes de laboratorio son normales. Se encuentra medicado con 50 mg de …`
  - después: `Edmundo de 54 años tiene E.P.O.C y hace 10 años le diagnosticaron hipertensión. Actualmente, sus exámenes de laboratorio son normales. Se encuentra medicado con 50 mg de …`

### `pc-008`

- **pregunta** · regla `espacios`
  - antes: `Edmundo vuelve a la consulta dos meses después. Los valores de presión arterial aún son elevados. Usted decide reestudiarlo pero hasta que recibe los nuevos resultados, ¿…`
  - después: `Edmundo vuelve a la consulta dos meses después. Los valores de presión arterial aún son elevados. Usted decide reestudiarlo pero hasta que recibe los nuevos resultados, ¿…`

### `pc-009`

- **pregunta** · regla `espacios`
  - antes: `Concurre a la consulta Adela, de 24 años, quien cursa un embarazo de 29 semanas. Hasta el momento, solo ha realizado un control prenatal al cumplir las 4 semanas. Ha teni…`
  - después: `Concurre a la consulta Adela, de 24 años, quien cursa un embarazo de 29 semanas. Hasta el momento, solo ha realizado un control prenatal al cumplir las 4 semanas. Ha teni…`

### `pc-010`

- **caso** · regla `espacios`
  - antes: `Adela, de 24 años, quien cursa un embarazo de 29 semanas. Hasta el momento, solo ha realizado un control prenatal al cumplir las 4 semanas. Ha tenido dos hijos por cesáre…`
  - después: `Adela, de 24 años, quien cursa un embarazo de 29 semanas. Hasta el momento, solo ha realizado un control prenatal al cumplir las 4 semanas. Ha tenido dos hijos por cesáre…`

### `pc-012`

- **pregunta** · regla `espacios`
  - antes: `Héctor de 50 años concurre a la consulta por presentar un fuerte dolor en la pantorrilla izquierda de 60 días de evolución. El paciente le relata que se encontraba camina…`
  - después: `Héctor de 50 años concurre a la consulta por presentar un fuerte dolor en la pantorrilla izquierda de 60 días de evolución. El paciente le relata que se encontraba camina…`

### `pc-013`

- **caso** · regla `espacios`
  - antes: `Héctor de 50 años concurre a la consulta por presentar un fuerte dolor en la pantorrilla izquierda de 60 días de evolución. El paciente le relata que se encontraba camina…`
  - después: `Héctor de 50 años concurre a la consulta por presentar un fuerte dolor en la pantorrilla izquierda de 60 días de evolución. El paciente le relata que se encontraba camina…`
- **pregunta** · regla `espacios`
  - antes: `De acuerdo a su presunción diagnóstica ¿qué estudios complementarios específicos solicita? Marque hasta 2 opciones.`
  - después: `De acuerdo a su presunción diagnóstica ¿qué estudios complementarios específicos solicita? Marque hasta 2 opciones.`

### `pc-015`

- **pregunta** · regla `espacios`
  - antes: `Diagnosticado el proceso hemolítico, usted deberá solicitar otro examen complementario para continuar estudiando a la paciente. ¿Cuál de los siguientes estudios le solici…`
  - después: `Diagnosticado el proceso hemolítico, usted deberá solicitar otro examen complementario para continuar estudiando a la paciente. ¿Cuál de los siguientes estudios le solici…`

### `pc-016`

- **pregunta** · regla `espacios`
  - antes: `Usted recibe por guardia a Julio, lactante de 5 meses, previamente sano. Concurre con su padre quien le refiere que Julio desde hace 48 horas está febril, 2-3 picos diari…`
  - después: `Usted recibe por guardia a Julio, lactante de 5 meses, previamente sano. Concurre con su padre quien le refiere que Julio desde hace 48 horas está febril, 2-3 picos diari…`

### `pc-017`

- **pregunta** · regla `espacios`
  - antes: `Inés de 6 meses de vida, es la primera hija de Natalia (28 años, docente) y Ramiro (32 años, docente). Fue una RNTPAEG y no presentó hasta el momento ningún problema de s…`
  - después: `Inés de 6 meses de vida, es la primera hija de Natalia (28 años, docente) y Ramiro (32 años, docente). Fue una RNTPAEG y no presentó hasta el momento ningún problema de s…`

### `pc-018`

- **pregunta** · regla `espacios`
  - antes: `Uma de 6 años concurre a la guardia por vómitos que no ceden de más de 24 horas de evolución. Según refiere la madre la nota más delgada, aunque es de muy buen apetito y …`
  - después: `Uma de 6 años concurre a la guardia por vómitos que no ceden de más de 24 horas de evolución. Según refiere la madre la nota más delgada, aunque es de muy buen apetito y …`

### `pc-019`

- **pregunta** · regla `espacios`
  - antes: `Los padres de Juan, de 8 años, consultan porque desde hace dos semanas, luego de las vacaciones de invierno, su hijo no quiere asistir al colegio. Se trata del mismo cole…`
  - después: `Los padres de Juan, de 8 años, consultan porque desde hace dos semanas, luego de las vacaciones de invierno, su hijo no quiere asistir al colegio. Se trata del mismo cole…`

### `pc-020`

- **pregunta** · regla `espacios`
  - antes: `Julián de 3 años con su madre concurre a consulta por presentar agitación. La mamá refiere que apareció luego de haber estado jugando por más de una hora, durante el cump…`
  - después: `Julián de 3 años con su madre concurre a consulta por presentar agitación. La mamá refiere que apareció luego de haber estado jugando por más de una hora, durante el cump…`

### `pc-021`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta tengoelmismo Pedrito de 62 años consulta por un estado de anasarca de 40 días de evolución. Al…`
  - después: `tengoelmismo Pedrito de 62 años consulta por un estado de anasarca de 40 días de evolución. Al interrogarlo refiere tener hipertensión arterial desde hace diez años. Está…`
- **pregunta** · regla `espacios`
  - antes: `tengoelmismo Pedrito de 62 años consulta por un estado de anasarca de 40 días de evolución. Al interrogarlo refiere tener hipertensión arterial desde hace diez años. Está…`
  - después: `tengoelmismo Pedrito de 62 años consulta por un estado de anasarca de 40 días de evolución. Al interrogarlo refiere tener hipertensión arterial desde hace diez años. Está…`

### `pc-022`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Para confirmar su impresión diagnóstica usted solicitará estudios. Señale aquellos dos que ust…`
  - después: `Para confirmar su impresión diagnóstica usted solicitará estudios. Señale aquellos dos que usted considere prioritarios.`
- **pregunta** · regla `espacios`
  - antes: `Para confirmar su impresión diagnóstica usted solicitará estudios. Señale aquellos dos que usted considere prioritarios.`
  - después: `Para confirmar su impresión diagnóstica usted solicitará estudios. Señale aquellos dos que usted considere prioritarios.`

### `pc-023`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Junto con los informes de los estudios indicados usted recibe un informe de hemoglobina glicos…`
  - después: `Junto con los informes de los estudios indicados usted recibe un informe de hemoglobina glicosilada de 10.8%. Señale las dos medidas terapéuticas que usted debe adoptar e…`
- **pregunta** · regla `espacios`
  - antes: `Junto con los informes de los estudios indicados usted recibe un informe de hemoglobina glicosilada de 10.8%. Señale las dos medidas terapéuticas que usted debe adoptar e…`
  - después: `Junto con los informes de los estudios indicados usted recibe un informe de hemoglobina glicosilada de 10.8%. Señale las dos medidas terapéuticas que usted debe adoptar e…`

### `pc-024`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta La presencia de vitíligo sumada al resto de los datos lo obligan a solicitar más estudios. Señ…`
  - después: `La presencia de vitíligo sumada al resto de los datos lo obligan a solicitar más estudios. Señale solo dos estudios que ud. considere preciso indicar.`
- **pregunta** · regla `espacios`
  - antes: `La presencia de vitíligo sumada al resto de los datos lo obligan a solicitar más estudios. Señale solo dos estudios que ud. considere preciso indicar.`
  - después: `La presencia de vitíligo sumada al resto de los datos lo obligan a solicitar más estudios. Señale solo dos estudios que ud. considere preciso indicar.`

### `pc-025`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Mientras aguarda el resto de los estudios debe comenzar el tratamiento. ¿Qué medicación indica…`
  - después: `Mientras aguarda el resto de los estudios debe comenzar el tratamiento. ¿Qué medicación indicaría?`
- **pregunta** · regla `espacios`
  - antes: `Mientras aguarda el resto de los estudios debe comenzar el tratamiento. ¿Qué medicación indicaría?`
  - después: `Mientras aguarda el resto de los estudios debe comenzar el tratamiento. ¿Qué medicación indicaría?`

### `pc-027`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Usted le indicó estudios que confirmaron la etiología del cuadro, ¿qué conducta adopta?`
  - después: `Usted le indicó estudios que confirmaron la etiología del cuadro, ¿qué conducta adopta?`
- **pregunta** · regla `espacios`
  - antes: `Usted le indicó estudios que confirmaron la etiología del cuadro, ¿qué conducta adopta?`
  - después: `Usted le indicó estudios que confirmaron la etiología del cuadro, ¿qué conducta adopta?`

### `pc-028`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Con la medicación agregada, Rolando mejora. ¿Cuál de los siguientes datos de laboratorio debe …`
  - después: `Con la medicación agregada, Rolando mejora. ¿Cuál de los siguientes datos de laboratorio debe controlar estrictamente dada la medicación que el paciente recibe?`
- **pregunta** · regla `espacios`
  - antes: `Con la medicación agregada, Rolando mejora. ¿Cuál de los siguientes datos de laboratorio debe controlar estrictamente dada la medicación que el paciente recibe?`
  - después: `Con la medicación agregada, Rolando mejora. ¿Cuál de los siguientes datos de laboratorio debe controlar estrictamente dada la medicación que el paciente recibe?`

### `pc-029`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta ¿Qué otra medicación a la mencionada, se le debe indicar a este paciente?`
  - después: `¿Qué otra medicación a la mencionada, se le debe indicar a este paciente?`
- **pregunta** · regla `espacios`
  - antes: `¿Qué otra medicación a la mencionada, se le debe indicar a este paciente?`
  - después: `¿Qué otra medicación a la mencionada, se le debe indicar a este paciente?`

### `pc-030`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta ¿Qué tratamiento le indicaría empíricamente de acuerdo a las características clínicas del caso…`
  - después: `¿Qué tratamiento le indicaría empíricamente de acuerdo a las características clínicas del caso?`
- **pregunta** · regla `espacios`
  - antes: `¿Qué tratamiento le indicaría empíricamente de acuerdo a las características clínicas del caso?`
  - después: `¿Qué tratamiento le indicaría empíricamente de acuerdo a las características clínicas del caso?`

### `pc-031`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Teresa de 61 años ingresó con un cuadro de síndrome meníngeo de 48 horas de evolución. Se real…`
  - después: `Teresa de 61 años ingresó con un cuadro de síndrome meníngeo de 48 horas de evolución. Se realizó una punción lumbar y se obtuvo el siguiente resultado del líquido cefalo…`
- **pregunta** · regla `espacios`
  - antes: `Teresa de 61 años ingresó con un cuadro de síndrome meníngeo de 48 horas de evolución. Se realizó una punción lumbar y se obtuvo el siguiente resultado del líquido cefalo…`
  - después: `Teresa de 61 años ingresó con un cuadro de síndrome meníngeo de 48 horas de evolución. Se realizó una punción lumbar y se obtuvo el siguiente resultado del líquido cefalo…`

### `pc-032`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta ¿Qué tratamiento en forma empírica le indicaría a Teresa?`
  - después: `¿Qué tratamiento en forma empírica le indicaría a Teresa?`
- **pregunta** · regla `espacios`
  - antes: `¿Qué tratamiento en forma empírica le indicaría a Teresa?`
  - después: `¿Qué tratamiento en forma empírica le indicaría a Teresa?`

### `pc-033`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen…`
  - después: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
- **pregunta** · regla `espacios`
  - antes: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
  - después: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`

### `pc-034`

- **caso** · regla `boilerplate`
  - antes: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
  - después: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
- **caso** · regla `espacios`
  - antes: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
  - después: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`
  - después: `En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`
- **pregunta** · regla `espacios`
  - antes: `En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`
  - después: `En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`

### `pc-035`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Sonia, de 36 años de edad, consulta por síntomas y signos clínicos de tirotoxicosis. A realiza…`
  - después: `Sonia, de 36 años de edad, consulta por síntomas y signos clínicos de tirotoxicosis. A realizarse el examen físico se detecta exoftalmia bilateral y mixedema pretibial. ¿…`
- **pregunta** · regla `espacios`
  - antes: `Sonia, de 36 años de edad, consulta por síntomas y signos clínicos de tirotoxicosis. A realizarse el examen físico se detecta exoftalmia bilateral y mixedema pretibial. ¿…`
  - después: `Sonia, de 36 años de edad, consulta por síntomas y signos clínicos de tirotoxicosis. A realizarse el examen físico se detecta exoftalmia bilateral y mixedema pretibial. ¿…`

### `pc-036`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Sergio de 56 años, consulta por ptosis palpebral derecha de cuatro días de evolución. Al exame…`
  - después: `Sergio de 56 años, consulta por ptosis palpebral derecha de cuatro días de evolución. Al examen ocular, el ojo se encuentra desviado hacia afuera y el reflejo fotomotor y…`
- **pregunta** · regla `espacios`
  - antes: `Sergio de 56 años, consulta por ptosis palpebral derecha de cuatro días de evolución. Al examen ocular, el ojo se encuentra desviado hacia afuera y el reflejo fotomotor y…`
  - después: `Sergio de 56 años, consulta por ptosis palpebral derecha de cuatro días de evolución. Al examen ocular, el ojo se encuentra desviado hacia afuera y el reflejo fotomotor y…`

### `pc-037`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Claudia de 46 años hipertensa, ingresa con ataxia, camina con las piernas separadas, presenta …`
  - después: `Claudia de 46 años hipertensa, ingresa con ataxia, camina con las piernas separadas, presenta temblor de intención y dismetría en miembro superior derecho. ¿Dónde se encu…`
- **pregunta** · regla `espacios`
  - antes: `Claudia de 46 años hipertensa, ingresa con ataxia, camina con las piernas separadas, presenta temblor de intención y dismetría en miembro superior derecho. ¿Dónde se encu…`
  - después: `Claudia de 46 años hipertensa, ingresa con ataxia, camina con las piernas separadas, presenta temblor de intención y dismetría en miembro superior derecho. ¿Dónde se encu…`

### `pc-038`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Lina de 18 años ingresa por un cuadro e purpuras palpables en miembros inferiores y región glú…`
  - después: `Lina de 18 años ingresa por un cuadro e purpuras palpables en miembros inferiores y región glútea. Refiere artralgias en rodillas y tobillos y dolor abdominal. Una rutina…`
- **pregunta** · regla `espacios`
  - antes: `Lina de 18 años ingresa por un cuadro e purpuras palpables en miembros inferiores y región glútea. Refiere artralgias en rodillas y tobillos y dolor abdominal. Una rutina…`
  - después: `Lina de 18 años ingresa por un cuadro e purpuras palpables en miembros inferiores y región glútea. Refiere artralgias en rodillas y tobillos y dolor abdominal. Una rutina…`

### `pc-039`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Usted hablará con la familia respecto del pronóstico de Lina y les explicará que: Seleccione u…`
  - después: `Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`
- **pregunta** · regla `espacios`
  - antes: `Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`
  - después: `Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`

### `pc-040`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Francisco, de 3 años de edad, concurre a la consulta por lesión en placa inflamatoria en cuero…`
  - después: `Francisco, de 3 años de edad, concurre a la consulta por lesión en placa inflamatoria en cuero cabelludo de 1 ½ mes de evolución. En la placa se observa ausencia de cabel…`
- **pregunta** · regla `espacios`
  - antes: `Francisco, de 3 años de edad, concurre a la consulta por lesión en placa inflamatoria en cuero cabelludo de 1 ½ mes de evolución. En la placa se observa ausencia de cabel…`
  - después: `Francisco, de 3 años de edad, concurre a la consulta por lesión en placa inflamatoria en cuero cabelludo de 1 ½ mes de evolución. En la placa se observa ausencia de cabel…`

### `pc-041`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de una…`
  - después: `Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de unas 12 semanas de evolución, de predominio postpandrial, el cual se acompaña, …`
- **pregunta** · regla `espacios`
  - antes: `Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de unas 12 semanas de evolución, de predominio postpandrial, el cual se acompaña, …`
  - después: `Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de unas 12 semanas de evolución, de predominio postpandrial, el cual se acompaña, …`

### `pc-042`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Tomas, de 2 años, concurre con su mamá a la guardia del hospital por presentar dificultad para…`
  - después: `Tomas, de 2 años, concurre con su mamá a la guardia del hospital por presentar dificultad para respirar. Ella acababa de regresar de hacer las compras y la persona que lo…`
- **pregunta** · regla `espacios`
  - antes: `Tomas, de 2 años, concurre con su mamá a la guardia del hospital por presentar dificultad para respirar. Ella acababa de regresar de hacer las compras y la persona que lo…`
  - después: `Tomas, de 2 años, concurre con su mamá a la guardia del hospital por presentar dificultad para respirar. Ella acababa de regresar de hacer las compras y la persona que lo…`

### `pc-043`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Ante el cuadro clínico que presenta Tomás y los datos recabados ¿qué estudios complementarios …`
  - después: `Ante el cuadro clínico que presenta Tomás y los datos recabados ¿qué estudios complementarios solicitaría inicialmente? Marque 2 opciones`
- **pregunta** · regla `espacios`
  - antes: `Ante el cuadro clínico que presenta Tomás y los datos recabados ¿qué estudios complementarios solicitaría inicialmente? Marque 2 opciones`
  - después: `Ante el cuadro clínico que presenta Tomás y los datos recabados ¿qué estudios complementarios solicitaría inicialmente? Marque 2 opciones`

### `pc-044`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta ¿Cuáles de las siguientes pautas madurativas corresponden a un niño de 3 años? Marque 2 opcion…`
  - después: `¿Cuáles de las siguientes pautas madurativas corresponden a un niño de 3 años? Marque 2 opciones`
- **pregunta** · regla `espacios`
  - antes: `¿Cuáles de las siguientes pautas madurativas corresponden a un niño de 3 años? Marque 2 opciones`
  - después: `¿Cuáles de las siguientes pautas madurativas corresponden a un niño de 3 años? Marque 2 opciones`

### `pc-045`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta ¿Cuál es el mecanismo de acción de la metformina en el tratamiento de la diabetes del adulto?`
  - después: `¿Cuál es el mecanismo de acción de la metformina en el tratamiento de la diabetes del adulto?`
- **pregunta** · regla `espacios`
  - antes: `¿Cuál es el mecanismo de acción de la metformina en el tratamiento de la diabetes del adulto?`
  - después: `¿Cuál es el mecanismo de acción de la metformina en el tratamiento de la diabetes del adulto?`

### `pc-046`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Ramón de 48 años ingresa con dolor abdominal de 24 horas de evolución. La sospecha diagnóstica…`
  - después: `Ramón de 48 años ingresa con dolor abdominal de 24 horas de evolución. La sospecha diagnóstica es de pancreatitis aguda. No posee antecedentes de alcoholismo y se descart…`
- **pregunta** · regla `espacios`
  - antes: `Ramón de 48 años ingresa con dolor abdominal de 24 horas de evolución. La sospecha diagnóstica es de pancreatitis aguda. No posee antecedentes de alcoholismo y se descart…`
  - después: `Ramón de 48 años ingresa con dolor abdominal de 24 horas de evolución. La sospecha diagnóstica es de pancreatitis aguda. No posee antecedentes de alcoholismo y se descart…`

### `pc-047`

- **caso** · regla `espacios`
  - antes: `Ramón de 48 años ingresa con dolor abdominal de 24 horas de evolución. La sospecha diagnóstica es de pancreatitis aguda. No posee antecedentes de alcoholismo y se descart…`
  - después: `Ramón de 48 años ingresa con dolor abdominal de 24 horas de evolución. La sospecha diagnóstica es de pancreatitis aguda. No posee antecedentes de alcoholismo y se descart…`
- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta En este caso, ¿cuál es la causa más probable de la sospecha diagnóstica?`
  - después: `En este caso, ¿cuál es la causa más probable de la sospecha diagnóstica?`
- **pregunta** · regla `espacios`
  - antes: `En este caso, ¿cuál es la causa más probable de la sospecha diagnóstica?`
  - después: `En este caso, ¿cuál es la causa más probable de la sospecha diagnóstica?`

### `pc-048`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Fernanda, de 26 años de edad, cursa un embarazo de 31 semanas. Se presenta a la consulta por h…`
  - después: `Fernanda, de 26 años de edad, cursa un embarazo de 31 semanas. Se presenta a la consulta por hemorragia vaginal roja brillante. El examen físico es normal y posee anteced…`
- **pregunta** · regla `espacios`
  - antes: `Fernanda, de 26 años de edad, cursa un embarazo de 31 semanas. Se presenta a la consulta por hemorragia vaginal roja brillante. El examen físico es normal y posee anteced…`
  - después: `Fernanda, de 26 años de edad, cursa un embarazo de 31 semanas. Se presenta a la consulta por hemorragia vaginal roja brillante. El examen físico es normal y posee anteced…`

### `pc-049`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Manuel de 18 años de edad ingresa por un cuadro clínico compatible con faringitis aguda bacter…`
  - después: `Manuel de 18 años de edad ingresa por un cuadro clínico compatible con faringitis aguda bacteriana. No posee antecedentes de alergias medicamentosas. ¿Cuál es la bacteria…`
- **pregunta** · regla `espacios`
  - antes: `Manuel de 18 años de edad ingresa por un cuadro clínico compatible con faringitis aguda bacteriana. No posee antecedentes de alergias medicamentosas. ¿Cuál es la bacteria…`
  - después: `Manuel de 18 años de edad ingresa por un cuadro clínico compatible con faringitis aguda bacteriana. No posee antecedentes de alergias medicamentosas. ¿Cuál es la bacteria…`

### `pc-050`

- **caso** · regla `espacios`
  - antes: `Manuel de 18 años de edad ingresa por un cuadro clínico compatible con faringitis aguda bacteriana. No posee antecedentes de alergias medicamentosas. ¿Cuál es la bacteria…`
  - después: `Manuel de 18 años de edad ingresa por un cuadro clínico compatible con faringitis aguda bacteriana. No posee antecedentes de alergias medicamentosas. ¿Cuál es la bacteria…`
- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta En el caso de Manuel, ¿cuál tratamiento inicial más adecuado?`
  - después: `En el caso de Manuel, ¿cuál tratamiento inicial más adecuado?`
- **pregunta** · regla `espacios`
  - antes: `En el caso de Manuel, ¿cuál tratamiento inicial más adecuado?`
  - después: `En el caso de Manuel, ¿cuál tratamiento inicial más adecuado?`

### `pc-052`

- **caso** · regla `tipograficas`
  - antes: `El Sr. Martín P. de 59 años consulta por referir disnea a pequeños esfuerzos y palpitaciones, síntomas que aparecieron en los últimos días. Nació en la provincia de Salta…`
  - después: `El Sr. Martín P. de 59 años consulta por referir disnea a pequeños esfuerzos y palpitaciones, síntomas que aparecieron en los últimos días. Nació en la provincia de Salta…`
- **caso** · regla `espacios`
  - antes: `El Sr. Martín P. de 59 años consulta por referir disnea a pequeños esfuerzos y palpitaciones, síntomas que aparecieron en los últimos días. Nació en la provincia de Salta…`
  - después: `El Sr. Martín P. de 59 años consulta por referir disnea a pequeños esfuerzos y palpitaciones, síntomas que aparecieron en los últimos días. Nació en la provincia de Salta…`
- **pregunta** · regla `espacios`
  - antes: `Con estos elementos ¿ cuál sería su conducta inicial ? (marque 3 opciones)`
  - después: `Con estos elementos ¿ cuál sería su conducta inicial? (marque 3 opciones)`

### `pc-057`

- **caso** · regla `tipograficas`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **pregunta** · regla `espacios`
  - antes: `Tras el rápido examen de las heridas ¿ cuál es su conducta médica inicial ? (marque 3 opciones)`
  - después: `Tras el rápido examen de las heridas ¿ cuál es su conducta médica inicial? (marque 3 opciones)`
- **opciones[3].t** · regla `espacios`
  - antes: `Coloco el dedo índice a través de la herida inguinal ,tratando de cohibir la`
  - después: `Coloco el dedo índice a través de la herida inguinal,tratando de cohibir la`

### `pc-058`

- **caso** · regla `tipograficas`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **pregunta** · regla `espacios`
  - antes: `¿ Qué conductas adicionales adoptaría a partir de ahora ? (marque 3 opciones)`
  - después: `¿ Qué conductas adicionales adoptaría a partir de ahora? (marque 3 opciones)`

### `pc-059`

- **pregunta** · regla `espacios`
  - antes: `Teniendo en cuenta que el accidente ocurrió a plena mañana de un día laborable y el Hospital se halla a 35 cuadras del lugar del hecho . ¿ Qué otras cosas hace Ud durante…`
  - después: `Teniendo en cuenta que el accidente ocurrió a plena mañana de un día laborable y el Hospital se halla a 35 cuadras del lugar del hecho . ¿ Qué otras cosas hace Ud durante…`
- **opciones[4].t** · regla `tipograficas`
  - antes: `Aplico 0xígeno con máscara y hago pasar suero ”a chorro”.`
  - después: `Aplico 0xígeno con máscara y hago pasar suero "a chorro".`

### `pc-060`

- **caso** · regla `tipograficas`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **opciones[0].t** · regla `tipograficas`
  - antes: `Transfundir “a chorro” sangre fresca por una vía periferica.`
  - después: `Transfundir "a chorro" sangre fresca por una vía periferica.`
- **opciones[4].t** · regla `tipograficas`
  - antes: `Colocar suero dextrosado y Manitol “a chorro” para reponer volemia.`
  - después: `Colocar suero dextrosado y Manitol "a chorro" para reponer volemia.`

### `pc-061`

- **caso** · regla `tipograficas`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`
  - después: `EJERCICIO CLINICO Nro. 5 Ud. es médico generalista y es llamado a atender a un operario de 32 años que en la fábrica donde trabaja ha sufrido un accidente con la ruptura …`

### `pc-063`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 6 Fabiana B. de S. de 37 años es atendida en el consultorio externo de Ginecología el 10 de mayo cursando el primer trimestre de embarazo. Fecha de…`
  - después: `EJERCICIO CLINICO Nro. 6 Fabiana B. de S. de 37 años es atendida en el consultorio externo de Ginecología el 10 de mayo cursando el primer trimestre de embarazo. Fecha de…`
- **pregunta** · regla `espacios`
  - antes: `¿ Cuál es la conducta recomendable para esta paciente ? (marque 2 opciones)`
  - después: `¿ Cuál es la conducta recomendable para esta paciente? (marque 2 opciones)`

### `pc-064`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 6 Fabiana B. de S. de 37 años es atendida en el consultorio externo de Ginecología el 10 de mayo cursando el primer trimestre de embarazo. Fecha de…`
  - después: `EJERCICIO CLINICO Nro. 6 Fabiana B. de S. de 37 años es atendida en el consultorio externo de Ginecología el 10 de mayo cursando el primer trimestre de embarazo. Fecha de…`
- **pregunta** · regla `espacios`
  - antes: `¿ Cuales son las conductas más adecuadas para este momento del embarazo de la paciente ? (marque 2 opciones)`
  - después: `¿ Cuales son las conductas más adecuadas para este momento del embarazo de la paciente? (marque 2 opciones)`

### `pc-065`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 6 Fabiana B. de S. de 37 años es atendida en el consultorio externo de Ginecología el 10 de mayo cursando el primer trimestre de embarazo. Fecha de…`
  - después: `EJERCICIO CLINICO Nro. 6 Fabiana B. de S. de 37 años es atendida en el consultorio externo de Ginecología el 10 de mayo cursando el primer trimestre de embarazo. Fecha de…`

### `pc-066`

- **pregunta** · regla `espacios`
  - antes: `De acuerdo al estado actual de Fabiana, usted considera que la conducta más adecuada para ella y su hijo es: (marque 3 opciones)`
  - después: `De acuerdo al estado actual de Fabiana, usted considera que la conducta más adecuada para ella y su hijo es: (marque 3 opciones)`

### `pc-069`

- **pregunta** · regla `espacios`
  - antes: `Usted interna al paciente en la Sala de Guardia. ¿ Cuál es la conducta farmacológica inicial que adoptaría ? (marque 3 opciones)`
  - después: `Usted interna al paciente en la Sala de Guardia. ¿ Cuál es la conducta farmacológica inicial que adoptaría? (marque 3 opciones)`
- **opciones[4].t** · regla `espacios`
  - antes: `Administrar infusión intravenosa con dextrosa al 5 % : 3.000 cc/día, metoclopramida y bicarbonato de`
  - después: `Administrar infusión intravenosa con dextrosa al 5 %: 3.000 cc/día, metoclopramida y bicarbonato de`

### `pc-070`

- **pregunta** · regla `espacios`
  - antes: `De acuerdo a lo evaluado por Ud.: ¿ cuáles serían sus hipótesis diagnósticas de ingreso ? (marque 3 opciones)`
  - después: `De acuerdo a lo evaluado por Ud.: ¿ cuáles serían sus hipótesis diagnósticas de ingreso? (marque 3 opciones)`

### `pc-071`

- **pregunta** · regla `espacios`
  - antes: `Una vez superado el cuadro de inicio Ud. presume que el enfermo padece de síndrome pilórico: ¿ que estudio solicitaría para certificar su sospecha clínica ? (marque 3 opc…`
  - después: `Una vez superado el cuadro de inicio Ud. presume que el enfermo padece de síndrome pilórico: ¿ que estudio solicitaría para certificar su sospecha clínica? (marque 3 opci…`

### `pc-072`

- **pregunta** · regla `espacios`
  - antes: `Mientras se realizan los estudios complementarios ¿ qué tratamiento sugiere Ud. iniciar ? (marque 3 opciones)`
  - después: `Mientras se realizan los estudios complementarios ¿ qué tratamiento sugiere Ud. iniciar? (marque 3 opciones)`

### `pc-073`

- **pregunta** · regla `espacios`
  - antes: `De lo analizado Ud. llega a la conclusión de que el paciente tiene un síndrome pilórico ( obstrucción intestinal alta) causado por úlcera duodenal crónica con fibrosis y …`
  - después: `De lo analizado Ud. llega a la conclusión de que el paciente tiene un síndrome pilórico ( obstrucción intestinal alta) causado por úlcera duodenal crónica con fibrosis y …`

### `pc-074`

- **pregunta** · regla `espacios`
  - antes: `De indicar un tratamiento quirúrgico: ¿ cuál cree que sería adecuado para este paciente ? (marque 3 opciones)`
  - después: `De indicar un tratamiento quirúrgico: ¿ cuál cree que sería adecuado para este paciente? (marque 3 opciones)`

### `pc-075`

- **caso** · regla `tipograficas`
  - antes: `EJERCICIO CLINICO Nro. 2 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
  - después: `EJERCICIO CLINICO Nro. 2 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 2 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
  - después: `EJERCICIO CLINICO Nro. 2 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
- **pregunta** · regla `espacios`
  - antes: `Ud. decide internar a la paciente. ¿ Cuál sería su conducta inicial ? (marque 2 opciones)`
  - después: `Ud. decide internar a la paciente. ¿ Cuál sería su conducta inicial? (marque 2 opciones)`

### `pc-076`

- **pregunta** · regla `espacios`
  - antes: `Teniendo en cuenta sólo y exclusivamente los diagnósticos que a continuación se mencionan (más allá de que otros fueran más probables) ¿ Cuáles de ellos le parecería posi…`
  - después: `Teniendo en cuenta sólo y exclusivamente los diagnósticos que a continuación se mencionan (más allá de que otros fueran más probables) ¿ Cuáles de ellos le parecería posi…`

### `pc-077`

- **pregunta** · regla `espacios`
  - antes: `De acuerdo a su presunción diagnóstica ¿ qué estudios complementarios más específicos solicitaría ? (marque 3 opciones)`
  - después: `De acuerdo a su presunción diagnóstica ¿ qué estudios complementarios más específicos solicitaría? (marque 3 opciones)`

### `pc-078`

- **pregunta** · regla `espacios`
  - antes: `Si durante la realización de los estudios complementarios se halla una vía biliar extra e intrahepática dilatada con imagen de litos en el colédoco ¿ cuál sería el próxim…`
  - después: `Si durante la realización de los estudios complementarios se halla una vía biliar extra e intrahepática dilatada con imagen de litos en el colédoco ¿ cuál sería el próxim…`

### `pc-079`

- **pregunta** · regla `espacios`
  - antes: `Si durante la realización de los estudios complementarios se halla una vía biliar extra e intrahepática dilatada con imagen de masa ocupante en cabeza de páncreas ¿ cuál …`
  - después: `Si durante la realización de los estudios complementarios se halla una vía biliar extra e intrahepática dilatada con imagen de masa ocupante en cabeza de páncreas ¿ cuál …`

### `pc-080`

- **pregunta** · regla `espacios`
  - antes: `¿Qué antecedentes de Josefina jerarquizaría inicialmente para orientarse hacia un diagnóstico presuntivo?: (marque 5 opciones)`
  - después: `¿Qué antecedentes de Josefina jerarquizaría inicialmente para orientarse hacia un diagnóstico presuntivo?: (marque 5 opciones)`

### `pc-081`

- **caso** · regla `espacios`
  - antes: `José de 5 años y María de 3. Ambos sin antecedentes a destacar dado que sólo presentaron cuadros virales sin importancia. Viven en casa de material y cuentan con agua cor…`
  - después: `José de 5 años y María de 3. Ambos sin antecedentes a destacar dado que sólo presentaron cuadros virales sin importancia. Viven en casa de material y cuentan con agua cor…`

### `pc-082`

- **pregunta** · regla `espacios`
  - antes: `Usted decide solicitar exámenes complementarios. Elija de los siguientes aquellos que sean más útiles según sus diagnósticos presuntivos. (marque 3 opciones)`
  - después: `Usted decide solicitar exámenes complementarios. Elija de los siguientes aquellos que sean más útiles según sus diagnósticos presuntivos. (marque 3 opciones)`

### `pc-083`

- **caso** · regla `espacios`
  - antes: `José de 5 años y María de 3. Ambos sin antecedentes a destacar dado que sólo presentaron cuadros virales sin importancia. Viven en casa de material y cuentan con agua cor…`
  - después: `José de 5 años y María de 3. Ambos sin antecedentes a destacar dado que sólo presentaron cuadros virales sin importancia. Viven en casa de material y cuentan con agua cor…`

### `pc-085`

- **pregunta** · regla `espacios`
  - antes: `Si bien la enfermedad de Josefina requerirá seguimiento especializado ulterior, usted piensa que en el futuro se deberá:............ (marque 3 opciones)`
  - después: `Si bien la enfermedad de Josefina requerirá seguimiento especializado ulterior, usted piensa que en el futuro se deberá:............ (marque 3 opciones)`

### `pc-086`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`
  - después: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`

### `pc-089`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`
  - después: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`
- **pregunta** · regla `espacios`
  - antes: `Resuelto el cuadro agudo ¿ qué actitud preventiva futura adoptaría con este paciente ? (marque 3 opciones)`
  - después: `Resuelto el cuadro agudo ¿ qué actitud preventiva futura adoptaría con este paciente? (marque 3 opciones)`

### `pc-090`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`
  - después: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`
- **pregunta** · regla `espacios`
  - antes: `Han pasado 3 meses desde que superó el cuadro descripto. Ahora, el paciente concurre porque desde que le diagnosticaron hipertrofia prostática benigna hace 5 años. Se man…`
  - después: `Han pasado 3 meses desde que superó el cuadro descripto. Ahora, el paciente concurre porque desde que le diagnosticaron hipertrofia prostática benigna hace 5 años. Se man…`

### `pc-091`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`
  - después: `EJERCICIO CLINICO Nro. 2 Un hombre de 72 años se presenta al consultorio externo del Hospital Interzonal por referir síndrome febril que comenzó hace 48 horas registrándo…`

### `pc-092`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 3 Ud. está a cargo del Consultorio de Admisión y Orientación de Medicina Familiar de San Fernando. Recibe a una mujer de 62 años que concurre a la …`
  - después: `EJERCICIO CLINICO Nro. 3 Ud. está a cargo del Consultorio de Admisión y Orientación de Medicina Familiar de San Fernando. Recibe a una mujer de 62 años que concurre a la …`
- **pregunta** · regla `espacios`
  - antes: `¿Cuál sería su abordaje inicial de la paciente ? (marque 3 opciones)`
  - después: `¿Cuál sería su abordaje inicial de la paciente? (marque 3 opciones)`

### `pc-095`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 3 Ud. está a cargo del Consultorio de Admisión y Orientación de Medicina Familiar de San Fernando. Recibe a una mujer de 62 años que concurre a la …`
  - después: `EJERCICIO CLINICO Nro. 3 Ud. está a cargo del Consultorio de Admisión y Orientación de Medicina Familiar de San Fernando. Recibe a una mujer de 62 años que concurre a la …`

### `pc-097`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 3 Ud. está a cargo del Consultorio de Admisión y Orientación de Medicina Familiar de San Fernando. Recibe a una mujer de 62 años que concurre a la …`
  - después: `EJERCICIO CLINICO Nro. 3 Ud. está a cargo del Consultorio de Admisión y Orientación de Medicina Familiar de San Fernando. Recibe a una mujer de 62 años que concurre a la …`

### `pc-098`

- **pregunta** · regla `espacios`
  - antes: `¿ Cómo diferencia clínicamente un nódulo del lóbulo tiroideo de una adenopatía metastásica cervical? ¿ cuáles de las siguientes circunstancias facilitan ese diagnóstico d…`
  - después: `¿ Cómo diferencia clínicamente un nódulo del lóbulo tiroideo de una adenopatía metastásica cervical? ¿ cuáles de las siguientes circunstancias facilitan ese diagnóstico d…`

### `pc-100`

- **pregunta** · regla `espacios`
  - antes: `¿ Cuáles de los estudios prequirúrgicos que abajo se mencionan resultan imprescindiblemente necesarios en este paciente ? (marque 3 opciones )`
  - después: `¿ Cuáles de los estudios prequirúrgicos que abajo se mencionan resultan imprescindiblemente necesarios en este paciente? (marque 3 opciones )`

### `pc-101`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 4 Un hombre de 72 años se presenta en Consultorio Externo de un Hospital Municipal por notar un bulto en el lado izquierdo del cuello. No refiere s…`
  - después: `EJERCICIO CLINICO Nro. 4 Un hombre de 72 años se presenta en Consultorio Externo de un Hospital Municipal por notar un bulto en el lado izquierdo del cuello. No refiere s…`
- **pregunta** · regla `espacios`
  - antes: `¿ Qué otros estudios preoperatorios convendría requerirle al paciente ? (marque 3 opciones )`
  - después: `¿ Qué otros estudios preoperatorios convendría requerirle al paciente? (marque 3 opciones )`

### `pc-102`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 4 Un hombre de 72 años se presenta en Consultorio Externo de un Hospital Municipal por notar un bulto en el lado izquierdo del cuello. No refiere s…`
  - después: `EJERCICIO CLINICO Nro. 4 Un hombre de 72 años se presenta en Consultorio Externo de un Hospital Municipal por notar un bulto en el lado izquierdo del cuello. No refiere s…`
- **pregunta** · regla `espacios`
  - antes: `¿ Qué indicación le hace al paciente ? (marque 2 opciones )`
  - después: `¿ Qué indicación le hace al paciente? (marque 2 opciones )`

### `pc-103`

- **pregunta** · regla `espacios`
  - antes: `¿ Cuál sería la conducta quirúrgica más apropiada en un enfermo con las características señaladas ? (marque 2 opciones )`
  - después: `¿ Cuál sería la conducta quirúrgica más apropiada en un enfermo con las características señaladas? (marque 2 opciones )`

### `pc-104`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Concurre a un Hospital del conurbano una mujer de 23 años de edad para confirmar o descartar la presunción de embarazo. Al interrogatorio surge q…`
  - después: `EJERCICIO CLINICO Nro. 5 Concurre a un Hospital del conurbano una mujer de 23 años de edad para confirmar o descartar la presunción de embarazo. Al interrogatorio surge q…`
- **pregunta** · regla `espacios`
  - antes: `¿ Qué conducta adoptaría ? (marque 2 opciones)`
  - después: `¿ Qué conducta adoptaría? (marque 2 opciones)`

### `pc-105`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Concurre a un Hospital del conurbano una mujer de 23 años de edad para confirmar o descartar la presunción de embarazo. Al interrogatorio surge q…`
  - después: `EJERCICIO CLINICO Nro. 5 Concurre a un Hospital del conurbano una mujer de 23 años de edad para confirmar o descartar la presunción de embarazo. Al interrogatorio surge q…`
- **pregunta** · regla `espacios`
  - antes: `¿ Ud. considera que la paciente tiene factores de riesgo de padecer cáncer de cuello ut erino ? Marque 3 de las opciones abajo enunciadas que conforman factores de riesgo…`
  - después: `¿ Ud. considera que la paciente tiene factores de riesgo de padecer cáncer de cuello ut erino? Marque 3 de las opciones abajo enunciadas que conforman factores de riesgo …`

### `pc-109`

- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 5 Concurre a un Hospital del conurbano una mujer de 23 años de edad para confirmar o descartar la presunción de embarazo. Al interrogatorio surge q…`
  - después: `EJERCICIO CLINICO Nro. 5 Concurre a un Hospital del conurbano una mujer de 23 años de edad para confirmar o descartar la presunción de embarazo. Al interrogatorio surge q…`
- **pregunta** · regla `espacios`
  - antes: `¿ Qué diagnósticos presuntivos serían los más probables ? (marque 3 opciones)`
  - después: `¿ Qué diagnósticos presuntivos serían los más probables? (marque 3 opciones)`

### `pc-110`

- **caso** · regla `tipograficas`
  - antes: `EJERCICIO CLINICO Nro. 6 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
  - después: `EJERCICIO CLINICO Nro. 6 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
- **caso** · regla `espacios`
  - antes: `EJERCICIO CLINICO Nro. 6 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
  - después: `EJERCICIO CLINICO Nro. 6 Una mujer de 67 años consulta en Consultorio Externo por comenzar hace 20 días con dolor tipo cólico en epigastrio, ictericia progresiva, coluria…`
- **pregunta** · regla `espacios`
  - antes: `Ante los datos expuestos ¿ cómo ampliaría el interrogatorio sobre los antecedentes quirúrgicos ? (marque 3 opciones)`
  - después: `Ante los datos expuestos ¿ cómo ampliaría el interrogatorio sobre los antecedentes quirúrgicos? (marque 3 opciones)`

### `pc-111`

- **pregunta** · regla `espacios`
  - antes: `Teniendo en cuenta sólo y exclusivamente los diagnósticos que a continuación se mencionan (más allá de que otros fueran más probables) ¿ Cuáles de ellos le parecerían pos…`
  - después: `Teniendo en cuenta sólo y exclusivamente los diagnósticos que a continuación se mencionan (más allá de que otros fueran más probables) ¿ Cuáles de ellos le parecerían pos…`

### `pc-113`

- **caso** · regla `espacios`
  - antes: `Néstor de 58 años consulta por cansancio al realizar sus tareas habituales y fatiga a esfuerzos como subir escaleras o correr el colectivo. Es c ontador público y practic…`
  - después: `Néstor de 58 años consulta por cansancio al realizar sus tareas habituales y fatiga a esfuerzos como subir escaleras o correr el colectivo. Es c ontador público y practic…`

### `pc-119`

- **caso** · regla `tipograficas`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y “…con algunas estrías de sangre”. Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
- **caso** · regla `espacios`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`

### `pc-120`

- **caso** · regla `tipograficas`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y “…con algunas estrías de sangre”. Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
- **caso** · regla `espacios`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`

### `pc-121`

- **caso** · regla `tipograficas`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y “…con algunas estrías de sangre”. Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
- **caso** · regla `espacios`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`

### `pc-122`

- **caso** · regla `tipograficas`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y “…con algunas estrías de sangre”. Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
- **caso** · regla `espacios`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`

### `pc-123`

- **caso** · regla `tipograficas`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y “…con algunas estrías de sangre”. Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
- **caso** · regla `espacios`
  - antes: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`
  - después: `Pedro de 35 años consulta en la salita del barrio por síntomas de tos y expectoración blanquecina y "…con algunas estrías de sangre". Refiere que en el último tiempo estu…`

### `pc-124`

- **pregunta** · regla `espacios`
  - antes: `Teniendo en cuenta el motivo de consulta, que interrogantes de los abajo mencionados considera de mayor jerarquía para ampliar la anamnesis. (Marque 3 opciones)`
  - después: `Teniendo en cuenta el motivo de consulta, que interrogantes de los abajo mencionados considera de mayor jerarquía para ampliar la anamnesis. (Marque 3 opciones)`

### `pc-126`

- **pregunta** · regla `espacios`
  - antes: `A esta altura d e la consulta integrando los datos de la anamnesis, de los hallazgos semiologicos y de los datos de laboratorio, cuales son sus principales hipótesis diag…`
  - después: `A esta altura d e la consulta integrando los datos de la anamnesis, de los hallazgos semiologicos y de los datos de laboratorio, cuales son sus principales hipótesis diag…`

### `pc-127`

- **caso** · regla `tipograficas`
  - antes: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
  - después: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
- **caso** · regla `espacios`
  - antes: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
  - después: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
- **pregunta** · regla `espacios`
  - antes: `Con el objetivo de profundizar el estudio del paciente y arribar a un diagnostico etiologico ud decide solicitar nuevos estudios complementarios. Cuales considera de mayo…`
  - después: `Con el objetivo de profundizar el estudio del paciente y arribar a un diagnostico etiologico ud decide solicitar nuevos estudios complementarios. Cuales considera de mayo…`

### `pc-128`

- **caso** · regla `tipograficas`
  - antes: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
  - después: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
- **caso** · regla `espacios`
  - antes: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
  - después: `La paciente manifiesta haber vivido siempre en la ciudad de Buenos Aires en un edificio de departamentos en el barrio de Almagro, y no haber vi ajado nunca afuera del paí…`
- **pregunta** · regla `espacios`
  - antes: `En esta nueva consulta la paciente relata continuar con la misma sint omatología, se la nota irritada, molesta por la realización de los distintos estudios solicitados y …`
  - después: `En esta nueva consulta la paciente relata continuar con la misma sint omatología, se la nota irritada, molesta por la realización de los distintos estudios solicitados y …`

### `pc-129`

- **pregunta** · regla `espacios`
  - antes: `Explica en detalle a su paciente el tipo de enfermedad que presenta, la evolución, y posibles complicaciones. La tranquiliza explicándole que su afección tiene un tratami…`
  - después: `Explica en detalle a su paciente el tipo de enfermedad que presenta, la evolución, y posibles complicaciones. La tranquiliza explicándole que su afección tiene un tratami…`

### `pc-130`

- **pregunta** · regla `espacios`
  - antes: `De acuerdo a su presuncion diagnostica, señale los signos de l examen físico más relevantes que puedan acompañar o suceder al episodio. (Marque 3 opciones.`
  - después: `De acuerdo a su presuncion diagnostica, señale los signos de l examen físico más relevantes que puedan acompañar o suceder al episodio. (Marque 3 opciones.`

### `pc-134`

- **pregunta** · regla `espacios`
  - antes: `Dado que usted conoce los efectos adversos agudos de la DFH, que parámetros monitorearia durante la administración. (Marque 3 opciones)`
  - después: `Dado que usted conoce los efectos adversos agudos de la DFH, que parámetros monitorearia durante la administración. (Marque 3 opciones)`

### `pc-135`

- **pregunta** · regla `espacios`
  - antes: `La paciente fue dada de alta, pero a pesar del tratamiento instalado repite a los 45 dias nuevo episodio por el que consulta en forma ambulatoria luego de 8 dias. Usted d…`
  - después: `La paciente fue dada de alta, pero a pesar del tratamiento instalado repite a los 45 dias nuevo episodio por el que consulta en forma ambulatoria luego de 8 dias. Usted d…`

### `pc-136`

- **caso** · regla `espacios`
  - antes: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
  - después: `Beatriz de 54 años de edad consulta por episodios de prurito de un año de evolución. El examen físico es normal salvo lesiones por rascado. Los exámenes de rutina son nor…`
- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`
  - después: `En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`
- **pregunta** · regla `espacios`
  - antes: `En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`
  - después: `En el caso de Beatriz, ¿qué estudios solicitaría de acuerdo a su impresión diagnóstica?`

### `pc-137`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`
  - después: `Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`
- **pregunta** · regla `espacios`
  - antes: `Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`
  - después: `Usted hablará con la familia respecto del pronóstico de Lina y les explicará que:`

### `pc-138`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marcar pregunta Enunciado de la pregunta Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de una…`
  - después: `Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de unas 12 semanas de evolución, de predominio postpandrial, el cual se acompaña, …`
- **pregunta** · regla `espacios`
  - antes: `Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de unas 12 semanas de evolución, de predominio postpandrial, el cual se acompaña, …`
  - después: `Concurre a la consulta Lola, de 3 años de edad, por dolor abdominal difuso, recurrente, de unas 12 semanas de evolución, de predominio postpandrial, el cual se acompaña, …`

### `pc-139`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Una semana más tarde, Gisela ingresa con intenso dolor abdominal de 9 horas de evolución, asociado a dos vómitos no biliosos. Sin elimi…`
  - después: `Una semana más tarde, Gisela ingresa con intenso dolor abdominal de 9 horas de evolución, asociado a dos vómitos no biliosos. Sin eliminación de deposiciones en las últim…`
- **pregunta** · regla `ligaduras`
  - antes: `Una semana más tarde, Gisela ingresa con intenso dolor abdominal de 9 horas de evolución, asociado a dos vómitos no biliosos. Sin eliminación de deposiciones en las últim…`
  - después: `Una semana más tarde, Gisela ingresa con intenso dolor abdominal de 9 horas de evolución, asociado a dos vómitos no biliosos. Sin eliminación de deposiciones en las últim…`
- **pregunta** · regla `espacios`
  - antes: `Una semana más tarde, Gisela ingresa con intenso dolor abdominal de 9 horas de evolución, asociado a dos vómitos no biliosos. Sin eliminación de deposiciones en las últim…`
  - después: `Una semana más tarde, Gisela ingresa con intenso dolor abdominal de 9 horas de evolución, asociado a dos vómitos no biliosos. Sin eliminación de deposiciones en las últim…`
- **opciones[1].t** · regla `ligaduras`
  - antes: `Identiﬁcar el cuadro como apendicitis aguda y solicitar interconsulta con Servicio de Cirugía`
  - después: `Identificar el cuadro como apendicitis aguda y solicitar interconsulta con Servicio de Cirugía`

### `pc-140`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Corina de 43 años de edad ingresa con distensión abdominal por ascitis de tres semanas de evolución. Al examen físico es el único dato …`
  - después: `Corina de 43 años de edad ingresa con distensión abdominal por ascitis de tres semanas de evolución. Al examen físico es el único dato patológico presente. La rutina de l…`
- **pregunta** · regla `espacios`
  - antes: `Corina de 43 años de edad ingresa con distensión abdominal por ascitis de tres semanas de evolución. Al examen físico es el único dato patológico presente. La rutina de l…`
  - después: `Corina de 43 años de edad ingresa con distensión abdominal por ascitis de tres semanas de evolución. Al examen físico es el único dato patológico presente. La rutina de l…`

### `pc-141`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Bety de 30 años de edad ingresa por un cuadro clínico de 72 horas de evolución consistente en imposibilidad de cierre de ojo izquierdo,…`
  - después: `Bety de 30 años de edad ingresa por un cuadro clínico de 72 horas de evolución consistente en imposibilidad de cierre de ojo izquierdo, borramiento del surco nasogeniano …`
- **pregunta** · regla `espacios`
  - antes: `Bety de 30 años de edad ingresa por un cuadro clínico de 72 horas de evolución consistente en imposibilidad de cierre de ojo izquierdo, borramiento del surco nasogeniano …`
  - después: `Bety de 30 años de edad ingresa por un cuadro clínico de 72 horas de evolución consistente en imposibilidad de cierre de ojo izquierdo, borramiento del surco nasogeniano …`
- **opciones[2].t** · regla `espacios`
  - antes: `Parálisis central del quinto par`
  - después: `Parálisis central del quinto par`
- **opciones[3].t** · regla `espacios`
  - antes: `Parálisis central del séptimo par`
  - después: `Parálisis central del séptimo par`

### `pc-142`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Carla de 19 años de edad posee antecedentes de hipotiroidismo de dos años de evolución y fue adecuadamente tratada. Consulta por anemia…`
  - después: `Carla de 19 años de edad posee antecedentes de hipotiroidismo de dos años de evolución y fue adecuadamente tratada. Consulta por anemia microcítica hipocrómica con ferrit…`
- **pregunta** · regla `espacios`
  - antes: `Carla de 19 años de edad posee antecedentes de hipotiroidismo de dos años de evolución y fue adecuadamente tratada. Consulta por anemia microcítica hipocrómica con ferrit…`
  - después: `Carla de 19 años de edad posee antecedentes de hipotiroidismo de dos años de evolución y fue adecuadamente tratada. Consulta por anemia microcítica hipocrómica con ferrit…`

### `pc-143`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 José de 86 años de edad ingresa por cuadro de dolor abdominal. Presenta antecedentes de HTA/ DBT/, tabaquismo de 30 paq/año. Examen fís…`
  - después: `José de 86 años de edad ingresa por cuadro de dolor abdominal. Presenta antecedentes de HTA/ DBT/, tabaquismo de 30 paq/año. Examen físico: TA 90/60, FC 98 x min, afebril…`
- **pregunta** · regla `ligaduras`
  - antes: `José de 86 años de edad ingresa por cuadro de dolor abdominal. Presenta antecedentes de HTA/ DBT/, tabaquismo de 30 paq/año. Examen físico: TA 90/60, FC 98 x min, afebril…`
  - después: `José de 86 años de edad ingresa por cuadro de dolor abdominal. Presenta antecedentes de HTA/ DBT/, tabaquismo de 30 paq/año. Examen físico: TA 90/60, FC 98 x min, afebril…`
- **pregunta** · regla `espacios`
  - antes: `José de 86 años de edad ingresa por cuadro de dolor abdominal. Presenta antecedentes de HTA/ DBT/, tabaquismo de 30 paq/año. Examen físico: TA 90/60, FC 98 x min, afebril…`
  - después: `José de 86 años de edad ingresa por cuadro de dolor abdominal. Presenta antecedentes de HTA/ DBT/, tabaquismo de 30 paq/año. Examen físico: TA 90/60, FC 98 x min, afebril…`

### `pc-144`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Marisa de 34 años de edad ingresa por un cuadro de poliartritis compatible con artritis reumatoidea de cinco semanas de evolución. Dado…`
  - después: `Marisa de 34 años de edad ingresa por un cuadro de poliartritis compatible con artritis reumatoidea de cinco semanas de evolución. Dado el cuadro mencionado como posible …`
- **pregunta** · regla `espacios`
  - antes: `Marisa de 34 años de edad ingresa por un cuadro de poliartritis compatible con artritis reumatoidea de cinco semanas de evolución. Dado el cuadro mencionado como posible …`
  - después: `Marisa de 34 años de edad ingresa por un cuadro de poliartritis compatible con artritis reumatoidea de cinco semanas de evolución. Dado el cuadro mencionado como posible …`

### `pc-145`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Olivia de 32 años ingresa por astenia e insomnio acompañado de parestesias en miembros inferiores. Al examen físico se observa palidez …`
  - después: `Olivia de 32 años ingresa por astenia e insomnio acompañado de parestesias en miembros inferiores. Al examen físico se observa palidez cutáneomucosa, alteraciones en la s…`
- **pregunta** · regla `ligaduras`
  - antes: `Olivia de 32 años ingresa por astenia e insomnio acompañado de parestesias en miembros inferiores. Al examen físico se observa palidez cutáneomucosa, alteraciones en la s…`
  - después: `Olivia de 32 años ingresa por astenia e insomnio acompañado de parestesias en miembros inferiores. Al examen físico se observa palidez cutáneomucosa, alteraciones en la s…`
- **pregunta** · regla `espacios`
  - antes: `Olivia de 32 años ingresa por astenia e insomnio acompañado de parestesias en miembros inferiores. Al examen físico se observa palidez cutáneomucosa, alteraciones en la s…`
  - después: `Olivia de 32 años ingresa por astenia e insomnio acompañado de parestesias en miembros inferiores. Al examen físico se observa palidez cutáneomucosa, alteraciones en la s…`

### `pc-146`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Observe la siguiente Rx y responda a las siguientes preguntas Considerando que la Rx pertenece a una paciente de 24 años de edad, quien…`
  - después: `Observe la siguiente Rx y responda a las siguientes preguntas Considerando que la Rx pertenece a una paciente de 24 años de edad, quien se encuentra lúcida, febril y pose…`
- **pregunta** · regla `ligaduras`
  - antes: `Observe la siguiente Rx y responda a las siguientes preguntas Considerando que la Rx pertenece a una paciente de 24 años de edad, quien se encuentra lúcida, febril y pose…`
  - después: `Observe la siguiente Rx y responda a las siguientes preguntas Considerando que la Rx pertenece a una paciente de 24 años de edad, quien se encuentra lúcida, febril y pose…`
- **pregunta** · regla `espacios`
  - antes: `Observe la siguiente Rx y responda a las siguientes preguntas Considerando que la Rx pertenece a una paciente de 24 años de edad, quien se encuentra lúcida, febril y pose…`
  - después: `Observe la siguiente Rx y responda a las siguientes preguntas Considerando que la Rx pertenece a una paciente de 24 años de edad, quien se encuentra lúcida, febril y pose…`
- **opciones[0].t** · regla `espacios`
  - antes: `Indicar tratamiento domiciliario con claritomicina`
  - después: `Indicar tratamiento domiciliario con claritomicina`

### `pc-147`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Consulta la madre de Ignacio de 15 meses de vida para su control de salud. Tiene las siguientes vacunas: Bcg y hepatitis B al nacer Qui…`
  - después: `Consulta la madre de Ignacio de 15 meses de vida para su control de salud. Tiene las siguientes vacunas: Bcg y hepatitis B al nacer Quintuple 2 dosis Salk 2 dosis Antineu…`
- **pregunta** · regla `espacios`
  - antes: `Consulta la madre de Ignacio de 15 meses de vida para su control de salud. Tiene las siguientes vacunas: Bcg y hepatitis B al nacer Quintuple 2 dosis Salk 2 dosis Antineu…`
  - después: `Consulta la madre de Ignacio de 15 meses de vida para su control de salud. Tiene las siguientes vacunas: Bcg y hepatitis B al nacer Quintuple 2 dosis Salk 2 dosis Antineu…`

### `pc-148`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Elizabeth de 34 años consulta por método anticonceptivo. Reﬁere haber utilizado hasta la fecha métodos de barrera pero actualmente tien…`
  - después: `Elizabeth de 34 años consulta por método anticonceptivo. Reﬁere haber utilizado hasta la fecha métodos de barrera pero actualmente tiene pareja estable y desea utilizar o…`
- **pregunta** · regla `ligaduras`
  - antes: `Elizabeth de 34 años consulta por método anticonceptivo. Reﬁere haber utilizado hasta la fecha métodos de barrera pero actualmente tiene pareja estable y desea utilizar o…`
  - después: `Elizabeth de 34 años consulta por método anticonceptivo. Refiere haber utilizado hasta la fecha métodos de barrera pero actualmente tiene pareja estable y desea utilizar …`
- **pregunta** · regla `espacios`
  - antes: `Elizabeth de 34 años consulta por método anticonceptivo. Refiere haber utilizado hasta la fecha métodos de barrera pero actualmente tiene pareja estable y desea utilizar …`
  - después: `Elizabeth de 34 años consulta por método anticonceptivo. Refiere haber utilizado hasta la fecha métodos de barrera pero actualmente tiene pareja estable y desea utilizar …`

### `pc-159`

- **pregunta** · regla `boilerplate`
  - antes: `Sin responder aún Puntúa como 1,00 Según el calendario de vacunación oficial, Ud. le indica... Marque 4 opciones`
  - después: `Según el calendario de vacunación oficial, Ud. le indica... Marque 4 opciones`
- **pregunta** · regla `espacios`
  - antes: `Según el calendario de vacunación oficial, Ud. le indica... Marque 4 opciones`
  - después: `Según el calendario de vacunación oficial, Ud. le indica... Marque 4 opciones`

### `pc-162`

- **pregunta** · regla `espacios`
  - antes: `Héctor de 50 años concurre a la consulta por presentar un fuerte dolor en la pantorrilla izquierda de 60 días de evolución. El paciente le relata que se encontraba camina…`
  - después: `Héctor de 50 años concurre a la consulta por presentar un fuerte dolor en la pantorrilla izquierda de 60 días de evolución. El paciente le relata que se encontraba camina…`

### `pc-164`

- **pregunta** · regla `espacios`
  - antes: `Diagnosticado el proceso hemolítico, usted deberá solicitar otro examen complementario para continuar estudiando a la paciente. ¿Cuál de los siguientes estudios le solici…`
  - después: `Diagnosticado el proceso hemolítico, usted deberá solicitar otro examen complementario para continuar estudiando a la paciente. ¿Cuál de los siguientes estudios le solici…`

### `pc-165`

- **pregunta** · regla `espacios`
  - antes: `Uma de 6 años concurre a la guardia por vómitos que no ceden de más de 24 horas de evolución. Según refiere la madre la nota más delgada, aunque es de muy buen apetito y …`
  - después: `Uma de 6 años concurre a la guardia por vómitos que no ceden de más de 24 horas de evolución. Según refiere la madre la nota más delgada, aunque es de muy buen apetito y …`

### `pc-166`

- **pregunta** · regla `espacios`
  - antes: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`
  - después: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`

### `pc-167`

- **caso** · regla `espacios`
  - antes: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`
  - después: `Lisa de 30 de años consulta por episodios de síncope que le ocurrieron en forma reiterada durante el último mes. Al examinarla se detectan signos físicos de estenosis aór…`

### `pc-168`

- **pregunta** · regla `espacios`
  - antes: `Para corroborar o descartar su hipótesis diagnóstica usted debe solicitar otros exámenes complememtarios, ¿cuál de los siguientes estudios lo considera el de mayor utilid…`
  - después: `Para corroborar o descartar su hipótesis diagnóstica usted debe solicitar otros exámenes complememtarios, ¿cuál de los siguientes estudios lo considera el de mayor utilid…`

### `pc-169`

- **pregunta** · regla `espacios`
  - antes: `Inés de 6 meses de vida, es la primera hija de Natalia (28 años, docente) y Ramiro (32 años, docente). Fue una RNTPAEG y no presentó hasta el momento ningún problema de s…`
  - después: `Inés de 6 meses de vida, es la primera hija de Natalia (28 años, docente) y Ramiro (32 años, docente). Fue una RNTPAEG y no presentó hasta el momento ningún problema de s…`

### `pc-170`

- **pregunta** · regla `espacios`
  - antes: `Julián de 3 años con su madre concurren a consulta a por presentar agitación. La mamá refiere que apareció luego de haber estado jugando por más de una hora, durante el c…`
  - después: `Julián de 3 años con su madre concurren a consulta a por presentar agitación. La mamá refiere que apareció luego de haber estado jugando por más de una hora, durante el c…`

### `pc-004`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-003), sin confirmar — no verificado.== Claudia, 26 años, ingresó por palpitaciones. Al examen, pul…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-003), sin confirmar – no verificado.== Claudia, 26 años, ingresó por palpitaciones. Al examen, pul…`

### `pc-026`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente con neumonía adquirida en la comunidad que evoluciona con derrame …`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente con neumonía adquirida en la comunidad que evoluciona con derrame …`

### `pc-051`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar — no verificado.== Martín P., 59 años, nacido en Salta y radicado en Buenos Ai…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar – no verificado.== Martín P., 59 años, nacido en Salta y radicado en Buenos Ai…`

### `pc-053`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar — no verificado.== Continúa el caso de Martín P., 59 años (ver pregunta anteri…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar – no verificado.== Continúa el caso de Martín P., 59 años (ver pregunta anteri…`

### `pc-054`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar — no verificado.== Continúa el caso de Martín P. (ver preguntas anteriores de …`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar – no verificado.== Continúa el caso de Martín P. (ver preguntas anteriores de …`

### `pc-055`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar — no verificado.== Continúa el caso de Martín P.: mientras se completa el estu…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-052), sin confirmar – no verificado.== Continúa el caso de Martín P.: mientras se completa el estu…`

### `pc-056`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado. Nota: pese a estar en la misma página que el bloque de Martín P., las opcione…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado. Nota: pese a estar en la misma página que el bloque de Martín P., las opcione…`

### `pc-062`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente en el posoperatorio de una cirugía abdominal, que persiste febril …`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente en el posoperatorio de una cirugía abdominal, que persiste febril …`

### `pc-067`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente en trabajo de parto conducido con goteo de ocitocina (Ringer-lacta…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente en trabajo de parto conducido con goteo de ocitocina (Ringer-lacta…`

### `pc-068`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Puérpera reciente que consulta por fiebre, dolor abdominal bajo y loquios d…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Puérpera reciente que consulta por fiebre, dolor abdominal bajo y loquios d…`

### `pc-084`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-085, que nombra a la misma paciente), sin confirmar — no verificado.== Josefina, lactante en estud…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-085, que nombra a la misma paciente), sin confirmar – no verificado.== Josefina, lactante en estud…`

### `pc-087`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-086, Ejercicio Clínico Nro. 2), sin confirmar — no verificado.== Hombre de 72 años con síndrome fe…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-086, Ejercicio Clínico Nro. 2), sin confirmar – no verificado.== Hombre de 72 años con síndrome fe…`

### `pc-088`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de preguntas vecinas reales del pack (PC-086/PC-089, Ejercicio Clínico Nro. 2), sin confirmar — no verificado.== El mismo hombre de 72 año…`
  - después: `==⚠️ Caso reconstruido a partir de preguntas vecinas reales del pack (PC-086/PC-089, Ejercicio Clínico Nro. 2), sin confirmar – no verificado.== El mismo hombre de 72 año…`

### `pc-093`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-095, Ejercicio Clínico Nro. 3), sin confirmar — no verificado.== Mujer de 62 años llevada por su h…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-095, Ejercicio Clínico Nro. 3), sin confirmar – no verificado.== Mujer de 62 años llevada por su h…`

### `pc-094`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-095, Ejercicio Clínico Nro. 3), sin confirmar — no verificado.== Continúa el caso de la mujer de 6…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-095, Ejercicio Clínico Nro. 3), sin confirmar – no verificado.== Continúa el caso de la mujer de 6…`

### `pc-096`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-097, misma paciente un año después), sin confirmar — no verificado.== La misma mujer, un año despu…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-097, misma paciente un año después), sin confirmar – no verificado.== La misma mujer, un año despu…`

### `pc-099`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente con hallazgo de un nódulo tiroideo palpable, eutiroideo, sin adeno…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente con hallazgo de un nódulo tiroideo palpable, eutiroideo, sin adeno…`

### `pc-106`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-104, Ejercicio Clínico Nro. 5), sin confirmar — no verificado.== Mujer de 23 años, multípara, en a…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-104, Ejercicio Clínico Nro. 5), sin confirmar – no verificado.== Mujer de 23 años, multípara, en a…`

### `pc-107`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA — pregunta de conocimiento general sobre control prenatal, no depende de un caso perdido — no verificado.== Control prenatal de rutina, con …`
  - después: `==⚠️ Caso reconstruido por IA – pregunta de conocimiento general sobre control prenatal, no depende de un caso perdido – no verificado.== Control prenatal de rutina, con …`

### `pc-108`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-109, misma paciente), sin confirmar — no verificado.== La misma mujer, cursando la semana 38 de em…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-109, misma paciente), sin confirmar – no verificado.== La misma mujer, cursando la semana 38 de em…`

### `pc-112`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-113, Néstor), sin confirmar — no verificado.== Néstor, 58 años, contador, consulta por cansancio y…`
  - después: `==⚠️ Caso reconstruido a partir de la pregunta vecina real del pack (PC-113, Néstor), sin confirmar – no verificado.== Néstor, 58 años, contador, consulta por cansancio y…`

### `pc-114`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre el mismo bloque de Néstor (ver pregunta anterior), sin confirmar — no verificado.== Continúa el estudio de Néstor: cansancio, conjuntivas hip…`
  - después: `==⚠️ Caso reconstruido sobre el mismo bloque de Néstor (ver pregunta anterior), sin confirmar – no verificado.== Continúa el estudio de Néstor: cansancio, conjuntivas hip…`

### `pc-115`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre el mismo bloque de Néstor, sin confirmar — no verificado.== Continúa el estudio de Néstor: cansancio, conjuntivas hipocoloreadas, uso crónico…`
  - después: `==⚠️ Caso reconstruido sobre el mismo bloque de Néstor, sin confirmar – no verificado.== Continúa el estudio de Néstor: cansancio, conjuntivas hipocoloreadas, uso crónico…`

### `pc-116`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre el mismo bloque de Néstor, sin confirmar — no verificado.== Con hipótesis de anemia ferropénica por pérdida digestiva crónica (AINEs) y neces…`
  - después: `==⚠️ Caso reconstruido sobre el mismo bloque de Néstor, sin confirmar – no verificado.== Con hipótesis de anemia ferropénica por pérdida digestiva crónica (AINEs) y neces…`

### `pc-125`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente en estudio por un cuadro clínico inespecífico, en el que se solici…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente en estudio por un cuadro clínico inespecífico, en el que se solici…`

### `pc-131`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente joven que presentó un episodio de pérdida de conciencia transitori…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente joven que presentó un episodio de pérdida de conciencia transitori…`

### `pc-132`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre el mismo escenario de pérdida de conciencia transitoria (ver pregunta anterior), sin confirmar — no verificado.==`
  - después: `==⚠️ Caso reconstruido sobre el mismo escenario de pérdida de conciencia transitoria (ver pregunta anterior), sin confirmar – no verificado.==`

### `pc-149`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Niño con antecedente de eliminación de áscaris por vía rectal, que consulta…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Niño con antecedente de eliminación de áscaris por vía rectal, que consulta…`
- **opciones[1].t** · regla `ligaduras`
  - antes: `Identiﬁcar el cuadro como apendicitis aguda y solicitar interconsulta con Servicio de Cirugía`
  - después: `Identificar el cuadro como apendicitis aguda y solicitar interconsulta con Servicio de Cirugía`

### `pc-150`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente con antecedente de alcoholismo crónico que consulta por distensión…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente con antecedente de alcoholismo crónico que consulta por distensión…`

### `pc-151`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre el mismo paciente de la pregunta anterior (cirrosis hepática recién diagnosticada), sin confirmar — no verificado.==`
  - después: `==⚠️ Caso reconstruido sobre el mismo paciente de la pregunta anterior (cirrosis hepática recién diagnosticada), sin confirmar – no verificado.==`

### `pc-152`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente con debilidad facial de instalación aguda que compromete toda la h…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente con debilidad facial de instalación aguda que compromete toda la h…`

### `pc-153`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre el mismo paciente de la pregunta anterior (parálisis facial periférica), sin confirmar — no verificado.==`
  - después: `==⚠️ Caso reconstruido sobre el mismo paciente de la pregunta anterior (parálisis facial periférica), sin confirmar – no verificado.==`

### `pc-154`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Mujer joven con anemia ferropénica de causa no clara, sin sangrado ginecoló…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Mujer joven con anemia ferropénica de causa no clara, sin sangrado ginecoló…`

### `pc-155`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido sobre la misma paciente de la pregunta anterior (sospecha de enfermedad celíaca), sin confirmar — no verificado.==`
  - después: `==⚠️ Caso reconstruido sobre la misma paciente de la pregunta anterior (sospecha de enfermedad celíaca), sin confirmar – no verificado.==`

### `pc-156`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente con anemia macrocítica (VCM elevado), glositis y parestesias en mi…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente con anemia macrocítica (VCM elevado), glositis y parestesias en mi…`

### `pc-157`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones (comparte bloque con la pregunta siguiente, que menciona el score CURB-65), sin fuente original — no verificado.== …`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones (comparte bloque con la pregunta siguiente, que menciona el score CURB-65), sin fuente original – no verificado.== …`

### `pc-158`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones (una de ellas cita textualmente 'RECORDAR EL SCORE CURB65'), sin fuente original — no verificado.== Paciente mayor …`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones (una de ellas cita textualmente 'RECORDAR EL SCORE CURB65'), sin fuente original – no verificado.== Paciente mayor …`
- **opciones[0].t** · regla `tipograficas`
  - antes: `Internar y colocar ampicilina –sulbactam + macrólido—RECORDAR EL SCORE CURB65:`
  - después: `Internar y colocar ampicilina –sulbactam + macrólido–RECORDAR EL SCORE CURB65:`

### `pc-160`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Mujer en edad fértil con dolor abdominal agudo y atraso menstrual, con sosp…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Mujer en edad fértil con dolor abdominal agudo y atraso menstrual, con sosp…`

### `pc-161`

- **caso** · regla `tipograficas`
  - antes: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original — no verificado.== Paciente en control de salud de rutina, con sobrepeso, en quien se evalúa e…`
  - después: `==⚠️ Caso reconstruido por IA a partir de las opciones, sin fuente original – no verificado.== Paciente en control de salud de rutina, con sobrepeso, en quien se evalúa e…`
- **opciones[0].t** · regla `ligaduras`
  - antes: `Perﬁl lipídico`
  - después: `Perfil lipídico`

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
