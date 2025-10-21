function categoria (categorias){
    window.localStorage.setItem("categoria", categorias);
    window.location.href = "src/views/categorias.html";
}

const botonesDashboard = document.querySelectorAll('.menu-dashboard-full button');
const seccionesDashboard = document.querySelectorAll('.seccion-dashboard-full');

botonesDashboard.forEach(boton => {
    boton.addEventListener('click', () => {
        // Activar botón
        botonesDashboard.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');

        // Mostrar sección correspondiente
        const target = boton.dataset.target;
        seccionesDashboard.forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === target) sec.classList.add('active');
        });
    });
});


