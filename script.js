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

// Scroll header
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    header.classList.add("oculto");
  } else {
    header.classList.remove("oculto");
  }
  lastScroll = currentScroll;
});
