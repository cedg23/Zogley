
let ultimoScroll = 0;
// Ocultar header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > ultimoScroll) {
    header.classList.add("oculto");
  } else {
    header.classList.remove("oculto");
  }
  ultimoScroll = window.scrollY;
});

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
      document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
      });
    }

    // Detectar cuando se cambia de categoría principal
    document.querySelectorAll('input[name="categoria"]').forEach(categoria => {
      categoria.addEventListener('change', function() {
        // Desmarcar todas las subcategorías
        document.querySelectorAll('input[name="sub-vestidos"], input[name="sub-tops-blusas"], input[name="sub-bottoms"]').forEach(sub => {
          sub.checked = false;
        });
      });
    });

    // Hacer que todo el div filtro-titulo sea clickeable
    document.querySelectorAll('.filtro-titulo').forEach(titulo => {
      titulo.addEventListener('click', function(e) {
        // Evitar que el label dispare dos veces el evento
        if (e.target.tagName === 'LABEL') return;
        
        const checkbox = this.parentElement.querySelector('input[type="checkbox"]');
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
        }
      });
    });

