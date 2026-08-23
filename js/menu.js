document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdowns = document.querySelectorAll('.nav-list .dropdown');

    // Funcionalidad para abrir/cerrar el menú principal en móvil
    if (btnMenu && navList) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navList.classList.toggle('mostrar');
            btnMenu.classList.toggle('activo');
        });
    }

    // Funcionalidad tipo acordeón para los submenús en móvil
    dropdowns.forEach(dropdown => {
        const toggleLink = dropdown.querySelector(':scope > a');
        if (toggleLink) {
            toggleLink.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation();

                    const estaAbierto = dropdown.classList.contains('abierto');

                    // Cerrar otros dropdowns para acordeón limpio
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('abierto');
                        }
                    });

                    if (estaAbierto) {
                        dropdown.classList.remove('abierto');
                    } else {
                        dropdown.classList.add('abierto');
                    }
                }
            });
        }
    });

    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992 && navList && navList.classList.contains('mostrar')) {
            if (!e.target.closest('.main-nav') && !e.target.closest('#mobileMenuBtn')) {
                navList.classList.remove('mostrar');
                if (btnMenu) btnMenu.classList.remove('activo');
                dropdowns.forEach(d => d.classList.remove('abierto'));
            }
        }
    });
});