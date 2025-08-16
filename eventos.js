function mostrarSaludo() {
    alert('Hola!');
}
document.addEventListener("DOMContentLoaded", function() {
    const divContenedor = document.querySelector(".contenedor");

    divContenedor.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});