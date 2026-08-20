function inicializarTablaTesis(DATA, config) {
    const { busquedaId, cohorteId, tbodySelector, paginacionId } = config;

    const searchInput = document.getElementById(busquedaId);
    const cohorteFilter = document.getElementById(cohorteId);
    const tesisTbody = document.querySelector(tbodySelector);
    const paginationUl = document.getElementById(paginacionId);

    if (!searchInput || !cohorteFilter || !tesisTbody || !paginationUl) {
        console.error("Uno o más elementos de configuración de la tabla no se encontraron en el DOM.");
        return;
    }
    
    const rowsPerPage = 10;
    let currentPage = 1;
    let filteredData = [...DATA];

    function populateCohorteFilter() {
        const cohortes = [...new Set(DATA.map(item => item.cohorte))].sort().reverse();
        cohortes.forEach(cohorte => {
            const option = document.createElement('option');
            option.value = cohorte;
            option.innerText = cohorte;
            cohorteFilter.appendChild(option);
        });
    }

    function renderTable() {
        tesisTbody.innerHTML = '';
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = filteredData.slice(start, end);

        if (paginatedData.length === 0) {
            tesisTbody.innerHTML = '<tr><td colspan="4" class="text-center py-4 text-muted">No se encontraron resultados para los filtros seleccionados.</td></tr>';
            return;
        }

        paginatedData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${item.alumno}</strong></td>
                <td>${item.tema}</td>
                <td>${item.comite}</td>
                <td><span class="badge-cohorte">${item.cohorte}</span></td>
            `;
            tesisTbody.appendChild(row);
        });
    }

    function setupPagination() {
        paginationUl.innerHTML = '';
        const pageCount = Math.ceil(filteredData.length / rowsPerPage);
        
        if (pageCount <= 1) return;

        // Botón Anterior
        const prevLi = document.createElement('li');
        prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        const prevA = document.createElement('a');
        prevA.className = 'page-link';
        prevA.href = '#';
        prevA.innerHTML = '&laquo;';
        prevA.setAttribute('aria-label', 'Anterior');
        prevA.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                renderTable();
                setupPagination();
            }
        });
        prevLi.appendChild(prevA);
        paginationUl.appendChild(prevLi);

        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li');
            li.className = 'page-item' + (i === currentPage ? ' active' : '');
            const a = document.createElement('a');
            a.className = 'page-link';
            a.href = '#';
            a.innerText = i;
            a.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                renderTable();
                setupPagination();
            });
            li.appendChild(a);
            paginationUl.appendChild(li);
        }

        // Botón Siguiente
        const nextLi = document.createElement('li');
        nextLi.className = `page-item ${currentPage === pageCount ? 'disabled' : ''}`;
        const nextA = document.createElement('a');
        nextA.className = 'page-link';
        nextA.href = '#';
        nextA.innerHTML = '&raquo;';
        nextA.setAttribute('aria-label', 'Siguiente');
        nextA.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPage < pageCount) {
                currentPage++;
                renderTable();
                setupPagination();
            }
        });
        nextLi.appendChild(nextA);
        paginationUl.appendChild(nextLi);
    }

    function applyFiltersAndRender() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCohorte = cohorteFilter.value;

        filteredData = DATA.filter(item => {
            const alumnoMatches = (item.alumno || '').toLowerCase().includes(searchTerm);
            const temaMatches = (item.tema || '').toLowerCase().includes(searchTerm);
            const comiteMatches = (item.comite || '').toLowerCase().includes(searchTerm);
            const matchesSearch = !searchTerm || alumnoMatches || temaMatches || comiteMatches;

            const matchesCohorte = selectedCohorte === 'todos' || item.cohorte === selectedCohorte;
            return matchesSearch && matchesCohorte;
        });

        currentPage = 1;
        renderTable();
        setupPagination();
    }

    // Initial Setup
    populateCohorteFilter();
    applyFiltersAndRender();
    
    searchInput.addEventListener('input', applyFiltersAndRender);
    cohorteFilter.addEventListener('change', applyFiltersAndRender);
}
