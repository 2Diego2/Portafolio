document.addEventListener('DOMContentLoaded', () => {
    
    const nav = document.getElementById('dynamic-nav');
    const navContent = document.querySelector('.nav-content');
    const enlaces = document.querySelectorAll('.nav-content a');
    const indicador = document.querySelector('.indicador');

    // ==========================================
    // 1. LÓGICA DE EXPANSIÓN (Click / Toggle)
    // ==========================================
    
    function toggleNav(e) {
        // En desktop, el hover ya lo maneja CSS, pero si hacen click, 
        // podríamos querer dejarlo fijo o no. Por ahora, confiamos en CSS hover para Desktop
        // y Click para Mobile.
        
        // Detectar si es touch o pantalla pequeña
        if (window.innerWidth <= 1024) {
            // Prevenir que el click en un enlace cierre inmediatamente el menú si queremos navegar
            // Pero si es un enlace, el navegador navegará.
            // Solo toggles si clican el contenedor vacío o el brand.
            
            nav.classList.toggle('active');
        }
    }

    nav.addEventListener('click', (e) => {
        // Si clickean en un enlace, no hacemos toggle (dejamos que navegue y luego cerramos)
        if (e.target.closest('a')) {
            // Pequeño delay para que se vea el click antes de cerrar/navegar
            setTimeout(() => {
                nav.classList.remove('active');
            }, 300);
            return;
        }
        toggleNav(e);
    });

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
