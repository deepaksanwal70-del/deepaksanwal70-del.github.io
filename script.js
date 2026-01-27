window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

reveal(); // page load par bhi run

const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-fill");

window.addEventListener("scroll", () => {
  const sectionTop = skillSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    skillBars.forEach(bar => {
      bar.style.width = bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "85%" :
                        bar.classList.contains("js") ? "75%" :
                        "88%";
    });
  }
});
