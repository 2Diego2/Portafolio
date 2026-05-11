document.addEventListener('DOMContentLoaded', () => {
    
    const nav = document.getElementById('dynamic-nav');
    const navContent = document.querySelector('.nav-content');
    const navBrand = document.querySelector('.nav-brand');
    const enlaces = document.querySelectorAll('.nav-content a');
    const indicador = document.querySelector('.indicador');

    // ==========================================
    // 1. LÓGICA DE EXPANSIÓN (Click / Toggle)
    // ==========================================
    
    function toggleNav() {
        if (window.innerWidth <= 1024) {
            nav.classList.toggle('active');
        }
    }

    // Click en el nav (funciona en desktop y la mayoría de móviles)
    nav.addEventListener('click', (e) => {
        // Si clickean en un enlace, navegar y cerrar
        if (e.target.closest('a')) {
            setTimeout(() => {
                nav.classList.remove('active');
            }, 300);
            return;
        }
        // Si clickean en el brand o el nav vacío, toggle
        if (e.target.closest('.nav-brand') || e.target === nav) {
            toggleNav();
        }
    });

    // Listener directo en nav-brand para iOS (fallback)
    if (navBrand) {
        navBrand.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevenir doble-fire con click
            toggleNav();
        });
    }

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });


    // ==========================================
    // 2. LA LÍNEA MÁGICA (Solo Desktop/Horizontal)
    // ==========================================

    // ==========================================
    // 2. LA LÍNEA MÁGICA (Legacy - Reemplazada por CSS Laser Line)
    // ==========================================

    function moverIndicador(elemento) {
        return; // Deshabilitado: Usamos CSS ::after ahora
    }

    // Eventos Mouseenter (Legacy - Mantener listeners no daña, pero vacíos)
    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', (e) => {
            moverIndicador(e.target);
        });
    });

    // Reset al salir del content
    navContent.addEventListener('mouseleave', () => {
        if(indicador) indicador.style.opacity = '0';
    });

    // ==========================================
    // 3. CERRAR AL HACER SCROLL (Mobile UX)
    // ==========================================
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const diff = Math.abs(window.scrollY - lastScrollY);
        if (diff > 50 && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
        lastScrollY = window.scrollY;
    }, { passive: true });

    // ==========================================
    // 4. RESET AL CAMBIAR TAMAÑO DE VENTANA
    // ==========================================
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            nav.classList.remove('active');
        }
    });

});
