const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
});

window.onload = function () {
  const title = document.getElementById("skill_title");
  window.addEventListener("scroll", scrollEffect);

  function scrollEffect() {
    if (window.scrollY >= 1750) {
      title.classList.add("scrolled");
    }
  }
};
