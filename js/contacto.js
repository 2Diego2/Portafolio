/* ============ CONTACTO + FOOTER: INTERACTIVIDAD ============ */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SCROLL-IN: Intersection Observer ---
    const seccionContacto = document.getElementById('contacto');

    if (seccionContacto) {
        const observerContacto = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('contacto-visible');
                    // Solo una vez
                    observerContacto.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15 // Se activa cuando el 15% de la sección es visible
        });

        observerContacto.observe(seccionContacto);
    }


    // --- 2. COPIAR EMAIL AL PORTAPAPELES ---
    const emailBtn = document.getElementById('contacto-email-btn');
    const tooltip = document.getElementById('email-tooltip');

    if (emailBtn && tooltip) {
        emailBtn.addEventListener('click', async () => {
            const email = emailBtn.getAttribute('data-email');

            try {
                await navigator.clipboard.writeText(email);

                // Cambiar tooltip a "¡Copiado!"
                tooltip.textContent = '¡Copiado!';
                tooltip.classList.add('copiado');

                // Forzar visibilidad del tooltip
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';

                // Volver al estado original después de 2 segundos
                setTimeout(() => {
                    tooltip.textContent = 'Copiar al portapapeles';
                    tooltip.classList.remove('copiado');
                    tooltip.style.opacity = '';
                    tooltip.style.visibility = '';
                    tooltip.style.transform = '';
                }, 2000);

            } catch (err) {
                // Fallback para navegadores sin Clipboard API
                const textarea = document.createElement('textarea');
                textarea.value = email;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);

                tooltip.textContent = '¡Copiado!';
                tooltip.classList.add('copiado');
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
                tooltip.style.transform = 'translateX(-50%) translateY(0)';

                setTimeout(() => {
                    tooltip.textContent = 'Copiar al portapapeles';
                    tooltip.classList.remove('copiado');
                    tooltip.style.opacity = '';
                    tooltip.style.visibility = '';
                    tooltip.style.transform = '';
                }, 2000);
            }
        });
    }

});
