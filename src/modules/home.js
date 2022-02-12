const MainSection = (id, header, content) => {
  const all = document.getElementById("main");
  all.classList.add("tab-content");

  const about = document.createElement("div");
  about.setAttribute("id", id);
  about.classList.add("about");

  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent = header;
  aboutHeader.classList.add("about-header");

  about.appendChild(aboutHeader);

  const aboutContent = document.createElement("p");
  aboutContent.textContent = content;
  aboutContent.classList.add("about-content");

  about.appendChild(aboutContent);

  all.appendChild(about);
  return all;
};

const HomePage = () => {
  const about = MainSection(
    "main",
    "About",
    `The best food across all the galaxies. Stop by today to try our new Jaba Toes!
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque id mauris eget elementum. Ut malesuada lacinia nisi, ut viverra odio elementum sed. Quisque p
        `
  );

  return about;
};

export default HomePage;
