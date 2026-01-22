window.addEventListener("scroll", reveal);

function reveal() {
  const items = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 150) {
      el.classList.add("active");
    }
  });
}

reveal();
