const contactHeader = (title) => {
  const contactTitle = document.createElement("h1");
  contactTitle.textContent = title;

  return title;
};

const ContactPage = () => {
  const main = document.getElementById("main");

  let contactTitle = contactHeader("Contact a Jedi");

  main.appendChild(contactTitle);
};

export default ContactPage;
