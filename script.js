const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close-icon");
const navBar = document.querySelector("nav ul");
const cover = document.querySelector(".cover");

// opens the nav bar in mobile view
menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("active");
  closeIcon.classList.add("active");
  navBar.classList.add("active");
  cover.classList.add("active");
});

// closes the nav bar in mobile view
closeIcon.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  closeIcon.classList.remove("active");
  navBar.classList.remove("active");
  cover.classList.remove("active");
});

// clicking outside the nav bar in mobile view closes it
cover.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  closeIcon.classList.remove("active");
  navBar.classList.remove("active");
  cover.classList.remove("active");
});
