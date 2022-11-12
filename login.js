const btnIngresar = document.querySelector("#ingresar"),
    user = document.querySelector("#user"),
    pass = document.querySelector("#password"),
    check = document.querySelector("#recordar");

function inicioSesion(usuarios) {
    let userFound = usuarios.find((usuario) => {
        return usuario.user === user.value && usuario.pass === pass.value;
    });
    if (userFound) {
        window.location.href = "./tienda.html";
    } else {
        document.querySelector("#mensaje").innerText = "No se ha encontrado el usuario";
    }
    return userFound;
}

function recuperarLS() {
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}

const usuariosLS = recuperarLS();

btnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    inicioSesion(usuariosLS);
});
