const register = document.querySelector(".register"),
    nombre = document.querySelector("#name"),
    email = document.querySelector("#email"),
    user = document.querySelector("#user"),
    password = document.querySelector("#password"),
    btnRegister = document.querySelector("#registrar");

let usuarios;

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
    usuarios = [];
}

//user constructor

class Usuario {
    constructor(nombre, usuario, email, password) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.pass = password;
    }
}

function limpiarCampos() {
    nombre.value = "";
    user.value = "";
    password.value = "";
    email.value = "";
}

function guardarUsuario(usuario) {
    return usuarios.push(usuario);
}
function guardarEnStorage(elemento) {
    return localStorage.setItem("usuarios", JSON.stringify(elemento));
}
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    let newUser = new Usuario(nombre.value, user.value, password.value, email.value);
    guardarUsuario(newUser);
    limpiarCampos();
    // guardarEnStorage(usuarios);
    console.log(usuarios);
});
