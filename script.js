const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav_ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
});

//observer animations --skill page
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
    entry.target.classList.add("scrolled");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(title);

//observer animation fade ---navBar
const navBar = document.getElementById("my_navbar");
window.onload = () => {
  if (window.scrollY === 0) {
    navBar.classList.remove("scrolled");
  }
};
window.addEventListener("scroll", (scrollEffect) => {
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
  } else if (window.scrollY === 0) {
    navBar.classList.remove("scrolled");
  }
});

//smooth scroll
const hero = document.getElementById("nav_home");
const about = document.getElementById("nav_about");
const skills = document.getElementById("nav_skills");
const projects = document.getElementById("nav_projects");
const contact = document.getElementById("nav_contact");

const heroSection = document.getElementById("my_hero_section");
const aboutSection = document.getElementById("left_article");
const skillsSection = document.getElementById("my_skills_section");
const projectsSection = document.querySelector(".project1_img");
const contactSection = document.getElementById("my_contact_section");

hero.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth", block: "end" });
});

skills.addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth", block: "center" });
});

contact.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
