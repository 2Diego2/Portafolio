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

    function moverIndicador(elemento) {
        // Solo si están visibles los links (nav expanded) y en modo horizontal
        if (window.innerWidth <= 1024) return; 

        // Offset relativo al contenedor .nav-content
        // Pero el indicador está absoluto en .nav-content (revisar CSS)
        // .nav-content display flex relative? -> .nav es flex. 
        // El indicador está dentro de .nav-content.
        
        // Necesitamos la posición del enlace relativa a .nav-content
        const contentRect = navContent.getBoundingClientRect();
        const linkRect = elemento.getBoundingClientRect();

        const left = linkRect.left - contentRect.left;
        const width = linkRect.width;

        indicador.style.width = `${width}px`;
        indicador.style.transform = `translateX(${left}px)`; // Usar transform es más performante
        // Nota: en CSS definimos left:0, usaremos transform.
        indicador.style.left = '0'; 
        indicador.style.opacity = '1';
    }

    // Eventos Mouseenter
    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', (e) => {
            moverIndicador(e.target);
        });
    });

    // Reset al salir del content
    navContent.addEventListener('mouseleave', () => {
        indicador.style.opacity = '0';
    });

});
