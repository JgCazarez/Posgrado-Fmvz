document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Seguimiento de Egresados y Productividad en Congresos - Maestría en Ciencias Agropecuarias (MCA)
   */
  const DATA_SEGUIMIENTO_MCA = [
    {
        "autor": "ALMA CAROLINA CALDERON ALONSO",
        "titulo": "Efecto ambiental y densidad de carga en indicadores productivos y de bienestar del ganado bovino durante el transporte",
        "congreso": "2ndo Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "DANIEL EDUARDO ZATARAIN",
        "titulo": "Identificación morfológica y genética de piojos presentes en caprinos",
        "congreso": "CONGRESO NACIONAL DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS (CONAESCA 2020), (REPCA 10)",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "DULCE CAROLINA SANCHEZ GARCIA",
        "titulo": "ESTUDIO SEROLÓGICO Y BACTERIOLÓGICO DE Brucella spp. EN GANADO CAPRINO EN EL NORTE DEL ESTADO DE SINALOA",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado del Colegio de Ciencias Agropecuarias (CONAESCA), (REPCA 10)",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "DULCE CAROLINA SANCHEZ GARCIA",
        "titulo": "ESTUDIO SEROLÓGICO Y BACTERIOLÓGICO DE Brucella spp. EN GANADO CAPRINO EN EL NORTE DEL ESTADO DE SINALOA.",
        "congreso": "El 2do Congreso Nacional de Estudiantes de Posgrado del Colegio de Ciencias Agropecuarias (CONAESCA), (REPCA 10).",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "DULCE CAROLINA SANCHEZ GARCIA",
        "titulo": "Seroprevalencia de brucelosis en ganado caprino en hatos de Sinaloa, México",
        "congreso": "Congreso Internacional Abanico Veterinario",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "FREDY VASQUEZ SARABIA",
        "titulo": "caracterización e inclusión de bagazo Jasminum officinale en la alimentación de ovinos en comportamiento productivo",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias (CONAESCA)",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "GAMALIEL MOLINA GAMEZ",
        "titulo": "EVALUACIÓN DE LA CONDICIÓN DEL IMPLANTE ANABÓLICO EN EL SITIO DE APLICACIÓN, Y EL DESEMPEÑO PRODUCTIVO DE BOVINOS EN FINALIZACIÓN AL MOMENTO DEL SACRIFICIO",
        "congreso": "Repca 10 CONGRESO NACIONAL DE ESTUDIANTES DE POSGRADO EN CIENCIAS AGROPECUARIAS (CONAESCA 2020)",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JESSICA BERENICE ZUÑIGA VILLEGAS",
        "titulo": "EFECTO DE LA ADICIÓN DE ACEITES ESENCIALES SOBRE CORTES PRIMARIOS Y COMPOSICIÓN TISULAR DE OVINOS ALIMENTADOS CON DIETAS DE FINALIZACIÓN",
        "congreso": "Congreso nacional de estudiantes de posgrado en ciencias agropecuarias CONAESCA 2020",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JESUS FERNANDO FELIX INZUNZA",
        "titulo": "crecimiento de platula de pepino con luz LEDs",
        "congreso": "2 Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias (CONAESCA)",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "PATRICIA GUADALUPE ORTIZ CARRILLOTES",
        "titulo": "Iguana verde como reservorio de Salmonella spp",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias (CONAESCA 2020)",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "ROBERTO EDER VIDALES QUINTERO",
        "titulo": "Osteosintesis de fractura diafisaria de tibia en perros, utilizando clavo centromedular con affe",
        "congreso": "Congreso Internacional Abanico Veterinario, Agroforestal, Pesquero y Acuicola",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "YESENIA OSUNA RAMOS",
        "titulo": "Frecuencia de fracturas en perros traumatizados atendidos en el HVPE-UAS (2014-2019)",
        "congreso": "IV Congreso Internacional Abanico Veterinario, Agroforestal, Pesquero y Acuicola",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "YESENIA OSUNA RAMOS",
        "titulo": "Uso de aparato de fijación esquelética externa en osteosíntesis de fracturas el cuerpo del ilion en perros",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "LEONARDO ROMAN ROMAN",
        "titulo": "Producción de calabacita (Cucurbita pepo L.) bajo condiciones de invernadero",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Retrospectiva de la presencia de Haemonchus spp en ovinos de Culiacán, Sinaloa",
        "congreso": "IV Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Prevalencia de Ancylostoma caninum en perros domésticos (Canis lupus familiaris) de la ciudad de Culiacán, Sinaloa",
        "congreso": "IV Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación de bacterias gastrointestinales resistentes en un albergue de perros y gatos en Mazatlán, Sinaloa.",
        "congreso": "IV Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Congreso Internacional de Avances en Producción Animal ¿Salud, Bienestar y Productividad; el trinomio de la Producción Animal Sustentab",
        "congreso": "Congreso",
        "participacion": "Organizador del evento",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Retrospectiva de la presencia de Haemonchus spp en ovinos de Culiacán, Sinaloa",
        "congreso": "IV Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Presencia de garrapatas Amblyomma auricularium en Armadillo (Dasypus novemcinctus) del sur de Sinaloa.",
        "congreso": "IV Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Detección de Cryptosporidium spp. en caninos de una zona marginada en Culiacán, Sinaloa.",
        "congreso": "IV Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Caracterización de Mycoplasma haemocanis en caninos de Culiacán, Sinaloa, México.",
        "congreso": "IV Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Identificación de bacterias gastrointestinales resistentes en un albergue de perros y gatos en Mazatlán, Sinaloa",
        "congreso": "IV Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "LORENA MOLINA CARDENAS",
        "titulo": "Caracterización genotípica de Fusarium spp. causante de la malformación del mango en Sinaloa",
        "congreso": "2do Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "Colección, Caracterización agromorfológica, fisico- química y nutricional de maíces nativos de Sinaloa, México",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "NATALIA HEREDIA BURGOS",
        "titulo": "epidemiologia de babesia spp. en bovinos y garrapatas de Sinaloa y caracterización de sus especies",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "ABRIL CORONA CÁRDENAS",
        "titulo": "INFLUENCIA DE L AMICROBIOTA INTESTINAL SOBRE LA RESISTENCIA A LA COLONIZACION POR SALMONELLA Y PATRON DE EXCRECION EN CERDOS EXPUESTOS NATURALMENTE",
        "congreso": "2do Congreso Nacional de Estudiantes de Posgrado en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JUAN GAXIOLA FELIX",
        "titulo": "Flora y Vegetación de la planicie y arroyo El Aguaje de la Sierra de Barobampo, municipio de Ahome, Sinaloa, México",
        "congreso": "Congreso de la 9na",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Presencia de garrapatas Amblyomma auricularium en Armadillo (Dasypus novemcinctus) del sur de Sinaloa",
        "congreso": "IV Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2020"
    },
    {
        "autor": "DANIEL EDUARDO ZATARAIN",
        "titulo": "Identificación morfológica y frecuencia de piojos en cabras de Culiacan",
        "congreso": "Congreso Internaciona Abanico",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "DANIEL EDUARDO ZATARAIN",
        "titulo": "Identificación morfológica y genética de piojos presentes en caprinos",
        "congreso": "9na Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "DANIEL EDUARDO ZATARAIN",
        "titulo": "Identificación Taxonómica de piojos presentes en caprinos",
        "congreso": "1er Congreso Regional Noroeste de Investigación Agropecuario y Ciencias del Mar",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "DULCE CAROLINA SANCHEZ GARCIA",
        "titulo": "IDENTIFICACION DE ESPECIES DE Brucella spp. EN POBLACIÓN HUMANA, BOVINOS Y CAPRINOS EN CULIACÁN, SINALOA, MÉXICO",
        "congreso": "Congreso de la 9na Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "FREDY VASQUEZ SARABIA",
        "titulo": "Influencia de la adición de clorhidrato de zilpaterol y difosfato de tiamina en el desempeño productivo y energética de la dieta de ovinos de pelo en finalización en el trópico seco¿.",
        "congreso": "Jornada Sinaloense del Conocimiento: &quot;BIENESTAR Y VALORES ÉTICOS PARA UN CAMBIO SOCIAL&quot;",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "GAMALIEL MOLINA GAMEZ",
        "titulo": "EVALUACIÓN DE LA CONDICIÓN DEL IMPLANTE HORMONAL, DESEMPEÑO PRODUCTIVO Y CARACTERÍSTICAS DE CANAL DE BOVINOS EN SINALOA",
        "congreso": "9na Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "GAMALIEL MOLINA GAMEZ",
        "titulo": "Evaluación de la condición del implante anabólico en la respuesta productiva de bovinos en Sinaloa",
        "congreso": "JORNADA SINALOENSE DEL CONOCIMIENTO &quot;BIENESTAR Y VALORES ÉTICOS PARA UN CAMBIO SOCIAL&quot;",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "JESSICA BERENICE ZUÑIGA VILLEGAS",
        "titulo": "EFECTO DE LA ADICIÓN DE ACEITES ESENCIALES SOBRE CARACTERÍSTICAS DE LA CANAL Y CORTES PRIMARIOS DE OVINOS ALIMENTADOS CON DIETAS DE FINALIZACIÓN",
        "congreso": "Congreso de la 9na Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias estudiantes de posgrados en ciencias agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "NIEVES BRICEIDA PEREZ MEZA",
        "titulo": "EXTRACCIÓN NUTRIMENTAL EN HOJA, TALLO Y FRUTO DE MANGO ATAULFO Y MANILA CULTIVADO EN SAN MARCOS GUERRERO",
        "congreso": "SOMECH 2019",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "PATRICIA GUADALUPE ORTIZ CARRILLOTES",
        "titulo": "Cistitis Idiopática Felina, reporte de un caso clínico",
        "congreso": "Jornada Sinaloense del Conocimiento",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "GEOREFERENCIACIÓN DE LA GARRAPATA Rhipicephalus microplus DE BOVINOS EN EL ESTADO DE SINALOA",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "LEONARDO ROMAN ROMAN",
        "titulo": "PARTENOCARPIA, FITORREGULADORES SINTÉTICOS Y VERMICOMPOSTA, EN EL CRECIMIENTO Y RENDIMIENTO DE CALABACITA DE INVERNADERO",
        "congreso": "9na Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "DETERMINACIÓN DE Mycoplasma haemocanis EN SANGRE DE CANINOS DE CULIACÁN, SINALOA, MÉXICO.",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "GEOREFERENCIACIÓN DE LA GARRAPATA Rhipicephalus microplus DE SINALOA",
        "congreso": "Primer congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Frecuencia e identificación morfológica de garrapatas en perros de Culiacán, Sinaloa",
        "congreso": "III Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Detección de Cryptosporidium parvum en herbívoros de zoológico",
        "congreso": "III Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Análisis preliminar de parásitos gastrointestinales en aves en cautiverio en uma ¿el apomito¿ en culiacán, Sinaloa",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "PREVALENCIA DE Haemonchus contortus EN CORDEROS EN DOS ÉPOCAS DEL AÑO EN EL MUNICIPIO DE CULIACÁN,",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "DETERMINACIÓN DE Mycoplasma haemocanis EN SANGRE DE CANINOS DE CULIACÁN, SINALOA, MÉXICO",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "DETECCIÓN DE Babesia spp EN PEQUEÑOS RUMIANTES EN CULIACÁN, SINALOA.",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Análisis preliminar de parásitos gastrointestinales en aves en cautiverio en uma ¿el apomito¿ en culiacán, Sinaloa",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "NORMA DELIA ZAZUETA TORRES",
        "titulo": "CALIDAD DE LUZ EMITIDA POR LÁMPARAS LEDs SOBRE EL CRECIMIENTO DE PLÁNTULAS DE PEPINO",
        "congreso": "XXII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "TOMÁS AARÓN VEGA GUTIÉRREZ",
        "titulo": "CARACTERIZACIÓN MOLECULAR Y VIRULENCIA DE POBLACIONES DE Fusarium falciforme (FSSC 3+4) y Fusarium oxysporum f. sp. lycopersici DE CULTIVOS DE TOMATE (Solanum lycopersicum L.) EN EL ESTADO DE SINALOA",
        "congreso": "Congreso de la 9na",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Prevalencia de Haemonchus contortus en época de verano y otoño en el municipio de Culiacán, Sinaloa.",
        "congreso": "Primer congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "LORENA MOLINA CARDENAS",
        "titulo": "Caracterización genotìpica de Fusarium spp. causante de la malformación del mango (Mangifera indica L.) en Sinaloa",
        "congreso": "Congreso de la",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "GUILLERMO GOMEZ GONZALEZ",
        "titulo": "NIVELES DE AGALLAMIENTO DE RAÍCES DE PEPINO POR Meloidogyne spp., EN SINALOA.",
        "congreso": "XXI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Prevalencia de Haemonchus contortus y factores de riesgo asociados a corderos del municipio de Culiacán, Sinaloa.",
        "congreso": "9na Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "Caracterización Agro- morfológica de Poblaciones de Maíces Nativos En Concordia Sinaloa, México",
        "congreso": "Congreso de la 9na",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación morfológica de piojos presentes en caprinos.",
        "congreso": "Primer congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Comportamiento agonista de bovinos productores de carne en finalizacion intensiva en ambiente calido",
        "congreso": "Jornadas de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Georeferenciación de la garrapata R. microplus en Sinaloa.",
        "congreso": "Primer congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "ABRIL CORONA CÁRDENAS",
        "titulo": "INFLUENCIA DE LA MICROBIOTA INTESTINAL SOBRE LA RESISTENCIA A LA COLONIZACION POR SALMONELLA Y PATRON DE ESCRECION EN CERDOS EXPUESTOS NATURALMENTE",
        "congreso": "JORNADA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "ABRIL CORONA CÁRDENAS",
        "titulo": "Evaluación de la patogenicidad de Salmonella enterica enterica in vitro",
        "congreso": "Novena Reunión de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "IDENTIFICACIÓN MORFOLÓGICA DE HEMOPARÁSITOS EN EQUINOS DE CULIACÁN SINALOA.",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "IDENTIFICACIÓN MORFOLÓGICA DE ANAPLASMA spp. EN VENADOS COLA BLANCA (Odocoileus virginianus) EN CAUTIVERIO, EN SINALOA",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "PREVALENCIA DE Haemonchus contortus EN CORDEROS EN DOS ÉPOCAS DEL AÑO EN EL MUNICIPIO DE CULIACÁN, SINALOA.",
        "congreso": "XI CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2019"
    },
    {
        "autor": "DANIEL EDUARDO ZATARAIN",
        "titulo": "IDENTIFICACIÓN MORFOLÓGICA DE PIOJOS DE CABRAS EN CULIACÁN, SINALOA",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "DULCE CAROLINA SANCHEZ GARCIA",
        "titulo": "ESTUDIO SEROLÓGICO Y BACTERIOLÓGICO DE Brucella spp. EN GANADO CAPRINO DEL MUNICIPIO DE AHOME, SINALOA",
        "congreso": "Semana Nacional de Ciencia y Tecnología Ciencia y Tecnología. Desastres Naturales: Terremotos y Huracanes",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "DULCE CAROLINA SANCHEZ GARCIA",
        "titulo": "Prevalencia de Taenia solium en Sinaloa, prueba piloto hacia la construcción de un plan nacional de intervención",
        "congreso": "Congreso Nacional de Parasitología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "GAMALIEL MOLINA GAMEZ",
        "titulo": "Influencia de la combinación de urea de lenta liberación y urea convencional en los cortes primarios y composición tisular de ovinos de pelo alimentados con dietas de finalización",
        "congreso": "XXV Semana Nacional de la Ciencia y Tecnología Nacional de Ciencia y Tecnología Ciencia y tecnología, (Desastres Naturales: Terremotos y Huracanes)",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JUAN MANUEL ROMO VALDEZ",
        "titulo": "MÉTODOS DE SUPLEMENTACIÓN DE ZINC ORGÁNICO EN EL DESEMPEÑO PRODUCTIVO DE CERDOS EN INICIACIÓN, BAJO CONDICIONES DE ESTRÉS CALÓRICO",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JUAN MANUEL ROMO VALDEZ",
        "titulo": "MÉTODO DE SUPLEMENTACIÓN DE ZINC ORGÁNICO Y RESPUESTA PRODUCTIVA DE CERDOS EN INICIACIÓN EN CLIMA CÁLIDO",
        "congreso": "III CONGRESO DE",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "RICARDO CASTRO LOPEZ",
        "titulo": "EFECTO DE FLUENSULFONE, FLUOPYRAM Y ABAMECTINA EN LA MARCHITEZ DE TOMATE EN SUELO INFESTADO POR Meloidogyne spp.",
        "congreso": "XXI CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CESAR NOE BADILLA MEDINA",
        "titulo": "Identificación morfologica de piojos de cabras en Culiacán Sinaloa",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CESAR NOE BADILLA MEDINA",
        "titulo": "Identificación de Anaplasma marginale en Rhipicephalus microplus en Culiacán Sinaloa",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JUAN GAXIOLA FELIX",
        "titulo": "Flora vascular de la planicie y arroyo &quot;El Aguaje&quot; de la Sierra de Barobampo, Ahome, Sinaloa.",
        "congreso": "6to. Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JUAN GAXIOLA FELIX",
        "titulo": "Identificación morfológica de Erysiphales en maleza en el norte de Sinaloa.",
        "congreso": "XLV Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "QUINTÍN ARMANDO AYALA ARMENTA",
        "titulo": "Caracterización y patogenicidad de hongos asociados con la marchitez del tomatillo (Physalis ixocarpa) en Sinaloa, Mexico",
        "congreso": "XX Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "REPLANTEAMIENTO DEL CICLO DE VIDA DE LOS CAMARONES COSTEROS DEL PACÍFICO MEXICANO",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "IDENTIFICACIÓN DE Cryptosporidium spp EN AGUAS DE RIEGO",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Comportamiento agonista de bovinos productores de carne en finalización intensiva en ambiente cálido",
        "congreso": "XXVIII Reunión",
        "participacion": "Conferencia magistral",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Valoración de indicadores de bienestar animal en bovinos productores de carne en finalizacion intensiva",
        "congreso": "la 8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Valoración de indicadores de bienestar animal en bovinos productores de carne en finalizacion intensiva durante verano",
        "congreso": "XLV Reunion",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "¿COMPORTAMIENTO AGONISTA DE BOVINOS PRODUCTORES DE CARNE EN FINALIZACIÓN INTENSIVA EN AMBIENTE CÁLIDO¿",
        "congreso": "Semana Nacional de Ciencia y Tecnología",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "NATALIA HEREDIA BURGOS",
        "titulo": "Deteccion de Babesia spp en Rhipicephalus sanguineus de caninos en Culiacan, Sinaloa.",
        "congreso": "Congreso Nacional",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "NATALIA HEREDIA BURGOS",
        "titulo": "Babesiosis Humana Revisión de Literatura",
        "congreso": "XXV Semana Nacional de la Ciencia y Tecnología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "NATALIA HEREDIA BURGOS",
        "titulo": "Deteccion de Babesia spp en Rhipicephalus sanguineus de caninos en Culiacan, Sinaloa.",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA MIREYA ROMO VALDEZ",
        "titulo": "RESPUESTA PRODUCTIVA DE CERDOS EN CRECIMIENTO- FINALIZACIÓN A LA SUPLEMENTACIÓN CON EXTRACTO DE TANINOS HIDROLIZABLES Y ZINC ORGÁNICO DURANTE VERANO-OTOÑO",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA MIREYA ROMO VALDEZ",
        "titulo": "RESPUESTA PRODUCTIVA DE CERDOS EN CRECIMIENTO- FINALIZACIÓN A LA SUPLEMENTACIÓN CON EXTRACTO DE TANINOS HIDROLIZABLES Y ZINC ORGÁNICO",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA MIREYA ROMO VALDEZ",
        "titulo": "Caracterízación de canales bovinas finalizadas en corral de engorda con base al PROY-NOM-004- SAGARPA-2017",
        "congreso": "Jornadas de Ciencia y",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "Caracterización agromorfologica in situ de poblaciones de maíces nativos en Concordia, Sinaloa",
        "congreso": "6 to Encuentro de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "COLECCIÓN Y CARACTERIZACIÓN AGROMORGOLÓGICA DE MAÍCES NATIVOS DEL ESTADO DE SINALOA",
        "congreso": "II Plant Breeding",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "Caracterización agro- morfológica in situ de poblaciones de maíces nativos en Concordia, Sinaloa, México",
        "congreso": "XXI Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "Variacion Agromorfologica in situ de Poblaciones de Maíces Nativos en Concordia Sinaloa",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ILSE ANAHI MEDINA ARMENTA",
        "titulo": "Efecto del tipo sombra sobre las características de calidad de la carne bovina producida en finalización intensiva",
        "congreso": "Jornadas de ciencia y",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ILSE ANAHI MEDINA ARMENTA",
        "titulo": "De la mitigación del estrés calórico en los indicadores de bienestar animal en bovinos productores de carne",
        "congreso": "Jornadas de ciencia y",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ILSE ANAHI MEDINA ARMENTA",
        "titulo": "Influencia del tipo de sombra sobre el bienestar, respuesta productiva y características de la canal de bovinos en finalización intensivo en trópico seco",
        "congreso": "Reunión de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "RAUL HIPOLITO SAUCEDA ACOSTA",
        "titulo": "EVALUACION DE GARBANZO BLANCO EN EL NORTE DE SINALOA",
        "congreso": "XXI CONGRESO",
        "participacion": "Presentación de artículo en extenso",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "LORENA MOLINA CARDENAS",
        "titulo": "IDENTIFICACIÓN Y CARACTERIZACIÓN GENOTÍPICA DE ESPECIES DE Fusarium CAUSANTES DE LA PVF EN MANGO EN SINALOA",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "DIANA ZULEIKA VELAZQUEZ VALDEZ",
        "titulo": "Carcinoma de células escamosas subungueal en un cánido de raza rottweiler",
        "congreso": "XXVII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "DETECCIÓN DE Babesia spp en Rhipicephalus microplus de caninos en Culiacán, Sinaloa.",
        "congreso": "CONAPAR XXII",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Identificación de Anaplasma marginale en garrapatas Rhipicephalus microplus en Culiacán, Sinaloa.",
        "congreso": "Reunión Nacional de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Identificación morfológica de piojos de cabras en Culiacán, Sinaloa",
        "congreso": "Reunión Nacional de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Identificación de Cryptoporidium spp en aguas de riego.",
        "congreso": "Reunión Nacional de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "IDENTIFICACIÓN DE CRYPTOSPORIDIUM SPP EN AGUAS DE RIEGO",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "IDENTIFICACIÓN MORFOLÓGICA DE PIOJOS DE CABRAS EN CULIACÁN, SINALOA.",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Detección de Babesia spp en Rhipicephalus sanguineus de caninos en Culiacán, Sinaloa.",
        "congreso": "Congreso Nacional",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Congreso Internacional de Avances en Producción Animal ¿Salud, Bienestar y Productividad; el trinomio de la Producción Animal Sustentab",
        "congreso": "Congreso",
        "participacion": "Organizador del evento",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "CARACTERIZACIÓN DE Anaplasma marginale EN GARRAPATAS Rhipicephalus microplus¿",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Efecto de la fermentación de heces porcinas en la inactivación de huevos de Ascaris suum como indicador de eliminación de patógenos.",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación de Anaplasma marginale en Rhipicephalus microplus en Culiacán, Sinaloa.",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación morfológica de piojos de cabras en Culiacán, Sinaloa.",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación de Cryptosporidium spp en aguas de riego.",
        "congreso": "LIV Reunión Nacional de INVESTIGACIÓN PECUARIA",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "WALTER ARTURO RUBIO ARAGON",
        "titulo": "BÚSQUEDA DE RESISTENCIA A Anthonomus eugenii EN GENOTIPOS SILVESTRES Y CRIOLLOS DE Capsicum spp.",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "MIGUEL ANTONIO CARDENAS CONTRERAS",
        "titulo": "ACTIVIDAD INHIBITORIA DEL EXTRACTO DE AJO (Allium sativum) CONTRA Salmonella spp AISLADA DE HECES DE GALLINAS EN PRODUCCIÓN DE HUEVO",
        "congreso": "REUNIÓN NACIONAL",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "MIGUEL ANTONIO CARDENAS CONTRERAS",
        "titulo": "Efecto del uso de sombra en la engorda de corderos Pelibuey estresados por calor",
        "congreso": "Reunión",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "VALORACION DE INDICADORES DE BIENESTAR ANIMAL EN BOVINOS PRODUCTORES DE CARNE EN FINALIZACION INTENSIVA DURANTE VERANO",
        "congreso": "XLV REUNION",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Comportamiento Agonista en Bovinos Productores de Carne en Finalizacion Intensiva en Ambiente Calido",
        "congreso": "XVIII Reunion",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Valoracion de Indicadores de Bienestar Animal en Bovinos Productores de Carne en Finalizacion Intensiva Durante Verano",
        "congreso": "8va Reunion de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2018"
    },
    {
        "autor": "PEDRO IVAN LOPEZ CUEN",
        "titulo": "Silicio como alternativa para mitigar el estrés salino en cultivares de pepino",
        "congreso": "XX Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "Indicadores de Bienestar Animal en Bovinos Productores de Carne en Finalizacion Intensiva",
        "congreso": "XXIV Semana Nacional de la Ciencia y Tecnología",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JUAN MANUEL ROMO VALDEZ",
        "titulo": "EFECTO DEL CONSUMO DE ZINC ORGÁNICO EN LA RESPUESTA PRODUCTIVA DE LA CERDA Y SU CAMADA",
        "congreso": "II CONGRESO DE",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JUAN MANUEL ROMO VALDEZ",
        "titulo": "EFECTO DEL CONSUMO DE ZINC ORGÁNICO EN LA RESPUESTA PRODUCTIVA DE LA CERDA Y SU CAMADA",
        "congreso": "ENCUENTRO DE",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "MARIA ALEJANDRA QUINTERO MORALES",
        "titulo": "Diseño, modelación y cuantificación de un escenario sostenible de cobertura de manglar para el Estado de Sinaloa mediante Sistema de Información Geográfica",
        "congreso": "XXV Semana Nacional de la Ciencia y Tecnología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "AZAREEL ANGULO CASTRO",
        "titulo": "CRECIMIENTO VEGETATIVO Y CALIDAD DE FRUTOS DE PIMIENTO BELL PEPPER INOCULADO CON HONGOS MICORRÍZICOS ARBUSCULARES Y RIZOBACTERIAS PROMOTORAS DEL CRECIMIENTO VEGETAL EN SISTEMA HIDROPÓNICO",
        "congreso": "14a CONVENCIÓN",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "KARLA HILDELIZA LEYVA MEDINA",
        "titulo": "EFECTO DE LA SUPLEMENTACIÓN CON VITAMINA D3 EN OVINOS EN FINALIZACIÓN ALIMENTADOS CON DIETAS CON ZILPATEROL EN LA RESPUESTA PRODUCTIVA, CARACTERÍSTICAS DE CANAL Y CALIDAD DE CARNE",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ISIDRO MARQUEZ ZEQUERA",
        "titulo": "Patogenicidad de Phytophthora capsici y Phytophthora nicotianae en plantas de tomate (Solanum lycoperisicum) y Chile (Capsicum annum) en Culiacán, Sinaloa",
        "congreso": "XIX Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ISIDRO MARQUEZ ZEQUERA",
        "titulo": "Sensibilidad in vitro de Clavibacter michiganensis subsp. michiganensis a diferentes concentraciones de cloro",
        "congreso": "XIX Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ISIDRO MARQUEZ ZEQUERA",
        "titulo": "Sensibilidad in vitro de agroquimicos, biológicos y extractos vegetales a una cepa de Clavibacter michiganensis subsp. michiganensis",
        "congreso": "XIX Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "Identifiación y distribución del nematodo agallador (Meloidogyne spp.) en el cultivo de tomate en Sinaloa, México",
        "congreso": "7a Reunión de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "TERESA DE JESUS HERAS SIERRA",
        "titulo": "influencia de extracto de taninos hidrolizables y condensados sobre el crecimiento de E. coli en heces de bovinos en engorda",
        "congreso": "Reunion de",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "QUINTÍN ARMANDO AYALA ARMENTA",
        "titulo": "Secadera en tomatillo (Physalis ixocarpa Brot.) en Sinaloa.",
        "congreso": "XX Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "PRESENCIA Y ABUNDANCIA DE LAS ESPECIES DE MYSIDÁCEOS, EN LA ZONA ADYACENTE A LA BOCA DE BARRÓN, MAZATLÁN, SINALOA",
        "congreso": "5to. Encuentro de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "COMPOSICIÓN DEL ZOOPLANCTON ACOMPAÑANTE DE LAS POSTLARVAS DE CAMARONES EN LA ZONA LITORAL ADYACENTE A LA BOCA DE BARRÓN, MAZATLÁN, SINALOA",
        "congreso": "5to. Encuentro de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ABRIL CORONA CÁRDENAS",
        "titulo": "CARACTERIZACION DE PERFILES DE RESISTENCIA ANTIMICROBIANA EN CEPAS DE Salmonella spp DE FAUNA EN CAUTIVERIO",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JEIDY VALERIA SOTO LÓPEZ",
        "titulo": "EFECTO DE LA SUPLEMENTACIÓN CON VITAMINA D3 EN OVINOS ALIMENTADOS CON DIETAS CON ZILPATEROL EN LA CALIDAD DE LA CARNE",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "PREVALENCIA DE Cryptosporidium spp EN CORDEROS DE CULIACAN",
        "congreso": "QUINTO ENCUENTRO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "identificacion de Cryptosporidium spp en aguas superficiales",
        "congreso": "SEMANA NACIONAL",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "ESTUDIO PRELIMINAR DE cryptosporidium spp EN CORDEROS Y SU ASOCIACION A SEXO, EDAD Y SISTEMA DE PRODUCCION",
        "congreso": "congreso nacional de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "NATALIA HEREDIA BURGOS",
        "titulo": "Deteccion de Babesia spp en Rhipicephalus sanguineus de caninos en Culiacan, Sinaloa.",
        "congreso": "7a Reunión de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ANA MIREYA ROMO VALDEZ",
        "titulo": "RESPUESTA PRODUCTIVA A LA SUPLEMENTACIÓN CON EXTRACTO DE TANINOS HIDROLIZABLES Y METIONINA DE ZINC DE CERDOS EN CRECIMIENTO- FINALIZACIÓN, CRIADOS EN CLIMA SUBTROPICAL.",
        "congreso": "Cuarto Encuentro de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ILSE ANAHI MEDINA ARMENTA",
        "titulo": "Indicadores de bienestar animal durante el proceso de matanza de bovinos en un establecimiento Tipo Inspección Federal",
        "congreso": "Semana Nacional de Ciencia y Tecnología",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CARLOS EDUARDO ORNELAS RAMÍREZ",
        "titulo": "Estimación de Variación Morfológica de Poblaciones de Tres Especies de Chiles (Capsicum annuum L., Capsicum chinense Jacq., Capsicum frutescens) de Traspatio-jardín y Criollos de los Estados de Sinaloa, Nayarit, Oaxaca, Tabasco y Yucatán.",
        "congreso": "7ma Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "RAUL HIPOLITO SAUCEDA ACOSTA",
        "titulo": "EVALUACION DE GENOTIPOS DE GARBANZO BLANCO EN EL VALLE DEL FUERTE",
        "congreso": "XX CONGRESO",
        "participacion": "Presentación de artículo en extenso",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "MARTIN ABRAHAM TIRADO RAMIREZ",
        "titulo": "EFECTO in vitro DE ACUERDO FUNGICIDAS QUÍMICOS SOBRE Fusarium oxysporum f. sp. cepae",
        "congreso": "XX CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "MARTIN ABRAHAM TIRADO RAMIREZ",
        "titulo": "Potencial patogenico de Fusarium oxysporum f. sp. cepae en la pudrición basal en cebolla",
        "congreso": "7a Reunión de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "TOMÁS AARÓN VEGA GUTIÉRREZ",
        "titulo": "Caracterización morfológica de aislamientos de Fusarium oxysporum en el cultivo de tomate (Solanum lycopersicum L.) en el estado de Sinaloa.",
        "congreso": "Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "TOMÁS AARÓN VEGA GUTIÉRREZ",
        "titulo": "Analisis de la sensibilidad in vitro de Fusarium oxysporum f. sp. lycopersici frente a diferentes fungicidas comerciales",
        "congreso": "Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "NUTRICION EQUILIBRADA EN PLANTULAS DE HORTALIZAS EN EL NORTE DE SINALOA",
        "congreso": "XXIV SEMANA NACIONAL DE CIENCIA Y TECNOLOGÍA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "NUTRICION EQUILIBRADA DE PLANTULAS DE HORTALIZAS EN EL NORTE DE SINALOA",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "ESTIMATION OF MORPHOLOGICAL VARIATION OF POPULATION OF THREE SPECIESOF PEPPER",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "MORPHOLOGICAL VARIATION AND IN GERMINATION OF POPULATION IN WILD CHILE",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "ECOLOGICAL SERVICES OF THE TREE TAILED BAT",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "SUPRESIVIDAD DEL SUELO EN LA REPRODCCIÓN Y POTENCIAL PATÓGENO DE FUSARIUM",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "PARÁMETROS REPRODUCTIVO DE TIBURONES PELÁGICOS EN EL SUR DEL GOLFO DE CALIFORNIA",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "INFLUENCIA DE LA ADICIÓN DE EXTRACTOS DE PLANTAS EN LA CARGA POR haemonchus sp. EN BECERROS AL INICIO DE LA ENGORDA",
        "congreso": "7MA REUNIÓN DE ESTUDIANTES DE POSGRADOS EN CIENCIAS AGROPECUARIAS",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "NORMA DELIA ZAZUETA TORRES",
        "titulo": "CALIDAD DE LUZ EN EL CRECIMIENTO DE PLANTAS DE PEPINO Y SEVERIDAD DE LA CENICILLA (Oidium sp.)",
        "congreso": "XX Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "BRISEYDA JATZEL FELIX LEYVA",
        "titulo": "Efecto del estiércol de diferentes especie animal en las características químicas de lombricomposta y el porcentaje de pc en la harina de lombriz (Eisenia foetida)",
        "congreso": "Semana Nacional de Ciencia y Tecnología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "BRISEYDA JATZEL FELIX LEYVA",
        "titulo": "PREVALENCIA, CARACTERIZACIÓN E IMPACTO ECONÓMICO DE CONTUSIONES EN LA CANAL DE BOVINOS SACRIFICADOS EN RASTRO TIPO INSPECCIÓN FEDERAL EN CULIACÁN, SINALOA",
        "congreso": "8va Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Serological detecction of Ehrlichiae canis in canines from Culiacan, Mexico",
        "congreso": "XVIII INTERNATIONAL CONGRESS OF THE CO-OPERATION AND SOLIDARITY HIGIENE TOWAR ONE HEALT",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Identification of Anaplasma marginale, and calves from Culiacán, México",
        "congreso": "XVIII INTERNATIONAL CONGRESS OF THE CO-OPERATION AND SOLIDARITY HIGIENE TOWAR ONE HEALT",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Homology Among Rhipicephalus microplus tick populations",
        "congreso": "XVIII INTERNATIONAL CONGRESS OF THE CO-OPERATION AND SOLIDARITY HIGIENE TOWAR ONE HEALT",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Prevalence of Cryptosporidium spp in lambs of the municipality of culiacan, mexico",
        "congreso": "XVIII INTERNATIONAL CONGRESS OF THE CO-OPERATION AND SOLIDARITY HIGIENE TOWAR ONE HEALT",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "CLAUDIA LEONOR BARRAZA TIZOC",
        "titulo": "Rickettsia rickettsii in ticks of domestic dogs of Culiacan, Sinaloa, Mexico.",
        "congreso": "26th International Conference of the World Association for the Advancement of Veterinary Parasitology WAAVP 2017",
        "participacion": "Póster",
        "pais": "MALAYS IA",
        "anio": "2017"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Inactivación de huevos de Ascaris suum mediante anaerobiosis.",
        "congreso": "XXIV Semana Nacional de Ciencia y Tecnología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "VALORACION DE INDICADORES DE BIENESTAR ANIMAL EN BOVINOS PRODUCTORES DE CARNE EN FINALIZACION INTENSIVA",
        "congreso": "7a REUNION DE",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JUAN MANUEL ROMO VALDEZ",
        "titulo": "EFECTO DE LA ADICIÓN DE OXITOCINA AL SEMEN EN LA INFERTILIDAD ESTACIONAL DE LAS CERDAS",
        "congreso": "II CONGRESO DE",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2017"
    },
    {
        "autor": "JUAN CARLOS QUINTERO TAPIA",
        "titulo": "EFECTO DEL TIEMPO SOBRE LA CALIDAD DE ESPERMATOZOIDES OBTENIDOS A PARTIR DE LA PORCION CAUDAL DE EPIDÍDIMOS DE OVINOS",
        "congreso": "23° Semana Nacional de Ciencia y Tecnología Ciencia y Tecnologia",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JUAN CARLOS QUINTERO TAPIA",
        "titulo": "Efecto del Tiempo y Condiciones Sobre la Calidad de Espermatozoides Obtenidos a Partir de la Porción Caudal de Epidídimos de Bovinos",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias Estudiantes de Posgrado de Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MARLIE GUADALUPE BELTRAN MINJAREZ",
        "titulo": "Conservación de la calidad de la carne mediante empaques convencionales e inteligentes",
        "congreso": "XXIII SEMANA NACIONAL DE CIENCIA Y TECNOLOGÍA LA CIENCIA Y LA TECNOLOGÍA Nacional de Ciencia y Tecnología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MELISSA BELEM CORONA PALAZUELOS",
        "titulo": "Influencia de la adición de extractos de plantas en la carga por Haemonchus sp y Cooperia sp en becerros al inicio de la engorda",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "ANA CITLALY ZAZUETA GUTIERREZ",
        "titulo": "VALORACION DE INDICADORES DE BIENESTAR ANIMAL EN BOVINOS PRODUCTORES DE CARNE EN FINALIZACION INTENSIVA",
        "congreso": "XXIII SEMANA NACIONAL DE CIENCIA Y TECNOLOGÍA LA CIENCIA Y LA TECNOLOGÍA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MELISSA BELEM CORONA PALAZUELOS",
        "titulo": "Reconocimiento",
        "congreso": "Curso sobre",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "PEDRO IVAN LOPEZ CUEN",
        "titulo": "Dinámica del carbono orgánico del suelo en un sistema de producción convencional de trigo",
        "congreso": "XIX congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JUAN MANUEL ROMO VALDEZ",
        "titulo": "EFECTO DEL CONSUMO DE ALIMENTO ADICIONADO CON METIONINA DE ZINC EN LA RESPUESTA REPRODUCTIVA DE LA CERDA",
        "congreso": "6ta. Reunión de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "VLADIMIR MARTNEZ CRUZ",
        "titulo": "EFECTO DE LA PROPORCIÓN DE ÁCIDOS GRASOS ESENCIALES EN EL ALIMENTO SOBRE LA CALIDAD SEMINAL DE GALLOS JÓVENES",
        "congreso": "Sexta reunión de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MAYRA GISELL LOPEZ SALAZAR",
        "titulo": "IDENTIFICACIÓN FENOTÍPICA y GENOTÍPICA DE BIOPELÍCULAS EN CEPAS DE SALMONELLA DE FAUNASILVESTRE EN CAUTIVERIO EN SINALOA",
        "congreso": "XXV Congreso Nacional de Patología Veterinaria",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MAYRA GISELL LOPEZ SALAZAR",
        "titulo": "IDENTIFICACIÓN DE GENES DE PATOGENICIDAD EN CEPAS DE Salmonella enterica enterica AISLADAS DE FAUNA SILVESTRE EN CAUTIVERIO EN SINALOA",
        "congreso": "6ta. Reunión de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "REBECA CASTRO FLORES",
        "titulo": "Identificación de Chlamydia abortus en rumiantes de Sinaloa",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "CESAR NOE BADILLA MEDINA",
        "titulo": "Caracterizacion de las especies de Anaplasma que infectan a ovinos y caprinos",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "AZAREEL ANGULO CASTRO",
        "titulo": "Crecimiento y eficiencia fotosintetica en plántulas de chile bell pepper Capsicum annuum L. Inoculadas con rizobacterias y hongos micorrìzicos arbusculares",
        "congreso": "13a CONVENCIÓN",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "KARLA HILDELIZA LEYVA MEDINA",
        "titulo": "EFECTO DE LA SUPLEMENTACIÓN CON VITAMINA D3 EN OVINOS EN FINALIZACIÓN ALIMENTADOS CON DIETAS CON ZILPATEROL EN METABOLITOS SANGUÍNEOS, RESPUESTA PRODUCTIVA, CARACTERÍSTICAS DE CANAL Y CALIDAD DE CARNE",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JUAN GAXIOLA FELIX",
        "titulo": "Sierra de Barobampo: Contribución a su composición florística",
        "congreso": "XX Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "EVA XITLALIC MURILLO AYALA",
        "titulo": "CONSTANCIA",
        "congreso": "¿QUÉ ES ESO DE LA",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "Identificación y distribucíón de especies del nematodo agallador (Meloidogyne spp.) en tomate, en Sinaloa, México",
        "congreso": "6ta. Reunión de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "Identificación de especies del nematodo agallador (Meloidogyne spp.) en tomate, en Sinaloa, México",
        "congreso": "XLIII Congreso Nacional y XVIII Congreso Internacional de La Sociedad Mexicana de Fitopatología A.",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "Umbral de daño y económico de Meloidogyne enterolobii en tomate",
        "congreso": "XLIII Congreso Nacional y XVIII Congreso Internacional de La Sociedad Mexicana de Fitopatología A.",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "Evaluación de efectividad biológica del producto nematicida Verango en el control de Meloidogyne incognita",
        "congreso": "XLIII Congreso Nacional y XVIII Congreso Internacional de La Sociedad Mexicana de Fitopatología A.",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "Impacto de los nematodos fitoparásitos en la agricultura",
        "congreso": "2 Congreso Nacional",
        "participacion": "Conferencia magistral",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "TERESA DE JESUS HERAS SIERRA",
        "titulo": "influencia de la adicion de taninos en el creciemiento de Escherichia coli en heces de bovinos en egorda intensiva",
        "congreso": "sexta reunion de",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "QUINTÍN ARMANDO AYALA ARMENTA",
        "titulo": "Patogenos asociados a la marchitez del tomatillo (Physalis ixocarpa Brot.) en el norte de Sinaloa",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "QUINTÍN ARMANDO AYALA ARMENTA",
        "titulo": "Hongos del suelo causan marchitez del tomatillo en Sinaloa.",
        "congreso": "XLIII Congreso Nacional y XVIII Congreso Internacional de La Sociedad Mexicana de Fitopatología A.",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "COMPOSICION Y ABUNDANCIA DEL ZOOPLANCTON ACOMPAÑANTE DE LAS POSTLARVAS DE CAMARONES EN LA ZONA LITORAL ADYACENTE A LA BOCA DE BARRÓN, MAZATLÁN, SINALOA",
        "congreso": "4TO ENCUENTRO DE JOVENES INVESTIGADORES EN EL ESTADO DE SINALOA",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "ABUNDANCIA DE POSTLARVAS DE CAMARONES PENEIDOS EN LA ZONA LITORAL ADYACENTE A LA DESEMBOCADURA DEL RÍO PRESIDIO, MAZATLÁN, SINALOA",
        "congreso": "4TO ENCUENTRO DE JOVENES INVESTIGADORES EN EL ESTADO DE SINALOA",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "COMPOSICION DEL ZOOPLANCTON ACOMPAÑANTE DE LAS POSTLARVAS DE CAMARONES EN LA ZONA LITERAL ADYACENTE A LA BOCA DE BARRÓN, MAZATLÁN, SINALOA",
        "congreso": "4TO ENCUENTRO DE JOVENES INVESTIGADORES EN EL ESTADO DE SINALOA",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSE ADAN FELIX ORTIZ",
        "titulo": "VARIABILIDAD LATITUDINAL DE LAS TALLAS DE LAS POSTLARVAS DE CAMARONES PENEIDOS QUE ARRIBAN A LA ZONA LITORAL DE DOS REGIONES DEL PACÍFICO MEXICANO",
        "congreso": "5to. Encuentro de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "ABRIL CORONA CÁRDENAS",
        "titulo": "CARACTERIZACIÓN FENOTÍPICA Y GENOTÍPICA DE CEPAS DE Salmonella enterica enterica DE FAUNA EN CAUTIVERIO DE SINALOA",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "ABRIL CORONA CÁRDENAS",
        "titulo": "IDENTIFICACION DEL GEN INVA EN CEPAS DE SALMONELLLA ENTERICA AISLADAS DE FAUNA SILVESTRE EN CAUTIVERIO",
        "congreso": "XXV Congreso Nacional de Patología Veterinaria",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JEIDY VALERIA SOTO LÓPEZ",
        "titulo": "EFECTO DE LA SUPLEMENTACIÓN CON VITAMINA D3 EN OVINOS EN FINALIZACIÓN ALIMENTADOS CON DIETAS CON ZILPATEROL EN LA CALIDAD DE LA CARNE",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MILTON CABADA FLOREZ",
        "titulo": "Comportamiento reproductivo de vaquillas holstein y sus cruzas con sementales de la raza Gyr en el tropico seco",
        "congreso": "Reunion de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MARIANO LLANES GONZALEZ",
        "titulo": "ADICION DE ZILPATEROL GENERICO EN LA DIETA DE OVINOS DE PELO EN FINALIZACION Y RESPUESTA PRODUCTIVA, RENDIEMIENTO EN CANAL Y TEGIDO TISULAR",
        "congreso": "REUNION DE",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "PARÁSITOS GASTROINTESTINALES ZOONOTICOS EN FELINOS DE ZOOLÓGICO",
        "congreso": "ENCUENTRO DE",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "PREVALENCIA DE Eimeria spp EN CORDEROS DE CULIACAN",
        "congreso": "SEMANA NACIONAL",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "PREVALENCIA DE Cryptosporidium spp EN CORDEROS DE CULIACAN",
        "congreso": "XL CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "IDENTIFICACIÓN DE Anaplasma marginale EN MOSCAS HEMATÓFAGAS PRESENTES EN BOVINOS",
        "congreso": "REUNIÓN DE",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "DÍNAMICA ESTACIONAL DE PARÁSITOS GASTROINTESTINALES DE BOVINOS DE CULIACÁN, SINALOA",
        "congreso": "3ER CONGRESO",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "PARÁSITOS GASTROINTESTINALES DE OVINOS DE CULIACÁN, SINALOA",
        "congreso": "3ER CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "DINÁMICA ESTACIONAL DE PARÁSITOS GASTROINTESTINALES DE BOVINOS DE CULIACÁN, SINALOA",
        "congreso": "3ER CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "GILBERTO QUEVEDO SOTO",
        "titulo": "RESPUESTA DEL PIMIENTO MORRÓN (Capsicum annum L.) DEBIDO AL PACLOBUTRAZOL APLICADO EN DIFERENTES ETAPAS FENOLÓGICAS",
        "congreso": "Reunión de",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "BLANCA ESTHELA LÓPEZ GALLEGOS",
        "titulo": "IDENTIFICACIÓN DE Ehrlichia canis en CANINOS T GARRAPATAS Rhiphicephalus sanguineus DE CULIACAN, SINALOA.",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "VALERIA GOMEZ PEREZ",
        "titulo": "AGRICULTURA. PRODUCTOS Y SUBPRODUCTOS",
        "congreso": "XXIII SEMANA NACIONAL DE CIENCIA Y TECNOLOGÍA LA CIENCIA Y LA TECNOLOGÍA",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "CARLOS EDUARDO ORNELAS RAMÍREZ",
        "titulo": "Colecta y estimación de variación morfológica y genética de poblaciones de chiles (Capsicum annuum L, Capsicum chinense Jacq., Capsicum frutescens) silvestres, traspatio-jardín y criollos de los Estados de Sinaloa, Nayarit, Oaxaca, Tabasco, Yucatán.",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "RAUL HIPOLITO SAUCEDA ACOSTA",
        "titulo": "EVALUACIÓN DE LINEAS Y VARIEDADES DE GARBANZO BLANCO EN EL NORTE DE SINALOA",
        "congreso": "XIX CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "NUTRICION EQUILIBRADA EN PLANTULAS DE CHILE JALAPEÑO EN EL NORTE DE SINALOA",
        "congreso": "XXIII CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "PLAGAS DEL SUELO",
        "congreso": "X MESA REDONDA DE",
        "participacion": "Participante en mesa redonda",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "SALOMÓN BUELNA TARÍN",
        "titulo": "NUTRICION EQUILIBRADA EN PLANTULAS DE HORTALIZAS EN EL NORTE DE SINALOA",
        "congreso": "REPCA VI",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "NORMA DELIA ZAZUETA TORRES",
        "titulo": "EFECTO QUE OCACIONAN EL PACLOBUTRAZOL, MICORRIZAS Y AZOSPIRILLUM EN EL CRECIMIENTO Y RENDIMIENTO DE MAÍZ",
        "congreso": "2do Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JAIME NOE SANCHEZ PEREZ",
        "titulo": "EVALUACIÓN DE INDICADORES DE BIENESTAR ANIMAL EN EL MANEJO ANTE MORTEM Y PROCESO DE SACRIFICIO DE BOVINOS EN CONFINAMIENTO EN EL TROPICO SECO",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "EVA XITLALIC MURILLO AYALA",
        "titulo": "Constancia",
        "congreso": "6ta Reunión de Estudiantes de Posgrados en Ciencias Agropecuarias",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "MELISSA BELEM CORONA PALAZUELOS",
        "titulo": "Constancia",
        "congreso": "¿Que es eso de las",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2016"
    },
    {
        "autor": "JUAN CARLOS QUINTERO TAPIA",
        "titulo": "Inclusión de urea en la alimentación de vacas lecheras y sus efectos en los parámetros reproductivos en el trópico seco",
        "congreso": "22° Semana Nacional de Ciencia y Tecnología Ciencia y Tecnologia",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JORGE LUIS MIRANDA CAMACHO",
        "titulo": "Caracterización Genética de Mycobacterium Avium Subsp. Paratuberculosis a partir del gen IS900",
        "congreso": "Tercer encuantro de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Prevalencia de Eimeria spp en corderos de Culiacán, Sinaloa.",
        "congreso": "XII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "MELISSA BELEM CORONA PALAZUELOS",
        "titulo": "Inventario de Emisiones de Gases de Efecto Invernadero del Estado de Sinaloa (1990-2010)",
        "congreso": "Programa Estatal de",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "MELISSA BELEM CORONA PALAZUELOS",
        "titulo": "Reconocimiento",
        "congreso": "Semana Nacional de Ciencia y Tecnología",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "REBECA CASTRO FLORES",
        "titulo": "DETECCIÓN DE ANTICUERPOS DE LENTIVIRUS DE PEQUEÑOS RUMIANTES (LVPR) EN HATOS MIXTOS DE OVINOS Y CAPRINOS DE CULIACÁN, SINALOA",
        "congreso": "XXXIX Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "REBECA CASTRO FLORES",
        "titulo": "Identificación de Lentivirus de pequeños rumiantes (LvPR) en un caprino de Culiacán, Sinaloa",
        "congreso": "Primer Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "CESAR NOE BADILLA MEDINA",
        "titulo": "Caracterización molecular de la Proteína de la Membrana Externa 1a",
        "congreso": "Primer congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "CESAR NOE BADILLA MEDINA",
        "titulo": "IDENTIFICACION DE Anaplasma marginale EN TERNEROS DE DOS SISTEMAS DE PRODUCCION",
        "congreso": "CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "ALBERTO IRIBE ZAZUETA",
        "titulo": "CARACTERIZACION GENETICA DEL GEN VIRB9 DE ANPLASMA MARGINALE EN BOVINOS DE CULIACAN SINALOA",
        "congreso": "PRIMER CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "ISIDRO MARQUEZ ZEQUERA",
        "titulo": "Identificación de especies y sensibilidad a fungicidas en aislamientos de Colletotrichum de frutos de papaya colectados en veracruz",
        "congreso": "Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "ISIDRO MARQUEZ ZEQUERA",
        "titulo": "Identificación de especies y sensibilidad a fungicidas en aislamientos de Colletotrichum de frutos de papaya colectados en Veracruz",
        "congreso": "XVII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "ISIDRO MARQUEZ ZEQUERA",
        "titulo": "Identificación de Pythium aphanidermatum proveniente de canales de irrigación en el valle de Culiacán y su patogenicidad en tomate y chile",
        "congreso": "XVII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "EVA XITLALIC MURILLO AYALA",
        "titulo": "RECONOCIMIENTO",
        "congreso": "Inventario de",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "IDENTIFICACIÓN DE ESPECIES DEL NEMATODO AGALLADOR (MELOIDOGYNE SPP.) EN TOMATE, EN SINALOA",
        "congreso": "Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "DESINFECTANTES DE TIJERAS PARA CONTROLAR LA DISPERSIÓN DE RALSTONIA SOLANACEARUM Y CLAVIBACTER MICHIGANENSIS SUBSP MICHIGANENSIS EN TOMATE",
        "congreso": "Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "MANEJO DEL NEMATODO AGALLADOR (MELOIDOGYNE SPP.) DE LAS HORTALIZAS EN EL ESTADO DE SINALOA, MÉXICO",
        "congreso": "Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "CUBIERTAS FLOTANTES (AGRIBON P17) PARA EL CONTROL DEL VIRUS DE LA MANCHA ANULAR DE LA PAPAYA (PRSV) EN COSALÁ SINALOA, MÉXICO",
        "congreso": "Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "COMPORTAMIENTO DE LA RESISTENCIA DE PORTAINJERTOS COMERCIALES DE TOMATE (SOLANUM LYCOPERSICUM L.) AL NEMATODO AGALLADOR MELOIDOGYNE ENTEROLOBII (RAMMAH Y HIRSCHMANN)",
        "congreso": "Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "XANTHOMONAS CAMPESTRIS PV. VESICATORIA AGENTE CAUSAL DE LA NECROSIS DEL CÁLIZ Y PEDÚNCULO DE FRUTOS EN EL CULTIVO DE TOMATE (SOLANUM LYCOPERSICUM L.)",
        "congreso": "Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "MANEJO BIORRACIONAL DEL NEMATODO AGALLADOR DE RAÍCES EN HORTALIZAS",
        "congreso": "II Congreso Nacional",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSE ANGEL MARTINEZ GALLARDO",
        "titulo": "IDENTIFICACIÓN DE ESPECIES DEL NEMATODO AGALLADOR (Meloidogyne SPP.) EN TOMATE, EN SINALOA, MÉXICO",
        "congreso": "TERCER ENCUENTRO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "TERESA DE JESUS HERAS SIERRA",
        "titulo": "efecto de taninos hidrolizables y condensados en el comportamiento de Listeria monocytogenes en heces de bovinos productores de leche",
        "congreso": "Semana Nacional de Ciencia y Tecnología",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "TERESA DE JESUS HERAS SIERRA",
        "titulo": "medicina interna de rumiantes",
        "congreso": "investigacion y",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "TERESA DE JESUS HERAS SIERRA",
        "titulo": "taller de actualizacion en epidemiologia, seguimiento de casos y vigilancia de la tuberculosis bovina",
        "congreso": "curso-taller",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "Salmonella en heces de caninos y su relación con la contaminación de alimentos en primarias rurales de tiempo completo",
        "congreso": "6 reunion de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "CLAUDIA BERENICE DE DIOS QUIÑONEZ",
        "titulo": "Prevalencia de Eimeria spp en corderos de Culiacan, Sinaloa",
        "congreso": "Encuentro de Jovenes",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "PRESENCIA DE Anaplasma marginale EN TERNEROS DE CULIACÁN, SINALOA",
        "congreso": "TERCER ENCUENTRO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "INFLUENCIA DE DIETAS ADICIONADAS CON BAJOS NIVELES DE EXTRAXTOS DE TANINOS EN LA RESPUESTA PRODUCTIVA DE CORDEROS EN ENGORDA",
        "congreso": "XII CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JOSÉ DE JESÚS CAMPOS SÁNCHEZ",
        "titulo": "IDENTIFICACIÓN DE Anaplasma marginale EN TERNEROS DE CULIACÁN, SINALOA",
        "congreso": "XII CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "BLANCA ESTHELA LÓPEZ GALLEGOS",
        "titulo": "Ehrlichia canis en caninos de Culiacán, Sinaloa.",
        "congreso": "Tercer Encuentro de",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "BLANCA ESTHELA LÓPEZ GALLEGOS",
        "titulo": "Identificación de Ehrlichia canis por ELISA en caninos de Culiacán, Sinaloa.",
        "congreso": "XII CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "VICTOR GABRIEL ALMADA RUIZ",
        "titulo": "ACTIVIDAD BIOLÓGICA DE EXTRACTOS ETANÓLICOS DE MELIÁCEAS EN DIAPHORINA CITRI (HEMIPTERA:LIVIIDAE) EN CONDICIONES DE LABORATORIO",
        "congreso": "4TO. CONGRESO",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JORGE LUIS MIRANDA CAMACHO",
        "titulo": "Identificación de Mycobacterium avium subsp. paratuberculosis en ovinos de culiacán, sinaloa",
        "congreso": "Primer congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "ANA MIREYA ROMO VALDEZ",
        "titulo": "Respuesta inmune humoral de bovinos inoculados con péptidos de ama-1 de Babesia bigemina",
        "congreso": "Congreso Nacional",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "ANA MIREYA ROMO VALDEZ",
        "titulo": "Respuesta inmune humoral de bovinos inoculados con péptidos de ama-1 de Babesia bigemina",
        "congreso": "Onceava Jornada",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "RAUL HIPOLITO SAUCEDA ACOSTA",
        "titulo": "RENDIMIENTO DE SEIS VARIEDADES Y CUATRO LINEAS DE FRIJOL EN ALTAS DENSIDADES DE POBLACION BAJO RIEGO DE GRAVEDAD",
        "congreso": "XVIII CONGRESO",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JUAN JOSÉ GARCÍA GERARDO",
        "titulo": "¿Efectos del mesosulfurón metil + iodosulfurón metil en la actividad fotosintética y estrés oxidativo en alfalfa (Medicago sativa L.)¿",
        "congreso": "XVlll Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "BRICEIDA ORTIZ LOPEZ",
        "titulo": "INFLUENCIA DE LA ADICIÓN DE EXTRACTO DE TANINOS SOBRE LAS CARACTERÍSTICAS FÍSICAS Y ATRIBUTOS SENSORIALES DE LA CARNE DE BOVINOS ENGORDADOS DE FORMA INTENSIVA",
        "congreso": "JORNADAS DE",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "BRICEIDA ORTIZ LOPEZ",
        "titulo": "EFECTO DE LA POTENCIA DE LOS IMPLANTES CON ZERANOL O TREMBOLONA MÁS ESTRADIOL EN LA RESPUESTA PRODUCTIVA DE OVINOS DE PELO EN ENGORDA INTENSIVA EN CLIMA CALUROSO",
        "congreso": "1ER FORO",
        "participacion": "Conferencia magistral",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "BRICEIDA ORTIZ LOPEZ",
        "titulo": "INFLUENCE OF ADDITION OF 0.3% OF TANNINS EXTRAC TO DIET OF FINISHING-BULLS ON THE FATTY ACIDS PROFILE OF MEAT",
        "congreso": "5TH EURO-GLOBAL",
        "participacion": "Póster",
        "pais": "SPAIN",
        "anio": "2015"
    },
    {
        "autor": "EVA XITLALIC MURILLO AYALA",
        "titulo": "Constancia",
        "congreso": "CONGRESO",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "EVA XITLALIC MURILLO AYALA",
        "titulo": "Constancia",
        "congreso": "Taller de Escritura de",
        "participacion": "",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identification of species of Anaplasma in domestic animals at Northwest México",
        "congreso": "International",
        "participacion": "Póster",
        "pais": "UNITED KINGDO M",
        "anio": "2015"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación de Ehrlichia canis por ELISA en caninos de Culiacán, Sinaloa.",
        "congreso": "XII Congreso",
        "participacion": "Ponencia",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Parásitos gastrointestinales presentes en pequeños rumiantes.",
        "congreso": "XII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Identificación de Anaplasma marginale en terneros de Culiacán, Sinaloa.",
        "congreso": "XII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    },
    {
        "autor": "JESUS DANIEL SOLIS CARRASCO",
        "titulo": "Prevalencia de protozoarios en caninos de Culiacán, Sinaloa.",
        "congreso": "XII Congreso",
        "participacion": "Póster",
        "pais": "MÉXICO",
        "anio": "2015"
    }
];

  const searchInput = document.getElementById("busquedaSeguimientoMCA");
  const anioFilter = document.getElementById("filtroAnioSeguimientoMCA");
  const tbody = document.querySelector("#tablaSeguimientoMCA tbody");
  const paginationUl = document.getElementById("paginacionSeguimientoMCA");

  const rowsPerPage = 10;
  let currentPage = 1;
  let filteredData = [...DATA_SEGUIMIENTO_MCA];

  function populateAnioFilter() {
    const anios = [...new Set(DATA_SEGUIMIENTO_MCA.map(item => item.anio))].filter(Boolean).sort().reverse();
    anios.forEach(anio => {
      const option = document.createElement('option');
      option.value = anio;
      option.innerText = anio;
      anioFilter.appendChild(option);
    });
  }

  function renderTable() {
    tbody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = filteredData.slice(start, end);

    if (paginatedData.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-muted">No se encontraron resultados para los filtros seleccionados.</td></tr>';
      return;
    }

    paginatedData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="text-center">${item.anio}</td>
        <td><strong>${item.autor}</strong></td>
        <td>${item.titulo}</td>
        <td>${item.congreso}</td>
        <td class="text-center">${item.participacion}</td>
        <td class="text-center">${item.pais}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function setupPagination() {
    paginationUl.innerHTML = '';
    const pageCount = Math.ceil(filteredData.length / rowsPerPage);
    if (pageCount <= 1) return;

    // Anterior
    const prevLi = document.createElement('li');
    prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
    const prevA = document.createElement('a');
    prevA.className = 'page-link';
    prevA.href = '#';
    prevA.innerHTML = '&laquo;';
    prevA.setAttribute('aria-label', 'Anterior');
    prevA.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        renderTable();
        setupPagination();
      }
    });
    prevLi.appendChild(prevA);
    paginationUl.appendChild(prevLi);

    for (let i = 1; i <= pageCount; i++) {
      const li = document.createElement('li');
      li.className = 'page-item' + (i === currentPage ? ' active' : '');
      const a = document.createElement('a');
      a.className = 'page-link';
      a.href = '#';
      a.innerText = i;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = i;
        renderTable();
        setupPagination();
      });
      li.appendChild(a);
      paginationUl.appendChild(li);
    }

    // Siguiente
    const nextLi = document.createElement('li');
    nextLi.className = `page-item ${currentPage === pageCount ? 'disabled' : ''}`;
    const nextA = document.createElement('a');
    nextA.className = 'page-link';
    nextA.href = '#';
    nextA.innerHTML = '&raquo;';
    nextA.setAttribute('aria-label', 'Siguiente');
    nextA.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentPage < pageCount) {
        currentPage++;
        renderTable();
        setupPagination();
      }
    });
    nextLi.appendChild(nextA);
    paginationUl.appendChild(nextLi);
  }

  function applyFiltersAndRender() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedAnio = anioFilter.value;

    filteredData = DATA_SEGUIMIENTO_MCA.filter(item => {
      const autorMatches = (item.autor || '').toLowerCase().includes(searchTerm);
      const tituloMatches = (item.titulo || '').toLowerCase().includes(searchTerm);
      const congresoMatches = (item.congreso || '').toLowerCase().includes(searchTerm);
      const matchesSearch = !searchTerm || autorMatches || tituloMatches || congresoMatches;

      const matchesAnio = selectedAnio === 'todos' || item.anio === selectedAnio;
      return matchesSearch && matchesAnio;
    });

    currentPage = 1;
    renderTable();
    setupPagination();
  }

  populateAnioFilter();
  applyFiltersAndRender();

  searchInput.addEventListener('input', applyFiltersAndRender);
  anioFilter.addEventListener('change', applyFiltersAndRender);
});
