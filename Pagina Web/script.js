document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnSaludo');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', () => {
        mensaje.textContent = '¡Hola! JavaScript está funcionando correctamente.';
    });
});