function mostrarSaludo(event){
    event.stopPropagation();
    alert('Hola!');
}
document.addEventListener("DOMContentLoaded", function() {
    const divContenedor = document.querySelector(".contenedor");
    const btnSaludar = document.getElementById("btnSaludar");


    divContenedor.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
     btnSaludar.addEventListener("click", mostrarSaludo);
});