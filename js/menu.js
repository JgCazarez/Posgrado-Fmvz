document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('mobileMenuBtn');
    const navList = document.getElementById('navList');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Funcionalidad para abrir/cerrar el menú principal en móvil
    btnMenu.addEventListener('click', () => {
        navList.classList.toggle('mostrar');
    });

    // Funcionalidad para abrir/cerrar los submenús en móvil
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Solo aplicamos este comportamiento si estamos en resolución móvil
            if (window.innerWidth <= 768) {
                // Previene que el enlace principal te lleve a otra página de inmediato si tiene submenú
                if (e.target.tagName === 'A' && e.target.nextElementSibling) {
                    e.preventDefault();
                }
                dropdown.classList.toggle('abierto');
            }
        });
    });
});