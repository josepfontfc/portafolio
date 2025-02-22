// Seleccionar elementos
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Agregar evento al botón del menú
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show"); // Mostrar/ocultar menú
  menuToggle.classList.toggle("active"); // Animar icono hamburguesa
});

//Configuración para la animación de la clase título
const sr = ScrollReveal({
  origin: "left",
  distance: "300px",
  duration: 2000,
  reset: false,
});

//Hace que la clase título aparezca animanada con un retraso de 500ms
sr.reveal(".titulo", { delay: 500 });

//Configuración para la animación de la clase description

const sr2 = ScrollReveal({
  origin: "right",
  distance: "300px",
  duration: 2000,
  reset: false,
});

sr2.reveal(".description", { delay: 300 });

//Código para el efecto de la máquina de escribir

const textEl = document.querySelector(".text");
const text = "Además de pizzas tenemos pastas con sabor Italiano";
let idx = 1;
let speed = 100;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx); //Muestra progresivamente cada carácter de la cadena text utilizando el índice idx.

  idx++;

  if (idx > text.length) {
    //Reinicia la animación al comienzo del texto una vez que todos los caracteres se han mostrado.
    idx = 1;
  }

  setTimeout(writeText, speed);
}

document
  .querySelector(".boton-pizza-estrella")//Este es el botón que activa el evento click
  .addEventListener("click", function () {
    var content = document.querySelector(".descripcion-pizza-estrella");//Esta es la clase que aparece y desaparece al clicar el botón

    if (content.classList.contains("show")) {  //Comprueba si el elemento .descripcion-pizza-estrella tiene la clase show.
      content.classList.remove("show");
    } else {
      content.classList.add("show");
    }
  });
