let button = document.querySelector("header button");
let nav = document.querySelector("header nav");

function toggleMenu() {
  nav.classList.toggle("open");
}

button.onclick = toggleMenu;