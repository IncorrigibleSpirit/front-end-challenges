document.querySelectorAll(".faq_heading").forEach((heading) => {
  heading.addEventListener("click", () => {
    const faqItem = heading.parentElement; // //Asi se representa el valor del contenedor padre, a fin de obtenerlo
    faqItem.classList.toggle("active");
  });
});
