// VARIABLES
const carouselContainer = document.querySelector(".carousel-slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".carousel-dot");

// VALORES INICIALES
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".carousel-item").length;

// FUNCIONES

// Función encargada de mover la slide del carrusel en el eje x para mostrar la diapositiva actual.
const updateSlidePosition = () => {
  carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
};

// Función que actualiza los puntos. Utiliza forEach para recorrer cada punto y crear un índice.
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

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

//Añade un evento para cambiar a la diapositiva actual y actualizar la posición y los puntos.
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlidePosition();
  });
});
