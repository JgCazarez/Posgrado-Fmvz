document.addEventListener("DOMContentLoaded", function () {
  /**
   * BASE DE DATOS: Egresados y Graduados - Maestría en Ciencias Agropecuarias (MCA)
   * 
   * Inserta tus registros en el arreglo DATA_EGRESADOS_MCA con la siguiente estructura:
   * {
   *   alumno: "Nombre Completo del Maestro Graduado",
   *   tema: "Título de la Tesis de Maestría Defendida",
   *   comite: "Director de Tesis y Comité Tutorial",
   *   cohorte: "2019-2021"
   * }
   */
  const DATA_EGRESADOS_MCA = [
    // Pega aquí tus registros:
  ];

  const configEgresadosMCA = {
    busquedaId: "busquedaEgresadoMCA",
    cohorteId: "filtroCohorteEgresadoMCA",
    tbodySelector: "#tablaEgresadosMCA tbody",
    paginacionId: "paginacionEgresadosMCA",
  };

  inicializarTablaTesis(DATA_EGRESADOS_MCA, configEgresadosMCA);
});
