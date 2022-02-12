import "./style.scss";
import { FirstPageLoader } from "./modules/firstLoad";
import ContactPage from "./modules/contact";
import HomePage from "./modules/home";
// import MenuPage from "./modules/menu";

loadPage();

function navEvents() {
  const main = document.getElementById("main");

  let homeBtn = document.getElementById("home");
  let menuBtn = document.getElementById("menu");
  let contactBtn = document.getElementById("contact");

  let tabs = document.querySelector(".tab-content");
  console.log(tabs);

  homeBtn.addEventListener("click", () => {
    main.remove();
    main.style.display = "block";
    HomePage();
  });
  // menuBtn.addEventListener("click", () => MenuPage);
  contactBtn.addEventListener("click", () => {
    ContactPage();
  });
}

function loadPage() {
  FirstPageLoader();
  main.style.display = "block";
  HomePage();
  navEvents();
}
