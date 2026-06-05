const foto = document.querySelectorAll("img");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {
  menuToggle.onclick = function () {
    navLinks.classList.toggle("open");
    const expanded = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", expanded);
  };
}
