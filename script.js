const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
});

//observer animations
const title = document.getElementById("skill_title");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry);
    entry.target.classList.add("scrolled");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(title);
