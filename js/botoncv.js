document.addEventListener('DOMContentLoaded', () => {
    const botonCv = document.querySelector('.boton-cv');
    const modal = document.getElementById('cv-modal');
    const btnConfirm = document.getElementById('modal-confirm');
    const btnCancel = document.getElementById('modal-cancel');

    // Nos aseguramos de que todos los elementos existan en la página antes de continuar
    if (botonCv && modal && btnConfirm && btnCancel) {
        
        // 1. Mostrar el modal al hacer click en el botón de CV
        botonCv.addEventListener('click', (evento) => {
            evento.preventDefault(); // Evitamos la descarga inmediata
            modal.classList.add('active'); // Activamos el modal minimalista
        });

        // 2. Ocultar el modal al presionar "Cancelar"
        btnCancel.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // 3. Confirmar la descarga al presionar "Descargar"
        btnConfirm.addEventListener('click', () => {
            modal.classList.remove('active');
            
            // Forzamos la descarga en segundo plano o pestaña nueva
            const link = document.createElement('a');
            link.href = botonCv.getAttribute('href');
            link.download = '';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // 4. Cerrar el modal al hacer click en el fondo difuminado
        modal.addEventListener('click', (evento) => {
            if (evento.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
