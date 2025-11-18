function cargarMain(archivo) {
  fetch(archivo)
    .then(response => response.text())
    .then(data => {
      const contenedor = document.getElementById("contenido-main");
      contenedor.innerHTML = data;
      document.querySelector("main").classList.add("activo");
    })
    .catch(error => console.error("Error al cargar el main:", error));
}

cargarMain("main-mujer.html");

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

document.getElementById("novedades").classList.add("activo");

function verBarraBusqueda() {
  document.getElementById("contenedor-busqueda").style.display = "flex";
};

  document.getElementsByTagName("nav")[0].addEventListener("mouseout", () => {
    document.getElementById("contenedor-busqueda").style.display = "none";
  });
