document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Convenios de Vinculación - Colegio de Ciencias Agropecuarias (CCA-UAS)
   */
  const DATA_CONVENIOS = [
  {
    "num": 1,
    "empresa": "AGROPECUARIA JS \"AGROPECUARIA JS\"",
    "responsable": "C. LIC. LUIS ROBERTO BELTRÁN HERNÁNDEZ",
    "fecha": "08/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 2,
    "empresa": "ASOCIACIÓN DE CRIADORES DE RAZAS PURAS DE CULIACÁN \"LA ASOCIACIÓN\".",
    "responsable": "PROFESOR LUIS FERNANDO VELÁZQUEZ SERRANO",
    "fecha": "04/12/2014",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 3,
    "empresa": "ASOCIACIÓN DE MVZ ESP EN CIENCIAS PORCICOLAS DE SINALOA A.C. \"AMVECPES A. C.\"",
    "responsable": "M.V.Z. ROGELIO GONZALEZ",
    "fecha": "02/09/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 4,
    "empresa": "ASOCIACION GANADERA LOCAL DE NAVOLATO \"LA ASOCIACION\"",
    "responsable": "C. ALFREDO MONTES SALAS",
    "fecha": "02/09/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 5,
    "empresa": "ASOCIACIÓN GANADERA LOCAL ESPECIALIZADA EN CABRAS DE CULIACÁN \"AGLECC\"",
    "responsable": "LIC. JULIÁN LUGO ESPARZA",
    "fecha": "16/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 6,
    "empresa": "ASOCIACIÓN MEXICANA DE CRIADORES DE GANADO BEEFMASTER \"ASOCIACIÓN BEEFMASTER\"",
    "responsable": "C. ING. JOSE MARIA GONZÁLEZ GARCIA",
    "fecha": "08/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 7,
    "empresa": "SERVICIOS DE PERSONAL ADMINISTRATIVO S. A. DE C. V \"BACHOCO\"",
    "responsable": "C. LIC. PATRICIA SEGURA PONCE",
    "fecha": "12/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 8,
    "empresa": "CENTRAL VETERINARIA \"CENTRAL VETERINARIA\"",
    "responsable": "JOSE ASCENCION PEREZ CORRALES",
    "fecha": "02/09/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 9,
    "empresa": "COLEGIO DE MEDICOS VETERINARIOS ZOOTECNISTAS DE SINALOA A.C \"CMVZS A.C\"",
    "responsable": "MVZ. JOSE P. ANGULO BENITEZ",
    "fecha": "02/09/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 10,
    "empresa": "CONSULTORIO VETERINARIO GAXIOLA \"CONSULTORIO VETERINARIO GAXIOLA\"",
    "responsable": "MVZ JOEL GAXIOLA MONTOYA",
    "fecha": "02/09/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 11,
    "empresa": "FINCA EL CIELO \"FINCA EL CIELO\"",
    "responsable": "SR. MARCO ALFREDO CARRILLO FELIX",
    "fecha": "15/07/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 12,
    "empresa": "GANADERA LOS MIGUELES S. A. DE C. V. \"GANADERA LOS MIGUELES\"",
    "responsable": "C. ING. REGULO TERRAZA ROMERO",
    "fecha": "08/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 13,
    "empresa": "GANADERA RS \"GANADERA RS\"",
    "responsable": "C. RAMÓN ALFONSO ROMERO ESPINOZA",
    "fecha": "08/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 14,
    "empresa": "GRANJA COTURNICOLA CODOSAN S DE RL de CV \"GRANJA COTURNICOLA\"",
    "responsable": "C. JESUS ALFREDO FELIX GASTELUM",
    "fecha": "15/07/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 15,
    "empresa": "HACIENDA EL MORO \"HACIENDA EL MORO\"",
    "responsable": "SR. GILBERTO SILVA AYALA",
    "fecha": "15/07/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 16,
    "empresa": "SOCIEDAD COOPERATIVA DE PRODUCCION PESQUERA PUNTA SAN MIGUEL SCL \"SOCIEDAD COOPERATIVA\"",
    "responsable": "C. CRISTOBAL CABRERA OSUNA",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 17,
    "empresa": "RANCHO SANTA MARGARITA \"RANCHO SANTA MARGARITA\"",
    "responsable": "MVZ. ALFONSO MONTERO PEREZ",
    "fecha": "15/07/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 18,
    "empresa": "RANCHO SANTA MONICA \"RANCHO SANTA MONICA\"",
    "responsable": "C. ALMA DELIA SANCHEZ VALENZUELA",
    "fecha": "15/07/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 19,
    "empresa": "SOCIEDAD COOPERATIVA DE PRODUCCION PESQUERA PUERTO DE LA REFORMA S. C. L. \"SOCIEDAD COOPERATIVA\"",
    "responsable": "C. JOSE MARIA VALENZUELA GUTIERREZ",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 20,
    "empresa": "SOCIEDAD COOPERATIVA DE PRODUCCION PESQUERA ROBALO S. C. DE R. L. DE C. V. \"SOCIEDAD COOPERATIVA\"",
    "responsable": "C. ARNULFO VALENZUELA MORALES",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 21,
    "empresa": "SOCIENDAD COOPERATIVA DE PRODUCCIÓN PESQUERA LOS GUASAMOTES S.C.L \"SOCIEDAD COOPERATIVA\"",
    "responsable": "C. JOSE ROSARIO SANCHEZ RIVERA",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 22,
    "empresa": "UNION DE COOPERATIVAS PESQUERAS DE GUASAVE S. C. DE R. L. \"LA UNION\"",
    "responsable": "C. JOSE ROSARIO SANCHEZ RIVERA",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 23,
    "empresa": "UNIVERSIDAD AUTÓNOMA DE YUCATÁN",
    "responsable": "DR. JOSE DE JESUS WILLIAMS",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 24,
    "empresa": "UNIVERSIDAD AUTÓNOMA DE CHIAPAS",
    "responsable": "MTRO CARLOS EUGENIO RUIZ HERNÁNDEZ",
    "fecha": "13/05/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 25,
    "empresa": "UNIVERSIDAD AUTÓNOMA DE NAYARIT",
    "responsable": "C.P. JUAN LOPEZ SALAZAR",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 26,
    "empresa": "UNIVERSIDAD DE GUADALAJARA",
    "responsable": "MTRO. ITZCOATL TONATIUH BRAVO PADILLA",
    "fecha": "13/05/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 27,
    "empresa": "UNIVERSIDAD MICHOACANA DE SAN NICOLÁS DE HIDALGO",
    "responsable": "DR. MEDARDO SERNA GONZALEZ",
    "fecha": "13/05/2015",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 28,
    "empresa": "AGRO-INDUSTRIAS GUASAVE S.A. DE C.V.",
    "responsable": "LIC. BALDEMAR CHOMINA MONTOYA",
    "fecha": "17/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 29,
    "empresa": "AGRICOLA EL ENCANTO S.P.R. DE R.L.",
    "responsable": "LIC. AGUSTIN SARACHO RIVAS",
    "fecha": "12/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 30,
    "empresa": "AGRICOLA LA RETA S.A. DE C.V.",
    "responsable": "ING. ANTONIO REYES CORDERO",
    "fecha": "11/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 31,
    "empresa": "AGRICOLA LOS ALISOS S.A. DE C.V.",
    "responsable": "SR. JUAN BAUTISTA SERRANO BELTRAN",
    "fecha": "17/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 32,
    "empresa": "AGROSERVICIOS VALDEZ S.A. DE C.V.",
    "responsable": "LIC. MIGUEL VALDEZ GASTELUM",
    "fecha": "11/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 33,
    "empresa": "AGRÍCOLA VALLES VERDES S.A. DE C.V.",
    "responsable": "LIC. FRANCISCO JAVIER ALATORRE PEREZ",
    "fecha": "17/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 34,
    "empresa": "COOPERATIVA PESQUERA Y TURISTICA GUASAVE",
    "responsable": "C. ERASMO GASTELUM AHUMADA",
    "fecha": "17/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 35,
    "empresa": "AGRICOLA EL COMPAS S.A. DE C.V.",
    "responsable": "ING. JORGE MANUEL INZUNZA",
    "fecha": "18/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 36,
    "empresa": "PRODUCTORA Y COMERCIALIZADORA DE HORTALIZAS SAN CARLOS S.A. DE C.V.",
    "responsable": "LIC. CARLOS RODRIGUEZ BELTRAN",
    "fecha": "15/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 37,
    "empresa": "AGRÍCOLA BELHER S.P.R. DE R.L.",
    "responsable": "C. ROSARIO ANTONIO BELTRAN URETA",
    "fecha": "10/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 38,
    "empresa": "ASOCIACIÓN DE AGRICULTORES DEL RIO DE CULIACÁN A.C.",
    "responsable": "ING. GUILLERMO ENRIQUE GASTELUM BON BUSTAMANTE",
    "fecha": "18/02/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 39,
    "empresa": "CENTRO DE INVESTIGACIÓN EN ALIMENTACIÓN Y DESARROLLO A.C. (CIAD)",
    "responsable": "DR. RAMÓN PACHECO AGUILAR",
    "fecha": "04/05/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 40,
    "empresa": "SOCIEDAD DE PRODUCCIÓN RURAL \"APICOLA DEL VALLE\"",
    "responsable": "MARIA ELENA HIGUERA LOPEZ",
    "fecha": "23/04/2007",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 41,
    "empresa": "AGRO-INNOVACIÓN DE CULIACÁN S.A. DE C.V.",
    "responsable": "MARCO ALBERTO BORBOA FELIX",
    "fecha": "27/11/2006",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 42,
    "empresa": "ASOCIACIÓN DE AVICULTORES DE CULIACÁN",
    "responsable": "ING. SERGIO ESQUER PEIRO",
    "fecha": "26/04/2007",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 43,
    "empresa": "CENTRO DE CONTROL Y DIAGNOSTICO ZOOSANITARIO",
    "responsable": "MVZ. ALBERTO BALDERRAMA MONRREAL",
    "fecha": "08/04/2010",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 44,
    "empresa": "COMITÉ ESTATAL DE FOMENTO Y PROTECCIÓN PECUARIA DE SINALOA",
    "responsable": "DR. ROBERTO CARREÓN GÁMEZ",
    "fecha": "08/04/2010",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 45,
    "empresa": "IDIOMAS-UAS",
    "responsable": "ELVIRA MARGARITA GUEVARA SALDIVAR",
    "fecha": "2010",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 46,
    "empresa": "FACULTAD DE MEDICINA VETERINARIA Y ZOOTECNIA - UNIVERSIDAD AUTÓNOMA DEL ESTADO DE MÉXICO",
    "responsable": "DR. IGNACIO A. DOMINGUEZ VARA",
    "fecha": "04/04/2008",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 47,
    "empresa": "SUKARNE AGROINDUSTRIAL, S.A DE C.V.",
    "responsable": "C. MARIO ALBERTO DELGADO URETA",
    "fecha": "15/07/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 48,
    "empresa": "GANADERA FLEXI",
    "responsable": "MC JOSÉ ANGULO BENITES",
    "fecha": "02/12/2004",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 49,
    "empresa": "RASTRO DEL MUNICIPIO DE CULIACÁN",
    "responsable": "ING. EVANGELO SANCHEZ STAMATIS",
    "fecha": "2000",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 50,
    "empresa": "ASOCIACIÓN DE ENGORDADORES DE GANADO",
    "responsable": "ING. ENRIQUE RODARTE SALAZAR",
    "fecha": "20/02/2002",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 51,
    "empresa": "CONSEJO ESTATAL DE CIENCIAS Y TECNOLOGÍA",
    "responsable": "DR. FAUSTO BURGUEÑO LOMELI",
    "fecha": "25/10/2002",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 52,
    "empresa": "FORRAJES EL BARRIO",
    "responsable": "C. JOSE REYES RODRIGUEZ",
    "fecha": "26/05/1999",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 53,
    "empresa": "KEMIN INDUSTRY I.N.C.",
    "responsable": "DR. EDDY FONTANA",
    "fecha": "24/05/1999",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 54,
    "empresa": "UNIVERSIDAD DE ANTIOQUIA (COLOMBIA)",
    "responsable": "DR. MARIO ALVIRA RAMIREZ",
    "fecha": "02/03/2016",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 55,
    "empresa": "SERVICIOS DE SALUD DE SINALOA (SSS)",
    "responsable": "DR. ERNESTO ECHEVERRIA AISPURO",
    "fecha": "19/05/2014",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 56,
    "empresa": "MONSANTO",
    "responsable": "DR. JESÚS EDUARDO PÉREZ PICO",
    "fecha": "24/01/2014",
    "vigencia": "DOS AÑOS"
  },
  {
    "num": 57,
    "empresa": "UNIVERSIDAD \"IGNACIO AGRAMONTE Y LOYNAZ\" CAMAGÜEY (CUBA)",
    "responsable": "DRA. ELENA DE LOS ANGELES DE VARONA RODRÍGUEZ",
    "fecha": "2019",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 58,
    "empresa": "UNIVERSIDAD JUÁREZ DEL ESTADO DE DURANGO",
    "responsable": "C.P. RUBEN CALDERÓN LUJÁN",
    "fecha": "30/01/2008",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 59,
    "empresa": "UNIVERSIDAD AUTÓNOMA DE BAJA CALIFORNIA",
    "responsable": "DR. JUAN MANUEL OCEGUEDA HERNANDEZ",
    "fecha": "01/03/2018",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 60,
    "empresa": "INSTITUTO NACIONAL DE INVESTIGACIONES FORESTALES, AGRÍCOLAS Y PECUARIAS (INIFAP)",
    "responsable": "MTRO. JORGE ALBERTO SAINZ FÉLIX",
    "fecha": "18/02/2015",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 61,
    "empresa": "UNIVERSIDAD AUTÓNOMA METROPOLITANA",
    "responsable": "DR. SALVADOR VEGA Y LEÓN",
    "fecha": "15/04/2016",
    "vigencia": "CUATRO AÑOS"
  },
  {
    "num": 62,
    "empresa": "CENTRO INTERNACIONAL DE MEJORAMIENTO DE MAÍZ Y TRIGO (CIMMYT)",
    "responsable": "DRA. MARIANNE BAZINGER",
    "fecha": "03/06/2016",
    "vigencia": "31/12/2016"
  },
  {
    "num": 63,
    "empresa": "NEW MEXICO STATE UNIVERSITY (USA)",
    "responsable": "DR. APRIL MASON",
    "fecha": "14/01/2019",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 64,
    "empresa": "INSTITUTO DE CIENCIA ANIMAL (CUBA)",
    "responsable": "DR. JOSE ANDRES DIAZ UNTORIA",
    "fecha": "13/03/2014",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 65,
    "empresa": "COLEGIO DE POSTGRADUADOS",
    "responsable": "DR. JESUS MARIA MONDACA DE LA FUENTE",
    "fecha": "17/02/2016",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 66,
    "empresa": "UNIVERSIDAD DE SONORA",
    "responsable": "DR. HERIBERTO GRIJALVA MONTEVERDE",
    "fecha": "20/01/2017",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 67,
    "empresa": "UNIVERSIDAD DE GUANTÁNAMO",
    "responsable": "DR. ALBERTO TURRO BREFF",
    "fecha": "15/02/2017",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 68,
    "empresa": "FIDEICOMISO FONDO DE FOMENTO AGROPECUARIO DEL ESTADO DE SINALOA",
    "responsable": "DR. JORGE FABIO INZUNZA CASTRO",
    "fecha": "12/11/2018",
    "vigencia": "29/03/2019"
  },
  {
    "num": 69,
    "empresa": "COMISIÓN ESTATAL PARA LA PROTECCIÓN CONTRA RIESGOS SANITARIOS DE SINALOA (COEPRISS)",
    "responsable": "DR. ERNESTO ECHEVERRIA AISPURO",
    "fecha": "20/01/2016",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 70,
    "empresa": "SECRETARÍA DE AGRICULTURA, GANADERÍA Y PESCA",
    "responsable": "LIC. JUAN NICASIO GUERRA OCHOA",
    "fecha": "15/05/2014",
    "vigencia": "UN AÑO"
  },
  {
    "num": 71,
    "empresa": "COMITÉ ESTATAL DE SANIDAD VEGETAL (CESAVESIN)",
    "responsable": "ING. HECTOR MORENO COTA",
    "fecha": "09/05/2014",
    "vigencia": "CINCO AÑOS"
  },
  {
    "num": 72,
    "empresa": "AMOCALI A.C.",
    "responsable": "ALEJANDRO GALINDO BETANCOURT",
    "fecha": "22/09/2015",
    "vigencia": "DOS AÑOS"
  },
  {
    "num": 73,
    "empresa": "ASOCIACIÓN MEXICANA DE HORTICULTURA PROTEGIDA A.C.",
    "responsable": "ING. ALFREDO DIAZ BELMONTES",
    "fecha": "05/09/2017",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 74,
    "empresa": "CONFEDERACIÓN DE ASOCIACIONES AGRÍCOLAS DEL ESTADO DE SINALOA (CAADES)",
    "responsable": "MC. LUIS ANTONIO CARDENAS FONSECA",
    "fecha": "18/02/1998",
    "vigencia": "INDEFINIDO"
  },
  {
    "num": 75,
    "empresa": "AC1 CULIACÁN, S.A.P.I. DE C.V.",
    "responsable": "LIC. ARMANDO MONTAÑO MIRANDA",
    "fecha": "21/02/2019",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 76,
    "empresa": "AGRÍCOLA KONDO",
    "responsable": "C. ISUKE KONDO GARCIA",
    "fecha": "10/04/2019",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 77,
    "empresa": "AGROSABINO S.A. DE C.V.",
    "responsable": "ING. MARIANO LOPEZ VALENCIA",
    "fecha": "20/04/2018",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 78,
    "empresa": "JOVA CAPITAL, S.A.P.I. DE C.V.",
    "responsable": "LIC. ELEODORO VERDUGO RAMOS",
    "fecha": "11/10/2017",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 79,
    "empresa": "LABORATORIOS QUIVER S.A. DE C.V.",
    "responsable": "DR. ENRIQUE MUÑOS MORATE",
    "fecha": "09/06/2016",
    "vigencia": "DOS AÑOS"
  },
  {
    "num": 80,
    "empresa": "PROAGRO DEL NOROESTE S.A. DE C.V.",
    "responsable": "ING. ROBERTO HERRERA CARDENAS",
    "fecha": "15/06/2018",
    "vigencia": "TRES AÑOS"
  },
  {
    "num": 81,
    "empresa": "PROVIVI PHEROMONES DE MEXICO S.A. DE C.V.",
    "responsable": "C. CARLOS URIBE GOMEZ",
    "fecha": "15/12/2019",
    "vigencia": "31/08/2020"
  },
  {
    "num": 82,
    "empresa": "PIMIENTOS SELECTOS S.A. DE C.V.",
    "responsable": "ING. MARIANO LOPEZ VALENCIA",
    "fecha": "18/03/2016",
    "vigencia": "INDEFINIDA"
  },
  {
    "num": 83,
    "empresa": "AGRICOL BBS S.P.R. DE R.L. DE C.V.",
    "responsable": "ING. JESUS RODOLFO SOBERANES MARTIENS",
    "fecha": "10/09/2015",
    "vigencia": "INDEFINIDA"
  },
  {
    "num": 84,
    "empresa": "BIOTEKSA S.A. DE C.V.",
    "responsable": "DR. LUIS ALBERTO LIGHTBOURN ROJAS",
    "fecha": "21/02/2018",
    "vigencia": "31/12/2018"
  },
  {
    "num": 85,
    "empresa": "EXPORTALIZAS MEXICANAS",
    "responsable": "LIC. GUILLERMO CHAIDEZ QUINTERO",
    "fecha": "22/02/2019",
    "vigencia": "INDEFINIDA"
  },
  {
    "num": 86,
    "empresa": "UNIÓN GANADERA REGIONAL DE SINALOA",
    "responsable": "ING. FAUSTINO HERNANDEZ ALVAREZ",
    "fecha": "04/12/2014",
    "vigencia": "INDEFINIDA"
  },
  {
    "num": 87,
    "empresa": "GRANJA SILVIA",
    "responsable": "C. SILVIA KURODA ARAUJO",
    "fecha": "09/10/2015",
    "vigencia": "INDEFINIDA"
  },
  {
    "num": 88,
    "empresa": "CENTRO DE INVESTIGACIÓN Y ASISTENCIA EN TECNOLOGÍA Y DISEÑO DEL ESTADO DE JALISCO (CIATEJ)",
    "responsable": "DRA. EUGENIA DEL CARMEN LUGO CERVANTES",
    "fecha": "27/01/2021",
    "vigencia": "TRES AÑOS"
  }
];

  const searchInput = document.getElementById("busquedaConvenio");
  const tbody = document.querySelector("#tablaConvenios tbody");
  const paginationUl = document.getElementById("paginacionConvenios");

  const limit = 10;
  let currentPage = 1;
  let filteredData = [...DATA_CONVENIOS];

  function renderTable() {
    tbody.innerHTML = '';
    const slice = filteredData.slice((currentPage - 1) * limit, currentPage * limit);
    if (!slice.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted">No se encontraron convenios que coincidan con la búsqueda.</td></tr>';
      return;
    }
    slice.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="text-center"><strong>${d.num}</strong></td>
        <td><strong>${d.empresa}</strong></td>
        <td>${d.responsable}</td>
        <td class="text-center">${d.fecha}</td>
        <td class="text-center"><span class="badge ${d.vigencia.toUpperCase().includes('INDEFINID') ? 'bg-success' : 'bg-primary'}">${d.vigencia}</span></td>
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
    filteredData = DATA_CONVENIOS.filter(d => 
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  searchInput.addEventListener('input', applyFilter);

  applyFilter();
});
