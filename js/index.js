  // --- LÓGICA JAVASCRIPT ---

    // 1. Configuración
    const isMobile = window.innerWidth <= 768;
    
    const opciones = {
      root: null,      // Viewport del navegador
      rootMargin: '0px', 
      threshold: isMobile ? 0.1 : 0.5   // Threshold más bajo en mobile (grid vs dispersión)
    };

         // 2. Definir el Callback (Qué hacer)
            const callback = (entradas) => {
        entradas.forEach((entrada) => {
         // Si el elemento está intersectando (es visible según el threshold)
            if (entrada.isIntersecting) {
            // Cuando entra en pantalla
             // Agregamos la clase 'visible' que tiene el CSS final
            entrada.target.classList.add('visible');
             // Dejar de observar una vez que ya es visible para evitar "rebotes"
             observador.unobserve(entrada.target);
            } 
        });
        };


    // 3. Crear el Observador
    const observador = new IntersectionObserver(callback, opciones);

    // 4. Seleccionar elementos y decirles que sean observados
    const tech = document.querySelectorAll('.floating-tech');
    tech.forEach(tecnologia => observador.observe(tecnologia));


    // ==========================================
    // 5. TOUCH SUPPORT PARA TOOLTIPS
    // ==========================================
    
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        tech.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const wasActive = item.classList.contains('tooltip-activo');

                // Cerrar todos los tooltips abiertos
                tech.forEach(t => t.classList.remove('tooltip-activo'));

                // Toggle el clickeado (si no estaba activo, abrirlo)
                if (!wasActive) {
                    item.classList.add('tooltip-activo');
                }
            });
        });

        // Cerrar tooltip al tocar fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.floating-tech')) {
                tech.forEach(t => t.classList.remove('tooltip-activo'));
            }
        });

        // Cerrar tooltip al hacer scroll
        window.addEventListener('scroll', () => {
            tech.forEach(t => t.classList.remove('tooltip-activo'));
        }, { passive: true });
    }