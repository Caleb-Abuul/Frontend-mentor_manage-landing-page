# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](<./design/desktop-design%20(2).jpg>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Manage Landing Page](https://caleb-abuul.github.io/Frontend-mentor_manage-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile responsive design

### What I learned

I learned how to create carousels, and re-enforced my grid layout skills.

Here is a snippet of that:

```html
<div class="parent">
  <div class="first-child"></div>
  <div class="second-child"></div>
  <div class="third-child"></div>
  <div class="fourth-child"></div>
  <div class="fifth-child"></div>
</div>
```

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a b c"
    "e b f";
  gap: 1rem;
}
.first-child {
  grid-area: a;
}
.second-child {
  grid-area: b;
}
.third-child {
  grid-area: c;
}
.fourth-child {
  grid-area: e;
}
.fifth-child {
  grid-area: f;
}
```

### Continued development

Going forward, I will use CSS grid containers to develop complex layouts

### Useful resources

- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) - This helped me in creating carousel

## Author

- Github - [Caleb Abuul](https://github.com/Caleb-Abuul)
- Frontend Mentor - [@Caleb-Abuul](https://www.frontendmentor.io/profile/Caleb-Abuul)
- X - [@CalebAbuul](https://x.com/CalebAbuul)
- LinkedIn - [@CalebAbuul](https://www.linkedin.com/in/caleb-abuul/)

## Acknowledgments

A big thank you to [Kevin Powell](https://github.com/kevin-powell). He has been a great inspiration through his [YouTube Channel](https://youtube.com/@KevinPowell?si=Yhw2-yrCyeetnmys). His solution for the [Frontend Mentor Manage-landin-page project](https://youtu.be/h3bTwCqX4ns?si=P3J2UdvHI3udbL7u) helped me got a hang of how to approach challenges on frontend mentor. He has tons of videos spanning several topics in CSS on YouTube. Please do well to check out his YouTube channel - [Kevin Powell](https://youtube.com/@KevinPowell?si=Yhw2-yrCyeetnmys)
