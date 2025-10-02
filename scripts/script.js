let button = document.querySelector("header button");
let nav = document.querySelector("header nav");
let body = document.body; // deze is nieuw

function toggleMenu() {
  nav.classList.toggle("open");
  body.classList.toggle("scroll-lock"); // deze is nieuw
}

button.onclick = toggleMenu;



const tabjes = document.querySelectorAll("main section:nth-of-type(2) ul button");

tabjes.forEach(button => {
  button.addEventListener("click", veranderknop);
});

function veranderknop(event) {
  // Zet alle buttons op aria-selected="false"
  tabjes.forEach(btn => btn.setAttribute("aria-selected", "false"));
  
  // Zet de geklikte button op aria-selected="true"
  event.currentTarget.setAttribute("aria-selected", "true");
}