document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Estudiantes Matriculados - Doctorado en Ciencias Agropecuarias (DCA)
   */
  const DATA_MATRICULADOS_DCA = [
    {
        "cohorte": "2011-2015",
        "alumno": "Ayala Tafoya Felipe",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "PRODUCCIÓN DE PEPINO CON MALLAS SOMBRA DE COLORES"
    },
    {
        "cohorte": "2011-2015",
        "alumno": "García Sañudo Juan Ángel",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "FERTILIZACIÓN CON VERMICOMPOSTA EN MAÍZ CRIOLLO Y SU TASA DE DESCOMPOSICIÓN EN EL SUELO"
    },
    {
        "cohorte": "2011-2015",
        "alumno": "López España Ricardo Guillermo",
        "tutor": "Dr. Sergio Hernández Verdugo",
        "tesis": "VARIACIÓN MORFOLÓGICA Y GENÉTICA E INTERACCIÓN GENOTIPO AMBIENTE DE POBLACIONES DE CHILE (Capsicum spp) SILVESTRE Y CRIOLLO DEL NOROESTE DE MÉXICO"
    },
    {
        "cohorte": "2011-2015",
        "alumno": "Parra Delgado Juan Martín",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "COMPOSTA, MINERALES PRIMARIOS AMORFOS Y MICROORGANISMOS EN LA PRODUCCIÓN Y CALIDAD DE TOMATE"
    },
    {
        "cohorte": "2011-2015",
        "alumno": "Valenzuela López Marino",
        "tutor": "Dr. Tomás Díaz Valdés,",
        "tesis": "RESPUESTA DEL TRABAJO INJERTADO AL USO DE VERMICOMPOSTA Y MANEJO DE CONCENTRACIÓN NUTRIMENTAL EN SISTEMA HIDROPÓNICO"
    },
    {
        "cohorte": "2011-2015",
        "alumno": "López Pérez Héctor Manuel",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "EXPRESIÓN DEL GEN esat-6 EN Mycobacterium smegmatis POR EFECTO DEL AGOTAMIENTO DE FÓSFORO INORGÁNICO."
    },
    {
        "cohorte": "2011-2015",
        "alumno": "Rubio Robles Mario César",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "POTENCIAL ZOONÓTICO DE GARRAPATAS CANINAS COMO VECTOR DE ENFERMEDADES EN SINALOA, MÉXICO."
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Castro Carvajal José Manuel",
        "tutor": "Dr. Raúl Parra Terrazas",
        "tesis": "HERBICIDAS EN MAÍZ Y FRIJOL, RESIDUALIDAD E IMPACTO SOBRE LA MICROBIOTA DEL SUELO."
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Cruz Ortega Jacobo Enrique",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "ESTRATEGIAS BIORRACIONALES CONTRA PLAGAS DE ALMACÉN Y DE IMPACTO AGRÍCOLA EN SINALOA, MÉXICO"
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Medina López Raymundo",
        "tutor": "Dr. Leopoldo Partida Ruvalcaba",
        "tesis": "EFECTO DE INSECTICIDAS BIORRACIONALES SOBRE Liriomyza sativae Blanchard Y SUS PARASITOIDES EN EL CULTIVO DE GARBANZO"
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Oliva Ortiz Luz Del Carmen",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "HERBICIDAS EN MAÍZ Y FRIJOL, RESIDUALIDAD E IMPACTO SOBRE LA MICROBIOTA DEL SUELO."
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Palacios Mondaca César Arturo",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "EFICIENCIA DE RIEGO Y ELECTROMECÁNICA EN DOS SISTEMAS DE RIEGO POR ASPERSIÓN EN PAPA."
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Retes Manjarrez Jesús Enrique",
        "tutor": "Dr. Antonio Garzón Tiznado",
        "tesis": "DETECCIÓN DE GENOTIPOS RESISTENTES A Pepper huasteco yellow vein virus EN GENOTÍPOS DE Capsicum annuum var. glabriusculum D."
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Sánchez Portillo Juan Fernando",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "DISTRIBUCIÓN DE ESPECIES DE Meloidogyne EN SINALOA"
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Sauceda Acosta Carlos Patricio",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "EFECTO DE ESTRÉS HÍDRICO EN LOS ÍNDICES DE EFICIENCIA FISIOLÓGICA Y RENDIMIENTO DE TRIGO"
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Valenzuela Escoboza Fernando Alberto",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "IDENTIFICACIÓN, PLANTAS HOSPEDERAS Y PARASITISMO NATURAL DE Agromyzidae (insecta: díptera) DE INTERÉS AGRONÓMICO EN SINALOA"
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Yáñez Juárez Moisés Gilberto",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "MINERALOTERAPIA PARA EL CONTROL DE CENICILLA (Oidium sp.) EN PEPINO"
    },
    {
        "cohorte": "2012-2016",
        "alumno": "Félix Camacho Silvia Alicia",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "/EFECTO QUE OCASIONA LA TIERRA DE DIATOMEA EN MOSCA BLANCA, PULGÓN Y ENFERMEDADES VIRALES EN CALABAZA Grey Zucchini, Cucurbita Pepo L."
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Rojas Rojas Pedro Alberto",
        "tutor": "Dr. Saúl Parra Terraza",
        "tesis": "CARACTERIZACIÓN GENÓMICA Y FUNCIONAL DE LOS CANALES IÓNICOS DE POTASIO ACTIVADOS POR CALCIO Y LOCALIZACIÓN POR ETAPA FENOLÓGICA DE PIMIENTO MORRÓN (Capsicum annuum L.)"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "López Avendaño Jesús Enrique",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "USO DE IMÁGENES SATELITALES PARA ESTIMAR LA EVAPOTRANSPIRACIÓN REAL REGIONAL EN EL VALLE DE CULIACÁN"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Linares Holguín Orlando Omer",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "MOLECULAR E INFILTRACIÓN DE TRANSGENES EN POBLACIONES DE MAÍZ NATIVO DE SINALOA."
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Martínez Gallardo José Ángel",
        "tutor": "Dr. Tomás Díaz Valdés,",
        "tesis": "IDENTIFICACIÓN, DISTRIBUCIÓN Y RELACIÓN CON FACTORES EDÁFICOS DE ESPECIES DEL NEMATODO AGALLADOR (Meloidogyne SPP.) EN HORTALIZAS, EN SINALOA, MÉXICO"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Avendaño Meza Fabián",
        "tutor": "Dr. Saúl Parra Terrazas Saúl",
        "tesis": "MONITOREO DE LA RESISTENCIA A INSECTICIDAS EN POBLACIONES DE PICUDO DEL CHILE Anthonomus eugenii Cano EN CULIACÁN Y LA CRUZ DE ELOTA, SINALOA"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Salomón Montijo Vladimir",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "FENOLOGÍA COMPARATIVA DE Stenocereus thurberi (engelm.) Buxb. (cactaceae) EN TRES AMBIENTES DEL NORTE DE SINALOA"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Casillas Álvarez Pedro",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "INCIDENCIA DE VIVIPARIDAD Y CALIDAD DE LA PROGENIE EN Stenocereus thurberi (cactaceae)."
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Hernández Espinal Luis Alberto",
        "tutor": "Dra. Idalia Enríquez Verdugo Idalia",
        "tesis": "ESTABLECIMIENTO DE MARCADORES LIGADOS A LA RESISTENCIA A GEMINIVIRUS EN CHILE (Capsicum annuum l.)."
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Aguilar Trejo Carlos Martín",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "IDENTIFICACIÓN DE CERDOS TOLERANTES A PRRS A TRAVÉS DE SELECCIÓN GENÓMICA EN EL SUR DE SONORA, MÉXICO."
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Jiménez Leyva Diego",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "INFLUENCIA DE LA ADICIÓN DE EXTRACTO DE TANINOS HIDROLIZABLES EN LA PRESENCIA DE Escherichia coli, EN LAS HECES DE BOVINOS EN ENGORDA"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Heras Sierra Teresa de Jesús",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "CARACTERIZACIÓN GENOTÍPICA Y PREVALENCIA DE Cryptosporidium parvum EN EXPLOTACIONES OVINAS Y SU DISEMINACIÓN EN AGUAS SUPERFICIALES, DE CULIACÁN, SINALOA."
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Castro del Campo Nohemí",
        "tutor": "Dra. Soila Gaxiola Camacho Maribel",
        "tesis": "PROPORCIÓN DE ÁCIDO LINOLÉICO Y Α-LINOLÉNICO EN DIETAS DE CODORNIZ JAPONESA REPRODUCTORA Y SU EFECTO EN EL DESEMPEÑO PRODUCTIVO Y REPRODUCTIVO"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Castro Tamayo Carlos Bell",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "PROPORCIÓN DE ÁCIDO LINOLÉICO Y Α-LINOLÉNICO EN DIETAS DE CODORNIZ JAPONESA REPRODUCTORA Y SU EFECTO EN EL DESEMPEÑO PRODUCTIVO Y REPRODUCTIVO"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Hernández Ramírez Carlos Víctor",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "DETERMINACIÓN DE PREVALENCIA Y SEROVARIEDADES DE LAS ESPECIES DE Leptospira interrogans, EN HEMODONADORES Y PROBABLES FUENTES DE INFECCIÓN ANIMAL, EN SUS DOMICILIOS"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Coronel Burgos Francisco",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "EFECTO DE LA ADICIÓN DE ZEOLITAS EN DIETAS DE FINALIZACIÓN EN LA RESPUESTA PRODUCTIVA, CIERTOS METABOLITOS SANGUÍNEOS Y CARACTERÍSTICAS DE LA CANAL DE BECERROS HOLSTEIN"
    },
    {
        "cohorte": "2013-2017",
        "alumno": "Esquer Miranda Edgar",
        "tutor": "Dr. Mario Nieves Soto",
        "tesis": "COMPUESTOS BIOACTIVOS DE TRES MACROALGAS DEL SUR DE SONORA Y SU APLICACIÓN EN EL CONTROL DE ENFERMEDADES DE L. vannamei"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "Félix Ortiz José Adán",
        "tutor": "Dr. Nicolás Castañeda Lomas",
        "tesis": "EFECTO DE LA MAREA SOBRE LA COMPOSICIÓN Y ABUNDANCIA DE POSTLARVAS DE CAMARONES PENAEIDAE"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "León Cañedo Jesús Armando",
        "tutor": "Dr. Tomás Díaz Valdéz",
        "tesis": "DINÁMICA Y CARGA AMBIENTAL DE IONES MAYORITARIOS Y OLIGOELEMENTOS EN UN SISTEMA DE RECIRCULACIÓN AGRO-ACUÍCOLA DE CAMARÓN Y HORTALIZAS CON AGUA DE BAJA SALINIDAD"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "Romo Valdez Juan Manuel",
        "tutor": "Dr. Javier Alonso Romo Rubio",
        "tesis": "EFECTO DEL CONSUMO DE ALIMENTO ADICIONADO CON METIONINA DE ZINC EN LA RESPUESTA PRODUCTIVA DEL CERDO"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "Vázquez López Yessica Viridiana",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "MODELADO MATEMÁTICO DE LA VELOCIDAD DE RESPIRACIÓN DE AGUACATE (Persea americana Mill) ALMACENADO EN UN EMPAQUE CON ATMOSFERA MODIFICADA"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "Fierro Sañudo Juan Francisco",
        "tutor": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "tesis": "PRODUCCIÓN, FACTIBILIDAD ECONOMICA Y VALUACIÓN AMBIENTAL DE UN SISTEMA ACUAPÓNICO DE CAMARÓN (Litopenaeus vannamei) CON HORTALIZAS"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "Vargas Nava Alexis Israel",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "VIABILIDAD E INFECTIVIDAD DE NEMATODOS EN AGUAS DE LAS PLANTAS TRATADORAS DE AGUAS RESIDUALES DE LA CIUDAD DE CULIACÁN, SINALOA"
    },
    {
        "cohorte": "2014-2018",
        "alumno": "Abdo de la Parra María Isabel",
        "tutor": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "tesis": "CARACTERIZACIÓN FISIOLÓGICA DE LOS ESTADIOS TEMPRANOS DE LARVAS DE PARGO FLAMENCO (Lutjanus guttatus) EN CULTIVO"
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Quintín Armando Ayala Armenta",
        "tutor": "Dr. Hugo Beltrán Peña",
        "tesis": "ATÓGENOS ASOCIADOS A LA MARCHITEZ DEL TOMATILLO (Physalis ixocarpa Brot.) EN EL NORTE DE SINALOA"
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Jesús del Rosario Ruelas Islas Chuyita",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "REDUCCIÓN DEL ESTRÉS TÉRMICO EN MAÍZ MEDIANTE EL MANEJO DE RIEGO Y NUTRICIÓN."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Tomás Aarón Vega Gutiérrez",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "DIVERSIDAD GENÉTICA DE Phytophthora infestants EN EL ESTADO DE SINALOA."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Alejandro Rivera Villegas",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "EFECTO DE LA ADICIÓN DE CLORHIDRATO DE ZILPATEROL GENÉRICO EN LA RESPUESTA PRODUCTIVA, CARACTERÍSTICAS DE LA CANAL Y COMPOSICIÓN TISULAR DE OVINOS DE PELO EN FINALIZACIÓN."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Luis Antonio Rojas Román",
        "tutor": "Dra. Beatriz Isabel Castro Pérez",
        "tesis": "EFECTO DE LA ADICIÓN DE TANINOS EN RESPUESTA PRODUCTIVA, ENERGÍA, CARACTERÍSTICAS DE LA CANAL, CALIDAD DE LA CARNE Y DIGESTIBILIDAD DE OVINOS DE PELO CON DIETAS DE FINALIZACIÓN."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Jaime Noé Sánchez Pérez",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "EFECTO DEL ENCASTE RACIAL Y TIPO DE GANADO, MANEJO ANTEMORTEM E INDICADORES DE BIENESTAR ANIMALEN EL DESEMPEÑO PRODUCTIVO CARACTERÍSTICAS DE LA CANAL Y CALIDAD DE LA CARNE DE BOVINOS EN CONFINAMIENTO EN TRÓPICO SECO."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Rebeca Flores Castro",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "DEMOSTRACIÓN DE Chlamydia abortus EN VACAS Y BOIRREGAS DEL ESTADO DE SINALOA."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Eva Xitlalic Murillo Ayala",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "UTILIZACIÓN DE EXTRACTOS DE TANINOS EN LA DISMINUCIÓN DE PRODUCCIÓN DE GAS Y COMPUESTOS ASOCIADOS CON LOS OLORES EN LAS HECES DE BOVINOS EN ENGORDA."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Melissa Belem Corona Palazuelos",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "NFLUENCIA DE LA ADICIÓN DE EXTRACTOS DE PLANTAS EN LA CARGA POR Haemonchus sp Y Cooperia sp EN BECERROS AL INICIO DE LA ENGORDA."
    },
    {
        "cohorte": "2015-2019",
        "alumno": "Olivas Salazar Raquel",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "PREVALENCIA, FACTORES ASOCIADOS Y RESISTENCIA ANTIHELMÍNTICA DE NEMÁTODOS GASTROINTESTINALES EN HATOS CAPRINOS EN AGOSTADEROS SEMIÁRIDOS DEL NORESTE DE MÉXICO"
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Cinthya Beatriz Romo Barrón",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "DESEMPEÑO REPRODUCTIVO DE OVEJA PELIBUEY Y FACTORES QUE AFCTAN EL PESO AL NACER DE LOS CORDEROS EN CLIMA TROPICAL SECA."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Víctor Hugo Núñez Benítez",
        "tutor": "Dra. Beatriz Isabel Castro Pérez",
        "tesis": "EFECTO DE GLICONUTRIENTES ALIMENTICIOS EN LA DIGESTIÓN DE NUTRIMENTOS Y PRODUCTIVIDAD DE RUMIANTES EN CONFINAMIENTO"
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Martín Abraham Tirado Ramírez",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "SUPRESIVIDAD DEL SUELO EN LA REPRODUCCIÓN Y POTENCIAL PATÓGENO DE Fusarium oxysporum f. sp. cepae"
    },
    {
        "cohorte": "2016-2020",
        "alumno": "María Alejandra Payán Arzapalo",
        "tutor": "Dr. Mosés Gilberto Yáñez Juárez",
        "tesis": "ANTIBIOSIS DE VARIEDADES DE Sorghum bicolor PARA Melanaphis sacchari E IDENTIFICACIÓN DE MECANISMOS INVOLUCRADOS."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Luz Llarely Cázares Flores",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "EFECTO DEL SILICIO Y CLORO EN EL CRECIMIENTO, DESARROLLO Y RENDIMIENTO DEL PEPINO."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Norma Delia Zazueta Torres",
        "tutor": "Dr. Felipe Ayala Tafoya",
        "tesis": "CANTIDAD Y CALIDAD DE LUZ EN EL CRECIMIENTO Y DESARROLLO DEL PEPINO Y SUS PATÓGENOS FUNGOSOS."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Arnulfo Vicente Pérez",
        "tutor": "Dr. Rubén Barajas Cruz",
        "tesis": "DOSIS ÓPTIMA DE SUPLEMENTACIÓN DEL AGONISTA ADRENÉRGICO-BETA CLORHIDRATO DE ZILPATEROL (GROFACTOR®) Y RESPUESTAS BIOLÓGICAS ASOCIADAS EN OVINOS DE PELO."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Aurelia Mendoza Gómez",
        "tutor": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "tesis": "SELECCIÓN DE GENOTIPOS DE CHILE HABANERO (Capsicum chinense Jacq.) CULTIVADOS EN CASA SOMBRA EN EL VALLE DE MEXICALI."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "César Augusto Flores Dueñas",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "EFICIENCIA DEL SOPORTE NUTRICIONAL EN PACIENTES CANINOS PEDIATRICOS EN ESQUEMA DE ALIMENTACIÓN PARENTERAL PARCIAL."
    },
    {
        "cohorte": "2016-2020",
        "alumno": "Alberto Borbón Gracia",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "ROTACIÓN DE CULTIVOS Y PRÁCTICAS DE LABRANZA SOBRE CARACTERÍSTICAS DEL SUELO Y RENDIMIENTO DE TRIGO EN EL TRÓPICO SECO."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Martha Lidia Gutiérrez Pérez",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "Obtención de bacteriófagos líticos para el control de bacteriosis en cultivos de tomate (Solanum /ycopersicum) en el Valle de Culiacán, Sinaloa."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Reynaldo Millán Chaidez",
        "tutor": "Dr. José Antonio Garzón Tiznado",
        "tesis": "Resistencia a Bemisia tabaco Genn en tomates silvestres y criollos en México."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Lorena Molina Cárdenas",
        "tutor": "Dra. Teresa De Jesús Velázquez Alcaraz",
        "tesis": "Identificación y caracterización genotípica de especies de Fusarium causantes de la malformación del mango (Mangifera indica L.) en Sinaloa"
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Víctor Alfonso Cuate Mozo",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Especies de gallina ciega (coleóptera: Scarabaeoidea) asociados al cultivo de sorgo Sorghum bicolor (L.) Moench en el norte de Sinaloa; México"
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Santos Bersaín Pérez González",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "Viviparidad en Cactáceas de Chiapas"
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Manrique Ojeda Ayala",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Actividad antitumoral y anticarcinogénica de compuestos y fracciones del fruto de papache (Randia echinocarpa)."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Zapata Ramírez Octavio",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Evaluación de una combinación probiotico-prebiotico en dietas para rumiantes finalizados bajo condiciones de alta temperatura ambiental."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Millán Almaraz Martha Irene",
        "tutor": "Dr. Mario Nieves Soto",
        "tesis": "EFECTO DE LA COMPOSICIÓN LIPÍDICA Y FITOPIGMENTARIA DE CUATRO ESPECIES DE MICROALGAS EN LA CALIDAD NUTRICIONAL DE Artemia franciscana"
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Cedillo Cobian Jesús Raymundo",
        "tutor": "Gabriela Silva Hidalgo",
        "tesis": "Seroprevalencia y factores de riesgo asociados a Rickettsia rickettsii en perros del sur de sonora, México."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Díaz Espinoza de los Monteros Daniel",
        "tutor": "Soila Maribel Gaxiola Camacho",
        "tesis": "ANÁLISIS DE LA DISTRIBUCIÓN ESPACIO-TEMPORAL DE LAS PRINCIPALES RAZAS DE OVINOS PRODUCIDAS EN EL ESTADO DE SINALOA DE 2006-2016 Y CARACTERIZACIÓN DE SU PATRÓN DE TOLERANCIA AL ESTRÉS CALÓRICO."
    },
    {
        "cohorte": "2017-2021",
        "alumno": "Cázares Martínez Juana",
        "tutor": "Dr. Sergio Hernández Verdugo",
        "tesis": "Caracterización in situ de poblaciones silvestres de chile chiltepín (Capsicum annuum L) y su heredabilidad entre poblaciones distantes en el Noroeste de México"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Almada Ruiz Víctor Gabriel",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "Alelopatía de extractos vegetales en el control de malezas del Valle del Fuerte"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Armenta Chávez Rogelio",
        "tutor": "Dr. Tomás Díaz Valdés",
        "tesis": "Relación entre la nutrición, la incidencia de gusano cogollero (Spodoptera frugiperda SMITH) V la incidencia Vseveridad del complejo de especies de Fusarium spp. en el cultivo de Maíz (Zea rnavs L.)."
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Arteaga Wences Yesica Janeth",
        "tutor": "Dr. Alfredo Estrada",
        "tesis": "Evaluación de una fuente estandarizada de una fuente de suplementos de aceites esenciales (CRINA(R)RUMIANTES) en comparación con la suplementación de monensina en corderos alimentados con una dieta alta en energía en la fase de finalización"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Ascención Betanzos Guadalupe",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Análisis espacio-temporal de las poblaciones de gusanos de la cápsula del garbanzo (Cicer arietinum) en Sinaloa para la construcción de un modelo de pronostico"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Buelna Tarín Salomón",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Nutrición con N, P, K y bioestimulantes en la producción de chile jalapeño (Capsicum annuum L.) en el Norte de Sinaloa"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Cárdenas Contreras Miguel Antonio",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "Aislamiento, identificación y caracterización del perfil de resistencia de cepas de Salmonella spp aisladas de huevo y evaluación de la actividad inhibitoria in vivo del ajo (Allium sativum) sobre S. enteritidis en gallinas)"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Cárdenas Rodríguez Josué",
        "tutor": "Dr. Moisés G. Yánez Juarez",
        "tesis": "Identificación y determinación de patogenicidad oomycetes provenientes de agua superficial de ríos y canales en el municipio de Culiacán, Sinaloa"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Chaidez Ibarra Miguel Ángel",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Detección molecular de Mycoplasma en aves de postura comercial en Sinaloa"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Corona Cárdenas Abril",
        "tutor": "Dra. Gabriela Silva Hidalgo",
        "tesis": "Evaluación de la patogenicidad entérica entérica in vivo"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Galindo Sánchez Katheen Fabiola",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Plan de manejo integrado de plagas, caso de estudio: Desmodus rotundos en Sinaloa"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Gerardo Lugo Saida Selene",
        "tutor": "Dr. Moisés Gilberto Yáñez Juárez",
        "tesis": "Caracterización fenotípica, molecular, patogénica y sensibilidad a fungicidas de pestalotioides causantes de la mancha plateada del mango en México"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "González Castro Alfredo",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "IDENTIFICACIÓN MOLECUAR Y PATOGENICIDAD DE PATOGENOS EDAFICOS EN CULTIVO DE CHILE"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Maldonado Amparo María de los Ángeles",
        "tutor": "Dr. Jorge Saúl Ramírez Pérez",
        "tesis": "Estrategias de explotación del recurso peces marinos de escama capturado por la pesquería ribereña de Mazatlán, Sinaloa, México"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Mc Caughey Espinoza Diana Miriam",
        "tutor": "Dr. Álvaro Reyes Olivas",
        "tesis": "Micropropagación, establecimiento y desarrollo en campo del cosahui del sur Krameria erecta Wild. ex Schult &amp; Schult en el estado de Sonora"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Ramos Méndez Jorge Luis",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Valor energético de grasa reciclada obtenida de trampa de vertedero utilizada como ingrediente en las dietas de finalización para el ganado ovino de engorda"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Román Román Leonardo",
        "tutor": "Dr. Felipe Ayala Tafoya",
        "tesis": "Partenocarpia, fitorreguladores sintéticos y vermicomposta, como fuente de hormonas naturales, en el crecimiento y rendimiento de calabacita de invernadero"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Rubio Rocha Yamel Guadalupe",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Situación de la relación ganado-jaguar (Panthera onca linnaeus, 1758) en un corredor biológico y su impacto en la conservación y el desarrollo comunitario en Sinaloa, México"
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Villa Bojorquez Jaime",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "Cuantificación de compuestos fenólicos, antocianinas y capacidad antioxidante de maíces nativos de Sinaloa sometidos a estrés hídrico."
    },
    {
        "cohorte": "2018-2022",
        "alumno": "Zazueta Gutierrez Ana Citlaly",
        "tutor": "Dr. Francisco Gerardo Ríos Rincón",
        "tesis": "Valoración de indicadores relacionados al bienestar en bovinos productores de carne en el trópico seco"
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Barraza Tizoc Claudia Leonor",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Caracterización de microbioma presentes en garrapatas Rhipicephalus microplus de bovinos en Sinaloa."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Cepeda Quintero Higinio",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "FRECUENCIA DE MASTITIS BOVINA EN HATOS DE DOBLE PROPÓSITO E IDENTIFICACIÓN DE LOS PRINCIPALES AGENTES ETIOLÓGICOS Y EVALUACIÓN DE LA RESISTENCIA BACTERIANA."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Douriet Angulo Alan",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Virulencia y capacidad de producción de micotoxinas de Fusarium falciforme del estado de Sinaloa"
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Edeza Urías Jorge Alberto",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Caracterización morfológica, molecular y virulencia de especies Fusarium asociadas a la fusariosis vasculas del garbanzo (Cicer arietinum L.) en el estado de Sinaloa."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Gómez Pérez Valeria",
        "tutor": "Dr. Pedro Sánchez Peña",
        "tesis": "COLECCIÓN, CARACTERIZACIÓN AGROMORFOLÓGICA, FÍSICO-QUÍMICA Y NUTRICIONAL DE MAÍCES NATIVOS DE SINALOA, MÉXICO."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Linares Cordova Joel Fitzgerald",
        "tutor": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "tesis": "ESTILOS DE AFRONTAMIENTO AL ESTRÉS (EAE) Y SU IMPLICACIÓN EN EL ESTATUS FISIOLÓGICO, GENICO Y ENDOCRINO EN JUVENILES DE LISA Mugil cephalus"
    },
    {
        "cohorte": "2019-2023",
        "alumno": "López Ibarra José Arturo",
        "tutor": "Teresa de Jesús Velázquez Alcaraz",
        "tesis": "INTERCOMPARACIÓN DE EVAPOTRANSPIRACIÓN EN SUPERFICIES HETEROGÉNEAS MEDIANTE EL USO DE SCINTILÓMETROS Y COVARIANZA DE VÓRTICES EN LA ZONA ÁRIDA Y SEMIÁRIDA DE MÉXICO"
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Márquez Zequera Isidro",
        "tutor": "Dr. José Antonio Garzón Tiznado",
        "tesis": "ANÁLISIS COMPARATIVO DE LA DIVERSIDAD GENÉTICA DE Clavibacter michiganensis subsp. michiganensis AISLADAS DE MÉXICO POR RAPD-PCR Y BOX- PCR."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Rojo Salomón Juan Enrique",
        "tutor": "Gabriel Antonio Lugo García",
        "tesis": "DIAGNOSTICO DE PLAGAS EN MANGO (Mangifera indica L.) CV. KENTH Y SU MANEJO CON HONGOS ENTOMOPATOGENOS EN AHOME, SINALOA."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Solís Carrasco Jesús Daniel",
        "tutor": "Soila Maribel Gaxiola Camacho",
        "tesis": "DETECCIÓN IN VITRO DE RESISTENCIA ANTIHELMÍNTICA DE Haemonchus contortus PROCEDENTES DE OVINOS EN RASTRO."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Soto López Jeidy Valeria",
        "tutor": "Dr. Juan Carlos Robles Estrada",
        "tesis": "Efecto del estrés calórica en distintas épocas del año en el bienestar animal, la conducta productiva, individual y social de ovinos cruza Dorper X Pelibuey y Kathadin X Pelibuey en engorda intensiva en el trópico seco."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Valdez Sandoval José Johanatan",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "BIOSEGURIDAD EN LABORATORIOS, UNA AREA DE OPORTUNIDAD EN EL CONTEXTO DE LA INICIATIVA MUNDIAL &ldquo;UNA SOLA SALUD&rdquo;."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Valenzuela Ortiz Griselda",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Mecanismos de respuesta de Colletotrichum al estrés abiótico causado por quitosano."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Villalobos Martínez Yuri Diana",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "Inclusión de a-linolénico omega-3 en dietas de gallinas reproductoras y su efecto en el desempeño productivo y reproductivo."
    },
    {
        "cohorte": "2019-2023",
        "alumno": "Emus Medina Alexis",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "Caracterización fisiológica y fitoquímica de fruto Partimentiera edulis y su efecto sobre la actividad de enzimas relacionadas al síndrome metabólico."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Rubio Aragón Walter Arturo",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Captura de Anthonomus eugenii con trampas adhesivas modificadas en cultivos de Capsicum anuum."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Mendoza Cortéz Daniel Alejandro",
        "tutor": "Dr. Alfredo Estrada Angulo",
        "tesis": "Comparación de antibióticos suplementarios (monensina y virginiamicina) frente a la convinació de mezclas de aceites esenciales y vitamina D en la respuesta productiva energética de la dieta y las características de la canal de rumiantes en finalización."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Villalba Robles Yazmín Edith",
        "tutor": "Dra. Soila Maribel Gaxiola Camacho",
        "tesis": "Consolidación del modelo de enseñanza digital en la facultad de medicina veterinaria y zootecnia."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Zazueta López Jorge Enrique",
        "tutor": "Dr. Guadalupe Alfonso López Urquidez",
        "tesis": "Dinámica de los nutrientes en el cultivo cebolla (Allium cepa L.)"
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Espinoza León María Teresa",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "Efecto del alelo fecge del gen gdf-9 y fecxg y fecxl del gen bmp-15 en rasgos reproductivos y productivos de ovejas de pelo en explotaciones comerciales.acanh"
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Armenta López Arturo Rafael",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Manejo agroecológico del gorgojo pardo Acanthos celides obtectus (Say) en Frijol almacenado para semilla."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Lizárraga Reyes Carlos",
        "tutor": "Dra. Nohemí Castro del Campo",
        "tesis": "Evaluación de la capacidad de desarrollo embrionario de ovocitos bovinos provenientes de ovarios de vacas de rastro, efecto de la interacción racial."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Urías Camacho Alejandro",
        "tutor": "Dr. Gustavo Alejandro Montes de Oca Rodríguez",
        "tesis": "Desarrollo de un anfibio robótico de medición remota de parámetros fisicoquímicos y recolección de sedimentos"
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Liñeiro Astiazarán Horacio",
        "tutor": "Dr. Felipe Ayala Tafoya",
        "tesis": "Contribución de los cultivos perennes (nogal) al secuestro de carbono en la costa de Hermosillo, Sonora, México."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Molina Gámez Gamaliel",
        "tutor": "Dr. Horacio Dávila Ramos",
        "tesis": "Efecto de la adición de Undecilenato de Boldenona en los parámetros productivos, y bienestar animal en conejos de engorda."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Zatarain Daniel Eduardo",
        "tutor": "Dra. Idalia Enríquez Verdugo",
        "tesis": "Identificación molecular de Anaplasma ovis en piojos presentes en caprinos de Sinaloa."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "González Ruiz Andrés",
        "tutor": "Dr. Guadalupe Alfonso López Urquídez",
        "tesis": "Resistencia de avena fatua l. a herbicidas inhibidores de la acetolactato sintasa y acetil coenzima a carboxilasa en el cultivo de trigo."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Sánchez García Dulce Carolina",
        "tutor": "Dra. Nohemí Castro del Campo",
        "tesis": "Estudio serológico y bacteriológico de Brucella spp. en ganaderos, Médicos veterinarios y ganado bovino de los municipios del Norte de Sinaloa."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Camacho Palafox José Alberto",
        "tutor": "Dr. Jesús José Portillo Loera",
        "tesis": "Evaluación de la adición del alga espirulina (Arthrospira maxima) sobre parámetros productivos, calidad del huevo en gallinas de postura."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Rábago Zavala Karen",
        "tutor": "Dr. Fernando Alberto Valenzuela Escoboza",
        "tesis": "Caracterización morfológica, molecular y patogénica de aislados de Rhizoctonia spp., de papa, frijol y maíz dulce en el norte de Sinaloa."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "González Alfaro Arturo",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Psílidos (Hemiptera: Psylloidea) de la región norte del estado de Sinaloa, México."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Gurrola Ramírez Aramis",
        "tutor": "Dra. Nohemí Castro de Campo",
        "tesis": "Evaluación de genómica comparativa en la virulencia de Rickettsia spp. aisladas de Sinaloa en contraste con cepas de referencia Rickettsiae virulentas."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Valle Castillo Laura Beatriz",
        "tutor": "Dr. Carlos Alfonso López Orona",
        "tesis": "Aislamiento e identificación de proteasas con potencial aplicación en agricultura, obtenidas a partir de hongos nematófagos."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Ceballos Chávez Ángel Rosario",
        "tutor": "Dra. Blanca Elvira López Valenzuela,",
        "tesis": "Aislamiento e identificación de hongos fitopatógenos en cultivo de durazno (Prunus persica L. Batsch.) en el sur de Chihuahua y el efecto antagónico de Trichoderma asperellum."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Herrera Rodríguez Gabriel",
        "tutor": "Dr. Gabriel Antonio Lugo García",
        "tesis": "Aspectos epidemiológicos y de control del hongo sclerotium rolfsii causante de la pudrición sureña de la papa en el estado de Sinaloa y sonora."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Calderón Alonso Alma Carolina",
        "tutor": "Dr. Francisco Gerardo Ríos Rincón",
        "tesis": "Validación de un programa de evaluación y clasificación de canales bovinas mexicanas."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "González Molotla Iris Alejandrina",
        "tutor": "Dr. Fernando Alberto Valenzuela Escoboza",
        "tesis": "Aislamiento, identificación y patogenicidad de hongos de la madera asociados a la muerte descendente del arándano (Vaccinium corymbosum L), en el norte de Sinaloa y su manejo biorracional."
    },
    {
        "cohorte": "2020-2024",
        "alumno": "Mejía Lastra Antonio de Jesús",
        "tutor": "Dra. Teresa de Jesús Velázquez",
        "tesis": "Enfriamiento de ganado lechero Holstein durante el periodo seco: efectos en la vaca y su ternero."
    }
];

  const searchInput = document.getElementById("busquedaMatriculadosDCA");
  const cohorteFilter = document.getElementById("filtroCohorteMatriculadosDCA");
  const tbody = document.querySelector("#tablaMatriculadosDCA tbody");
  const paginationUl = document.getElementById("paginacionMatriculadosDCA");

  const limit = 10;
  let currentPage = 1;
  let filteredData = [...DATA_MATRICULADOS_DCA];

  // Poblar selector de generación
  [...new Set(DATA_MATRICULADOS_DCA.map(d => d.cohorte))].sort().reverse().forEach(c => {
    cohorteFilter.add(new Option(c, c));
  });

  function renderTable() {
    tbody.innerHTML = '';
    const slice = filteredData.slice((currentPage - 1) * limit, currentPage * limit);
    if (!slice.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="text-center py-4 text-muted">No se encontraron resultados para los filtros seleccionados.</td></tr>';
      return;
    }
    slice.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="text-center">${d.cohorte}</td>
        <td><strong>${d.alumno}</strong></td>
        <td>${d.tutor}</td>
        <td>${d.tesis}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderPagination() {
    paginationUl.innerHTML = '';
    const totalPages = Math.ceil(filteredData.length / limit);
    if (totalPages <= 1) return;

    const addBtn = (text, targetPage, active = false, disabled = false) => {
      const li = document.createElement('li');
      li.className = `page-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`;
      li.innerHTML = `<a class="page-link" href="#">${text}</a>`;
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

    addBtn('&laquo;', currentPage - 1, false, currentPage === 1);

    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    if (start > 1) {
      addBtn(1, 1);
      if (start > 2) addBtn('...', null, false, true);
    }

    for (let i = start; i <= end; i++) {
      addBtn(i, i, i === currentPage);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) addBtn('...', null, false, true);
      addBtn(totalPages, totalPages);
    }

    addBtn('&raquo;', currentPage + 1, false, currentPage === totalPages);
  }

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const c = cohorteFilter.value;
    filteredData = DATA_MATRICULADOS_DCA.filter(d => 
      (!c || c === 'todos' || d.cohorte === c) &&
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  searchInput.addEventListener('input', applyFilter);
  cohorteFilter.addEventListener('change', applyFilter);

  applyFilter();
});
