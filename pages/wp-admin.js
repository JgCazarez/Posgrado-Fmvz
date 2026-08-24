document.addEventListener("DOMContentLoaded", function () {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/1l4L2FjIRcp2b-xDcBxMI1chweIJFRl7uvjjTBJCBedA/edit?usp=sharing";

  const tbody = document.querySelector("#tablaAdminSheets tbody");
  const searchInput = document.getElementById("busquedaAdmin");
  const cohorteFilter = document.getElementById("filtroCohorteAdmin");
  const paginationUl = document.getElementById("paginacionAdmin");
  const infoConteo = document.getElementById("infoConteoAdmin");

  if (!tbody || !searchInput || !cohorteFilter || !paginationUl) return;

  let rawData = [];
  let filteredData = [];
  let currentPage = 1;
  const limit = 10;

  // Convierte URL de Google Sheets al endpoint de exportación CSV
  function formatGoogleSheetsUrl(url) {
    if (!url) return "";
    const sheetIdMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/i);
    if (sheetIdMatch && !url.includes("/pub?") && !url.includes("/export?")) {
      return `https://docs.google.com/spreadsheets/d/${sheetIdMatch[1]}/export?format=csv`;
    }
    return url;
  }

  // Convierte enlaces de Google Drive a vista previa directa
  function formatDriveUrl(url) {
    if (!url) return "";
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i);
    if (driveMatch) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    const driveOpenMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/i);
    if (driveOpenMatch) {
      return `https://drive.google.com/file/d/${driveOpenMatch[1]}/preview`;
    }
    return url;
  }

  // Parsea el contenido CSV respetando comillas y saltos de línea
  function parseCSV(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0) return [];

    function parseLine(line) {
      const result = [];
      let cur = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          if (inQuotes && line[i + 1] === '"') {
            cur += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === ',' && !inQuotes) {
          result.push(cur.trim());
          cur = "";
        } else {
          cur += char;
        }
      }
      result.push(cur.trim());
      return result;
    }

    const rawHeaders = parseLine(lines[0]);
    const headers = rawHeaders.map(h => {
      return h.toLowerCase()
              .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              .replace(/[^a-z0-9]/g, "");
    });

    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const values = parseLine(lines[i]);
      if (values.every(v => v === "")) continue;

      const obj = { alumno: "", tema: "", comite: "", cohorte: "", pdf: "" };
      
      headers.forEach((h, idx) => {
        const val = values[idx] || "";
        if (h.includes("alumno") || h.includes("estudiante") || h.includes("nombre")) {
          obj.alumno = val;
        } else if (h.includes("tema") || h.includes("titulo") || h.includes("tesis")) {
          obj.tema = val;
        } else if (h.includes("comite") || h.includes("tutor") || h.includes("director")) {
          obj.comite = val;
        } else if (h.includes("cohorte") || h.includes("generacion")) {
          obj.cohorte = val;
        } else if (h.includes("pdf") || h.includes("link") || h.includes("enlace") || h.includes("documento") || h.includes("archivo")) {
          obj.pdf = formatDriveUrl(val);
        }
      });

      if (obj.alumno || obj.tema) {
        rows.push(obj);
      }
    }
    return rows;
  }

  async function fetchAndRender(url) {
    try {
      const csvEndpoint = formatGoogleSheetsUrl(url);
      const cacheBustUrl = csvEndpoint.includes("?") ? `${csvEndpoint}&_t=${Date.now()}` : `${csvEndpoint}?_t=${Date.now()}`;
      const res = await fetch(cacheBustUrl);
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}`);
      }
      const csvText = await res.text();
      rawData = parseCSV(csvText);

      if (rawData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted">No se encontraron registros en el documento.</td></tr>';
        return;
      }

      populateCohorts();
      applyFilter();

    } catch (err) {
      console.error(err);
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-danger">Error al cargar datos desde Google Sheets. Verifica que el documento sea público.</td></tr>';
    }
  }

  function populateCohorts() {
    cohorteFilter.innerHTML = '<option value="todos">Todas las Cohortes</option>';
    const cohorts = [...new Set(rawData.map(d => d.cohorte))].filter(Boolean);
    cohorts.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = "Cohorte " + c;
      cohorteFilter.appendChild(opt);
    });
  }

  function renderTable() {
    tbody.innerHTML = "";
    const slice = filteredData.slice((currentPage - 1) * limit, currentPage * limit);

    if (!slice.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted">No se encontraron resultados para los filtros seleccionados.</td></tr>';
      if (infoConteo) infoConteo.textContent = "Mostrando 0 registros";
      return;
    }

    if (infoConteo) {
      infoConteo.textContent = `Mostrando ${slice.length} de ${filteredData.length} registros (Página ${currentPage} de ${Math.ceil(filteredData.length / limit)})`;
    }

    slice.forEach(d => {
      const tr = document.createElement("tr");
      const pdfCell = d.pdf 
        ? `<a href="${d.pdf}" target="_blank" rel="noopener noreferrer" class="btn-pdf-doc" title="Descargar / Ver Documento en PDF">
             <svg width="26" height="30" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3 3C3 1.89543 3.89543 1 5 1H18L25 8V29C25 30.1046 24.1046 31 23 31H5C3.89543 31 3 30.1046 3 29V3Z" fill="#FFFFFF" stroke="#DC2626" stroke-width="2"/>
               <path d="M18 1V8H25" fill="#FEE2E2" stroke="#DC2626" stroke-width="2" stroke-linejoin="round"/>
               <rect x="2" y="14" width="22" height="12" rx="3" fill="#DC2626"/>
               <text x="13" y="23.2" font-family="'Inter', system-ui, sans-serif" font-weight="900" font-size="8.5" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">PDF</text>
             </svg>
           </a>`
        : `<span class="text-muted small">—</span>`;

      tr.innerHTML = `
        <td class="fw-bold text-dark">${d.alumno || "—"}</td>
        <td><div class="fw-semibold text-secondary-emphasis">${d.tema || "—"}</div></td>
        <td class="small text-muted">${d.comite || "—"}</td>
        <td class="text-center"><span class="badge bg-light text-dark border">${d.cohorte || "—"}</span></td>
        <td class="text-center">${pdfCell}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderPagination() {
    paginationUl.innerHTML = "";
    const totalPages = Math.ceil(filteredData.length / limit);
    if (totalPages <= 1) return;

    const addBtn = (text, targetPage, active = false, disabled = false) => {
      const li = document.createElement("li");
      li.className = "page-item " + (active ? "active " : "") + (disabled ? "disabled" : "");
      li.innerHTML = '<a class="page-link" href="#">' + text + '</a>';
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

    addBtn("&laquo;", currentPage - 1, false, currentPage === 1);

    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    if (start > 1) {
      addBtn(1, 1);
      if (start > 2) addBtn("...", null, false, true);
    }

    for (let i = start; i <= end; i++) {
      addBtn(i, i, i === currentPage);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) addBtn("...", null, false, true);
      addBtn(totalPages, totalPages);
    }

    addBtn("&raquo;", currentPage + 1, false, currentPage === totalPages);
  }

  function applyFilter() {
    const q = searchInput.value.toLowerCase().trim();
    const c = cohorteFilter.value;
    filteredData = rawData.filter(d => 
      (!c || c === 'todos' || d.cohorte === c) &&
      (!q || Object.values(d).some(v => String(v).toLowerCase().includes(q)))
    );
    currentPage = 1;
    renderTable();
    renderPagination();
  }

  searchInput.addEventListener("input", applyFilter);
  cohorteFilter.addEventListener("change", applyFilter);

  // Inicializar carga
  fetchAndRender(SHEET_URL);
});
