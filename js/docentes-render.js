/**
 * Renderizador interactivo de Docentes y Núcleo Académico Básico (NAB)
 * Proporciona filtrado en tiempo real y panel lateral deslizante (Drawer) para la semblanza curricular.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('docentesContainer');
  const searchInput = document.getElementById('searchDocente');
  const countDisplay = document.getElementById('docenteCount');

  if (!container || typeof DATA_DOCENTES === 'undefined') return;

  // Determinar prefijo de ruta para recursos
  const path = window.location.pathname;
  let root = '../../';
  if (path.endsWith('index.html') || path.endsWith('/')) {
    root = './';
  } else if (path.includes('/pages/') && !path.includes('/doctorado/') && !path.includes('/maestria/') && !path.includes('/nosotros/')) {
    root = '../';
  }

  // Inyectar componente Drawer en el DOM si no existe
  let backdrop = document.getElementById('docenteDrawerBackdrop');
  let drawer = document.getElementById('docenteDrawer');

  if (!drawer) {
    const drawerHtml = `
      <div class="docente-drawer-backdrop" id="docenteDrawerBackdrop"></div>
      <aside class="docente-drawer" id="docenteDrawer" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="drawerNombre">
        <div class="docente-drawer-header">
          <div class="drawer-header-left">
            <div id="drawerAvatarContainer"></div>
            <div class="drawer-titles">
              <h2 id="drawerNombre"></h2>
              <p id="drawerCargo"></p>
              <div class="docente-badges" id="drawerBadges"></div>
            </div>
          </div>
          <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Cerrar panel">✕</button>
        </div>
        <div class="docente-drawer-body">
          <div class="drawer-contact-section" id="drawerContactSection">
            <div class="drawer-contact-label">Contacto Institucional</div>
            <a href="#" class="drawer-contact-email" id="drawerEmail"></a>
          </div>
          <div class="drawer-bio-section">
            <h3>Semblanza Curricular y Trayectoria</h3>
            <div class="drawer-bio-text" id="drawerBio"></div>
          </div>
        </div>
      </aside>
    `;
    document.body.insertAdjacentHTML('beforeend', drawerHtml);
    backdrop = document.getElementById('docenteDrawerBackdrop');
    drawer = document.getElementById('docenteDrawer');
  }

  const drawerAvatarContainer = document.getElementById('drawerAvatarContainer');
  const drawerNombre = document.getElementById('drawerNombre');
  const drawerCargo = document.getElementById('drawerCargo');
  const drawerBadges = document.getElementById('drawerBadges');
  const drawerEmail = document.getElementById('drawerEmail');
  const drawerBio = document.getElementById('drawerBio');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  // Funciones de control del Drawer
  function openDrawer(docente) {
    if (!docente) return;

    const cleanName = docente.nombre.replace(/^(Dr\.|Dra\.)\s*/i, '').trim();
    const initials = cleanName.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
    const photoSrc = docente.foto ? (root + docente.foto) : '';

    if (photoSrc) {
      drawerAvatarContainer.innerHTML = `<img src="${photoSrc}" alt="${docente.nombre}" class="drawer-avatar-img" onerror="this.outerHTML='<div class=\\'drawer-avatar\\'>${initials}</div>'">`;
    } else {
      drawerAvatarContainer.innerHTML = `<div class="drawer-avatar">${initials}</div>`;
    }

    drawerNombre.textContent = docente.nombre;
    drawerCargo.textContent = docente.cargo;
    drawerBadges.innerHTML = `
      <span class="badge-docente gold">SNII CONAHCYT</span>
      <span class="badge-docente blue">Perfil PRODEP</span>
    `;

    if (docente.email) {
      drawerEmail.href = `mailto:${docente.email}`;
      drawerEmail.textContent = docente.email;
      document.getElementById('drawerContactSection').style.display = 'block';
    } else {
      document.getElementById('drawerContactSection').style.display = 'none';
    }

    // Formatear la semblanza con párrafos si contiene saltos o puntos clave
    drawerBio.innerHTML = `<p>${docente.semblanza}</p>`;

    drawer.classList.add('active');
    backdrop.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Renderizado de las tarjetas en la cuadrícula
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

    list.forEach((docente) => {
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

        <button type="button" class="btn-ver-perfil" title="Ver semblanza curricular y trayectoria">
          Ver Semblanza Completa &rarr;
        </button>
      `;

      const btn = card.querySelector('.btn-ver-perfil');
      btn.addEventListener('click', () => openDrawer(docente));

      container.appendChild(card);
    });
  }

  // Render inicial
  render(DATA_DOCENTES);

  // Filtro en tiempo real
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
