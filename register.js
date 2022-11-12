const register = document.querySelector(".register"),
    nombre = document.querySelector("#name"),
    email = document.querySelector("#email"),
    user = document.querySelector("#user"),
    pass = document.querySelector("#password"),
    btnRegister = document.querySelector("#registrar");

let usuarios;

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
    usuarios = [];
}

//user constructor

class Usuario {
    constructor(nombre, user, email, password) {
        this.nombre = nombre;
        this.user = user;
        this.email = email;
        this.pass = password;
    }
}

function limpiarCampos() {
    nombre.value = "";
    user.value = "";
    pass.value = "";
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
    let newUser = new Usuario(nombre.value, user.value, email.value, pass.value);
    guardarUsuario(newUser);
    guardarEnStorage(usuarios);
    limpiarCampos();
    console.log(usuarios);
});
