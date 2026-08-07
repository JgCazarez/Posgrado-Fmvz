document.addEventListener('DOMContentLoaded', function () {
  const DATA_DCA = [
    { alumno: "Martha Lidia Gutiérrez Pérez", tema: "Obtención de bacteriófagos líticos para el control de bacteriosis en cultivos de tomate (Solanum /ycopersicum) en el Valle de Culiacán, Sinaloa.", comite: "Dr. Pedro Sánchez Peña, Dra. Nohelia Castro Del Campo, Dra. Mitzi Dayanira Estrada Acosta.", cohorte: "2017-2021" },
    { alumno: "Reynaldo Millán Chaidez", tema: "Resistencia a Bemisia tabaco Genn en tomates silvestres y criollos en México.", comite: "Dr. José Antonio Garzón Tiznado, Dr. Jesús Enrique Retes Manjarrez, Dr. Sergio Hernández Verdugo, Dr. Jesús José Portillo Loera.", cohorte: "2017-2021" },
    { alumno: "Lorena Molina Cárdenas", tema: "Identificación y caracterización genotípica de especies de Fusarium causantes de la malformación del mango (Mangifera indica L.) en Sinaloa.", comite: "Dra. Teresa De Jesús Velázquez Alcaraz, Dr. Carlos Alfonso López Orona, Dr. Sixto Velarde Félix, Dr. Felipe Ayala Tafoya, Dr. Guadalupe Alfonso López Urquídez.", cohorte: "2017-2021" },
    { alumno: "Víctor Alfonso Cuate Mozo", tema: "Especies de gallina ciega (Coleóptera: Scarabaeoidea) asociados al cultivo de sorgo Sorghum bicolor (L.) Moench en el norte de Sinaloa, México.", comite: "Dr. Gabriel Antonio Lugo García, Dr. Agustín Aragón García, Dr. Álvaro Reyes Olivas, Dr. Juan Fernando Sánchez Portillo.", cohorte: "2017-2021" },
    { alumno: "Santos Bersaín Pérez González", tema: "Viviparidad en Cactáceas de Chiapas.", comite: "Dr. Álvaro Reyes Olivas, Dr. Gabriel Antonio Lugo García, Dr. Sixto Velarde Félix, Dr. José de Jesús Molar.", cohorte: "2018-2022" },
    { alumno: "Jesús Ernesto Sánchez Escárcega", tema: "Control de la marchitez del chile (Capsicum annuum L.) por Nacobbus aberrans y Fusarium spp.", comite: "Dra. Emma Zavaleta Mejía, Dr. Pedro Sánchez Peña, Dra. Nohelia Castro del Campo, Dr. Manuel de Jesús Rivas.", cohorte: "2018-2022" },
    { alumno: "Brenda Carolina Castro Campiz", tema: "Identificación, caracterización y manejo de la mancha bacteriana del tomate (Solanum lycopersicum L.) en Sinaloa.", comite: "Dr. Felipe de Jesús Ayala Tafoya, Dr. Carlos Alfonso López Orona, Dr. Agustín Aragón García.", cohorte: "2019-2023" },
    { alumno: "Dalia Sthefany Flores López", tema: "Bacterias con actividad antifúngica de la filosfera y rizosfera del cultivo de garbanzo (Cicer arietinum L.).", comite: "Dr. Sergio de los Santos Villalobos, Dr. Ignacio Eduardo Maldonado Mendoza, Dr. Carlos Alfonso López Orona.", cohorte: "2019-2023" },
    { alumno: "José Manuel Gastélum Valdez", tema: "Caracterización morfológica, virulencia y genotípica de aislamientos de Macrophomina phaseolina de garbanzo (Cicer arietinum L.) en el noroeste de México.", comite: "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Sergio de los Santos Villalobos, Dr. Carlos Alfonso López Orona.", cohorte: "2020-2024" },
    { alumno: "César Paúl Quintero Pineda", tema: "Análisis de la secuencia del genoma del virus del mosaico amarillo del calabacín (ZYMV) para el desarrollo de una estrategia de silenciamiento de genes en calabacita (Cucurbita pepo).", comite: "Dr. Jesús Navarrez, Dr. José Garzón, Dra. Josefina León, Dr. Manuel Fematt.", cohorte: "2020-2024" },
    { alumno: "Yuridia Gisel Castro Sánchez", tema: "Identificación y caracterización de especies de Colletotrichum y su manejo en el cultivo de mango (Mangifera indica L.) en Sinaloa.", comite: "Dr. Felipe Ayala, Dr. Carlos López, Dr. Agustín Aragón.", cohorte: "2021-2025" },
    { alumno: "César Daniel Ponce Sánchez", tema: "Biofumigación del suelo y manejo de la marchitez del chile (Capsicum annuum L.) en Sinaloa.", comite: "Dr. Felipe Ayala, Dr. Carlos López, Dr. Agustín Aragón.", cohorte: "2021-2025" }
  ];

  const configDCA = {
    busquedaId: 'busquedaAlumnoDCA',
    cohorteId: 'filtroCohorteDCA',
    tbodySelector: '#tablaTesisDCA tbody',
    paginacionId: 'paginacionDCA'
  };

  inicializarTablaTesis(DATA_DCA, configDCA);
});