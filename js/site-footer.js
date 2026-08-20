class SiteFooter extends HTMLElement {
  connectedCallback() {
    const root = this.dataset.root || './';
    this.innerHTML = `
      <footer class="site-footer" id="colophon">
        <div class="footer-top">
          <div class="footer-container">
            <!-- Columna 1: Info Institucional -->
            <div class="footer-col footer-brand">
              <div class="footer-brand-logos">
                <img src="${root}assets/image-34.png" alt="Escudo UAS" class="footer-logo">
                <img src="${root}assets/consolidacion2029-2.png" alt="Consolidación UAS" class="footer-logo">
              </div>
              <h3 class="footer-title">COLEGIO DE CIENCIAS AGROPECUARIAS</h3>
              <p class="footer-subtitle">Facultad de Medicina Veterinaria y Zootecnia</p>
              <p class="footer-desc">Universidad Autónoma de Sinaloa. Formando investigadores y profesionales de excelencia comprometidos con el desarrollo agropecuario y sustentable del país.</p>
            </div>

            <!-- Columna 2: Enlaces Rápidos -->
            <div class="footer-col">
              <h4 class="footer-heading">Enlaces Rápidos</h4>
              <ul class="footer-links">
                <li><a href="${root}index.html">Inicio</a></li>
                <li><a href="${root}pages/nosotros.html">Nosotros / Misión y Visión</a></li>
                <li><a href="${root}pages/nosotros.html#directorio">Directorio Institucional</a></li>
                <li><a href="${root}pages/oferta-educativa.html#doctorado">Doctorado en Ciencias Agropecuarias</a></li>
                <li><a href="${root}pages/oferta-educativa.html#maestria">Maestría en Ciencias Agropecuarias</a></li>
                <li><a href="${root}pages/investigacion.html">Líneas de Investigación (LGAC)</a></li>
                <li><a href="${root}pages/doctorado/tesis-en-proceso.html">Tesis DCA en Proceso</a></li>
                <li><a href="${root}pages/maestria/tesis-en-proceso.html">Tesis MCA en Proceso</a></li>
              </ul>
            </div>

            <!-- Columna 3: Contacto y Horarios -->
            <div class="footer-col">
              <h4 class="footer-heading">Contacto y Ubicación</h4>
              <ul class="footer-contact-list">
                <li>
                  <span class="contact-icon">📍</span>
                  <span>Boulevard San Ángel 3800, Col. San Benito, C.P. 80246, Culiacán, Sinaloa, México.</span>
                </li>
                <li>
                  <span class="contact-icon">📞</span>
                  <a href="tel:6677181650">(667) 718-1650</a>
                </li>
                <li>
                  <span class="contact-icon">✉️</span>
                  <a href="mailto:posgradocca@uas.edu.mx">posgradocca@uas.edu.mx</a>
                </li>
                <li>
                  <span class="contact-icon">🕒</span>
                  <span>Lunes a Viernes: 9:00 – 15:00 hrs.</span>
                </li>
              </ul>
              <div class="footer-badges">
                <span class="badge-snp">Perteneciente al SNP / CONAHCYT</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Barra Inferior de Copyright -->
        <div class="footer-bottom">
          <div class="footer-bottom-container">
            <p>Todos los derechos reservados &copy; 2026 Universidad Autónoma de Sinaloa | Colegio de Ciencias Agropecuarias UAS</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
