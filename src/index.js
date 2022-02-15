import "./style.scss";
import { FirstPageLoader } from "./modules/firstLoad";
import ContactPage from "./modules/contact";
import HomePage from "./modules/home";
import MenuPage from "./modules/menu";

loadPage();

function navEvents() {
  const main = document.getElementById("main");

  let homeBtn = document.getElementById("home");
  let menuBtn = document.getElementById("menu");
  let contactBtn = document.getElementById("contact");

  let tabs = document.querySelector(".tab-content");
  console.log(tabs);

  homeBtn.addEventListener("click", () => {
    removeTabs();
    HomePage();
  });
  menuBtn.addEventListener("click", () => {
    removeTabs();
    MenuPage();
  });
  contactBtn.addEventListener("click", () => {
    removeTabs();
    ContactPage();
  });
}

function loadPage() {
  FirstPageLoader();
  main.style.display = "block";
  HomePage();
  navEvents();
}

function removeTabs() {
  let tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    main.textContent = "";
  }

  main.style.display = "block";
}
