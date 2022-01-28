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
    entry.target.classList.toggle("scrolled");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(title);

//smooth scroll
const hero = document.getElementById("nav_home");
const about = document.getElementById("nav_about");
const skills = document.getElementById("nav_skills");
const projects = document.getElementById("nav_projects");

const heroSection = document.getElementById("my_hero_section");
const aboutSection = document.getElementById("about_me_section");
const skillsSection = document.getElementById("my_skills_section");
const projectsSection = document.getElementById("my_projects_section");

hero.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

skills.addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
