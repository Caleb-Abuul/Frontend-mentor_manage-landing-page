const slides = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showNextSlide() {
  // 1. Remove active class from the current slide
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  // 2. Move to the next index, looping back to 0 at the end
  currentIndex = (currentIndex + 1) % slides.length;

  // 3. Add active class to the new slide
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

// 4. Change slide every 3 seconds (3000ms)
setInterval(showNextSlide, 3000);
