document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Egresados y Graduados - Maestría en Ciencias Agropecuarias (MCA)
   */
  const DATA_EGRESADOS_MCA = [
    {
        "alumno": "Beltrán Lucas Luis Andrés",
        "tema": "Efecto de la biofertilización con hongos micorrízicos en granos de maíz ( Zea mays , L.)",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Briseyda Jatzel Félix Leyva",
        "tema": "Frecuencia, factores de riesgo e impacto económico de las contusiones en la canal de bovinos productores de carne en Culiacán, Sinaloa, México",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "González Alfaro Arturo",
        "tema": "Psílidos (Hemiptera: Psylloidea) asociados a cultivos agrícolas y arvenses en el norte de Sinaloa.",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Ana Mireya Romo Valdez",
        "tema": "Mitigación del impacto ambiental en la respuesta productiva y calidad de la carne en bovinos en finalización intensiva",
        "comite": "Dr. Francisco Gerardo Ríos Rincón",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Kinzú Berenice Castro Valdez",
        "tema": "Análisis del comportamiento In vitro de Fusarium oxysporum f. sp. lycopersici en medios salinos sólidos y líquidos.",
        "comite": "DR. CARLOS ALFONSO LÓPEZ ORONA",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Julián Alberto Galavíz Lara (TP)",
        "tema": "SELECCIÓN DE CEPAS DE BACILUS spp. Y TRICHODERMA spp. Y SU APLICACIÓN CON COMPOSTAS PARA El ONTROL DE LA RABIA EN GARBANZO BLANCO ( Cícer arietinum L.)",
        "comite": "Dr. Pedro Sánchez Peña",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Lugo Luján Jonathan Misael",
        "tema": "Detección de resistencia a mosca blanca en genotipos silvestres y criollos de Solanum spp.",
        "comite": "Dr. José Antonio Garzón Tiznado",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Alan Douriet Angulo",
        "tema": "Identificación de especies de Fusarium causantes de pudrición de grano de maíz (Zea mayz) en el estado de Sinaloa",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Walter Arturo Rubio Aragón",
        "tema": "Identificación de resistencia genética de genotipos de chile (Capsicum annuum) al picudo (Anthonomus eugenii)",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Juan Gaxiola Félix (TP)",
        "tema": "Estudio Florístico de la Planicie y arroyo El Aguaje de la Sierra de Barobampo, municipio de Ahorne, Sinaloa, México",
        "comite": "Dr. Álvaro Reyes Olivas",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Marquéz Zequera Isidro (TP)",
        "tema": "Identificación y caracterización de la bacteria Clavibacter michiganensis subsp. michiganensis.",
        "comite": "Dr. José Antonio Garzón Tiznado",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Diana Zuleika Velázquez Valdez",
        "tema": "INCIDENCIA E IDENTIFICACION MOLECULAR DE Salmonella spp AISLADA DE UNA GRANJA PORCINA DE CICLO COMPLETO EN CULIACÁN, SINALOA.",
        "comite": "Dra. Gabriela Silva Hidalgo",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Jorge Alberto Edeza Urias",
        "tema": "Análisis de resistencia genética de genotipos de garbanzo (Cicer arietinum L.) a razas de Fusarium oxysporum f. sp. ciceris de Sinaloa",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Valeria Gómez Pérez",
        "tema": "Valoración In situ y uso de poblaciones de maíces nativos de Sinaloa, México.",
        "comite": "Dr. Pedro Sánchez Peña",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "llse Anahi Medina Armenta",
        "tema": "Evaluación de distintos tipos de corral para la mitigación de estrés calórico y bienestar animal durante las etapas de crecimiento y finalización de bovinos: respuesta productiva y características de canal",
        "comite": "Dra. Beatriz Isabel Castro Pérez",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Claudia Leonor Barraza Tizoc (TP)",
        "tema": "Homología en poblaciones de garrapatas Riphicephalus ( Boophilus ) microplus",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Jesús Daniel Solís Carrasco (TP)",
        "tema": "Efecto de la fermentación anaeróbica en las excretas de cerdo sobre los huevos de Ascaris suum como organismo indicador de la eliminación de patógenos.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Lucio Ricardo Ibáñez Garduño (TP)",
        "tema": "ANAPLASMOSIS EN VENADO COLA BLANCA (Odocoileus virqinianus) Y SU POSIBLE INTERACCIÓN EN EL GANADO BOVINO EN EL MUNICIPIO DE CULIACÁN, SINALOA.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Jesús Antonio Ceballos Rubio",
        "tema": "Patrón de fermentación de protozoarios en rumiantes",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Guillermo Gómez González",
        "tema": "Efecto de diferentes densidades de nematodo agallador (Meloidogyne spp.) en el cultivo de pepino {Cucumis sativus L.)",
        "comite": "Dr. Roberto Gastélum Luque",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Lucila Guillermina Beltrán Vega",
        "tema": "Identificación Molecular de la Babesia spp en pequeños rumiantes",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Noyra Cristina Corona Soto",
        "tema": "ENFERMEDADES TRANSMITIDAS POR VECTORES: DETECCIÓN DE Mycoplasma haemocanis",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Francisca Zatarain lrigoyen",
        "tema": "Tipificación de Anap/asma spp. en Equinos (Equus caballus).",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2017-2019"
    },
    {
        "alumno": "Miguel Antonio Cárdenas Contreras",
        "tema": "La inclusión de extracto de ajo y cebolla en el alimento de gallinas reduce la presencia de Salmonella enteritidis en el huevo.",
        "comite": "Dr. Jesús José Portillo Loera.",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Natalia Heredia Burgos",
        "tema": "Detección babesia spp en Rhipicephalus sanguineus de caninos en culiacán, sinaloa.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Ana Citlaly Zazueta Gutiérrez",
        "tema": "Valoración de indicadores de bienestar animal en bovinos productores de carne en finalización intensiva.",
        "comite": "Dr. Francisco Gerardo Ríos Rincón",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Jesús Alfonso Quintero Díaz.",
        "tema": "Detección de Theileria equi y Bebesia caballi en equinos en culiacán, sinaloa",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Erick Gabriel Ríos Jiménez",
        "tema": "Grados Brix, su relación con plagas y enfermedades encapsicum annuum l. en Sinaloa, México",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Oriandy Mabel Perea Longoria",
        "tema": "Identificación y distribución de especies del nematodo agallador ( meloidogyne spp.) En chile ( capsicum annuum l.) En el estado de Sinaloa.",
        "comite": "Dr. Tomás Díaz Valdés",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Juan Carlos Cordero Armenta",
        "tema": "Efecto de la temperatura en el rendimiento del cultivo de cebolla blanca ( Allium cepa L.) en el Valle de Culiacán, Sinaloa",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2016-2018"
    },
    {
        "alumno": "Mayra Gisell López Salazar",
        "tema": "Efecto de diferentes protocolos de sincronización del estro e inseminación artificial a tiempo fijo en la respuesta reproductiva de vacas Holstein x Gyr explotadas en el trópico seco.",
        "comite": "Dra. Gabriela Silva Hidalgo",
        "cohorte": "2015-2017"
    },
    {
        "alumno": "Marlie Guadalupe Beltrán Minjarez",
        "tema": "Efecto de la dinámica del crecimiento y producción de la lombriz roja californiana ( Eisenia foetida .) bajo la influencia de tres sustratos diferentes a base de estiércol de origen animal.",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2015-2017"
    },
    {
        "alumno": "Mariano Llanes González",
        "tema": "Exploración y validación de marcas de crecimiento de estructuras duras de jaiba azul Callinectes arcuatus (ORDWAY 1863) en Sinaloa.",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2015-2017"
    },
    {
        "alumno": "Salomón Buelna Tarín",
        "tema": "Fertilización nitrogenada en garbanzo ( Cicer arietinum L.) en el norte de Sinaloa.",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2015-2017"
    },
    {
        "alumno": "Quevedo Soto Gilberto",
        "tema": "Respuesta del ajo y papa al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas",
        "comite": "Dr. Velázquez Alcaraz Teresa de Jesús",
        "cohorte": "2015-2017"
    },
    {
        "alumno": "Zazueta Torres Norma Delia",
        "tema": "Respuesta del melón y sandía al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas",
        "comite": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Quintero Morales María Alejandra",
        "tema": "Respuesta del algodón y ajonjolí al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas",
        "comite": "Teresa de Jesús Partida Ruvalcaba Leopoldo",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Cázares Flores Luz Llarelly",
        "tema": "Efecto que ocasiona el paclobutrazol aplicado foliarmente en plantas de pepino y calabaza",
        "comite": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Almada Ruiz Víctor Gabriel",
        "tema": "Actividad biológica de extractos etanólicos de meliáceas en Diaphorina citri Kuwayama 1908 (hemiptera: liviidae) en ambientes controlados.",
        "comite": "Dr. Lugo García Gabriel A",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Ornelas Ramírez Carlos Eduardo",
        "tema": "Colecta y estimación de la variación genética y morfológica de poblaciones silvestres y criollos de chile ( Capsicum sp. ) del noroeste de México",
        "comite": "Dr. Hernández Verdugo Sergio",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "González López Elida Concepción",
        "tema": "Búsqueda de resistencia a virus huasteco de la vena amarilla en chile (Phyvv) en poblaciones silvestres y criollas de chile ( Capsicum spp.).",
        "comite": "Dr. Hernández Verdugo Sergio",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Román Román Leonardo",
        "tema": "Cálculo de la evapotranspiración en chile ( Capsicum annuum L.) mediante los métodos penman-monteiht y el cintilómetro",
        "comite": "Dr. López Avendaño Jesús Enrique",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Osuna Pérez Marco Antonio",
        "tema": "Efecto de la adición de extracto de Macleaya cordata a la dieta con alto riesgo de acidosis subaguda en ovinos en finalización.",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Sánchez Pérez Jaime Noé",
        "tema": "Influencia de NNP de liberación lentaCon niveles de zeolita en respuesta productiva, características de canal y metabolitos sanguíneos de ovinos en finalización.",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Camacho González Luis Roberto",
        "tema": "Evaluación de la adición de una fuente de NNP de liberación controlada (Optigen 1200®) en dietas integrales sobre comportamiento productivo y niveles de nitrógeno en leche (MUN) para vacas productoras de leche en el trópico seco.",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Aguirre Meza Rubén",
        "tema": "Efecto del consumo adicional de extracto de taninos en la respuesta productiva de cerdos en crecimiento-finalización",
        "comite": "Dr. Romo Rubio Javier Alonso",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Castro Flores Rebeca",
        "tema": "Detección de Lentivirus en pequeños rumiantes (LVPR) hatos mixtos de ovinos y caprinos en Culiacán, Sinaloa",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Romo Barrón Cinthya Beatriz",
        "tema": "Comportamiento reproductivo de vacas Holstein en lactación utilizando diferentes protocolos de sincronización de estro en trópico seco",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Badilla Medina Cesar Noé",
        "tema": "Identificación de Gen MSP4 de Anaplasma ovis de pequeños rumiantes.",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Miranda Camacho Jorge Luis",
        "tema": "Tipificación molecular del gen IS900 de Mycobacterium avium subsp. paratuberculosis en ovinos y caprinos en Culiacán, Sinaloa.",
        "comite": "Dra. Enríquez Verdugo Idalia",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Murillo Ayala Eva Xitlalic",
        "tema": "Influencia de la adición de extracto de taninos condensados en la producción de gas in vitro de las heces de bovinos en engorda",
        "comite": "Dr. Barajas Cruz Rubén",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Rojas Román Luis Antonio",
        "tema": "Efecto de la adición de zeolita (Clinoptilolita) en la respuesta productiva y características de la canal de ovinos de pelo en dietas de finalización",
        "comite": "Dra. Beatriz Isabel Castro Pérez",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Leyva Medina Karla Hildeliza",
        "tema": "Método de suministro del clorhidrato de zilpaterol en ovinos: crecimiento, características de la canal y calidad de la carne.",
        "comite": "Dr. Juan Carlos Robles Estrada",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Corona Palazuelos Melissa Belem",
        "tema": "Influencia de la adición de extracto de taninos en la carga por nematodos en becerros recién llegados al corral de engorda",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Quintero Beltrán Denisse Carmina",
        "tema": "Eficiencia reproductiva de borregas pelibuey de acuerdo a la época de empadre y la restricción del amamantamiento",
        "comite": "Dr. Jesús José Portillo Loera",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Bonilla Valverde Elmer Benjamín",
        "tema": "Influencia del consumo adicional de taninos en la respuesta productiva de corderos en engorda",
        "comite": "Dr. Romo Rubio Javier Alonso",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Robles Camargo Tirzo",
        "tema": "Efecto de diferentes protocolos de sincronización del estro e inseminación artificial a tiempo fijo en la respuesta reproductiva de vacas Holstein x Gyr explotadas en el trópico seco.",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Heras Sierra Sarahí de Jesús",
        "tema": "Efecto de la dinámica del crecimiento y producción de la lombriz roja californiana ( Eisenia foetida .) bajo la influencia de tres sustratos diferentes a base de estiércol de origen animal.",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Sauceda Luna Rosa María de Jesús",
        "tema": "Exploración y validación de marcas de crecimiento de estructuras duras de jaiba azul Callinectes arcuatus (ORDWAY 1863) en Sinaloa.",
        "comite": "Dr. Nicolás Castañeda Lomas",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Sauceda Acosta Raúl Hipólito",
        "tema": "Fertilización nitrogenada en garbanzo ( Cicer arietinum L.) en el norte de Sinaloa.",
        "comite": "Dr. Lugo García G. Antonio",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Acosta López Ruth Desiré",
        "tema": "Respuesta del ajo y papa al paclobutrazol aplicado sobre el follaje en diferentes etapas fenológicas",
        "comite": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Caro López Eder",
        "tema": "Manejo de picudo de chile Anthonomus eugenii cano usando tierra de diatomea, en Culiacán, Sinaloa",
        "comite": "Dra. Velázquez A. Teresade Jesús",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Soto Moreno Luis Esteban (TP)",
        "tema": "Influencia de la adición de extracto de Macleaya cordata en la presencia de Escherichia coli en bovinos de engorda",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2013-2015"
    },
    {
        "alumno": "Gómez Martínez José Rigoberto (TP)",
        "tema": "Conductancia estomática, bióxido de carbono asimilado, transpiración y producción del tomate cultivado en tres ambientes",
        "comite": "Dra. Velázquez Alcaraz Teresa de Jesús",
        "cohorte": "2012-2014"
    },
    {
        "alumno": "Coronado Trejo Carmen Gabriela",
        "tema": "Identificación de Anaplasma phagocytophilum mediante la técnica de PCR en perros de Culiacán, Sinaloa.",
        "comite": "Dra. Enríquez Verdugo Idalia",
        "cohorte": "2012-2014"
    },
    {
        "alumno": "Heras Sierra Teresa de Jesús",
        "tema": "Influencia de la adición de extracto de taninos en la presencia de Escherichia col i, en las heces de bovinos en engorda.",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Martínez Gallardo José Ángel",
        "tema": "Identificación y cuantificación de nemátodos fitoparásitos en el cultivo de papaya y su interacción con características edáficas.",
        "comite": "Dr. Tomás Díaz Valdés",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "López Cuén Pedro Iván",
        "tema": "Compatibilidad del paclobutrazol con insecticidas, fungicidas, fertilizantes foliares y reguladores del crecimiento",
        "comite": "Dr. Leopoldo Partida R",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Félix Ortiz José Adán",
        "tema": "Variabilidad ambiental y su efecto sobre la abundancia de postlarvas de camarón Penaidae en dos zonas del Pacífico mexicano",
        "comite": "Dr. Nicolás Casteñeda Lomas",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Ayala Armenta Quintín Armando",
        "tema": "Efectividad de fungicidas para el control del moho blanco Sclerotiorum (Lib) de Bary en frijól",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Encines Chaidez Olivia Vanessa",
        "tema": "Producción de tomate con uso de sustratos orgánicos y diferentes soluciones nutritivas en invernadero",
        "comite": "Dr. Tomás Díaz Valdez",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "González Canizales Jesús Francisco",
        "tema": "Respuesta de genotipos de tomate ( Solanum lycopersicum ) al virus del Tomato Yellow leaf curt virus (TYLCV)",
        "comite": "Dr. Leopoldo Partida R",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "López Molina Ramón",
        "tema": "Análisis de multiresistencia genética de variedades de garbanzo generadas en el noroeste de México a la fusariocis vascular y pudrición radicular",
        "comite": "Dr. Leopoldo Partida R",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Millán Chaidez Reynaldo",
        "tema": "Determinación de transmisión transovárica y retención de de Candidatus liberibacter solanacearum por paratrioza (Bactericera cockerelli Sulc .)",
        "comite": "Dr. Leopoldo Partida R",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Molina Cárdenas Lorena",
        "tema": "Búsqueda de fuentes de resistencia en genotipos de garbanzo generados en Sonora a la pudrición radicular ocasionado por Fusarium solani",
        "comite": "Dr. Leopoldo Partida R",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Tirado Ramírez Martín Abraham",
        "tema": "Estimación de la evapotranspiración real en maíz utilizando la técnica del cintilómetro y el método de la FAO penman- monteith",
        "comite": "Dr. Díaz Valdés Tomás",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Zamora Galván Francisco",
        "tema": "Búsqueda de la resistencia genética en genotipo de garbanzo generados en Sinaloa a la fusariosis vascular ocasionada por la raza 5 de foc.",
        "comite": "Dr. Leopoldo Partida R",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Romo Valdez Juan Manuel",
        "tema": "Efecto de la aplicación intrauterina de semen adicionado con oxitocina en la respuesta productiva de cerdas servidas durante el verano y otoño",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Vargas Nava Alexis Israel",
        "tema": "Prevalencia y viabilidad de Toxocara canis en parques públicos de la ciudad de Culiacán, Sinaloa.",
        "comite": "Dra. Gaxiola Camacho Soila Maribel",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Verdugo Insúa Moisés",
        "tema": "Influencia de la adición de metionina de zinc y clorhidrato de zilpaterol en la respuesta productiva y características de la canal de toretes en finalización",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "López López Ramón Cristino",
        "tema": "Efecto del paclobutrazol en el desarrollo de caña de azúcar en la fase de aclimatación",
        "comite": "Dr. Tomás Díaz Valdez",
        "cohorte": "2011-2013"
    },
    {
        "alumno": "Mendivil Trujillo Héctor Ramiro",
        "tema": "Identificación molecular de razas fisiológicas de Fusarium oxysporum f. sp. licopercici en el estado de Sinaloa, México",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Iñiguez Torres Karina Janeth",
        "tema": "Análisis metodológico para determinar resistencia en genotipo de tomate ( Solanum licopersicum l. ) a Candidatos liberibacter solanacearum",
        "comite": "MC Moisés Barajas Ortiz",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Cervantes Romero Benjamín",
        "tema": "Crecimiento y rendimiento de del frijol cultivado con fertilizante nitrogenado y paclobutrazol aplicado foliarmente",
        "comite": "Dra. Teresa De Jesús Velázquez Alcaraz",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Valdez Rubio Nallely",
        "tema": "Identificación de especies de Fusarium presentes en el cultivo del maíz en regiones de Sinaloa",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Linares Holguín Orlando Omer",
        "tema": "Análisis de la diversidad genética de Pholisma culiacanum",
        "comite": "Dr. Pedro Sánchez Peña",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Ramírez Soto Milagros",
        "tema": "Propiedades físicas, agronómicas y contenido de proteína de genotipos de garbanzo en ambientes del noroeste de México",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Pérez López Oscar",
        "tema": "Viviparidad de Pachycereus pecten aboriginum ( cactaceae ) y sus implicaciones en germinación y supervivencia.",
        "comite": "Dr. Álvaro Reyes Olivas",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Cárdenas Flores Antonio",
        "tema": "Respuesta al cloro y sodio en la solución nutritiva, producción de plántulas y rendimiento de tomate hidropónico",
        "comite": "Dra. Saúl Parra Terraza",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Castro López Ricardo",
        "tema": "Alternativas para el manejo de Meloidogyne spp en el cultivo de pepino bajo condiciones de invernadero",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Vega Gutiérrez Tomás Aarón",
        "tema": "Influencia del estrés hídrico en variables fenotípicas e incidencia de plagas en maíz",
        "comite": "Dr. Tomás Díaz Valdés,",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "López Aispuro Carlos Vladimir",
        "tema": "Identificación de Anaplasma phagocytophilum por PCR anidado en equinos de Culiacán, Sinaloa.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Mariscal Castro José Ángel",
        "tema": "Identificación de las especies de Anaplasma en bovinos por técnicas moleculares.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Covarrubias Hernández Marcela",
        "tema": "Efecto del consumo adicional de cromo en cerdas prepúberes en el desempeño reproductivo posterior",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Aréchiga Castillo Sergio Candelario",
        "tema": "Efecto del tiempo consumiendo extracto de taninos sobre el nitrógeno ureico en plasma, respuesta productiva y características de la canal de toretes en engorda intensiva",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Montoya Torrero Antonino Darío",
        "tema": "Influencia de la adición de metionina de cromo y taninos en la respuesta productiva y características de la canal de bovinos en engorda intensiva",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "González González Daniel",
        "tema": "Influencia de la edad de corte, densidad de siembra y arreglo de surco en la producción de forraje de las variedades Humaya y Tainung-2 de Kenaf cultivadas en el valle de Culiacán, Sinaloa.",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Ramos Acosta Heribier",
        "tema": "Efecto de la duración de la suplementación energética en la actividad ovárica de vacas para carne",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2010-2012"
    },
    {
        "alumno": "Angulo Castro Azareel",
        "tema": "Producción de biomasa, fijación de N2 y actividad microbiana del suelo bajo cultivo de cobertura con Mucuna pruriens",
        "comite": "Dr. Manuel Villarreal Romero",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Gerardo García Juan José",
        "tema": "Patrones de variación morfológica en chile silvestre ( Capsicum annuum var glabriusculum ) del noroeste de México",
        "comite": "Dr. Sergio Hernández Verdugo",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Menchaca Ceja Felipe",
        "tema": "Crecimiento y rendimiento de grano de sorgo en respuesta al paclobutrazol aplicado en semilla o follaje",
        "comite": "Dra. Teresa De Jesús, Velázquez Alcaraz",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Mendoza Medrano Daniel",
        "tema": "Comportamiento del maíz (Z ea mays L.) baja diferentes fechas de siembra",
        "comite": "Dr. Tomás Díaz Valdés",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Retes Manjarrez Jesús Enrique",
        "tema": "Detección de genotipos de solanum lycopersicum l. resistentes al permanente del tomate ( Candidatus liberibacter solanacearum )",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Cuén Beltrán Ramón Antonio",
        "tema": "Identificación de Mycobacterium avium subespecie paratuberculosis en ovinos de Culiacán, Sinaloa",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Félix Camacho Silvia Alicia",
        "tema": "Respuesta reproductiva de la cerda en anestro lactacional al consumo adicional de cromo orgánico y aplicación de GNRH-A",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Ortiz López Briceida",
        "tema": "Efecto de implantes con zeranol y trenbolona + estradol en la respuesta productiva de ovinos de pelo en engorda intensiva.",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Camacho Castellanos Alejandro",
        "tema": "Influencia de la adición de extracto de taninos a la dieta en la respuesta reproductiva y características de la canal de toretes en engorda intensiva",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Cárdenas Dávila Pedro Edgardo",
        "tema": "Descripción del crecimiento y supervivencia de la tilapia roja ( Oreochromis spp ) cultivada en jaulas flotantes en ambiente marino.",
        "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Lugo Melchor Rafael",
        "tema": "Etnobotánica y variación molecular en poblaciones de maíces nativos de Culiacán, Sinaloa, México.",
        "comite": "",
        "cohorte": "2009-2011"
    },
    {
        "alumno": "Banda Perea Rosario Celene",
        "tema": "Uso eficiente del nitrógeno , el agua y producción de maíz con cinco dosis de nitrógeno",
        "comite": "Dr. Tomás Díaz Valdés",
        "cohorte": "2008-2010"
    },
    {
        "alumno": "Espino García Marco Antonio",
        "tema": "Efecto de la adición de propionato de cromo a la dieta en la respuesta inmune y desempeño productivo de toretes en engorda intensiva",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2008-2010"
    },
    {
        "alumno": "Borboa Olivas Jesús Alejandro",
        "tema": "Producción de anticuerpos policlonales para antígenos de Micobacterium bovis",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2008-2010"
    },
    {
        "alumno": "Miguel Ángel Rodríguez Gaxiola (SNI)",
        "tema": "Respuesta de la adición de zinc orgánico al alimento en la calidad seminal de ovinos de pelo",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2008-2010"
    }
];

  const configEgresadosMCA = {
    busquedaId: "busquedaEgresadoMCA",
    cohorteId: "filtroCohorteEgresadoMCA",
    tbodySelector: "#tablaEgresadosMCA tbody",
    paginacionId: "paginacionEgresadosMCA",
  };

  inicializarTablaTesis(DATA_EGRESADOS_MCA, configEgresadosMCA);
});
