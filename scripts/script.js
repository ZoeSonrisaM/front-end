let button = document.querySelector("header button");
let nav = document.querySelector("header nav");
let body = document.body; // deze is nieuw

function toggleMenu() {
  nav.classList.toggle("open");
  body.classList.toggle("scroll-lock"); // deze is nieuw
}

button.onclick = toggleMenu;