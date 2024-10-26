function abrirModal() {
    document.getElementById("turnoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("turnoModal").style.display = "none";
}

// Interceptar el envío del formulario
document.getElementById("turnoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert("Turno solicitado"); // Muestra el mensaje
    cerrarModal(); // Cierra el modal después de mostrar el mensaje
});

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    let modal = document.getElementById("turnoModal");
    if (event.target == modal) {
        cerrarModal();
    }
};