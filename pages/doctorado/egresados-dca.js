document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Egresados y Graduados - Doctorado en Ciencias Agropecuarias (DCA)
   */
  const DATA_EGRESADOS_DCA = [
    {
        "alumno": "Cinthya Beatriz Romo Barrón",
        "tema": "DESEMPEÑO REPRODUCTIVO DE OVEJA PELIBUEY Y FACTORES QUE AFCTAN EL PESO AL NACER DE LOS CORDEROS EN CLIMA TROPICAL SECA.",
        "comite": "Dr. Jesús José Portillo Loera",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Víctor Hugo Núñez Benítez",
        "tema": "EFECTO DE GLICONUTRIENTES ALIMENTICIOS EN LA DIGESTIÓN DE NUTRIMENTOS Y PRODUCTIVIDAD DE RUMIANTES EN CONFINAMIENTO",
        "comite": "Dra. Beatriz Isabel Castro Pérez",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Martín Abraham Tirado Ramírez",
        "tema": "SUPRESIVIDAD DEL SUELO EN LA REPRODUCCIÓN Y POTENCIAL PATÓGENO DE Fusarium oxysporum f. sp. cepae",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "María Alejandra Payán Arzapalo",
        "tema": "ANTIBIOSIS DE VARIEDADES DE Sorghum bicolor PARA Melanaphis sacchari E IDENTIFICACIÓN DE MECANISMOS INVOLUCRADOS.",
        "comite": "Dr. Mosés Gilberto Yáñez Juárez",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Luz Llarely Cázares Flores",
        "tema": "EFECTO DEL SILICIO Y CLORO EN EL CRECIMIENTO, DESARROLLO Y RENDIMIENTO DEL PEPINO.",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Norma Delia Zazueta Torres",
        "tema": "CANTIDAD Y CALIDAD DE LUZ EN EL CRECIMIENTO Y DESARROLLO DEL PEPINO Y SUS PATÓGENOS FUNGOSOS.",
        "comite": "Dr. Felipe Ayala Tafoya",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Arnulfo Vicente Pérez",
        "tema": "DOSIS ÓPTIMA DE SUPLEMENTACIÓN DEL AGONISTA ADRENÉRGICO-BETA CLORHIDRATO DE ZILPATEROL (GROFACTOR®) Y RESPUESTAS BIOLÓGICAS ASOCIADAS EN OVINOS DE PELO.",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Aurelia Mendoza Gómez",
        "tema": "SELECCIÓN DE GENOTIPOS DE CHILE HABANERO (Capsicum chinense Jacq.) CULTIVADOS EN CASA SOMBRA EN EL VALLE DE MEXICALI.",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "César Augusto Flores Dueñas",
        "tema": "EFICIENCIA DEL SOPORTE NUTRICIONAL EN PACIENTES CANINOS PEDIATRICOS EN ESQUEMA DE ALIMENTACIÓN PARENTERAL PARCIAL.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Alberto Borbón Gracia",
        "tema": "ROTACIÓN DE CULTIVOS Y PRÁCTICAS DE LABRANZA SOBRE CARACTERÍSTICAS DEL SUELO Y RENDIMIENTO DE TRIGO EN EL TRÓPICO SECO.",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2016-2020"
    },
    {
        "alumno": "Quintín Armando Ayala Armenta",
        "tema": "ATÓGENOS ASOCIADOS A LA MARCHITEZ DEL TOMATILLO (Physalis ixocarpa Brot.) EN EL NORTE DE SINALOA",
        "comite": "Dr. Hugo Beltrán Peña",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Jesús del Rosario Ruelas Islas Chuyita",
        "tema": "REDUCCIÓN DEL ESTRÉS TÉRMICO EN MAÍZ MEDIANTE EL MANEJO DE RIEGO Y NUTRICIÓN.",
        "comite": "Dr. Álvaro Reyes Olivas",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Tomás Aarón Vega Gutiérrez",
        "tema": "DIVERSIDAD GENÉTICA DE Phytophthora infestants EN EL ESTADO DE SINALOA.",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Alejandro Rivera Villegas",
        "tema": "EFECTO DE LA ADICIÓN DE CLORHIDRATO DE ZILPATEROL GENÉRICO EN LA RESPUESTA PRODUCTIVA, CARACTERÍSTICAS DE LA CANAL Y COMPOSICIÓN TISULAR DE OVINOS DE PELO EN FINALIZACIÓN.",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Luis Antonio Rojas Román",
        "tema": "EFECTO DE LA ADICIÓN DE TANINOS EN RESPUESTA PRODUCTIVA, ENERGÍA, CARACTERÍSTICAS DE LA CANAL, CALIDAD DE LA CARNE Y DIGESTIBILIDAD DE OVINOS DE PELO CON DIETAS DE FINALIZACIÓN.",
        "comite": "Dra. Beatriz Isabel Castro Pérez",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Jaime Noé Sánchez Pérez",
        "tema": "EFECTO DEL ENCASTE RACIAL Y TIPO DE GANADO, MANEJO ANTEMORTEM E INDICADORES DE BIENESTAR ANIMALEN EL DESEMPEÑO PRODUCTIVO CARACTERÍSTICAS DE LA CANAL Y CALIDAD DE LA CARNE DE BOVINOS EN CONFINAMIENTO EN TRÓPICO SECO.",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Rebeca Flores Castro",
        "tema": "DEMOSTRACIÓN DE Chlamydia abortus EN VACAS Y BOIRREGAS DEL ESTADO DE SINALOA.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Eva Xitlalic Murillo Ayala",
        "tema": "UTILIZACIÓN DE EXTRACTOS DE TANINOS EN LA DISMINUCIÓN DE PRODUCCIÓN DE GAS Y COMPUESTOS ASOCIADOS CON LOS OLORES EN LAS HECES DE BOVINOS EN ENGORDA.",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Melissa Belem Corona Palazuelos",
        "tema": "NFLUENCIA DE LA ADICIÓN DE EXTRACTOS DE PLANTAS EN LA CARGA POR Haemonchus sp Y Cooperia sp EN BECERROS AL INICIO DE LA ENGORDA.",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Olivas Salazar Raquel",
        "tema": "PREVALENCIA, FACTORES ASOCIADOS Y RESISTENCIA ANTIHELMÍNTICA DE NEMÁTODOS GASTROINTESTINALES EN HATOS CAPRINOS EN AGOSTADEROS SEMIÁRIDOS DEL NORESTE DE MÉXICO",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2015-2019"
    },
    {
        "alumno": "Félix Ortiz José Adán",
        "tema": "EFECTO DE LA MAREA SOBRE LA COMPOSICIÓN Y ABUNDANCIA DE POSTLARVAS DE CAMARONES PENAEIDAE",
        "comite": "Dr. Nicolás Castañeda Lomas",
        "cohorte": "2014-2018"
    },
    {
        "alumno": "Romo Valdez Juan Manuel",
        "tema": "EFECTO DEL CONSUMO DE ALIMENTO ADICIONADO CON METIONINA DE ZINC EN LA RESPUESTA PRODUCTIVA DEL CERDO",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2014-2018"
    },
    {
        "alumno": "Vázquez López Yessica Viridiana",
        "tema": "MODELADO MATEMÁTICO DE LA VELOCIDAD DE RESPIRACIÓN DE AGUACATE (Persea americana Mill) ALMACENADO EN UN EMPAQUE CON ATMOSFERA MODIFICADA",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2014-2018"
    },
    {
        "alumno": "Vargas Nava Alexis Israel",
        "tema": "VIABILIDAD E INFECTIVIDAD DE NEMATODOS EN AGUAS DE LAS PLANTAS TRATADORAS DE AGUAS RESIDUALES DE LA CIUDAD DE CULIACÁN, SINALOA",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2014-2018"
    },
    {
        "alumno": "Abdo de la Parra María Isabel",
        "tema": "CARACTERIZACIÓN FISIOLÓGICA DE LOS ESTADIOS TEMPRANOS DE LARVAS DE PARGO FLAMENCO (Lutjanus guttatus) EN CULTIVO",
        "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca",
        "cohorte": "2014-2018"
    },
    {
        "alumno": "Rojas Rojas Pedro Alberto",
        "tema": "CARACTERIZACIÓN GENÓMICA Y FUNCIONAL DE LOS CANALES IÓNICOS DE POTASIO ACTIVADOS POR CALCIO Y LOCALIZACIÓN POR ETAPA FENOLÓGICA DE PIMIENTO MORRÓN (Capsicum annuum L.)",
        "comite": "Dr. Saúl Parra Terraza",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "López Avendaño Jesús Enrique",
        "tema": "USO DE IMÁGENES SATELITALES PARA ESTIMAR LA EVAPOTRANSPIRACIÓN REAL REGIONAL EN EL VALLE DE CULIACÁN",
        "comite": "Dr. Tomás Díaz Valdés",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Linares Holguín Orlando Omer",
        "tema": "MOLECULAR E INFILTRACIÓN DE TRANSGENES EN POBLACIONES DE MAÍZ NATIVO DE SINALOA.",
        "comite": "Dr. Pedro Sánchez Peña",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Martínez Gallardo José Ángel",
        "tema": "IDENTIFICACIÓN, DISTRIBUCIÓN Y RELACIÓN CON FACTORES EDÁFICOS DE ESPECIES DEL NEMATODO AGALLADOR (Meloidogyne SPP.) EN HORTALIZAS, EN SINALOA, MÉXICO",
        "comite": "Dr. Tomás Díaz Valdés,",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Avendaño Meza Fabián",
        "tema": "MONITOREO DE LA RESISTENCIA A INSECTICIDAS EN POBLACIONES DE PICUDO DEL CHILE Anthonomus eugenii Cano EN CULIACÁN Y LA CRUZ DE ELOTA, SINALOA",
        "comite": "Dr. Saúl Parra Terrazas Saúl",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Salomón Montijo Vladimir",
        "tema": "FENOLOGÍA COMPARATIVA DE Stenocereus thurberi (engelm.) Buxb. (cactaceae) EN TRES AMBIENTES DEL NORTE DE SINALOA",
        "comite": "Dr. Álvaro Reyes Olivas",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Casillas Álvarez Pedro",
        "tema": "INCIDENCIA DE VIVIPARIDAD Y CALIDAD DE LA PROGENIE EN Stenocereus thurberi (cactaceae).",
        "comite": "Dr. Álvaro Reyes Olivas",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Hernández Espinal Luis Alberto",
        "tema": "ESTABLECIMIENTO DE MARCADORES LIGADOS A LA RESISTENCIA A GEMINIVIRUS EN CHILE (Capsicum annuum l.).",
        "comite": "Dra. Idalia Enríquez Verdugo Idalia",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Aguilar Trejo Carlos Martín",
        "tema": "IDENTIFICACIÓN DE CERDOS TOLERANTES A PRRS A TRAVÉS DE SELECCIÓN GENÓMICA EN EL SUR DE SONORA, MÉXICO.",
        "comite": "Dr. Javier Alonso Romo Rubio",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Jiménez Leyva Diego",
        "tema": "INFLUENCIA DE LA ADICIÓN DE EXTRACTO DE TANINOS HIDROLIZABLES EN LA PRESENCIA DE Escherichia coli, EN LAS HECES DE BOVINOS EN ENGORDA",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Heras Sierra Teresa de Jesús",
        "tema": "CARACTERIZACIÓN GENOTÍPICA Y PREVALENCIA DE Cryptosporidium parvum EN EXPLOTACIONES OVINAS Y SU DISEMINACIÓN EN AGUAS SUPERFICIALES, DE CULIACÁN, SINALOA.",
        "comite": "Dr. Rubén Barajas Cruz",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Castro del Campo Nohemí",
        "tema": "PROPORCIÓN DE ÁCIDO LINOLÉICO Y Α-LINOLÉNICO EN DIETAS DE CODORNIZ JAPONESA REPRODUCTORA Y SU EFECTO EN EL DESEMPEÑO PRODUCTIVO Y REPRODUCTIVO",
        "comite": "Dra. Soila Gaxiola Camacho Maribel",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Castro Tamayo Carlos Bell",
        "tema": "PROPORCIÓN DE ÁCIDO LINOLÉICO Y Α-LINOLÉNICO EN DIETAS DE CODORNIZ JAPONESA REPRODUCTORA Y SU EFECTO EN EL DESEMPEÑO PRODUCTIVO Y REPRODUCTIVO",
        "comite": "Dr. Jesús José Portillo Loera",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Hernández Ramírez Carlos Víctor",
        "tema": "DETERMINACIÓN DE PREVALENCIA Y SEROVARIEDADES DE LAS ESPECIES DE Leptospira interrogans, EN HEMODONADORES Y PROBABLES FUENTES DE INFECCIÓN ANIMAL, EN SUS DOMICILIOS",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Coronel Burgos Francisco",
        "tema": "EFECTO DE LA ADICIÓN DE ZEOLITAS EN DIETAS DE FINALIZACIÓN EN LA RESPUESTA PRODUCTIVA, CIERTOS METABOLITOS SANGUÍNEOS Y CARACTERÍSTICAS DE LA CANAL DE BECERROS HOLSTEIN",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Esquer Miranda Edgar",
        "tema": "COMPUESTOS BIOACTIVOS DE TRES MACROALGAS DEL SUR DE SONORA Y SU APLICACIÓN EN EL CONTROL DE ENFERMEDADES DE L. vannamei",
        "comite": "Dr. Mario Nieves Soto",
        "cohorte": "2013-2017"
    },
    {
        "alumno": "Castro Carvajal José Manuel",
        "tema": "HERBICIDAS EN MAÍZ Y FRIJOL, RESIDUALIDAD E IMPACTO SOBRE LA MICROBIOTA DEL SUELO.",
        "comite": "Dr. Raúl Parra Terrazas",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Cruz Ortega Jacobo Enrique",
        "tema": "ESTRATEGIAS BIORRACIONALES CONTRA PLAGAS DE ALMACÉN Y DE IMPACTO AGRÍCOLA EN SINALOA, MÉXICO",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Medina López Raymundo",
        "tema": "EFECTO DE INSECTICIDAS BIORRACIONALES SOBRE Liriomyza sativae Blanchard Y SUS PARASITOIDES EN EL CULTIVO DE GARBANZO",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Oliva Ortiz Luz Del Carmen",
        "tema": "HERBICIDAS EN MAÍZ Y FRIJOL, RESIDUALIDAD E IMPACTO SOBRE LA MICROBIOTA DEL SUELO.",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Retes Manjarrez Jesús Enrique",
        "tema": "DETECCIÓN DE GENOTIPOS RESISTENTES A Pepper huasteco yellow vein virus EN GENOTÍPOS DE Capsicum annuum var. glabriusculum D.",
        "comite": "Dr. Antonio Garzón Tiznado",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Sánchez Portillo Juan Fernando",
        "tema": "DISTRIBUCIÓN DE ESPECIES DE Meloidogyne EN SINALOA",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Sauceda Acosta Carlos Patricio",
        "tema": "EFECTO DE ESTRÉS HÍDRICO EN LOS ÍNDICES DE EFICIENCIA FISIOLÓGICA Y RENDIMIENTO DE TRIGO",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Valenzuela Escoboza Fernando Alberto",
        "tema": "IDENTIFICACIÓN, PLANTAS HOSPEDERAS Y PARASITISMO NATURAL DE Agromyzidae (insecta: díptera) DE INTERÉS AGRONÓMICO EN SINALOA",
        "comite": "Dr. Álvaro Reyes Olivas",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Yáñez Juárez Moisés Gilberto",
        "tema": "MINERALOTERAPIA PARA EL CONTROL DE CENICILLA (Oidium sp.) EN PEPINO",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Félix Camacho Silvia Alicia",
        "tema": "/EFECTO QUE OCASIONA LA TIERRA DE DIATOMEA EN MOSCA BLANCA, PULGÓN Y ENFERMEDADES VIRALES EN CALABAZA Grey Zucchini, Cucurbita Pepo L.",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2012-2016"
    },
    {
        "alumno": "Ayala Tafoya Felipe",
        "tema": "PRODUCCIÓN DE PEPINO CON MALLAS SOMBRA DE COLORES",
        "comite": "Dr. Leopoldo Partida Ruvalcaba",
        "cohorte": "2011-2015"
    },
    {
        "alumno": "García Sañudo Juan Ángel",
        "tema": "FERTILIZACIÓN CON VERMICOMPOSTA EN MAÍZ CRIOLLO Y SU TASA DE DESCOMPOSICIÓN EN EL SUELO",
        "comite": "Dr. Pedro Sánchez Peña",
        "cohorte": "2011-2015"
    },
    {
        "alumno": "López España Ricardo Guillermo",
        "tema": "VARIACIÓN MORFOLÓGICA Y GENÉTICA E INTERACCIÓN GENOTIPO AMBIENTE DE POBLACIONES DE CHILE (Capsicum spp) SILVESTRE Y CRIOLLO DEL NOROESTE DE MÉXICO",
        "comite": "Dr. Sergio Hernández Verdugo",
        "cohorte": "2011-2015"
    },
    {
        "alumno": "Parra Delgado Juan Martín",
        "tema": "COMPOSTA, MINERALES PRIMARIOS AMORFOS Y MICROORGANISMOS EN LA PRODUCCIÓN Y CALIDAD DE TOMATE",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2011-2015"
    },
    {
        "alumno": "López Pérez Héctor Manuel",
        "tema": "EXPRESIÓN DEL GEN esat-6 EN Mycobacterium smegmatis POR EFECTO DEL AGOTAMIENTO DE FÓSFORO INORGÁNICO.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2011-2015"
    },
    {
        "alumno": "Rubio Robles Mario César",
        "tema": "POTENCIAL ZOONÓTICO DE GARRAPATAS CANINAS COMO VECTOR DE ENFERMEDADES EN SINALOA, MÉXICO.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2011-2015"
    }
];

  const configEgresadosDCA = {
    busquedaId: "busquedaEgresadoDCA",
    cohorteId: "filtroCohorteEgresadoDCA",
    tbodySelector: "#tablaEgresadosDCA tbody",
    paginacionId: "paginacionEgresadosDCA",
  };

  inicializarTablaTesis(DATA_EGRESADOS_DCA, configEgresadosDCA);
});
