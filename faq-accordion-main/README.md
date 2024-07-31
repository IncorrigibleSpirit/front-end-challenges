# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![screenshot](./design/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Saas

### What I learned

Overall, I learned how to work with <details> and <summary> tags in HTML to create collapsible sections. Also, incorporate JS to toggle classes and use a property to set the keyboard navigation.

```JS
document.querySelectorAll(".faq_heading").forEach((heading) => {
  heading.addEventListener("click", () => {
    const faqItem = heading.parentElement;
    faqItem.classList.toggle("active");
  });
});
```

```css
:focus-visible {
  outline: 0.1875rem dotted #9b59b6;
  outline-offset: 0.125rem;
}
```

### Continued development

-Responsive design
-JavaScript projects
-API projects

## Author

- Website - [Carlos Pizarro](https://github.com/IncorrigibleSpirit)
- Frontend Mentor - [@IncorrigibleSpirit](https://www.frontendmentor.io/profile/IncorrigibleSpirit)
