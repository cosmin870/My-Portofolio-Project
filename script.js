const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
});
