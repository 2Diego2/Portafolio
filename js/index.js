// --- LÓGICA JAVASCRIPT ---

// 1. Configuración
const isMobile = window.innerWidth <= 768;

const opciones = {
    root: null,
    rootMargin: '0px',
    threshold: isMobile ? 0.1 : 0.5
};

// 2. Callback del observer
const callback = (entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
};

// 3. Crear el Observador
const observador = new IntersectionObserver(callback, opciones);

// 4. Seleccionar elementos y observar
const tech = document.querySelectorAll('.floating-tech');
tech.forEach(tecnologia => observador.observe(tecnologia));


// ==========================================
// 5. TOOLTIPS — Click/Tap para TODOS los dispositivos
// ==========================================

// Siempre registrar click handlers (funciona en touch Y desktop)
tech.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const wasActive = item.classList.contains('tooltip-activo');

        // Cerrar todos los tooltips abiertos
        tech.forEach(t => t.classList.remove('tooltip-activo'));

        // Toggle: si no estaba activo, abrirlo
        if (!wasActive) {
            item.classList.add('tooltip-activo');
        }
    });
});

// Cerrar tooltip al tocar/clickear fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.floating-tech')) {
        tech.forEach(t => t.classList.remove('tooltip-activo'));
    }
});

// Cerrar tooltip al hacer scroll
window.addEventListener('scroll', () => {
    tech.forEach(t => t.classList.remove('tooltip-activo'));
}, { passive: true });