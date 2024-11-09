// VARIABLES
const carouselSlides = document.querySelector(".carousel-slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".carousel-dot");

// VALORES INICIALES
let currentSlide = 0; //Incrementa +1 con botón (nextBtn) /  Decrementa -1 con prevBtn).
const totalSlides = document.querySelectorAll(".carousel-item").length;

// FUNCIONES

// Función encargada de mover la slide del carrusel en el eje x para mostrar la diapositiva actual.
const updateSlidePosition = () => {
  carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
};

// Función que actualiza los indicadores. Utiliza forEach para recorrer cada punto y crear un índice.
// index: índice del elemento que se esta iterando.
// currentSlide: La diapositiva actual
const updateDots = () => {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("dot--fill");
    } else {
      dot.classList.remove("dot--fill");
    }
  });
};

// EVENTOS

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
});
/*% totalSlides: El operador módulo (%) se utiliza para asegurarse de que cuando lleguemos al final del carrusel, volvamos al inicio. Si totalSlides es, por ejemplo, 5, cuando currentSlide + 1 sea igual a 5 (que sería la sexta diapositiva), al aplicar el MODULO RESIDUO DE DIVISION (5 % 5), el valor será 0, lo que significa que volvemos a la primera diapositiva.
 */

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});
/*currentSlide - 1: Decrementa el número de la diapositiva actual. Es decir, si estamos en la diapositiva 3, ahora pasaremos a la 2.
+ totalSlides: Esto asegura que el valor de currentSlide nunca sea negativo.
Por ejemplo, si estamos en la primera diapositiva (currentSlide = 0) y restamos 1, el valor sería -1. Pero al sumar el total de diapositivas (totalSlides), obtenemos:((0-1) + 5) % 5 =  MODULO RESIDUO DE DIVISION 0 */

//Añade un evento para cambiar a la diapositiva actual y actualizar la posición y los puntos.
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlidePosition();
  });
});
