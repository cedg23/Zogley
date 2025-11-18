

// Botones de género
document.querySelectorAll(".btn-principales[data-group='genero']").forEach(boton => {
  boton.addEventListener("click", () => {
    document.querySelectorAll(".btn-principales[data-group='genero']").forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");

    const target = boton.textContent.toLowerCase() === "mujer" 
      ? "main-mujer.html" 
      : "main-hombre.html";
    cargarMain(target);
  });
});

document.getElementById("todos-productos").classList.add("activo");
document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("checkbox-carrito").checked = false;
});

function verBarraBusqueda() {
  document.getElementById("contenedor-busqueda").style.display = "flex";
};

  document.getElementsByTagName("nav")[0].addEventListener("mouseout", () => {
    document.getElementById("contenedor-busqueda").style.display = "none";
  });

function limpiarFiltros() {
      // Desmarcar todos los radio buttons y checkboxes
      document.querySelectorAll(' input[type="checkbox"]').forEach(input => {
        input.checked = false;
      });
    }

 