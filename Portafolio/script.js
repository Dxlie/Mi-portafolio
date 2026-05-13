// Seleccionar el botón y el cuerpo de la página
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verificar si el usuario ya tenía una preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
}

// Evento de clic para cambiar el tema
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Cambiar el icono del botón y guardar la elección
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
