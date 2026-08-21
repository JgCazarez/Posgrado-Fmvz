document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Tesis en Proceso - Maestría en Ciencias Agropecuarias (MCA)
   */
  const DATA_MCA = [
    {
        "alumno": "Paixao Guzmán Anabel",
        "tema": "Efecto de la administración de ecg y gnrh-análogo en el desempeño reproductivo de cerdas primíparas destetadas bajo condiciones de alta carga calórica.",
        "comite": "Dr. Javier Alonso Romo Rubio, Jesús José Portillo Loera, Christian de Jesús Urías Castro, Juan Manuel Romo Valdez, Héctor Raúl Guemez Gaxiola.",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Valenzuela Romero Mario Humberto",
        "tema": "Colecta y variación genética en la germinación de semillas de poblaciones de chile ( Capsicum annuum ) silvestre del noroeste de México",
        "comite": "Dr. Sergio Hernández Verdugo, Dr. Antonio Pacheco Olvera, Dr. Jesús Enrique Retes Manjarrez, MC. César Enrique Romero Higareda, MC. José Manuel Osuna Rodríguez",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Osuna Ramos Yesenia",
        "tema": "Uso de aparato de fijación esquelética externa en osteosíntesis de fracturas del cuerpo del ilion en perros.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, MC. José Ascención Pérez Corrales, Dra. Idalia Enríquez Verdugo, Dra. Nohemí Castro del Campo, Dr. Miguel Angel Rodríguez Gaxiola.",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Pérez Meza Nieves Briceida",
        "tema": "Impacto de la dosis de N, P y K en la producción y calidad poscosecha de mango cv . “Haden” y “Tommy atkins” cultivado en Paracuaro, Michoacán",
        "comite": "Dr. Guadalupe Alfonso López Urquídez, Dr. César San Martin Hernández, Dra. Ma. Dolores Muy Rangel, Dr. Carlos Alfonso López Orona, Dr. Felipe Ayala Tafoya",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Sánchez García Dulce Carolina",
        "tema": "Estudio serológico y bacteriológico de brucella spp. en ganado caprino en el norte del estado de sinaloa.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dr. Efrén Díaz Aparicio, Dr. Carlos Víctor Hernández Ramírez",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Calderón Alonso Alma Carolina",
        "tema": "Indicadores conductuales asociados al bienestar de ganado bovino de reciente arribo al corral de engorda.",
        "comite": "Dr. Francisco Gerardo Ríos Rincon, Jesús David Urías Estrada, Alfredo Estrada Angulo, Jesús José Portillo Loera, Beatriz Isabel Castro Pérez.",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Zúñiga Villegas Jessica Berenice",
        "tema": "Características de la canal y cortes primarios de ovinos finalizados con dietas adicionadas de aceites esenciales.",
        "comite": "Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús José Portillo Loera, Dr. Francisco G. Ríos Rincón, Dr. Jesús David Urías Estrada",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Zatarain Daniel Eduardo",
        "tema": "Identificación morfológica y genética de piojos presentes en caprinos.",
        "comite": "Dra. Idalia Enríquez Verdugo, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, Dr. Carlos Vladimir López aispuro",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Molina Gámez Gamaliel",
        "tema": "Evaluación de la condición del implante anabólico y desempeño productivo de bovinos en finalización.",
        "comite": "Dr. Horacio Dávila Ramos, Dr. José Adrian Félix Bernal, Dr. Juan Carlos Robles Estrada, Dr. Jesús José Portillo Loera",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Lugo García Cynthia Guadalupe",
        "tema": "Especies de picudos (coléoptera: curculionidae) del norte de sinaloa, méxico",
        "comite": "Dr. Bardo Heleodoro Sánchez Soto, Dr. Juan Fernando Sánchez Portillo, Dr. Álvaro Reyes Olivas, MC. Víctor Alfonso Cuate Mozo.",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Vidales Quintero Roberto Eder",
        "tema": "Osteosíntesis de fracturas diafisiarias de tibia en perros, utilizando clavo centromedular con aparato de fijación esquelética externa. (AFEE)",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, MC. José Ascención Pérez Corrales, MC. Rodrigo Rocha Tirado, Dra. Nohemí Castro del Campo, Dr. Miguel Ángel Rodríguez Gaxiola",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Armenta López Arturo Rafael (TP)",
        "tema": "Alternativas biorracionales para el manejo del picudo del maíz Sitophilus zeamais Motschulsky .",
        "comite": "Dr. Gabriel Antonio Lugo García, Juan Fernando Sánchez Portillo, Víctor Gabriel Almada Ruíz, Bardo Heleodoro Sánchez Soto.",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Contreras Martínez Rosalba (TP)",
        "tema": "Paquete tecnológico en poscosecha de mango kent (mangifera indica) para su transporte a mercados distantes.",
        "comite": "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Felipe Ayala Tafoya, Dr. Manuel Alonso Báez Sañudo, Dr. Carlos Alfonso López Orona, Dr. Moisés Gilberto Yáñez Juárez",
        "cohorte": "2018-2020"
    },
    {
        "alumno": "Beltrán Soberanes Perla Elizabeth",
        "tema": "La tierra de diatomea como desparásitante natural con enfoque a cryptosporidium spp en caprinos.",
        "comite": "Dr. Javier Alonso Romo Rubio, Dra. Nohemí Castro del Campo, Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo Dr. Miguel Angel Rodríguez Gaxiola",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Cervantes Jacobo Miguel Demetrio",
        "tema": "Resistencia de Haemophillus spp . en gallinas de postura y pollos de engorda en Culiacán, Sinaloa.",
        "comite": "Dra. Idalia Enríquez Verdugo, Dr. Vladimir López Aispuro, Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo MC. Higinio Cepeda Quintero",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Félix Inzunza Jesús Fernando",
        "tema": "Crecimiento de plantas de pepino (cucumis sativus l.) en respuesta a la cantidad y calidad de luz emitida por leds blancos, azules y rojos.",
        "comite": "Dr. Felipe Ayala Tafoya, Dr. Moisés Gilberto Yáñez Juárez, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. tomás Díaz Valdés, Dr. Marino Valenzuela López",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Gallegos Santiago Mario Alberto",
        "tema": "Difosfato de tiamina en dietas de finalización energéticamente diferentes sobre respuesta productiva de ovinos de pelo.",
        "comite": "Dr.José Adrián Félix Bernal, Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Dr. José Jesús Portillo Loéra.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Gómez González Carlos Arsenio",
        "tema": "Comparación de 3 diluyentes comerciales para congelación de semen bovino utilizando método manual y digital de criopreservación.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho Dr. Miguel Angel Rodríguez Gaxiola, Dra. Nohemí Castro del Campo, Dr. Arnulfo Montero Pardo",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "González Rueda Leslie Zelibeth",
        "tema": "Valoración de indicadores de bienestar y parámetros reproductivos de caprinos bóer y nubia en semiestabulación en el trópico seco.",
        "comite": "Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera, Dr. Miguel Ángel Rodríguez Gaxiola, Dr. Mario Alejandro Mejía Delgadillo, MC. Cinthya Beatriz Romo Barrón",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Gutiérrez Leyva Leticia Elena",
        "tema": "Efecto de la adición de diferentes niveles de grasas de trampa en la respuesta productiva y energética de la dieta en ovinos de pelo en finalización.",
        "comite": "Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urías Estrada, Dr. Alfredo Estrada Angulo, Dr. Francisco Gerardo Ríos Rincón, Dr. Jesús José Portillo Loera",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Ibarra Villanueva Lizbeth Kareli",
        "tema": "Resistencia antimicrobiana de bacterias aisladas en albergues de perros y gatos.",
        "comite": "Dra. Idalia Enríquez Verdugo , Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, MC. Claudia Barraza Tizoc, MC. Higinio Cepeda Quintero.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Lizárraga Roa Amizdky Aracely",
        "tema": "Uso de tierra de diatomeas como antibacteriano en caprinos.",
        "comite": "Dra. Nohemí Castro del Campo, Soila Maribel Gaxiola Camacho, Dra. Nohelia Castro del Campo, Dra. Idalia Enríquez Verdugo, Dr. Miguel Angel Rodríguez Gaxiola.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Llanes Cruz Genaro",
        "tema": "Plántulas de limón (citrus aurantifolia swingle) inoculadas con micorriza arbuscular (glomus intraradices).",
        "comite": "Dr. Gabriel Antonio Lugo García, Dr. Bardo Heleodoro Sanchez Soto, Mc. Salomon Buelna Tarin, Dr. Celia Selene Romero Félix",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Nieblas López Esmeralda",
        "tema": "Efecto de la suplementación de grasa de vertedero en las características de la canal, cortes primarios y composición tisular de ovinos de pelo alimentados con dietas de finalización",
        "comite": "Dr. Alfredo Estrada Angulo, Dra. Beatriz Isabel Castro Pérez, Dr. Jesús David Urías Estrada, Dr. Francisco Gerardo Ríos Rincón, Dr. Claudio Angulo Montoya",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Ontiveros Castro Roberto",
        "tema": "Efecto de diferentes tamaños de partícula de zeolitas naturales en la respuesta productiva y características de la canal de ovinos de pelo en finalización.",
        "comite": "Dr. Alfredo Estrada Angulo, Jesús David Urías Estrada, Beatriz Isabel Castro Pérez, Claudio Angulo Montoya, Jesús José Portillo Loera.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Oropeza Velázquez Héctor Javier",
        "tema": "La tierra de diatomea como reductora parasitaria en caprinos.",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Nohemí Castro del Campo, Dra. Nohelia Castro del Campo, Dr. Miguel Angel Rodríguez Gaxiola, MC. Jesús Daniel Solís Carrasco",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Ortiz Carrillotes Patricia Guadalupe",
        "tema": "La iguana verde (iguana iguana) como reservorio de salmonella spp.",
        "comite": "Dr. Jesús José Portillo Loera, Dra. Idalia Enríquez Verdugo, Dr. Samuel Campista León, Dra. Nohelia Castro del Campo",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Reyes Morales Uriel",
        "tema": "Análisis del crecimiento de planta de tomate (solanum lycopersicum l.) cultivada con luz emitida por leds blancos, azules y rojos",
        "comite": "Dr. Felipe Ayala Tafoya, Dr. Moisés Gilberto Yáñez Juárez, Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Tomás Díaz Valdés, Dr. Marino Valenzuela López",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Rocha García Abraham Abimael",
        "tema": "Prevalencia de mycobacterium bovis en lesiones granulomatosas de bovinos de matanza regular en rastros tif y municipales del estado de Sinaloa",
        "comite": "Dra. Soila Maribel Gaxiola Camacho, Dra. Idalia Enríquez Verdugo, Dra. Nohemí Castro del Campo, Dr. Miguel Angel Rodríguez Gaxiola, MC. Daniel Solís Carrasco.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Sauceda Martínez Flor Catalina",
        "tema": "Caracterización molecular y patogenecidad de Fusarium spp. en el cultivo de trigo del noroeste de México",
        "comite": "Dr. Carlos Alfonso López Orona, MC. José Armando Carrillo Fasio, Dr. Guadalupe Alfonso López Urquídez, Dr. José Ángel Martínez Gallardo, MC. Tomás Aarón Vega Gutiérrez",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Vásquez Sarabia Fredy",
        "tema": "Caracterización e inclusión de bagazo de jasminum officinale en la alimentación de ovinos en comportamiento productivo.",
        "comite": "Dr. Horacio Dávila Ramos, Dr. Juan Carlos Robles Estrada, Jesús José Portillo Loera, Dr. José Adrian Félix Bernal",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "García Sandoval Valente",
        "tema": "“Caracterización Agromorfológica Racial de Maíces Nativos de México\".",
        "comite": "Dr. Pedro Sánchez Peña, M.C Valeria Gómez Pérez, Dr. Saúl Parraterraza",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Fajardo Armenta Diana Nayeli",
        "tema": "Distribución y abundancia de Trips en el cultivo de cebolla en Sinaloa",
        "comite": "Dr. Guadalupe Alfonso López Urquidez, Dr. Jesús Enrique Retes Manjarrez, Dr. Carlos Alfonso López Orona, Dr. Raymundo Medina López, M.C. Tomas Aarón Vega Gutiérrez",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Peñuelas Montoya Francisco",
        "tema": "Rendimiento y calidad del arándano(vaccinium corymbosum l.) cv. biloxi bajo mallas sombreadoras en el norte de Sinaloa.",
        "comite": "Dr. Juan Fernando Sánchez Portillo, Dr. Patricio Sauceda Acosta, Oliver Leal Ayala, Benjamín Rodríguez López, Nicolás Beltrán.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Miranda Valdez Jaime Antonio",
        "tema": "Diversidad y distribución de nematodos asociados al cultivo de arándano (vaccinium corymbosum l.) c.v biloxi, en el valle del fuerte",
        "comite": "Dr. Juan Fernando Sánchez Portillo, Carlos Patricio Sauceda Acosta, José Nicolás Beltrán Burboa, Oliver Leal Ayala, Benjamín Rodríguez López.",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Vizcarra Soto Ricardo",
        "tema": "Identificación molecular y patogenicidad del agente causal de la fusariosis en cucurbitáceas del estado de Sinaloa.",
        "comite": "Dr. Carlos Alfonso López Orona, Dr. Azareel Angulo Castro, Dr. Guadalupe Alfonso López Urquídez, Dr. Moisés Gilberto Yáñez Juárez, MC. Tomás Aarón Vega Gutiérrez",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Amarillas Chicuate Juan de Dios",
        "tema": "Distribución espacial de Diaphorina citri (Hemjíptera:Liviidae), en limón persa y limón mexicano en el norte de Sinaloa.",
        "comite": "Dr. Fernando Alberto Valenzuela Escoboza, Dr. Edgardo Cortez Mondaca, Raymundo Medina Lopez, Dr. Jesús Perez Marquez",
        "cohorte": "2019-2021"
    },
    {
        "alumno": "Lugo Tovares José Jesús",
        "tema": "Efecto de la relación treonina/lisina en respuesta productiva y características de canal en Codorniz Japonesa.",
        "comite": "Dr. Blanca Elvira López Valenzuela, Dr. Jesús José Portillo Loera, Dra. Soila Maribel Gaxiola Camacho, Dr. Carlos Bell Castro Tamayo, MC. Vladimir Martínez Cruz",
        "cohorte": "2019-2021"
    }
];

  const configMCA = {
    busquedaId: "busquedaAlumnoMCA",
    cohorteId: "filtroCohorteMCA",
    tbodySelector: "#tablaTesisMCA tbody",
    paginacionId: "paginacionMCA",
  };

  inicializarTablaTesis(DATA_MCA, configMCA);
});
