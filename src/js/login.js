// login.js

// Inicializar DB en localStorage si no existe
if(!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify(window.DB.Usuarios));
} else {
    // Cargar desde localStorage si ya hay datos
    window.DB.Usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

// --- FUNCION LOGIN ---
function login() { 
    const Usuario = document.getElementById("usuario").value;
    const Password = document.getElementById("password").value;

    const user = window.DB.Usuarios.find(u => u.usuario === Usuario && u.password === Password);

    if(user){
        // Guardar ID del usuario logueado
        window.localStorage.setItem("user", user.id);
        window.location.href = "../../index.html"; // redirigir
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// --- FUNCION SIGNIN / REGISTRO ---
function signin() {
    const nombre = document.getElementById("newName").value;
    const usuario = document.getElementById("newUsuario").value;
    const password = document.getElementById("newPassword").value;

    // Verificar si el usuario ya existe
    const exists = window.DB.Usuarios.find(u => u.usuario === usuario);
    if(exists){
        alert("El usuario ya existe");
        return;
    }

    // Calcular ID automáticamente
    const ultimoId = window.DB.Usuarios.length > 0 
        ? Math.max(...window.DB.Usuarios.map(u => u.id)) 
        : 0;

    const nuevoUsuario = {
        id: ultimoId + 1,
        nombre,
        usuario,
        password
    };

    // Agregar usuario y guardar en localStorage
    window.DB.Usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(window.DB.Usuarios));

    alert(`Usuario ${nombre} registrado correctamente`);

    // Limpiar formulario
    document.getElementById("formSignIn").reset();

    // Opcional: cambiar automáticamente a login
    const contenedor = document.getElementById("contenedor");
    contenedor.classList.remove("modo-signin");
}

// --- CAMBIO DE PANEL IZQUIERDO/DERECHO ---
const contenedor = document.getElementById("contenedor");
const btnSignIn = document.getElementById("btnSignIn");
const btnLogin = document.getElementById("btnLogin");

btnSignIn.addEventListener("click", () => {
  contenedor.classList.add("modo-signin");
});

btnLogin.addEventListener("click", () => {
  contenedor.classList.remove("modo-signin");
});
