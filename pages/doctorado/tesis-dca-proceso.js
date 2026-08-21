document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Tesis en Proceso - Doctorado en Ciencias Agropecuarias (DCA)
   */
  const DATA_DCA = [
    {
        "alumno": "Martha Lidia Gutiérrez Pérez",
        "tema": "Obtención de bacteriófagos líticos para el control de bacteriosis en cultivos de tomate (Solanum /ycopersicum) en el Valle de Culiacán, Sinaloa.",
        "comite": "Dr. Pedro Sánchez Peña, Dra. Nohelia Castro Del Campo, Dra. Mitzi Dayanira Estrada Acosta",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Reynaldo Millán Chaidez",
        "tema": "Resistencia a Bemisia tabaco Genn en tomates silvestres y criollos en México.",
        "comite": "Dr. José Antonio Garzón Tiznado, Dr. Jesús Enrique Retes Manjarrez, Dr. Sergio Hernández Verdugo, Dr. Jesús José Portillo Loera.",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Lorena Molina Cárdenas",
        "tema": "Identificación y caracterización genotípica de especies de Fusarium causantes de la malformación del mango (Mangifera indica L.) en Sinaloa",
        "comite": "Dra. Teresa De Jesús Velázquez Alcaraz, Dr. Carlos Alfonso López Orona, Dr. Sixto Velarde Félix, Dr. Felipe Ayala Tafoya, Dr. Guadalupe Alfonso López Urquídez",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Víctor Alfonso Cuate Mozo",
        "tema": "Especies de gallina ciega (coleóptera: Scarabaeoidea) asociados al cultivo de sorgo Sorghum bicolor (L.) Moench en el norte de Sinaloa; México",
        "comite": "Dr. Gabriel Antonio Lugo García, Dr. Agustín Aragón García, Dr. Álvaro Reyes Olivas, Dr. Juan Fernando Sánchez Portillo",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Santos Bersaín Pérez González",
        "tema": "Viviparidad en Cactáceas de Chiapas",
        "comite": "Dr. Álvaro Reyes Olivas, Dr. Gabriel Antonio Lugo García, Dr. Bardo Heleodoro Sánchez Soto",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Manrique Ojeda Ayala",
        "tema": "Actividad antitumoral y anticarcinogénica de compuestos y fracciones del fruto de papache (Randia echinocarpa).",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Francisco Delgado Vargas, Dra. Idalia Enríquez Verdugo, Dr. Ignacio Osuna Ramírez, Dra. Gabriela López Angulo.",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Zapata Ramírez Octavio",
        "tema": "Evaluación de una combinación probiotico-prebiotico en dietas para rumiantes finalizados bajo condiciones de alta temperatura ambiental.",
        "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urias Estrada, Dr. Francisco G. Ríos Rincón",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Millán Almaraz Martha Irene",
        "tema": "EFECTO DE LA COMPOSICIÓN LIPÍDICA Y FITOPIGMENTARIA DE CUATRO ESPECIES DE MICROALGAS EN LA CALIDAD NUTRICIONAL DE Artemia franciscana",
        "comite": "Dr. Mario Nieves Soto, Diana Judith López Peraza, José Ángel López Valenzuela, Martha Elisa Rivas Vega, Anselmo Miranda Baeza",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Cedillo Cobian Jesús Raymundo",
        "tema": "Seroprevalencia y factores de riesgo asociados a Rickettsia rickettsii en perros del sur de sonora, México.",
        "comite": "Gabriela Silva Hidalgo, Ramón Miguel Molina Barrios, Silvia del Carmen Cota Guajardo, Juan Francisco Hernández Chavez.",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Díaz Espinoza de los Monteros Daniel",
        "tema": "ANÁLISIS DE LA DISTRIBUCIÓN ESPACIO-TEMPORAL DE LAS PRINCIPALES RAZAS DE OVINOS PRODUCIDAS EN EL ESTADO DE SINALOA DE 2006-2016 Y CARACTERIZACIÓN DE SU PATRÓN DE TOLERANCIA AL ESTRÉS CALÓRICO.",
        "comite": "Soila Maribel Gaxiola Camacho, Arnulfo Montero Pardo, Miguel Angel Rodríguez Gaxiola, Beatriz l. Castro Pérez, Christian J. Urias Castro.",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Cázares Martínez Juana",
        "tema": "Caracterización in situ de poblaciones silvestres de chile chiltepín (Capsicum annuum L) y su heredabilidad entre poblaciones distantes en el Noroeste de México",
        "comite": "Dr. Sergio Hernández Verdugo, Dr. Saúl Parra Terraza, Dr.Antonio Pacheco Olvera, Dr. Jesús Enrique Retes Manjarrez",
        "cohorte": "2017-2021"
    },
    {
        "alumno": "Almada Ruiz Víctor Gabriel",
        "tema": "Alelopatía de extractos vegetales en el control de malezas del Valle del Fuerte",
        "comite": "Dr. Álvaro Reyes Olivas, Dr. Gabriel Antonio Lugo García, Dr. Bardo Heleodoro Sánchez Soto",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Armenta Chávez Rogelio",
        "tema": "Relación entre la nutrición, la incidencia de gusano cogollero (Spodoptera frugiperda SMITH) V la incidencia Vseveridad del complejo de especies de Fusarium spp. en el cultivo de Maíz (Zea rnavs L.).",
        "comite": "Dr. Tomás Díaz Valdés",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Arteaga Wences Yesica Janeth",
        "tema": "Evaluación de una fuente estandarizada de una fuente de suplementos de aceites esenciales (CRINA(R)RUMIANTES) en comparación con la suplementación de monensina en corderos alimentados con una dieta alta en energía en la fase de finalización",
        "comite": "Dr. Alfredo Estrada",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Ascención Betanzos Guadalupe",
        "tema": "Análisis espacio-temporal de las poblaciones de gusanos de la cápsula del garbanzo (Cicer arietinum) en Sinaloa para la construcción de un modelo de pronostico",
        "comite": "Dr. Carlos Alfonso López Orona, Dr. Moisés G. Yáñez Juárez, Dr. Raymundo Medina López, Dr. Felipe Ayala Tafoya, Dr. Tomás Díaz Valdés, Dr. Edgardo Cortéz Mondaca",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Buelna Tarín Salomón",
        "tema": "Nutrición con N, P, K y bioestimulantes en la producción de chile jalapeño (Capsicum annuum L.) en el Norte de Sinaloa",
        "comite": "Dr. Gabriel Antonio Lugo García, Dr. Cosme Bojórquez Ramos, Dr. Juan Fernando Sánchez Portillo, Dr. Bardo Heleodoro Sánchez Soto, Dra. Celia Selene Romero Félix",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Cárdenas Contreras Miguel Antonio",
        "tema": "Aislamiento, identificación y caracterización del perfil de resistencia de cepas de Salmonella spp aisladas de huevo y evaluación de la actividad inhibitoria in vivo del ajo (Allium sativum) sobre S. enteritidis en gallinas)",
        "comite": "Dr. Jesús José Portillo Loera, Dra. Idalia Enríquez Verdugo, Dr. Carlos Alfonso López Orona",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Cárdenas Rodríguez Josué",
        "tema": "Identificación y determinación de patogenicidad oomycetes provenientes de agua superficial de ríos y canales en el municipio de Culiacán, Sinaloa",
        "comite": "Dr. Moisés G. Yánez Juarez, Dr. Carlos Alfonso López Orona, Dr. Felipe Ayala Tafoya, Dra. Teresa de Jesús Velázquez Alcaraz",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Chaidez Ibarra Miguel Ángel",
        "tema": "Detección molecular de Mycoplasma en aves de postura comercial en Sinaloa",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dr. Miguel Ángel Rodríguez Gaxiola",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Corona Cárdenas Abril",
        "tema": "Evaluación de la patogenicidad entérica entérica in vivo",
        "comite": "Dra. Gabriela Silva Hidalgo, Dr. Héctor Samuel López Moreno, Dra. Vianney Ortiz Navarrete, Dra. Nora María Cárcamo Aréchiga",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Galindo Sánchez Katheen Fabiola",
        "tema": "Plan de manejo integrado de plagas, caso de estudio: Desmodus rotundos en Sinaloa",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Luis Fernando Aguirre Urioste, Dr. Aldo Antonio Guevara Carrizales",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Gerardo Lugo Saida Selene",
        "tema": "Caracterización fenotípica, molecular, patogénica y sensibilidad a fungicidas de pestalotioides causantes de la mancha plateada del mango en México",
        "comite": "Dr. Moisés Gilberto Yáñez Juárez, Dr. Hugo Beltrán Peña, Dr. Miguel ángel Apodaca Sánchez,Dr. Juan Manuel Tovar Pedraza, Dr. Felipe Ayala Tafoya",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "González Castro Alfredo",
        "tema": "IDENTIFICACIÓN MOLECUAR Y PATOGENICIDAD DE PATOGENOS EDAFICOS EN CULTIVO DE CHILE",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Maldonado Amparo María de los Ángeles",
        "tema": "Estrategias de explotación del recurso peces marinos de escama capturado por la pesquería ribereña de Mazatlán, Sinaloa, México",
        "comite": "Dr. Jorge Saúl Ramírez Pérez, Dra. Rebeca Sánchez Cárdenas, Dr. Luis Antonio Salcido Guevara, Dr. Just T. Bayle Sampere, Dr. Emigdio Marín Enríquez",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Mc Caughey Espinoza Diana Miriam",
        "tema": "Micropropagación, establecimiento y desarrollo en campo del cosahui del sur Krameria erecta Wild. ex Schult &amp; Schult en el estado de Sonora",
        "comite": "Dr. Álvaro Reyes Olivas, Dra. Gloria Irma Ayala Astorga, Dr. Gabriel Antonio Lugo García, Dr. Andrés Ochoa Meza, Dr. Antonio Pacheco Olvera",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Ramos Méndez Jorge Luis",
        "tema": "Valor energético de grasa reciclada obtenida de trampa de vertedero utilizada como ingrediente en las dietas de finalización para el ganado ovino de engorda",
        "comite": "Dr. Alfredo Estrada Angulo, Dr. Alejandro Plascencia Jorquera, Dr. Luis Corona Gochi, Dr. Jesús David Urías Estrada, Dra. Beatriz Isabel Castro Pérez",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Román Román Leonardo",
        "tema": "Partenocarpia, fitorreguladores sintéticos y vermicomposta, como fuente de hormonas naturales, en el crecimiento y rendimiento de calabacita de invernadero",
        "comite": "Dr. Felipe Ayala Tafoya, Dr. Tomás Díaz Valdés, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Carlos Alfonso López Orona, Dr. Juan Martín Parra Delgado",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Rubio Rocha Yamel Guadalupe",
        "tema": "Situación de la relación ganado-jaguar (Panthera onca linnaeus, 1758) en un corredor biológico y su impacto en la conservación y el desarrollo comunitario en Sinaloa, México",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Cuauhtémoc Chávez Tovar, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Álvaro Reyes Olivas",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Villa Bojorquez Jaime",
        "tema": "Cuantificación de compuestos fenólicos, antocianinas y capacidad antioxidante de maíces nativos de Sinaloa sometidos a estrés hídrico.",
        "comite": "Dr. Pedro Sánchez Peña",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Zazueta Gutierrez Ana Citlaly",
        "tema": "Valoración de indicadores relacionados al bienestar en bovinos productores de carne en el trópico seco",
        "comite": "Dr. Francisco Gerardo Ríos Rincón, Jesús David Urías Estrada, Alfredo Estrada Angulo, Jesús José Portillo Loera, Beatriz Isabel Castro Pérez.",
        "cohorte": "2018-2022"
    },
    {
        "alumno": "Barraza Tizoc Claudia Leonor",
        "tema": "Caracterización de microbioma presentes en garrapatas Rhipicephalus microplus de bovinos en Sinaloa.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Cepeda Quintero Higinio",
        "tema": "FRECUENCIA DE MASTITIS BOVINA EN HATOS DE DOBLE PROPÓSITO E IDENTIFICACIÓN DE LOS PRINCIPALES AGENTES ETIOLÓGICOS Y EVALUACIÓN DE LA RESISTENCIA BACTERIANA.",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Douriet Angulo Alan",
        "tema": "Virulencia y capacidad de producción de micotoxinas de Fusarium falciforme del estado de Sinaloa",
        "comite": "Dr. Carlos Alfonso López Orona, Dra. Josefina León Félix, Dr. Guadalupe Alfonso López Urquidez, Dr.Luis Alfonso Amarillas Bueno, Dr. Felipe Ayala Tafoya",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Edeza Urías Jorge Alberto",
        "tema": "Caracterización morfológica, molecular y virulencia de especies Fusarium asociadas a la fusariosis vasculas del garbanzo (Cicer arietinum L.) en el estado de Sinaloa.",
        "comite": "Dr. Carlos Alfonso López Orona, Dr. Guadalupe Alfonso López Urquidez, Dr. Azaarel Angulo Castro, Dr. Jesús Enrique Retes Manjarrez, Dr. Moisés Gilberto Yáñez Juárez",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Gómez Pérez Valeria",
        "tema": "COLECCIÓN, CARACTERIZACIÓN AGROMORFOLÓGICA, FÍSICO-QUÍMICA Y NUTRICIONAL DE MAÍCES NATIVOS DE SINALOA, MÉXICO.",
        "comite": "Dr. Pedro Sánchez Peña, Dr. Cesar Daniel Petroll, Dra. Teresa De Jesús Velázquez Alcaraz, Dra. Libia Iris Trejo Téllez, Dr. Jesús José Portillo Loera, Dr. Saúl Parra Terraza",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Linares Cordova Joel Fitzgerald",
        "tema": "ESTILOS DE AFRONTAMIENTO AL ESTRÉS (EAE) Y SU IMPLICACIÓN EN EL ESTATUS FISIOLÓGICO, GENICO Y ENDOCRINO EN JUVENILES DE LISA Mugil cephalus",
        "comite": "Dr. Gustavo Alejandro Rodríguez Montes de Oca, Dr. Zohar Ibarra Zatarain",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "López Ibarra José Arturo",
        "tema": "INTERCOMPARACIÓN DE EVAPOTRANSPIRACIÓN EN SUPERFICIES HETEROGÉNEAS MEDIANTE EL USO DE SCINTILÓMETROS Y COVARIANZA DE VÓRTICES EN LA ZONA ÁRIDA Y SEMIÁRIDA DE MÉXICO",
        "comite": "Teresa de Jesús Velázquez Alcaraz, Jesús Enrique López, Avendaño, Julio César Rodríguez, Felipe Ayala Tafoya, José Angel Martínez Gallardo.",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Márquez Zequera Isidro",
        "tema": "ANÁLISIS COMPARATIVO DE LA DIVERSIDAD GENÉTICA DE Clavibacter michiganensis subsp. michiganensis AISLADAS DE MÉXICO POR RAPD-PCR Y BOX- PCR.",
        "comite": "Dr. José Antonio Garzón Tiznado, Raymundo Saúl García-Estrada",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Rojo Salomón Juan Enrique",
        "tema": "DIAGNOSTICO DE PLAGAS EN MANGO (Mangifera indica L.) CV. KENTH Y SU MANEJO CON HONGOS ENTOMOPATOGENOS EN AHOME, SINALOA.",
        "comite": "Gabriel Antonio Lugo García, Jesús Manuel Mancillas Paredes, Cipriano García Gutiérrez, Héctor González Hernández, Esaú Ruiz Sánchez",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Solís Carrasco Jesús Daniel",
        "tema": "DETECCIÓN IN VITRO DE RESISTENCIA ANTIHELMÍNTICA DE Haemonchus contortus PROCEDENTES DE OVINOS EN RASTRO.",
        "comite": "Soila Maribel Gaxiola Camacho, Nohemí Castro del Campo, Idalia Enríquez Verdugo, Miguel Ángel Rodríguez Gaxiola.",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Soto López Jeidy Valeria",
        "tema": "Efecto del estrés calórica en distintas épocas del año en el bienestar animal, la conducta productiva, individual y social de ovinos cruza Dorper X Pelibuey y Kathadin X Pelibuey en engorda intensiva en el trópico seco.",
        "comite": "Dr. Juan Carlos Robles Estrada, Dr. Horacio Dávila Ramos, Dr. Jesús José Portillo Loera, Dr. José Adrián Félix Bernal",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Valdez Sandoval José Johanatan",
        "tema": "BIOSEGURIDAD EN LABORATORIOS, UNA AREA DE OPORTUNIDAD EN EL CONTEXTO DE LA INICIATIVA MUNDIAL “UNA SOLA SALUD”.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho,Dr. Gonzalo Pascual Álvarez, Dr. Francisco Javier Monge Navarro, Dr. Uriel Alejandro López Lemus, Dr. Efren Encinas Torres",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Valenzuela Ortiz Griselda",
        "tema": "Mecanismos de respuesta de Colletotrichum al estrés abiótico causado por quitosano.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dr. Eber Addí Quintana Obregón, Dr. Jesús José Portillo Loera, Dr. Cesar San Martín Hernández, Dra. Nohelia Castro del Campo",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Villalobos Martínez Yuri Diana",
        "tema": "Inclusión de a-linolénico omega-3 en dietas de gallinas reproductoras y su efecto en el desempeño productivo y reproductivo.",
        "comite": "Dr. Jesús José Portillo Loera, Dr. Carlos Bell Castro Tamayo, Dr. José Basilio Heredia",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Emus Medina Alexis",
        "tema": "Caracterización fisiológica y fitoquímica de fruto Partimentiera edulis y su efecto sobre la actividad de enzimas relacionadas al síndrome metabólico.",
        "comite": "Dr. Jesús José Portillo Loera, Dr. José Basilio Heredia, Dr. Miguel Ángel Angulo Escalante, Dr. Carlos Bell Castro Tamayo, Dr. Ramón Ignacio Castillo López",
        "cohorte": "2019-2023"
    },
    {
        "alumno": "Rubio Aragón Walter Arturo",
        "tema": "Captura de Anthonomus eugenii con trampas adhesivas modificadas en cultivos de Capsicum anuum.",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Mendoza Cortéz Daniel Alejandro",
        "tema": "Comparación de antibióticos suplementarios (monensina y virginiamicina) frente a la convinació de mezclas de aceites esenciales y vitamina D en la respuesta productiva energética de la dieta y las características de la canal de rumiantes en finalización.",
        "comite": "Dr. Alfredo Estrada Angulo",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Villalba Robles Yazmín Edith",
        "tema": "Consolidación del modelo de enseñanza digital en la facultad de medicina veterinaria y zootecnia.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Zazueta López Jorge Enrique",
        "tema": "Dinámica de los nutrientes en el cultivo cebolla (Allium cepa L.)",
        "comite": "Dr. Guadalupe Alfonso López Urquidez",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Espinoza León María Teresa",
        "tema": "Efecto del alelo fecge del gen gdf-9 y fecxg y fecxl del gen bmp-15 en rasgos reproductivos y productivos de ovejas de pelo en explotaciones comerciales.acanh",
        "comite": "Dr. Jesús José Portillo Loera",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Armenta López Arturo Rafael",
        "tema": "Manejo agroecológico del gorgojo pardo Acanthos celides obtectus (Say) en Frijol almacenado para semilla.",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Lizárraga Reyes Carlos",
        "tema": "Evaluación de la capacidad de desarrollo embrionario de ovocitos bovinos provenientes de ovarios de vacas de rastro, efecto de la interacción racial.",
        "comite": "Dra. Nohemí Castro del Campo",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Urías Camacho Alejandro",
        "tema": "Desarrollo de un anfibio robótico de medición remota de parámetros fisicoquímicos y recolección de sedimentos",
        "comite": "Dr. Gustavo Alejandro Montes de Oca Rodríguez",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Liñeiro Astiazarán Horacio",
        "tema": "Contribución de los cultivos perennes (nogal) al secuestro de carbono en la costa de Hermosillo, Sonora, México.",
        "comite": "Dr. Felipe Ayala Tafoya, Dr. Julio Cesar Rodríguez, Dr. Jesús Enrique López Avendaño, Dr. Juan Martín Parra Delgado, Dr. Carlos Alfonso López Orona.",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Molina Gámez Gamaliel",
        "tema": "Efecto de la adición de Undecilenato de Boldenona en los parámetros productivos, y bienestar animal en conejos de engorda.",
        "comite": "Dr. Horacio Dávila Ramos",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Zatarain Daniel Eduardo",
        "tema": "Identificación molecular de Anaplasma ovis en piojos presentes en caprinos de Sinaloa.",
        "comite": "Dra. Idalia Enríquez Verdugo",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "González Ruiz Andrés",
        "tema": "Resistencia de avena fatua l. a herbicidas inhibidores de la acetolactato sintasa y acetil coenzima a carboxilasa en el cultivo de trigo.",
        "comite": "Dr. Guadalupe Alfonso López Urquídez",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Sánchez García Dulce Carolina",
        "tema": "Estudio serológico y bacteriológico de Brucella spp. en ganaderos, Médicos veterinarios y ganado bovino de los municipios del Norte de Sinaloa.",
        "comite": "Dra. Nohemí Castro del Campo",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Camacho Palafox José Alberto",
        "tema": "Evaluación de la adición del alga espirulina (Arthrospira maxima) sobre parámetros productivos, calidad del huevo en gallinas de postura.",
        "comite": "Dr. Jesús José Portillo Loera",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Rábago Zavala Karen",
        "tema": "Caracterización morfológica, molecular y patogénica de aislados de Rhizoctonia spp., de papa, frijol y maíz dulce en el norte de Sinaloa.",
        "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dr. Juan Manuel Tovar Pedraza, Dra. Glenda Judith Lizárraga Sánchez, Dra. Blanca Elvira López Valenzuela.",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "González Alfaro Arturo",
        "tema": "Psílidos (Hemiptera: Psylloidea) de la región norte del estado de Sinaloa, México.",
        "comite": "Dr. Gabriel Antonio Lugo García, Dra. Blanca Elvira López, Dr. Bardo Eleodoro Sánchez.",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Gurrola Ramírez Aramis",
        "tema": "Evaluación de genómica comparativa en la virulencia de Rickettsia spp. aisladas de Sinaloa en contraste con cepas de referencia Rickettsiae virulentas.",
        "comite": "Dra. Nohemí Castro de Campo",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Valle Castillo Laura Beatriz",
        "tema": "Aislamiento e identificación de proteasas con potencial aplicación en agricultura, obtenidas a partir de hongos nematófagos.",
        "comite": "Dr. Carlos Alfonso López Orona",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Ceballos Chávez Ángel Rosario",
        "tema": "Aislamiento e identificación de hongos fitopatógenos en cultivo de durazno (Prunus persica L. Batsch.) en el sur de Chihuahua y el efecto antagónico de Trichoderma asperellum.",
        "comite": "Dra. Blanca Elvira López Valenzuela, Dra. Glenda Judith Lizárraga Sánchez, Dr. Rubén Félix Gastélum, Dra. Karla Yeriana Leyva Madrigal, Dr. Carlos Patricio Sauceda Acosta.",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Herrera Rodríguez Gabriel",
        "tema": "Aspectos epidemiológicos y de control del hongo sclerotium rolfsii causante de la pudrición sureña de la papa en el estado de Sinaloa y sonora.",
        "comite": "Dr. Gabriel Antonio Lugo García",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Calderón Alonso Alma Carolina",
        "tema": "Validación de un programa de evaluación y clasificación de canales bovinas mexicanas.",
        "comite": "Dr. Francisco Gerardo Ríos Rincón",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "González Molotla Iris Alejandrina",
        "tema": "Aislamiento, identificación y patogenicidad de hongos de la madera asociados a la muerte descendente del arándano (Vaccinium corymbosum L), en el norte de Sinaloa y su manejo biorracional.",
        "comite": "Dr. Fernando Alberto Valenzuela Escoboza",
        "cohorte": "2020-2024"
    },
    {
        "alumno": "Mejía Lastra Antonio de Jesús",
        "tema": "Enfriamiento de ganado lechero Holstein durante el periodo seco: efectos en la vaca y su ternero.",
        "comite": "Dra. Teresa de Jesús Velázquez, Dr. Leonel Avendaño Reyes.",
        "cohorte": "2020-2024"
    }
];

  const configDCA = {
    busquedaId: "busquedaAlumnoDCA",
    cohorteId: "filtroCohorteDCA",
    tbodySelector: "#tablaTesisDCA tbody",
    paginacionId: "paginacionDCA",
  };

  inicializarTablaTesis(DATA_DCA, configDCA);
});
