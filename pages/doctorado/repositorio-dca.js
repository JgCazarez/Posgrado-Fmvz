document.addEventListener("DOMContentLoaded", function () {
  const DATA_REPOSITORIO_DCA = [
  {
    "alumno": "Armenta López Arturo Rafael",
    "tema": "MANEJO AGROECOLÓGICO DEL GORGOJO PARDO Acanthoscelides obtectus (Say) EN FRIJOL ALMACENADO PARA SEMILLA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-ARTURO RAFAEL ARMENTA LÓPEZ.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Eusebio Nava Pérez, Dr. Bardo Heleodoro Sánchez Soto, Dr. Celia Selene Romero Félix",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "Ceballos Chávez Ángel Rosario",
    "tema": "Identificación de hongos asociados a enfermedades del duraznero (Prunus persica L.) y efectividad biológica de Trichoderma spp. para su control",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-CEBALLOS CHAVEZ.pdf",
    "comite": "Dra. Blanca Elvira López Valenzuela, Dr. Fernando Alberto Valenzuela Escoboza, Dra. Glenda Judith Lizárraga Sánchez, Dr. Everardo López Bautista, Dr. Quintín Armando Ayala Armenta",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "González Molotla Iris Alejandrina",
    "tema": "Identificación y patogenicidad de hongos de la madera asociados a la muerte descendente del arándano (Vaccinium corymbosum L.) y su incidencia por una mala técnica de poda en el norte de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-GONZALEZ MOLOTLA.pdf",
    "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dra. Blanca Elvira López Valenzuela, Dra. Glenda Judith Lizárraga Sánchez, Dr. Hugo Beltrán Peña, Dr. Quintín Armando Ayala Armentas.",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "González Ruiz Andrés",
    "tema": "HERRAMIENTAS DIGITALES EN LA EVALUACIÓN DE HERBICIDAS INHIBIDORES DE LA ALS Y ACCasa Y RESISTENCIA DE Avena fatua L. EN TRIGO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-GONZALEZ RUIZ.pdf",
    "comite": "Dr. Guadalupe Alfonso López Urquídez, Dr. Carlos Enrique Ail Catzim, Dr. Carlos Alfonso López Orona, Dra. Mitzi Dayanira Estrada Acosta, Dr. Raymundo Medina López",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "Herrera Rodríguez Gabriel",
    "tema": "Manejo de la pudrición blanda de la papa causada por Sclerotium rolfsii en Sonora y Sinaloa, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-HERRERA RODRIGUEZ.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Rubén Félix Gastélum, Dra. Guadalupe Arlene Mora Romero, Dr. Hugo Beltrán Peña",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "Mendoza Cortez Daniel Alejandro",
    "tema": "Evaluación de la molécula 25-hidroxivitamina-D3 combinada con aceites esenciales como alternativa para la sustitución de promotores de crecimiento en alimentación de rumiantes en finalización",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-MENDOZA CORTEZ DANIEL A.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dr. Jesús David Urías Estrada, Dra. Beatriz Isabel Castro Pérez,",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "Rabago Zavala Karen",
    "tema": "Caracterización morfológica, molecular y patogénica de aislados de Rhizoctonia spp., de frijol y maíz en el estado de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-RABAGO ZAVALA.pdf",
    "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dra. Blanca Elvira López Valenzuela, Dra. Glenda Judith Lizarrag Sanchez, Dr. Quintín Armando Ayala Armenta, Dr. Ángel Rosario Ceballos Chávez",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "Rubio Aragón Walter Arturo",
    "tema": "Diseño e instalación de trampas adhesivas para la captura de Bemisia tabaci, Bactericera cockerelli y Anthonomus eugenii en chiles (Capsicum spp.) a campo abierto en Sinaloa, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2020-2024/TESIS DCA-RUBIO ARAGON WALTER A.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Guadalupe Alfonso López Urquídez, Dra. Silvia Alicia Félix Camacho, Dra. María Alejandra Payán Arzapalo, Dr. Azareel Angulo Castro",
    "cohorte": "2020-2024",
    "anio": "2024"
  },
  {
    "alumno": "Joel Fitzgerald Linares Cordova",
    "tema": "Estilos de afrontamiento al estrés en juveniles de lisa (Mugil cephalus): Efecto en el comportamiento, parámetros fisiológicos y transcriptómica",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2019-2023/TESIS DCA-LINARES CORDOVA.pdf",
    "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca, Dr. Zohar Ibarra Zatarain, Dra. Sonia Rey Planellas, Dra. Anais Boglino, Dra. Rosa María Morelos Castro",
    "cohorte": "2019-2023",
    "anio": "2023"
  },
  {
    "alumno": "Isidro Márquez Zequera",
    "tema": "Análisis comparativo de la diversidad morfológica, patogénica y genética de Clavibacter michiganensis subsp. michiganensis aisladas de México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2019-2023/TESIS DCA-MARQUEZ ZEQUERA.pdf",
    "comite": "Dr. José Antonio Garzón Tiznado, Dr. Raymundo Saúl García Estrada, Dr. José Benigno Valdez Torres, Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho",
    "cohorte": "2019-2023",
    "anio": "2024"
  },
  {
    "alumno": "Jesús Daniel Solís Carrasco",
    "tema": "Factores Ambientales Asociados a la Prevalencia de Haemonchus spp y Resistencia Antihelmíntica de Nematodos Gastrointestinales en Ovinos",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/TESIS DCA-SOLIS CARRASCO.pdf",
    "comite": "Dra. Nohemí Castro Del Campo, Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dra. María Eugenia López Arellano, Dr. Miguel Ángel Rodríguez Gaxiola",
    "cohorte": "2019-2023",
    "anio": "2025"
  },
  {
    "alumno": "Griselda Valenzuela Ortiz",
    "tema": "Estrés abiótico causado por quitosano a especies de Colletotrichum aislados de Mango (Mangifera indica L.)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2019-2023/TESIS DCA-VALENZUELA ORTIZ GRISELDA.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Eber Addí Quintana Obregón, Dr. Jesús José Portillo Loera, Dr. Cesar San Martín Hernández",
    "cohorte": "2019-2023",
    "anio": "2024"
  },
  {
    "alumno": "Almada Ruiz Víctor Gabriel",
    "tema": "Alelopatía de extractos vegetales en la germinación y crecimiento inicial de arvenses del Valle del Fuerte",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-ALMADA RUIZ.pdf",
    "comite": "Dr. Bardo Heleodoro Sánchez Soto, Dra. Laura Delia Ortega Arenas, Dr. Gabriel Antonio Lugo García , Dr. Bladimir Salomón Montijo, Dra. Celia Selene Romero Félix",
    "cohorte": "2018-2022",
    "anio": "2024"
  },
  {
    "alumno": "Arteaga Wences Yesica Janeth",
    "tema": "Evaluación de una fuente estandarizada de suplementos de aceites esenciales (crina®rumiantes) en comparación con la suplementación de ionóforos en corderos alimentados con dietas altas en energía en la fase de finalización: respuesta productiva, energética de la dieta, características de la canal y digestión de nutrientes",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-ARTEAGA WENCES.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dra. Beatriz Isabel Castro Pérez, Dr. Francisco Gerardo Ríos Rincón, Dr. Luis Corona Gochi",
    "cohorte": "2018-2022",
    "anio": "2022"
  },
  {
    "alumno": "Buelna Tarín Salomón",
    "tema": "Nutrición con N, P, K y bioestimulantes en la producción de chile jalapeño (Capsicum annuum L.) en el norte de Sinaloa",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-BUELNA TARIN.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Cosme Bojórquez Ramos, Dra. Celia Selene Romero Félix, Dr. Bardo Heleodoro Sánchez Soto",
    "cohorte": "2018-2022",
    "anio": "2023"
  },
  {
    "alumno": "Cárdenas Rodríguez Josué",
    "tema": "IDENTIFICACIÓN Y DETERMINACIÓN DE PATOGENICIDAD DE OOMICETES PROVENIENTES DE AGUAS DE USO AGRÍCOLA EN CULIACÁN, SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-CARDENAS RODRIGUEZ.pdf",
    "comite": "Dr. Moisés Gilberto Yáñez Juárez, Dr. Carlos Alfonso López Orona, Dr. Felipe Ayala Tafoya, Dr. Guadalupe Alfonso López Urquidez, Dra. Luz Llarely Cázarez Flores",
    "cohorte": "2018-2022",
    "anio": "2022"
  },
  {
    "alumno": "Miguel Ángel Cháidez Ibarra",
    "tema": "Identificación y ocurrencia molecular de Mycoplasma gallisepticum y Mycoplasma synoviae en aves domésticas",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-CHAIDEZ IBARRA.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dra. Nohemí Castro Del Campo, Dr. Arnulfo Montero Pardo, Dr. Miguel Ángel Rodríguez Gaxiola",
    "cohorte": "2018-2022",
    "anio": "2024"
  },
  {
    "alumno": "Mc Caughey Espinoza Diana Miriam",
    "tema": "Micropropagación, establecimiento y desarrollo en campo de Krameria erecta Willd. ex Schult. & Schult f. en Sonora, México",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-MCCAUGHEY ESPINOZA.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Juan Eulogio Guerra Liera, Dr. Leonel Avendaño Reyes, Dr. Miguel Ángel Gastélum Delgado, Dr. Ulises Macías Cruz",
    "cohorte": "2018-2022",
    "anio": "2022"
  },
  {
    "alumno": "Ramos Méndez Jorge Luis",
    "tema": "Evaluación de los residuos obtenidos de trampas de grasa (grasa de trampa) como ingrediente en las dietas para corderos en finalización: valor energético, respuesta productiva, eficiencia energética y características de la canal",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-RAMOS MENDEZ.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Martin Francisco Montaño Gómez, Rafael Villa Angulo, Idalia Enríquez Verdugo, Tomás Rentería Evangelista",
    "cohorte": "2018-2022",
    "anio": "2022"
  },
  {
    "alumno": "Román Román Leonardo",
    "tema": "PARTENOCARPIA, FITORREGULADORES SINTÉTICOS Y LOMBRICOMPOSTA EN EL CRECIMIENTO Y RENDIMIENTO DE CALABACITA CULTIVADA BAJO CONDICIONES PROTEGIDAS",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-ROMAN ROMAN.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Álvaro Reyes Olivas, Víctor Valenzuela Herrera.",
    "cohorte": "2018-2022",
    "anio": "2023"
  },
  {
    "alumno": "Rubio Rocha Yamel Guadalupe",
    "tema": "Densidad del jaguar (Panthera onca Linnaeus, 1758) y su relación con la ganadería en las selvas secas del sur de Sinaloa, México.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-RUBIO ROCHA.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Álvaro Reyes Olivas, Víctor Valenzuela Herrera.",
    "cohorte": "2018-2022",
    "anio": "2024"
  },
  {
    "alumno": "Zazueta Gutiérrez Ana Citlaly",
    "tema": "EFECTO MEDIO AMBIENTAL EN EL CONFORT TÉRMICO, COMPORTAMIENTO AGONISTA Y RESPUESTA CONDUCTUAL DIURNA DE BOVINOS PRODUCTORES DE CARNE EN FINALIZACIÓN INTENSIVA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2018-2022/TESIS DCA-ZAZUETA GUTIERREZ.pdf",
    "comite": "Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús David Urías Estrada, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús José Portillo Loera, Dr. Alfredo Estrada Angulo",
    "cohorte": "2018-2022",
    "anio": "2023"
  },
  {
    "alumno": "Cuate Mozo Víctor Alfonso",
    "tema": "ANÁLISIS Y DISTRIBUCIÓN DEL GÉNERO LISTROCHELUS BLANCHARD (COLEOPTERA: MELOLONTHIDAE) EN LA REPÚBLICA MEXICANA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2017-2021/TESIS DCA_CUATE MOZO.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Agustín Aragón García, Dr. Álvaro Reyes Olivas, Dr. Juan Fernando Sánchez Portillo, Dr. Bardo Heleodoro Sánchez Soto",
    "cohorte": "2017-2021",
    "anio": "2021"
  },
  {
    "alumno": "Díaz Espinosa de los Monteros Daniel",
    "tema": "Utilidad de los estudios secundarios sistemáticos como una herramienta para la toma de decisiones basadas en evidencia en campos de la reproducción y la producción animal",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2017-2021/TESIS DCA_DIAZ ESPINOSA DE LOS MONTEROS.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Arnulfo Montero Pardo, Dra. Beatriz Isabel Castro Pérez, Dr. Miguel Ángel Rodríguez Gaxiola, Dr. José René Rosiles Martínez",
    "cohorte": "2017-2021",
    "anio": "2022"
  },
  {
    "alumno": "Martha Irene Millán Almaraz",
    "tema": "Efecto de la composición proximal, clorofilas, y carotenoides totales de cuatro especies de microalgas sobre la calidad nutricional de juveniles de Artemia franciscana",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2017-2021/TESIS DCA_MILLAN ALMARAZ.pdf",
    "comite": "Dr. Mario Nieves Soto, Dra. Diana Judith López Peraza, Dr. José Ángel López Valenzuela, Dra. Martha Elisa Rivas Vega, Dr. Anselmo Miranda Baeza",
    "cohorte": "2017-2021",
    "anio": "2024"
  },
  {
    "alumno": "Lorena Molina Cárdenas",
    "tema": "CARACTERIZACIÓN MORFOLÓGICA Y GENOTÍPICA DE POBLACIONES DE Fusarium spp. CAUSANTES DE LA MALFORMACIÓN DEL MANGO (Mangifera indica L.) EN SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2017-2021/TESIS DCA_MOLINA CARDENAS.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Guadalupe Alfonso López Urquídez, Dra. Mitzi Dayanira Estrada Acosta, Dr. Felipe Ayala Tafoya",
    "cohorte": "2017-2021",
    "anio": "2021"
  },
  {
    "alumno": "Ojeda Ayala Manrique",
    "tema": "ACTIVIDAD ANTIOXIDANTE, ANTICARCINOGÉNICA Y ANTIIFLAMATORIA DE LOS COMPUESTOS Y FRACCIONES DEL FRUTO DE PAPACHE (Randia echinocarpa)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2017-2021/TESIS DCA_OJEDA AYALA MANRIQUE.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Francisco Delgado Vargas, Dra. Idalia Enríquez Verdugo, Dra. Gabriela López Angulo, Dra. Natalia Chiquete Félix.",
    "cohorte": "2017-2021",
    "anio": "2023"
  },
  {
    "alumno": "Octavio Zapata Ramírez",
    "tema": "Efecto de la suplementación individual o combinada de probióticos y prebióticos en las características de digestión de tracto total, fermentación ruminal, respuesta productiva, eficiencia energética, características de la canal y masa visceral de ovinos finalizados en condiciones climáticas sub-tropicales",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2017-2021/TESIS DCA_ZAPATA RAMIREZ OCTAVIO (1).pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urías Estrada, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2017-2021",
    "anio": "2021"
  },
  {
    "alumno": "Cinthya Beatriz Romo Barrón.",
    "tema": "DESEMPEÑO REPRODUCTIVO DE OVEJA PELIBUEY Y FACTORES QUE AFCTAN EL PESO AL NACER DE LOS CORDEROS EN CLIMA TROPICAL SECA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FMVZ/TESIS DCA-ROMO BARRON.pdf",
    "comite": "Dr. Jesús J. Portillo L., Dr. Arnulfo Montero P., Dr. Christian de J. Urías Castro, Dr. Miguel Ángel Rodríguez G., Dr. Carlos Fernando Aréchiga Flores.",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Víctor Hugo Núñez Benítez.",
    "tema": "EFECTO DE GLICONUTRIENTES ALIMENTICIOS EN LA DIGESTIÓN DE NUTRIMENTOS Y PRODUCTIVIDAD DE RUMIANTES EN CONFINAMIENTO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FMVZ/TESIS DCA_NUNEZ BENITEZ.pdf",
    "comite": "Dra. Beatriz Isabel Castro, Dr. Alejandro Plascencia Jorquera, Dr. Alfredo Estrada Angulo, Dra. María Alejandra López Soto, Dr. Carlos Raúl Rivera Méndez",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Martín Abraham Tirado Ramírez.",
    "tema": "SUPRESIVIDAD DEL SUELO EN LA REPRODUCCIÓN Y POTENCIAL PATÓGENO DE Fusarium oxysporum f. sp. cepae",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FA/TESIS DCA_TIRADO RAMIREZ.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Tomás Díaz V., Dra. Teresa de J. Velázquez A., Dr. Sixto Velarde Félix, Dr. Ángel Roberto Martínez Campos.",
    "cohorte": "2016-2020",
    "anio": "2020"
  },
  {
    "alumno": "María Alejandra Payán Arzapalo.",
    "tema": "ANTIBIOSIS DE VARIEDADES DE Sorghum bicolor PARA Melanaphis sacchari E IDENTIFICACIÓN DE MECANISMOS INVOLUCRADOS.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FA/TESIS DCA-PAYAN ARZAPALO.pdf",
    "comite": "Dr. Roberto Gastélum L., Dr. Carlos E. Ail Catzim., Dr. Juan Eulogio Guerra L., Dr. Tirzo P. Godoy A., Dra. Briceida Ortiz L.",
    "cohorte": "2016-2020",
    "anio": "2020"
  },
  {
    "alumno": "Arnulfo Vicente Pérez.",
    "tema": "DOSIS ÓPTIMA DE SUPLEMENTACIÓN DEL AGONISTA ADRENÉRGICO-BETA CLORHIDRATO DE ZILPATEROL (GROFACTOR®) Y RESPUESTAS BIOLÓGICAS ASOCIADAS EN OVINOS DE PELO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FMVZ/tesis DCA_Vicente Perez.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Juan Eulogio Guerra Liera, Dr. Leonel Avendaño Reyes, Dr. Miguel Ángel Gastélum Delgado, Dr. Ulises Macías Cruz",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Flores Dueñas César Augusto",
    "tema": "EFICIENCIA DEL SOPORTE NUTRICIONAL EN PACIENTES CANINOS PEDIATRICOS EN ESQUEMA DE ALIMENTACIÓN PARENTERAL PARCIAL.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FMVZ/TESIS DCA_FLORES DUENAS.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Martin Francisco Montaño Gómez, Rafael Villa Angulo, Idalia Enríquez Verdugo, Tomás Rentería Evangelista",
    "cohorte": "2016-2020",
    "anio": "2020"
  },
  {
    "alumno": "Borbón Gracia Alberto",
    "tema": "ROTACIÓN DE CULTIVOS Y PRÁCTICAS DE LABRANZA SOBRE CARACTERÍSTICAS DEL SUELO Y RENDIMIENTO DE TRIGO EN EL TRÓPICO SECO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FMVZ/TESIS DCA-BORBON GRACIA.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Álvaro Reyes Olivas, Víctor Valenzuela Herrera.",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Cázares Flores Luz Llarely",
    "tema": "EFECTO DEL SILICIO Y CLORO EN EL CRECIMIENTO, DESARROLLO Y RENDIMIENTO DEL PEPINO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FA/TESIS DCA_CAZAREZ FLORES.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez A., Dr. Leopoldo Partida R., Dr. Tomás Díaz V., Dr. Felipe Ayala Tafoya.",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Zazueta Torres Norma Delia",
    "tema": "CANTIDAD Y CALIDAD DE LUZ EN EL CRECIMIENTO Y DESARROLLO DEL PEPINO Y SUS PATÓGENOS FUNGOSOS.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FA/tesis dca_zazueta torres.pdf",
    "comite": "Dr. Felipe Ayala Tafoya, Dr. Leopoldo Partida R., Dra. Teresa de J. Velázquez A., Dr. Tomás Díaz V.",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Mendoza Gómez Aurelia",
    "tema": "SELECCIÓN DE GENOTIPOS DE CHILE HABANERO (Capsicum chinense Jacq.) CULTIVADOS EN CASA SOMBRA EN EL VALLE DE MEXICALI.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FA/TESIS_DOCTORADO_AURELIA_MENDOZA.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Leopoldo Partida Ruvalcaba, Tomás Díaz Valdés, Felipe Ayala Tafoya y Mario Ernesto Vázquez Badillo.",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Aguilar Quiñonez José Antonio",
    "tema": "ÁREA DE SOMBRA EN LA PRODUCTIVIDAD, VARIABLES HEMATOLÓGICAS Y BIOQUÍMICAS.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/FMVZ/TESIS DCA-JOSÉ ANTONIO AGUILAR QUINONEZ.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dr. Juan Eulogio Guerra Liera, Dr. Leonel Avendaño Reyes, Dr.",
    "cohorte": "2016-2020",
    "anio": "2021"
  },
  {
    "alumno": "Mendoza Medrano Daniel",
    "tema": "RELACIÓN ENTRE LA NUTRICIÓN EN TOMATE (Solanum lycopersicum) Y LA SEVERIDAD DE LA FUSARIOSIS VASCULAR",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2016-2020/TESIS MCA-MENDOZA MEDRANO.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. José Ángel Martínez Gallardo, Dr. Guadalupe Alfonso López Urquídez, Dr. Azareel Angulo Castro, Dra. Josefina León Félix",
    "cohorte": "2016-2020",
    "anio": "2023"
  },
  {
    "alumno": "Quintín Armando Ayala Armenta",
    "tema": "PATÓGENOS ASOCIADOS A LA MARCHITEZ DEL TOMATILLO (Physalis ixocarpa Brot.) EN EL NORTE DE SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FAVF/TESIS_DCA_AYALA ARMENTA.pdf",
    "comite": "Dr. Hugo Beltrán Peña, Dr. Miguel Ángel Apodaca Sánchez, Dr. Álvaro Reyes Olivas, Dr. Edgardo Cortez Mondaca",
    "cohorte": "2015-2019",
    "anio": "2020"
  },
  {
    "alumno": "Jesús del Rosario Ruelas Islas Chuyita",
    "tema": "REDUCCIÓN DEL ESTRÉS TÉRMICO EN MAÍZ MEDIANTE EL MANEJO DE RIEGO Y NUTRICIÓN.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FAVF/TESIS DCA_RUELAS ISLAS.PDF",
    "comite": "Dr. Álvaro Reyes Olivas, Dr. Roberto Soto Ortiz, Dr. Jorge Flores Velázquez, Dr. Federico Villarreal Guerrero",
    "cohorte": "2015-2019",
    "anio": "2020"
  },
  {
    "alumno": "Tomás Aarón Vega Gutiérrez",
    "tema": "DIVERSIDAD GENÉTICA DE Phytophthora infestants EN EL ESTADO DE SINALOA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FA/TESIS DCA-VEGA GUTIERREZ.pdf",
    "comite": "Dr. Carlos Alfonso López Orona, Dr. Guadalupe Alfonso López Urquidez, Dr. Raúl Allende Molar, Dr. Ángel Roberto Martínez Campos",
    "cohorte": "2015-2019",
    "anio": "2019"
  },
  {
    "alumno": "Alejandro Rivera Villegas",
    "tema": "EFECTO DE LA ADICIÓN DE CLORHIDRATO DE ZILPATEROL GENÉRICO EN LA RESPUESTA PRODUCTIVA, CARACTERÍSTICAS DE LA CANAL Y COMPOSICIÓN TISULAR DE OVINOS DE PELO EN FINALIZACIÓN.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FMVZ/TESIS DCA_RIVERA VILLEGAS.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dra. Beatriz Isabel Castro Pérez, Dr. Octavio Carrillo Muro, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2015-2019",
    "anio": "2020"
  },
  {
    "alumno": "Luis Antonio Rojas Román",
    "tema": "EFECTO DE LA ADICIÓN DE TANINOS EN RESPUESTA PRODUCTIVA, ENERGÍA, CARACTERÍSTICAS DE LA CANAL, CALIDAD DE LA CARNE Y DIGESTIBILIDAD DE OVINOS DE PELO CON DIETAS DE FINALIZACIÓN.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FMVZ/TESIS DCA-ROJAS ROMAN.pdf",
    "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Alejandro Plascencia Jorquera, Dr. Alfredo Estrada Angulo, Dr. Germán Contreras Pérez, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2015-2019",
    "anio": "2021"
  },
  {
    "alumno": "Jaime Noé Sánchez Pérez",
    "tema": "EFECTO DEL ENCASTE RACIAL Y TIPO DE GANADO, MANEJO ANTEMORTEM E INDICADORES DE BIENESTAR ANIMALEN EL DESEMPEÑO PRODUCTIVO CARACTERÍSTICAS DE LA CANAL Y CALIDAD DE LA CARNE DE BOVINOS EN CONFINAMIENTO EN TRÓPICO SECO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FMVZ/TESIS DCA-SANCHEZ PEREZ.pdf",
    "comite": "Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera, Dra. Cristina Pérez Linares",
    "cohorte": "2015-2019",
    "anio": "2020"
  },
  {
    "alumno": "Rebeca Flores Castro",
    "tema": "DEMOSTRACIÓN DE Chlamydia abortus EN VACAS Y BOIRREGAS DEL ESTADO DE SINALOA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FMVZ/TESIS DCA_CASTRO FLORES.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Efrén Díaz Aparicio, Dra. Idalia Enríquez Verdugo.",
    "cohorte": "2015-2019",
    "anio": "2020"
  },
  {
    "alumno": "Melissa Belem Corona Palazuelos",
    "tema": "INFLUENCIA DE LA ADICIÓN DE EXTRACTOS DE PLANTAS EN LA CARGA POR Haemonchus sp Y Cooperia sp EN BECERROS AL INICIO DE LA ENGORDA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FMVZ/TESIS DCA-CORONA PALAZUELOS.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dra. Soila Maribel Gaxiola Camacho, Dr. Javier Alonso Romo Rubio.",
    "cohorte": "2015-2019",
    "anio": "2021"
  },
  {
    "alumno": "Raquel Olivas Salazar",
    "tema": "PREVALENCIA, FACTORES ASOCIADOS Y RESISTENCIA ANTIHELMÍNTICA DE NEMÁTODOS GASTROINTESTINALES EN HATOS CAPRINOS EN AGOSTADEROS SEMIÁRIDOS DEL NORESTE DE MÉXICO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2015-2019/FMVZ/TESIS DE DCA- OLIVAS SALAZAR.pdf",
    "comite": "Dr. Alfredo Estrada Angulo. Dr. Miguel Mellado Bosque, Dra. Beatriz Isabel Castro Pérez, Dr. Armando Jacinto Aguilar Caballero, Dr. Jesús David Urías Estrada",
    "cohorte": "2015-2019",
    "anio": "2020"
  },
  {
    "alumno": "Félix Ortiz José Adán",
    "tema": "EFECTO DE LA MAREA SOBRE LA COMPOSICIÓN Y ABUNDANCIA DE POSTLARVAS DE CAMARONES PENAEIDAE",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FACIMAR/TESIS DCA-FELIX ORTIZ.pdf",
    "comite": "Dr. Nicolás Castañeda Lomas, Dr. Eugenio Alberto Aragón Noriega, Dr. Guillermo Rodríguez Domínguez, Dr. Wenceslao Valenzuela Quiñónez",
    "cohorte": "2014-2018",
    "anio": "2019"
  },
  {
    "alumno": "León Cañedo Jesús Armando",
    "tema": "DINÁMICA Y CARGA AMBIENTAL DE IONES MAYORITARIOS Y OLIGOELEMENTOS EN UN SISTEMA DE RECIRCULACIÓN AGRO-ACUÍCOLA DE CAMARÓN Y HORTALIZAS CON AGUA DE BAJA SALINIDAD",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FACIMAR/TESIS DCA-LEON CAÑEDO.pdf",
    "comite": "Dr. Tomás Díaz Valdés, Dr. Federico Páez Osuna, Dr. Leopoldo Partida Ruvalcaba",
    "cohorte": "2014-2018",
    "anio": "2019"
  },
  {
    "alumno": "Romo Valdez Juan Manuel",
    "tema": "EFECTO DEL CONSUMO DE ALIMENTO ADICIONADO CON METIONINA DE ZINC EN LA RESPUESTA PRODUCTIVA DEL CERDO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FMVZ/TESIS DCA-Romo Valdez.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Rubén Barajas Cruz, Dra. Idalia Enríquez Verdugo, Dra. Gabriela Silva Hidalgo",
    "cohorte": "2014-2018",
    "anio": "2019"
  },
  {
    "alumno": "Vázquez López Yessica Viridian",
    "tema": "MODELADO MATEMÁTICO DE LA VELOCIDAD DE RESPIRACIÓN DE AGUACATE (Persea americana Mill) ALMACENADO EN UN EMPAQUE CON ATMOSFERA MODIFICADA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FMVZ/TESIS DCA-Vázquez López.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. José de Jesús Caro Corrales, Dr. Jorge Aurelio Zazueta Niebla, Dr. Jesús José Portillo Loera",
    "cohorte": "2014-2018",
    "anio": "2019"
  },
  {
    "alumno": "Fierro Sañudo Juan Francisco",
    "tema": "PRODUCCIÓN, FACTIBILIDAD ECONOMICA Y VALUACIÓN AMBIENTAL DE UN SISTEMA ACUAPÓNICO DE CAMARÓN (Litopenaeus vannamei) CON HORTALIZAS",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FACIMAR/TESIS DCA-FIERRO SAÑUDO.pdf",
    "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca, Dr. Federico Páez Osuna, Dr. Tomas Díaz Valdés",
    "cohorte": "2014-2018",
    "anio": "2019"
  },
  {
    "alumno": "Vargas Nava Alexis Israel",
    "tema": "VIABILIDAD E INFECTIVIDAD DE NEMATODOS EN AGUAS DE LAS PLANTAS TRATADORAS DE AGUAS RESIDUALES DE LA CIUDAD DE CULIACÁN, SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FMVZ/TESIS DCA_VARGAS NAVA.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dr. Jesús José Portillo Loera",
    "cohorte": "2014-2018",
    "anio": "2021"
  },
  {
    "alumno": "Abdo de la Parra María Isabel",
    "tema": "CARACTERIZACIÓN FISIOLÓGICA DE LOS ESTADIOS TEMPRANOS DE LARVAS DE PARGO FLAMENCO (Lutjanus guttatus) EN CULTIVO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2014-2018/FACIMAR/TESIS DCA-ABDO DE LA PARRA.pdf",
    "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca, Dr. José Cristóbal Román Reyes, Dr. José Antonio Estrada Godínez, Dr. Mario Alberto Galaviz, Dr. Emmanuel Martínez Montaño",
    "cohorte": "2014-2018",
    "anio": "2019"
  },
  {
    "alumno": "Rojas Rojas Pedro Alberto",
    "tema": "CARACTERIZACIÓN GENÓMICA Y FUNCIONAL DE LOS CANALES IÓNICOS DE POTASIO ACTIVADOS POR CALCIO Y LOCALIZACIÓN POR ETAPA FENOLÓGICA DE PIMIENTO MORRÓN (Capsicum annuum L.)",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FA/TESIS DCA-ROJAS ROJAS.pdf",
    "comite": "Dr. Saúl Parra Terraza, Dr. Pedro Sánchez Peña, Dr. Sergio Hernández Verdugo, Dra. Janet Murbartián Aguilar",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "López Avendaño Jesús Enrique",
    "tema": "USO DE IMÁGENES SATELITALES PARA ESTIMAR LA EVAPOTRANSPIRACIÓN REAL REGIONAL EN EL VALLE DE CULIACÁN",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FA/TESIS DCA-LOPEZ AVENDAÑO.pdf",
    "comite": "Dr. Tomás Díaz Valdés, Dr. Julio CésarRodríguez, Dr. Watts Thorp Christopher, Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcaraz",
    "cohorte": "2013-2017",
    "anio": "2017"
  },
  {
    "alumno": "Linares Holguín Orlando Omer",
    "tema": "MOLECULAR E INFILTRACIÓN DE TRANSGENES EN POBLACIONES DE MAÍZ NATIVO DE SINALOA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FA/TESIS-DCA-Linares Holguín.pdf",
    "comite": "Peña, Dr. José A. López Valenzuela, Dr. Amalio Santacruz Varela, Dr. Leovigildo Córdova",
    "cohorte": "2013-2017",
    "anio": "2021"
  },
  {
    "alumno": "Martínez Gallardo José Ángel",
    "tema": "IDENTIFICACIÓN, DISTRIBUCIÓN Y RELACIÓN CON FACTORES EDÁFICOS DE ESPECIES DEL NEMATODO AGALLADOR (Meloidogyne SPP.) EN HORTALIZAS, EN SINALOA, MÉXICO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FA/TESIS DCA-MARTINEZ GALLARDO.pdf",
    "comite": "Dr. Tomás Díaz Valdés, Dr. Raúl Allende Molar Raúl; Dr. José Armando Carrillo Fasio, Dra. Teresa de Jesús Velázquez Alcaráz, Dr. José Benigno Valdez Torres",
    "cohorte": "2013-2017",
    "anio": "2017"
  },
  {
    "alumno": "Avendaño Meza Fabián",
    "tema": "MONITOREO DE LA RESISTENCIA A INSECTICIDAS EN POBLACIONES DE PICUDO DEL CHILE Anthonomus eugenii Cano EN CULIACÁN Y LA CRUZ DE ELOTA, SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FA/TESIS DCA-AVENDAÑO MEZA.pdf",
    "comite": "Dr. Saúl Parra Terrazas Saúl, Dr. José Luis Corrales Madrid, Dr. Pedro Sánchez Peña",
    "cohorte": "2013-2017",
    "anio": "2017"
  },
  {
    "alumno": "Salomón Montijo Vladimir",
    "tema": "FENOLOGÍA COMPARATIVA DE Stenocereus thurberi (engelm.) Buxb. (cactaceae) EN TRES AMBIENTES DEL NORTE DE SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FAVF/TESIS DCA-SALOMON MONTIJO.pdf",
    "comite": "Dr. Álvaro Reyes Olivas, Dr. Enrique Bustamante Ortega, Dr. Bardo Heleodoro Sánchez Cota, Dr. Gabriel Antonio Lugo García",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Hernández Espinal Luis Alberto",
    "tema": "ESTABLECIMIENTO DE MARCADORES LIGADOS A LA RESISTENCIA A GEMINIVIRUS EN CHILE (Capsicum annuum l.).",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-HERNANDEZ ESPINAL.pdf",
    "comite": "Dra. Idalia Enríquez Verdugo Idalia, Dr. José Antonio Garzón Tiznado, Dr. Víctor Manuel González Mendoza",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Aguilar Trejo Carlos Martín",
    "tema": "IDENTIFICACIÓN DE CERDOS TOLERANTES A PRRS A TRAVÉS DE SELECCIÓN GENÓMICA EN EL SUR DE SONORA, MÉXICO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-AGUILAR TREJO.pdf",
    "comite": "Dr. Javier Alonso Romo Rubio, Dr. Pablo Luna Nevarez, Dr. Thomas Milto, Dr. Enns Mark.",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Heras Sierra Teresa de Jesús",
    "tema": "INFLUENCIA DE LA ADICIÓN DE EXTRACTO DE TANINOS HIDROLIZABLES EN LA PRESENCIA DE Escherichia coli, EN LAS HECES DE BOVINOS EN ENGORDA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-HERAS SIERRA.pdf",
    "comite": "Dr. Rubén Barajas Cruz, Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dr. Javier Alonso Romo Rubio",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Castro del Campo Nohemí",
    "tema": "CARACTERIZACIÓN GENOTÍPICA Y PREVALENCIA DE Cryptosporidium parvum EN EXPLOTACIONES OVINAS Y SU DISEMINACIÓN EN AGUAS SUPERFICIALES, DE CULIACÁN, SINALOA.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-CASTRO DEL CAMPO.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Nohelia Castro del Campo, Dra. Idalia Enríquez Verdugo, Dr. Jesús José Portillo Loera",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Castro Tamayo Carlos Bell",
    "tema": "PROPORCIÓN DE ÁCIDO LINOLÉICO Y Α-LINOLÉNICO EN DIETAS DE CODORNIZ JAPONESA REPRODUCTORA Y SU EFECTO EN EL DESEMPEÑO PRODUCTIVO Y REPRODUCTIVO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-CASTRO TAMAYO.pdf",
    "comite": "Dr. Jesús José Portillo Loera, Dr. Francisco Gerardo Ríos Rincón, Dr. Germán Contreras Pérez, Dr. Ignacio Contreras Andrade, Dr. Ramón M. Molina Barrios",
    "cohorte": "2013-2017",
    "anio": "2019"
  },
  {
    "alumno": "Hernández Ramírez Carlos Víctor",
    "tema": "DETERMINACIÓN DE PREVALENCIA Y SEROVARIEDADES DE LAS ESPECIES DE Leptospira interrogans, EN HEMODONADORES Y PROBABLES FUENTES DE INFECCIÓN ANIMAL, EN SUS DOMICILIOS",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-HERNANDEZ RAMIREZ.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dr. Ignacio Osuna Ramírez",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Coronel Burgos Francisco",
    "tema": "EFECTO DE LA ADICIÓN DE ZEOLITAS EN DIETAS DE FINALIZACIÓN EN LA RESPUESTA PRODUCTIVA, CIERTOS METABOLITOS SANGUÍNEOS Y CARACTERÍSTICAS DE LA CANAL DE BECERROS HOLSTEIN",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2013-2017/FMVZ/TESIS DCA-CORONEL BURGOS.pdf",
    "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dra. Beatriz Isabel Castro Pérez, Dr. Germán Contreras Pérez, Dr. Francisco Gerardo Ríos Rincón",
    "cohorte": "2013-2017",
    "anio": "2017"
  },
  {
    "alumno": "Esquer Miranda Edgar",
    "tema": "COMPUESTOS BIOACTIVOS DE TRES MACROALGAS DEL SUR DE SONORA Y SU APLICACIÓN EN EL CONTROL DE ENFERMEDADES DE L. vannamei",
    "pdf": "",
    "comite": "Dr. Mario Nieves Soto, Dra. Martha Elisa Rivas Vega",
    "cohorte": "2013-2017",
    "anio": "2018"
  },
  {
    "alumno": "Castro Carvajal José Manuel",
    "tema": "HERBICIDAS EN MAÍZ Y FRIJOL, RESIDUALIDAD E IMPACTO SOBRE LA MICROBIOTA DEL SUELO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA-CASTRO CARVAJAL.pdf",
    "comite": "Dr. Raúl Parra Terrazas, Dr. Juan Eulogio Guerra Liera, Dr. Leopoldo Partida Ruvalcaba",
    "cohorte": "2012-2016",
    "anio": "2017"
  },
  {
    "alumno": "Cruz Ortega Jacobo Enrique",
    "tema": "ESTRATEGIAS BIORRACIONALES CONTRA PLAGAS DE ALMACÉN Y DE IMPACTO AGRÍCOLA EN SINALOA, MÉXICO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA- JACOBO CRUZ ORTEGA.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Leopoldo Partida Ruvalcaba, Dr. Juan Eulogio Guerra Liera, Dr. Pablo Humberto Caro Macías",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Medina López Raymundo",
    "tema": "EFECTO DE INSECTICIDAS BIORRACIONALES SOBRE Liriomyza sativae Blanchard Y SUS PARASITOIDES EN EL CULTIVO DE GARBANZO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA-MEDINA LOPEZ.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Rogelio Enrique Palacios Torres, Dr. Tomás Díaz Valdés.",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Oliva Ortiz Luz Del Carmen",
    "tema": "BIOCONTROL DE FUSARIUM POR ALGUNAS BACTERIAS Y HONGOS NATIVOS DE SINALOA EN PLANTAS DE GARBANZO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA-OLIVA ORTIZ.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Rogelio Sosa Pérez, Dr. Leopoldo Partida Ruvalcaba, Dr. Tomás Díaz Valdés",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Palacios Mondaca César Arturo",
    "tema": "EFICIENCIA DE RIEGO Y ELECTROMECÁNICA EN DOS SISTEMAS DE RIEGO POR ASPERSIÓN EN PAPA.",
    "pdf": "",
    "comite": "Dr. Tomás Díaz Valdés, Dr. Juan Plutarco Munguía López, Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcara",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Retes Manjarrez Jesús Enrique",
    "tema": "DETECCIÓN DE GENOTIPOS RESISTENTES A Pepper huasteco yellow vein virus EN GENOTÍPOS DE Capsicum annuum var. glabriusculum D.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA-RETES MANJARREZ.pdf",
    "comite": "Dr. Sergio Hernández Verdugo; Dr. José Antonio Garzón Tiznado, Dr. Antonio Pacheco Olvera, Dr. Saúl Parra Terrazas, Dra. Benedicte Pariaud",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Sánchez Portillo Juan Fernando",
    "tema": "DISTRIBUCIÓN DE ESPECIES DE Meloidogyne EN SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FAVF/TESIS DCA-SANCHEZ PORTILLO.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Manuel Mundo Ocampo, Dra. Irma de Ley Tandingan",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Sauceda Acosta Carlos Patricio",
    "tema": "EFECTO DE ESTRÉS HÍDRICO EN LOS ÍNDICES DE EFICIENCIA FISIOLÓGICA Y RENDIMIENTO DE TRIGO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FAVF/TESIS DCA-SAUCEDA ACOSTA CARLOS P.pdf",
    "comite": "Dr. Gabriel Antonio Lugo García, Dr. Eduardo Villaseñor Mir, Dr. Leopoldo Partida Ruvalcaba, Dr. Víctor Arturo González Hernández, Dr. Álvaro Reyes Oliva",
    "cohorte": "2012-2016",
    "anio": "2017"
  },
  {
    "alumno": "Valenzuela Escoboza Fernando Alberto",
    "tema": "IDENTIFICACIÓN, PLANTAS HOSPEDERAS Y PARASITISMO NATURAL DE Agromyzidae (insecta: díptera) DE INTERÉS AGRONÓMICO EN SINALOA",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FAVF/TESIS DCA-VALENZUELA ESCOBOZA.pdf",
    "comite": "Dr. Álvaro Reyes Olivas, Dr. Edgardo Cortez Mondaca, Dr. Rogelio Enrique Palacios Torres, Dr. Nestor Bautista Martínez",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Yáñez Juárez Moisés Gilberto",
    "tema": "MINERALOTERAPIA PARA EL CONTROL DE CENICILLA (Oidium sp.) EN PEPINO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA-YAÑEZ JUAREZ.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Dra. Emma Zavaleta Mejía, Dr. Leopoldo Partida Ruvalcaba, Dr. Tomás Días Valdés",
    "cohorte": "2012-2016",
    "anio": "2016"
  },
  {
    "alumno": "Félix Camacho Silvia Alicia",
    "tema": "/EFECTO QUE OCASIONA LA TIERRA DE DIATOMEA EN MOSCA BLANCA, PULGÓN Y ENFERMEDADES VIRALES EN CALABAZA Grey Zucchini, Cucurbita Pepo L.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2012-2016/FA/TESIS DCA-FÉLIX CAMACHO.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Pablo Humberto Caro Macías, Dr. Leopoldo Partida Ruvalcaba, Dr. Juan Eulogio Guerra Liera",
    "cohorte": "2012-2016",
    "anio": "2017"
  },
  {
    "alumno": "Ayala Tafoya Felipe",
    "tema": "PRODUCCIÓN DE PEPINO CON MALLAS SOMBRA DE COLORES",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2011-2015/FA/TESIS DCA-AYALA TAFOYA.pdf",
    "comite": "Dr. Leopoldo Partida Ruvalcaba, Dr. Francisco Higinio Ruiz Espinoza, Dra. Teresa de Jesús Velázquez, Dr. Tomás Díaz Valdés",
    "cohorte": "2011-2015",
    "anio": "2015"
  },
  {
    "alumno": "García Sañudo Juan Ángel",
    "tema": "FERTILIZACIÓN CON VERMICOMPOSTA EN MAÍZ CRIOLLO Y SU TASA DE DESCOMPOSICIÓN EN EL SUELO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2011-2015/FA/TESIS DCA-GARCIA SAÑUDO.pdf",
    "comite": "Dr. Pedro Sánchez Peña; Saúl Parra Terraza; Sergio Hernández Verdugo",
    "cohorte": "2011-2015",
    "anio": "2015"
  },
  {
    "alumno": "López España Ricardo Guillermo",
    "tema": "VARIACIÓN MORFOLÓGICA Y GENÉTICA E INTERACCIÓN GENOTIPO AMBIENTE DE POBLACIONES DE CHILE (Capsicum spp) SILVESTRE Y CRIOLLO DEL NOROESTE DE MÉXICO",
    "pdf": "",
    "comite": "Dr. Sergio Hernández Verdugo, Dr. Saúl Parra Terraza, Dr. Antonio Pacheco Olvera, Dr. Tomás Osuna Enciso",
    "cohorte": "2011-2015",
    "anio": "2015"
  },
  {
    "alumno": "Parra Delgado Juan Martín",
    "tema": "COMPOSTA, MINERALES PRIMARIOS AMORFOS Y MICROORGANISMOS EN LA PRODUCCIÓN Y CALIDAD DE TOMATE",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2011-2015/FA/TESIS DCA-PARRA DELGADO.pdf",
    "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Edgar Quero Gutiérrez, Dr. Leopoldo PartidaRuvalcaba, Dr. Tomás Díaz Valdés",
    "cohorte": "2011-2015",
    "anio": "2015"
  },
  {
    "alumno": "Valenzuela López Marino",
    "tema": "RESPUESTA DEL TRABAJO INJERTADO AL USO DE VERMICOMPOSTA Y MANEJO DE CONCENTRACIÓN NUTRIMENTAL EN SISTEMA HIDROPÓNICO",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2011-2015/FA/TESIS DCA-VALENZUELA LOPEZ.pdf",
    "comite": "Dr. Tomás Díaz Valdés, Dr. Leopoldo Partida Ruvalcaba, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Germán Bojórquez Bojórquez, Dr. Tomás Osuna Enciso",
    "cohorte": "2011-2015",
    "anio": "2015"
  },
  {
    "alumno": "López Pérez Héctor Manuel",
    "tema": "EXPRESIÓN DEL GEN esat-6 EN Mycobacterium smegmatis POR EFECTO DEL AGOTAMIENTO DE FÓSFORO INORGÁNICO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2011-2015/FMVZ/TESIS DCA-LOPEZ PEREZ.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dra. Sylvia Paz Díaz Camacho, Dr. Sixto Velarde Félix, Dr. Efrén Díaz Aparicio",
    "cohorte": "2011-2015",
    "anio": "2015"
  },
  {
    "alumno": "Rubio Robles Mario César",
    "tema": "POTENCIAL ZOONÓTICO DE GARRAPATAS CANINAS COMO VECTOR DE ENFERMEDADES EN SINALOA, MÉXICO.",
    "pdf": "https://cca.uas.edu.mx/images/posgrado/TesisDCA/COHORTE 2011-2015/FMVZ/TESIS DCA-RUBIO ROBLES.pdf",
    "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra Sylvia Paz Díaz Camacho, Dra. Idalia Enríquez Verdugo, Dr. Ignacio Osuna Ramírez",
    "cohorte": "2011-2015",
    "anio": "2016"
  }
];

  const tbody = document.querySelector("#tablaRepositorioDCA tbody");
  const searchInput = document.getElementById("busquedaRepositorioDCA");
  const cohorteFilter = document.getElementById("filtroCohorteRepositorioDCA");
  const paginationUl = document.getElementById("paginacionRepositorioDCA");

  if (!tbody || !searchInput || !cohorteFilter || !paginationUl) return;

  const cohorts = [...new Set(DATA_REPOSITORIO_DCA.map(d => d.cohorte))].filter(Boolean);
  cohorts.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = "Cohorte " + c;
    cohorteFilter.appendChild(opt);
  });

  let currentPage = 1;
  const limit = 10;
  let filteredData = [...DATA_REPOSITORIO_DCA];

  function renderTable() {
    tbody.innerHTML = "";
    const slice = filteredData.slice((currentPage - 1) * limit, currentPage * limit);
    if (!slice.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted">No se encontraron tesis para los filtros seleccionados.</td></tr>';
      return;
    }
    slice.forEach(d => {
      const tr = document.createElement("tr");
      const pdfCell = d.pdf 
        ? `<a href="${d.pdf}" target="_blank" rel="noopener noreferrer" class="btn-pdf-doc" title="Descargar / Ver Tesis en PDF">
             <svg width="26" height="30" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3 3C3 1.89543 3.89543 1 5 1H18L25 8V29C25 30.1046 24.1046 31 23 31H5C3.89543 31 3 30.1046 3 29V3Z" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
               <path d="M18 1V8H25" fill="#FEE2E2" stroke="#DC2626" stroke-width="2" stroke-linejoin="round"/>
               <rect x="2" y="14" width="22" height="12" rx="3" fill="#DC2626"/>
               <text x="13" y="23.2" font-family="'Inter', system-ui, sans-serif" font-weight="900" font-size="8.5" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">PDF</text>
             </svg>
           </a>`
        : `<span class="text-muted small">—</span>`;

      tr.innerHTML = `
        <td class="fw-bold text-dark">${d.alumno}</td>
        <td><div class="fw-semibold text-secondary-emphasis">${d.tema}</div></td>
        <td class="small text-muted">${d.comite}</td>
        <td class="text-center"><span class="badge bg-light text-dark border">${d.cohorte}</span></td>
        <td class="text-center">${pdfCell}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderPagination() {
    paginationUl.innerHTML = "";
    const totalPages = Math.ceil(filteredData.length / limit);
    if (totalPages <= 1) return;

    const addBtn = (text, targetPage, active = false, disabled = false) => {
      const li = document.createElement("li");
      li.className = "page-item " + (active ? "active " : "") + (disabled ? "disabled" : "");
      li.innerHTML = '<a class="page-link" href="#">' + text + '</a>';
      if (!disabled && !active) {
        li.onclick = (e) => {
          e.preventDefault();
          currentPage = targetPage;
          renderTable();
          renderPagination();
        };
      }
      paginationUl.appendChild(li);
    };

    addBtn("&laquo;", currentPage - 1, false, currentPage === 1);

    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    if (start > 1) {
      addBtn(1, 1);
      if (start > 2) addBtn("...", null, false, true);
    }

    for (let i = start; i <= end; i++) {
      addBtn(i, i, i === currentPage);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) addBtn("...", null, false, true);
      addBtn(totalPages, totalPages);
    }

    addBtn("&raquo;", currentPage + 1, false, currentPage === totalPages);
  }

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const c = cohorteFilter.value;
    filteredData = DATA_REPOSITORIO_DCA.filter(d => 
      (!c || c === 'todos' || d.cohorte === c) &&
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  searchInput.addEventListener("input", applyFilter);
  cohorteFilter.addEventListener("change", applyFilter);

  applyFilter();
});