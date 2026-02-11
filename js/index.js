  // --- LÓGICA JAVASCRIPT ---

    // 1. Configuración
    const opciones = {
      root: null,      // Viewport del navegador
      rootMargin: '0px', 
      threshold: 0.5   // Se activa cuando el 50% de la caja es visible
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
            /* else {
            // Cuando sale de pantalla
            // entrada.target.classList.remove('visible');
            } */
          // (Opcional) Dejamos de observar para que NO se anime de nuevo si subes y bajas
          //tendriamos que quitar el else 
          //observador.unobserve(entrada.target); 
        });
        };


    // 3. Crear el Observador
    const observador = new IntersectionObserver(callback, opciones);

    // 4. Seleccionar elementos y decirles que sean observados
    const tech = document.querySelectorAll('.floating-tech');
    tech.forEach(tecnologia => observador.observe(tecnologia));