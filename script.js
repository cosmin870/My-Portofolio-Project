//hamburger toggle

const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav_ul");
const hamburgerXButton = document.getElementById("x_button");

hamburger.addEventListener("click", () => {
  navUl.classList.add("show");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("clicked");
  hamburgerXButton.classList.add("show");
});

hamburgerXButton.addEventListener("click", () => {
  navUl.classList.remove("show");
  hamburger.classList.remove("clicked");
  hamburgerXButton.classList.remove("show");
});

//smooth scroll
const hero = document.getElementById("nav_home");
const about = document.getElementById("nav_about");
const skills = document.getElementById("nav_skills");
const projects = document.getElementById("nav_projects");
const contact = document.getElementById("nav_contact");

const heroSection = document.getElementById("my_hero_section");
let aboutSection = document.getElementById("left_article");
let aboutMobile = document.getElementById("about_me_section");
const skillsSection = document.getElementById("my_skills_section");
const projectsSection = document.querySelector(".project1_img");
const contactSection = document.getElementById("my_contact_section");

hero.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});
//about me scroll for mobile
const x = window.matchMedia("(max-width: 480px)");
const verifyScreenWidth = () => {
  if (x.matches) {
    about.removeEventListener("click", respondListener);
    about.addEventListener("click", () => {
      aboutMobile.scrollIntoView({ behavior: "smooth" });
    });
  }
};

about.addEventListener("click", respondListener);
function respondListener() {
  aboutSection.scrollIntoView({ behavior: "smooth", block: "end" });
}

verifyScreenWidth(x);

skills.addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

projects.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth", block: "center" });
});

contact.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

//========================OBSERVERS====================
//about-page-observer

const optionsAbout = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

const flatIcon = document.querySelector(".flaticon_layer");
const aboutTitle = document.getElementById("about_title");
const counters = document.querySelectorAll("#counter_number");
const counterContainer = document.querySelector(".counter_container");
//
const observerAbout = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // entry.target.classList.remove("scrolled");
      return;
    }
    entry.target.classList.add("scrolled");
    observerAbout.unobserve(entry.target);

    //animated counters
    counters.forEach((counter) => {
      const speed = 200;
      const animate = () => {
        const value = +counter.getAttribute("data-target");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 35);
        } else {
          counter.innerText = value;
        }
      };

      if (counterContainer.classList.contains("scrolled")) {
        animate();
      }
    });
  });
}, optionsAbout);

observerAbout.observe(flatIcon);
observerAbout.observe(aboutTitle);
observerAbout.observe(counterContainer);

//observer animations --skill page
const title = document.getElementById("skill_title");
const skillBox = document.querySelectorAll(".box");
const lastSkillBox = document.querySelector(".grid_item_6");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // entry.target.classList.remove("scrolled");
      return;
    }
    entry.target.classList.add("scrolled");
    observer.unobserve(entry.target);

    if (lastSkillBox.classList.contains("scrolled")) {
      const interval = 600;
      skillBox.forEach((box, index) => {
        setTimeout(() => {
          box.classList.add("showing");
        }, index * interval);
      });
    }
  });
}, options);

observer.observe(title);
observer.observe(lastSkillBox);
