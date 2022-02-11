import "./style.scss";
import { FirstPageLoader } from "./modules/firstLoad";
import ContactPage from "./modules/contact";

loadPage();

function navEvents() {
  let homeBtn = document.getElementById("home");
  let menuBtn = document.getElementById("menu");
  let contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", () => console.log("nice"));
  menuBtn.addEventListener("click", () => console.log("nice1"));
  contactBtn.addEventListener("click", ContactPage);
}

function loadPage() {
  FirstPageLoader();
  navEvents();
}
