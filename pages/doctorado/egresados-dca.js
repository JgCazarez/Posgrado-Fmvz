document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Egresados y Graduados - Doctorado en Ciencias Agropecuarias (DCA)
   * 
   * Inserta tus registros en el arreglo DATA_EGRESADOS_DCA con la siguiente estructura:
   * {
   *   alumno: "Nombre Completo del Doctor Graduado",
   *   tema: "Título de la Tesis Doctoral Defendida",
   *   comite: "Director de Tesis y Comité Tutorial",
   *   cohorte: "2018-2022"
   * }
   */
  const DATA_EGRESADOS_DCA = [
    // Pega aquí tus registros:
  ];

  const configEgresadosDCA = {
    busquedaId: "busquedaEgresadoDCA",
    cohorteId: "filtroCohorteEgresadoDCA",
    tbodySelector: "#tablaEgresadosDCA tbody",
    paginacionId: "paginacionEgresadosDCA",
  };

  inicializarTablaTesis(DATA_EGRESADOS_DCA, configEgresadosDCA);
});
