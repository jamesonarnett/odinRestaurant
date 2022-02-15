const createBtn = (id, text) => {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.classList.add("tab-links");

  const span = document.createElement("span");
  span.textContent = text;

  button.appendChild(span);

  return button;
};

const Header = (id, text) => {
  const head = document.createElement("header");
  head.setAttribute("id", id);

  const headText = document.createElement("p");
  headText.classList.add("header-text");
  headText.textContent = text;

  head.appendChild(headText);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("header-button-container");

  const homeBtn = createBtn("home", "Home");
  const menuBtn = createBtn("menu", "Menu");
  const contactBtn = createBtn("contact", "Contact");

  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);
  btnContainer.appendChild(contactBtn);

  head.appendChild(btnContainer);
  return head;
};

const MainSection = (id) => {
  const about = document.createElement("div");
  about.setAttribute("id", id);
  about.classList.add("about");

  return about;
};

const Footer = (text) => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const p = document.createElement("p");
  p.textContent = text;

  footer.appendChild(p);

  return footer;
};

const FirstPageLoader = () => {
  const content = document.getElementById("content");
  const body = document.getElementById("body");

  const header = Header("header", "Star Food");

  const about = MainSection("main");

  const footer = Footer("Made by the Force");

  content.appendChild(header);
  content.appendChild(about);
  body.appendChild(footer);
};

export default FirstPageLoader;
