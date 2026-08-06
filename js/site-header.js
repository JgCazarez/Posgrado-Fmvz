class SiteHeader extends HTMLElement {
  connectedCallback() {
    const root = this.dataset.root || './';
    this.innerHTML = `
      <header class="site-header">
        <div class="header-container">
          <img src="${root}assets/image-34.png" alt="Logo Escudo" class="logo hide-mobile">
          <div class="header-titles"><h1>COLEGIO DE CIENCIAS AGROPECUARIAS</h1></div>
          <button class="mobile-btn" id="mobileMenuBtn" aria-label="Abrir menú"><span></span><span></span><span></span></button>
          <img src="${root}assets/consolidacion2029-2.png" alt="Logo UAS" class="logo hide-mobile">
        </div>
        <h2 class="header-subtitle hide-mobile">UNIVERSIDAD AUTÓNOMA DE SINALOA</h2>
      </header>
      <nav class="main-nav">
        <div class="nav-container">
          <ul class="nav-list" id="navList">
            <li><a href="${root}index.html">Inicio</a></li>
            <li class="dropdown"><a href="${root}pages/nosotros.html">Nosotros ▾</a><ul class="dropdown-content"><li><a href="${root}pages/nosotros.html#mision-vision">Misión y Visión</a></li><li><a href="${root}pages/nosotros.html#historia">Historia</a></li><li><a href="${root}pages/nosotros.html#directorio">Directorio</a></li></ul></li>
            <li class="dropdown"><a href="${root}pages/investigacion.html">Investigación ▾</a><ul class="dropdown-content"><li><a href="#">Redes de investigación</a></li><li><a href="#">Líneas de investigación</a></li><li><a href="#">Cuerpos académicos</a></li><li><a href="${root}pages/doctorado/tesis-en-proceso.html">DCA: Tesis en proceso</a></li><li><a href="${root}pages/maestria/tesis-en-proceso.html">MCA: Tesis en proceso</a></li><li><a href="#">Productividad académica relevante</a></li></ul></li>
            <li class="dropdown"><a href="${root}pages/oferta-educativa.html">Oferta Educativa ▾</a><ul class="dropdown-content"><li><a href="${root}pages/doctorado/tesis-en-proceso.html">Doctorado</a></li><li><a href="${root}pages/maestria/tesis-en-proceso.html">Maestría</a></li></ul></li>
            <li><a href="#">Vinculación</a></li>
            <li class="dropdown"><a href="#">Repositorio de Tesis ▾</a><ul class="dropdown-content"><li><a href="#">Tesis DCA</a></li><li><a href="#">Tesis MCA</a></li></ul></li>
            <li class="dropdown"><a href="#">Seguimiento de Egresados ▾</a><ul class="dropdown-content"><li><a href="#">Formularios</a></li></ul></li>
            <li class="dropdown"><a href="#">Estudiantes ▾</a><ul class="dropdown-content"><li><a href="#">Trámites</a></li></ul></li>
            <li><a href="#">Medios de Verificación PNPC</a></li>
          </ul>
        </div>
      </nav>`;
  }
}

customElements.define('site-header', SiteHeader);
