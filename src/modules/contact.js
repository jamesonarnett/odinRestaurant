const contactHeader = (title) => {
  const contactTitle = document.createElement("h1");
  contactTitle.textContent = title;

  return contactTitle;
};

const ContactPage = () => {
  const main = document.getElementById("main");
  main.classList.add("tab-content");

  let contactTitle = contactHeader("Contact a Jedi");
  contactTitle.classList.add("contact-title");

  main.appendChild(contactTitle);
};

export default ContactPage;
