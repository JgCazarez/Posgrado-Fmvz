/**
 * Renderizador interactivo de Docentes y Núcleo Académico Básico (NAB)
 * Proporciona filtrado en tiempo real, fotos oficiales y desplegables para la semblanza curricular.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('docentesContainer');
  const searchInput = document.getElementById('searchDocente');
  const countDisplay = document.getElementById('docenteCount');

  if (!container || typeof DATA_DOCENTES === 'undefined') return;

  // Determine root prefix based on current pathname
  const path = window.location.pathname;
  let root = '../../';
  if (path.endsWith('index.html') || path.endsWith('/')) {
    root = './';
  } else if (path.includes('/pages/') && !path.includes('/doctorado/') && !path.includes('/maestria/') && !path.includes('/nosotros/')) {
    root = '../';
  }

  function render(list) {
    container.innerHTML = '';
    
    if (countDisplay) {
      countDisplay.textContent = `${list.length} docente${list.length === 1 ? '' : 's'} encontrado${list.length === 1 ? '' : 's'}`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #ffffff; border-radius: 8px; border: 1px dashed #cbd5e1;">
          <p style="color: #64748b; font-size: 1.1rem; margin-bottom: 8px;">No se encontraron docentes con ese criterio de búsqueda.</p>
          <button onclick="document.getElementById('searchDocente').value=''; document.getElementById('searchDocente').dispatchEvent(new Event('input'))" style="background: #0B5EAF; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: 600;">
            Limpiar filtro
          </button>
        </div>
      `;
      return;
    }

    list.forEach(docente => {
      // Get initials for fallback
      const cleanName = docente.nombre.replace(/^(Dr\.|Dra\.)\s*/i, '').trim();
      const initials = cleanName.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
      const photoSrc = docente.foto ? (root + docente.foto) : '';

      const card = document.createElement('div');
      card.className = 'docente-card';

      card.innerHTML = `
        <div class="docente-header">
          ${photoSrc ? `
            <img src="${photoSrc}" alt="${docente.nombre}" class="docente-avatar-img" loading="lazy" onerror="this.outerHTML='<div class=\\'docente-avatar\\'>${initials}</div>'">
          ` : `
            <div class="docente-avatar" aria-hidden="true">${initials}</div>
          `}
          <div class="docente-info">
            <h3>${docente.nombre}</h3>
            <div class="docente-cargo">${docente.cargo}</div>
            <div class="docente-badges">
              <span class="badge-docente gold">SNII CONAHCYT</span>
              <span class="badge-docente blue">Perfil PRODEP</span>
            </div>
          </div>
        </div>

        ${docente.email ? `
          <a href="mailto:${docente.email}" class="docente-email" title="Enviar correo electrónico">
            ${docente.email}
          </a>
        ` : ''}

        <!-- Desplegable Semblanza Curricular -->
        <details class="custom-accordion" style="margin-top: auto; margin-bottom: 0;">
          <summary style="font-size: 0.92rem; padding: 12px 16px;">Ver Semblanza Curricular</summary>
          <div class="accordion-content" style="font-size: 0.9rem; padding: 16px;">
            <p>${docente.semblanza}</p>
          </div>
        </details>
      `;

      container.appendChild(card);
    });
  }

  // Initial render
  render(DATA_DOCENTES);

  // Instant filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        render(DATA_DOCENTES);
        return;
      }

      const filtered = DATA_DOCENTES.filter(d => {
        return d.nombre.toLowerCase().includes(q) ||
               d.email.toLowerCase().includes(q) ||
               d.semblanza.toLowerCase().includes(q);
      });

      render(filtered);
    });
  }
});
