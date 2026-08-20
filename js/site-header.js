class SiteHeader extends HTMLElement {
  connectedCallback() {
    const root = this.dataset.root || './';
    this.innerHTML = `
      <header class="site-header">
        <div class="header-container">
          <!-- Logo Izquierdo con fondo blanco institucional -->
          <div class="logo-box logo-left hide-mobile">
            <a href="${root}index.html" title="Universidad Autónoma de Sinaloa">
              <img src="${root}assets/image-34.png" alt="Escudo UAS" class="logo">
            </a>
          </div>

          <!-- Título Central -->
          <div class="header-titles">
            <h1>COLEGIO DE CIENCIAS AGROPECUARIAS</h1>
          </div>

          <!-- Botón Menú Móvil -->
          <button class="mobile-btn" id="mobileMenuBtn" aria-label="Abrir menú de navegación">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- Logo Derecho con fondo blanco institucional -->
          <div class="logo-box logo-right hide-mobile">
            <a href="${root}index.html" title="Consolidación Global 2029">
              <img src="${root}assets/consolidacion2029-2.png" alt="UAS Visión 2029" class="logo">
            </a>
          </div>
        </div>
        
        <!-- Subtítulo Franja Azul Oscura -->
        <h2 class="header-subtitle hide-mobile">U N I V E R S I D A D &nbsp; A U T Ó N O M A &nbsp; D E &nbsp; S I N A L O A</h2>
      </header>

      <!-- Barra de Navegación Amarilla Institucional con las 9 Secciones Exactas -->
      <nav class="main-nav" aria-label="Navegación principal">
        <div class="nav-container">
          <ul class="nav-list" id="navList">
            
            <!-- 1. Inicio -->
            <li>
              <a href="${root}index.html">Inicio</a>
            </li>
            
            <!-- 2. Nosotros -->
            <li class="dropdown">
              <a href="${root}pages/nosotros/mensaje-de-bienvenida.html">Nosotros</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/nosotros/mensaje-de-bienvenida.html">Mensaje de Bienvenida</a></li>
                <li><a href="${root}pages/nosotros/dca-objetivo-mision-vision.html">DCA: Objetivo, Misión Visión y Metas</a></li>
                <li><a href="${root}pages/nosotros/mca-objetivo-mision-vision.html">MCA: Objetivo, Misión Visión y Metas</a></li>
                <li><a href="${root}pages/nosotros/normatividad.html">Normatividad</a></li>
                <li><a href="${root}pages/nosotros/logos.html">LOGOS</a></li>
                <li><a href="${root}pages/nosotros/directorio.html">Directorio</a></li>
              </ul>
            </li>

            <!-- 3. Investigación -->
            <li class="dropdown">
              <a href="${root}pages/investigacion.html">Investigación</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/investigacion.html#redes">Redes de investigación</a></li>
                <li><a href="${root}pages/investigacion.html#lgac">Líneas de investigación</a></li>
                <li><a href="${root}pages/investigacion.html#cuerpos">Cuerpos académicos</a></li>
                <li><a href="${root}pages/doctorado/tesis-en-proceso.html">DCA: Tesis en proceso</a></li>
                <li><a href="${root}pages/maestria/tesis-en-proceso.html">MCA: Tesis en proceso</a></li>
                <li><a href="${root}pages/investigacion.html#productividad">Productividad académica relevante</a></li>
              </ul>
            </li>

            <!-- 4. Oferta Educativa (Mega Menú) -->
            <li class="dropdown">
              <a href="${root}pages/oferta-educativa.html">Oferta Educativa</a>
              <ul class="dropdown-content mega-menu">
                <div class="dropdown-mega">
                  <div class="dropdown-column">
                    <h3>DOCTORADO EN CIENCIAS AGROPECUARIAS</h3>
                    <ul>
                      <li><a href="${root}pages/doctorado/general.html">General</a></li>
                      <li><a href="${root}pages/doctorado/plan-de-estudios.html">Plan de Estudios Doctorado</a></li>
                      <li><a href="${root}pages/doctorado/perfiles.html">Perfiles</a></li>
                      <li><a href="${root}pages/doctorado/nucleo-academico.html">Docentes</a></li>
                      <li><a href="${root}pages/doctorado/nucleo-academico.html">Núcleo Académico Básico</a></li>
                      <li><a href="${root}pages/doctorado/egresados.html">Egresados</a></li>
                    </ul>
                  </div>
                  <div class="dropdown-column">
                    <h3>MAESTRÍA EN CIENCIAS AGROPECUARIAS</h3>
                    <ul>
                      <li><a href="${root}pages/maestria/general.html">General</a></li>
                      <li><a href="${root}pages/maestria/plan-de-estudios.html">Plan de Estudios</a></li>
                      <li><a href="${root}pages/maestria/perfiles.html">Perfiles</a></li>
                      <li><a href="${root}pages/maestria/nucleo-academico.html">Docentes</a></li>
                      <li><a href="${root}pages/maestria/nucleo-academico.html">Núcleo Académico Básico</a></li>
                      <li><a href="${root}pages/maestria/egresados.html">Egresados</a></li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>

            <!-- 5. Vinculación -->
            <li>
              <a href="${root}pages/investigacion.html#redes">Vinculación</a>
            </li>

            <!-- 6. Repositorio de Tesis -->
            <li class="dropdown">
              <a href="#">Repositorio de Tesis</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/maestria/tesis-en-proceso.html">Maestría en Ciencias Agropecuarias</a></li>
                <li><a href="${root}pages/doctorado/tesis-en-proceso.html">Doctorado en Ciencias Agropecuarias</a></li>
              </ul>
            </li>

            <!-- 7. Seguimiento de Egresados -->
            <li class="dropdown">
              <a href="#">Seguimiento de Egresados</a>
              <ul class="dropdown-content">
                <li><a href="${root}pages/doctorado/egresados.html">DCA: Seguimiento de Egresados</a></li>
                <li><a href="${root}pages/maestria/egresados.html">MCA: Seguimiento de Egresados</a></li>
              </ul>
            </li>

            <!-- 8. Estudiantes -->
            <li class="dropdown">
              <a href="#">Estudiantes</a>
              <ul class="dropdown-content">
                <li><a href="${root}index.html#convocatorias">Convocatorias</a></li>
                <li><a href="${root}pages/maestria/tesis-en-proceso.html">MCA: Estudiantes Matriculados</a></li>
                <li><a href="${root}pages/doctorado/tesis-en-proceso.html">DCA: Estudiantes Matriculados</a></li>
                <li><a href="${root}pages/nosotros/normatividad.html">MCA: Procesos Administrativos</a></li>
                <li><a href="${root}pages/nosotros/normatividad.html">DCA: Procesos Administrativos</a></li>
                <li><a href="${root}pages/nosotros/normatividad.html">Formatos</a></li>
              </ul>
            </li>

            <!-- 9. Medios de Verificación PNPC -->
            <li>
              <a href="https://aplicaciones.conacyt.mx:7443/generador-view-angular/index.html?application=PNPC#/login" target="_blank" rel="noopener noreferrer">
                Medios de Verificación PNPC
              </a>
            </li>

          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('site-header', SiteHeader);
