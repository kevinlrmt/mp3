const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

function toggleNav() {
  // Toggle nav
  navLinks.classList.toggle("nav-active");

  // Animate Links
  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  // Burger animation
  burger.classList.toggle("toggle");
}

burger.addEventListener("click", toggleNav);

navLinks.addEventListener("click", () => {
  // Close nav
  navLinks.classList.remove("nav-active");

  // Reset link animations
  navLinksLi.forEach((link) => {
    link.style.animation = "";
  });

  // Reset burger animation
  burger.classList.remove("toggle");
});
