// Seleccionar elementos
const menuToggle = document.querySelector(".menu-toggle"); // Botón del menú hamburguesa
const menu = document.querySelector(".menu"); // Menú de navegación

// Agregar evento al botón del menú
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show"); // Mostrar/ocultar menú
  menuToggle.classList.toggle("active"); // Cambiar el estado del botón para animar el icono
});

// Seleccionar todos los enlaces del menú de navegación
const menuLinks = document.querySelectorAll(".navbar a");

// Agrega un evento de clic a cada enlace
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén el valor del atributo data-target para identificar la sección correspondiente
    const targetClass = this.getAttribute("data-target");
    const targetSection = document.getElementsByClassName(targetClass)[0];

    // Desplázate suavemente a la sección
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Crear una referencia al botón de "volver arriba"
const backToTopButton = document.getElementById("back-to-top");

// Función para mostrar/ocultar el botón según el scroll
const toggleBackToTopButton = () => {
  if (window.scrollY > 100) {
    // Si el usuario ha hecho scroll más de 100 píxeles
    backToTopButton.classList.add("active"); // Mostrar el botón
  } else {
    backToTopButton.classList.remove("active"); // Ocultar el botón
  }
};

// Evento para manejar el desplazamiento (scroll)
window.addEventListener("scroll", toggleBackToTopButton);

// Evento para manejar el clic en el botón "volver arriba"
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  window.scrollTo({
    top: 0, // Lleva al inicio de la página
    behavior: "smooth", // Desplazamiento suave
  });
});
