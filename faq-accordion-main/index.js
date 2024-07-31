document.querySelectorAll(".faq_heading").forEach((heading) => {
  heading.addEventListener("click", () => {
    const faqItem = heading.parentElement;
    faqItem.classList.toggle("active");
  });
});
