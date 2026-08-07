document.addEventListener('DOMContentLoaded', function () {
      const DATA_MCA = [
          { alumno: "Ana Cristina Quintero Valdez", tema: "Capacidad antifúngica de extractos de Lupinus para el control de Fusarium.", comite: "Dra. Nohelia Castro Del Campo, Dr. Ignacio Maldonado Mendoza, Dr. Josefina León Félix.", cohorte: "2019-2021" },
          { alumno: "Silvia Michel Sandoval García", tema: "Caracterización genotípica de aislamientos de Fusarium spp. asociados a la marchitez y muerte de garbanzo y su sensibilidad a fungicidas.", comite: "Dra. Teresa de Jesús Velázquez Alcaraz, Dr. Álvaro Reyes Olivas, Dr. Carlos Alfonso López Orona.", cohorte: "2019-2021" },
          { alumno: "Guadalupe Estefanía López Urquídez", tema: "Aislamiento y caracterización de rizobacterias y su efecto promotor de crecimiento en plantas de garbanzo.", comite: "Dr. Sergio de los Santos Villalobos, Dr. José Antonio Garzón Tiznado.", cohorte: "2019-2021" },
          { alumno: "Rey David Ruelas Ayón", tema: "Control Biorracional de Mycosphaerella fijiensis Morelet, en el cultivo de plátano (Musa paradisiaca L.).", comite: "Dr. Felipe de Jesús Ayala Tafoya, Dra. Lilia Salas Marina, Dr. Agustín Aragón García.", cohorte: "2019-2021" },
          { alumno: "Martín Alberto Cárdenas López", tema: "Diversidad de parasitoides y depredadores asociados a maíz y sorgo en Guasave, Sinaloa, México.", comite: "Dr. Gabriel Antonio Lugo García, Dr. Álvaro Reyes Olivas, Dr. Juan Fernando Sánchez Portillo.", cohorte: "2020-2022" },
          { alumno: "Lluvia Rubí Espinoza López", tema: "Manejo de la marchitez por Fusarium del garbanzo (Cicer arietinum L.).", comite: "Dr. Felipe de Jesús Ayala Tafoya, Dr. Álvaro Reyes Olivas, Dr. Agustín Aragón García.", cohorte: "2020-2022" },
          { alumno: "Jesús Heraldo Sepúlveda", tema: "Hongos Entomopatógenos: Una alternativa para el control del psílido asiático de los cítricos.", comite: "Dr. Felipe de Jesús Ayala Tafoya, Dr. Agustín Aragón García, Dra. Rosa Celia González.", cohorte: "2020-2022" },
          { alumno: "Jesús Eduardo Flores Jiménez", tema: "Identificación y distribución de fitoplasmas en hortalizas en el valle agrícola de Culiacán y su asociación con insectos vectores.", comite: "Dr. José Antonio Garzón Tiznado, Dr. Sergio Hernández Verdugo.", cohorte: "2020-2022" },
          { alumno: "María Fernanda Hernández López", tema: "Respuesta al contenido de las células de defensa (hemocitos) en el camarón blanco Litopenaeus vannamei infectado con el virus de la mancha blanca (WSSV).", comite: "Dra. Muniappan Senthil Kumar, Dr. Félix Armando Beltrán.", cohorte: "2021-2023" },
          { alumno: "Rosario Esmeralda López García", tema: "Identificación de los begomovirus que infectan al cultivo de tomate en Sinaloa y su relación con sus insectos vectores.", comite: "Dr. José Antonio Garzón Tiznado, Dr. Jesús Enrique Retes Manjarrez, Dr. Víctor Manuel Sánchez.", cohorte: "2021-2023" },
          { alumno: "Griselda García García", tema: "Efecto de inductores de resistencia sobre la reducción de la severidad de la cenicilla (Leveillula taurica) del chile.", comite: "Dr. Felipe de Jesús Tafoya, Dr. Agustín Aragón García, Dra. Celia Rosa González.", cohorte: "2021-2023" },
          { alumno: "Alma Delia Gámez González", tema: "Búsqueda de nuevas fuentes de resistencia al virus del Mosaico del Pepino (CMV) en chile y su validación mediante marcadores moleculares.", comite: "Dr. Jesús Enrique Retes Manjarrez, Dr. José Antonio Garzón Tiznado.", cohorte: "2021-2023" },
          { alumno: "Ramiro Alejandro López López", tema: "Caracterización y manejo de la enfermedad “Pata Prieta” en el cultivo de la papa en el Norte de Sinaloa.", comite: "Dr. Felipe de Jesús Ayala Tafoya, Dr. Agustín Aragón García, Dra. Rosa Celia González.", cohorte: "2021-2023" }
      ];

      const configMCA = {
        busquedaId: 'busquedaAlumnoMCA',
        cohorteId: 'filtroCohorteMCA',
        tbodySelector: '#tablaTesisMCA tbody',
        paginacionId: 'paginacionMCA'
      };

      inicializarTablaTesis(DATA_MCA, configMCA);
    });