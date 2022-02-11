const createBtn = (id, text) => {
  const button = document.createElement("button");
  button.setAttribute("id", id);

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

const MainSection = (id, header, content) => {
  const about = document.createElement("div");
  about.setAttribute("id", id);
  about.classList.add("about");

  const aboutHeader = document.createElement("h1");
  console.log(aboutHeader);
  aboutHeader.textContent = header;
  aboutHeader.classList.add("about-header");

  about.appendChild(aboutHeader);

  const aboutContent = document.createElement("p");
  aboutContent.textContent = content;
  aboutContent.classList.add("about-content");

  about.appendChild(aboutContent);

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

  const header = Header("header", "Star Food");

  const about = MainSection(
    "main",
    "About",
    `The best food across all the galaxies. Stop by today to try our new Jaba Toes!
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque id mauris eget elementum. Ut malesuada lacinia nisi, ut viverra odio elementum sed. Quisque p
  `
  );

  const footer = Footer("Made by the Force");

  content.appendChild(header);
  content.appendChild(about);
  content.appendChild(footer);
};

export { FirstPageLoader };
