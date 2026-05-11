  // --- LÓGICA JAVASCRIPT ---

    // 1. Configuración
    const opcionesHeader = {
      root: null,      // Viewport del navegador
      rootMargin: '0px', 
      threshold: 0.5   // Se activa cuando el 50% de la caja es visible
    };

         // 2. Definir el Callback (Qué hacer)
            const callbackHeader = (entradas) => {
        entradas.forEach((entrada) => {
         // Si el elemento está intersectando (es visible según el threshold)
            if (entrada.isIntersecting) {
            // Cuando entra en pantalla
             // Agregamos la clase 'visible' que tiene el CSS final
            entrada.target.classList.add('visibl');
            } else {
            // Cuando sale de pantalla
            entrada.target.classList.remove('visibl');
            }
          // (Opcional) Dejamos de observar para que NO se anime de nuevo si subes y bajas
          //tendriamos que quitar el else 
          //observador.unobserve(entrada.target); 
        });
        };


    // 3. Crear el Observador
    const observadorHeader = new IntersectionObserver(callbackHeader, opcionesHeader);

    // 4. Seleccionar elementos y decirles que sean observados
    const head = document.querySelectorAll('.header');
    head.forEach(header => observadorHeader.observe(header));


    // Texto Dinámico (Typing Effect)
    const palabras = ["FULL STACK DEVELOPER", "TÉCNICO EN INFORMÁTICA"];
    let indicePalabra = 0;
    let indiceLetra = 0;
    let escribiendo = true;
    const carrusel = document.getElementById("hero-title-main");

    function animacionTyping() {
        if(!carrusel) return;
        const palabraActual = palabras[indicePalabra];
        
        if (escribiendo) {
            // Añadir una letra
            carrusel.textContent = palabraActual.substring(0, indiceLetra + 1);
            indiceLetra++;
            
            if (indiceLetra === palabraActual.length) {
                escribiendo = false;
                setTimeout(animacionTyping, 3000); // Pausa mostrando la palabra completa
            } else {
                setTimeout(animacionTyping, 80); // Velocidad al escribir
            }
        } else {
            // Borrar una letra
            carrusel.textContent = palabraActual.substring(0, indiceLetra - 1);
            indiceLetra--;
            
            if (indiceLetra === 0) {
                escribiendo = true;
                indicePalabra = (indicePalabra + 1) % palabras.length;
                setTimeout(animacionTyping, 500); // Pausa vacía antes de la siguiente palabra
            } else {
                setTimeout(animacionTyping, 40); // Velocidad al borrar
            }
        }
    }
    
    // Iniciar con la primera palabra ya escrita en partes o campo vacío
    if(carrusel) {
        carrusel.textContent = "";
        setTimeout(animacionTyping, 1200); // Esperar que termine la animación css inicial
    }