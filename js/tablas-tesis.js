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
        const cohortes = [...new Set(DATA.map(item => item.cohorte))].sort();
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
            tesisTbody.innerHTML = '<tr><td colspan="4" class="text-center">No se encontraron resultados para los filtros seleccionados.</td></tr>';
            return;
        }

        paginatedData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.alumno}</td>
                <td>${item.tema}</td>
                <td>${item.comite}</td>
                <td>${item.cohorte}</td>
            `;
            tesisTbody.appendChild(row);
        });
    }

    function setupPagination() {
        paginationUl.innerHTML = '';
        const pageCount = Math.ceil(filteredData.length / rowsPerPage);
        
        if (pageCount <= 1) return;

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
                const currentActive = document.querySelector(`#${paginacionId} .active`);
                if(currentActive) currentActive.classList.remove('active');
                li.classList.add('active');
            });
            li.appendChild(a);
            paginationUl.appendChild(li);
        }
    }

    function applyFiltersAndRender() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCohorte = cohorteFilter.value;

        filteredData = DATA.filter(item => {
            const matchesSearch = item.alumno.toLowerCase().includes(searchTerm);
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
