class SiteHeader extends HTMLElement {
  connectedCallback() {
    const root = this.dataset.root || './';
    this.innerHTML = `
      <header class="site-header">
        <div class="header-container">
          <a href="${root}index.html" title="Colegio de Ciencias Agropecuarias - UAS">
            <img src="${root}assets/image-34.png" alt="Escudo UAS" class="logo hide-mobile">
          </a>
          <div class="header-titles">
            <h1>COLEGIO DE CIENCIAS AGROPECUARIAS</h1>
          </div>
          <button class="mobile-btn" id="mobileMenuBtn" aria-label="Abrir menú de navegación">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="${root}index.html" title="Consolidación Global 2029">
            <img src="${root}assets/consolidacion2029-2.png" alt="Logo Consolidación 2029" class="logo hide-mobile">
          </a>
        </div>
        <h2 class="header-subtitle hide-mobile">UNIVERSIDAD AUTÓNOMA DE SINALOA</h2>
      </header>

      <nav class="main-nav" aria-label="Navegación principal">
        <div class="nav-container">
          <ul class="nav-list" id="navList">
            <li><a href="${root}index.html">Inicio</a></li>
            
            <li class="dropdown">
              <a href="${root}pages/nosotros.html">Nosotros</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/nosotros.html#bienvenida">Mensaje de Bienvenida</a></li>
                <li><a href="${root}pages/nosotros.html#dca-mision">DCA: Objetivo, Misión y Visión</a></li>
                <li><a href="${root}pages/nosotros.html#mca-mision">MCA: Objetivo, Misión y Visión</a></li>
                <li><a href="${root}pages/nosotros.html#directorio">Directorio</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="${root}pages/investigacion.html">Investigación</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/investigacion.html#lgac">Líneas de Investigación (LGAC)</a></li>
                <li><a href="${root}pages/investigacion.html#cuerpos">Cuerpos Académicos</a></li>
                <li><a href="${root}pages/investigacion.html#redes">Redes de Investigación</a></li>
                <li><a href="${root}pages/doctorado/tesis-en-proceso.html">DCA: Tesis en Proceso</a></li>
                <li><a href="${root}pages/maestria/tesis-en-proceso.html">MCA: Tesis en Proceso</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="${root}pages/oferta-educativa.html">Oferta Educativa</a>
              <ul class="dropdown-content mega-menu">
                <div class="dropdown-mega">
                  <div class="dropdown-column">
                    <h3>DOCTORADO EN CIENCIAS AGROPECUARIAS</h3>
                    <ul>
                      <li><a href="${root}pages/oferta-educativa.html#dca-general">Información General</a></li>
                      <li><a href="${root}pages/oferta-educativa.html#dca-plan">Plan de Estudios</a></li>
                      <li><a href="${root}pages/oferta-educativa.html#dca-perfiles">Perfiles de Ingreso / Egreso</a></li>
                      <li><a href="${root}pages/oferta-educativa.html#dca-nab">Núcleo Académico Básico</a></li>
                      <li><a href="${root}pages/doctorado/tesis-en-proceso.html">Tesis DCA en Proceso</a></li>
                    </ul>
                  </div>
                  <div class="dropdown-column">
                    <h3>MAESTRÍA EN CIENCIAS AGROPECUARIAS</h3>
                    <ul>
                      <li><a href="${root}pages/oferta-educativa.html#mca-general">Información General</a></li>
                      <li><a href="${root}pages/oferta-educativa.html#mca-plan">Plan de Estudios</a></li>
                      <li><a href="${root}pages/oferta-educativa.html#mca-perfiles">Perfiles de Ingreso / Egreso</a></li>
                      <li><a href="${root}pages/oferta-educativa.html#mca-nab">Núcleo Académico Básico</a></li>
                      <li><a href="${root}pages/maestria/tesis-en-proceso.html">Tesis MCA en Proceso</a></li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#">Tesis y Egresados</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/doctorado/tesis-en-proceso.html">DCA: Tesis en Proceso</a></li>
                <li><a href="${root}pages/maestria/tesis-en-proceso.html">MCA: Tesis en Proceso</a></li>
                <li><a href="${root}pages/oferta-educativa.html#egresados">Seguimiento de Egresados</a></li>
              </ul>
            </li>

            <li>
              <a href="https://aplicaciones.conacyt.mx:7443/generador-view-angular/index.html?application=PNPC#/login" target="_blank" rel="noopener noreferrer">
                Medios de Verificación PNPC ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('site-header', SiteHeader);
