const contactHeader = (title) => {
  const contactTitle = document.createElement("h1");
  contactTitle.textContent = title;

  return contactTitle;
};

const contactPhone = (title) => {
  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("phone-div");
  const phoneTitle = document.createElement("h2");
  phoneTitle.textContent = title;

  const innerPhoneDiv = document.createElement("div");

  const phone1 = document.createElement("p");
  const phone2 = document.createElement("p");

  phone1.textContent = "# JZ87-S9F-L24K4N";

  phone2.textContent = " & JZ87-1J4-3S4LkM";

  innerPhoneDiv.appendChild(phone1);
  innerPhoneDiv.appendChild(phone2);

  phoneDiv.appendChild(phoneTitle);
  phoneDiv.appendChild(innerPhoneDiv);

  return phoneDiv;
};

const contactAddress = (title) => {
  const addressDiv = document.createElement("div");
  addressDiv.classList.add("address-div");

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = title;

  const address = document.createElement("p");
  address.classList.add("address-left");
  address.textContent = "unknown Regions";

  addressDiv.appendChild(addressTitle);
  addressDiv.appendChild(address);

  return addressDiv;
};

const ContactPage = () => {
  const main = document.getElementById("main");
  main.classList.add("tab-content");

  let contactTitle = contactHeader("Contact a Jedi");
  contactTitle.classList.add("contact-title");

  let phoneContact = contactPhone("By StarPhone ");

  let addressDiv = contactAddress("Location");

  main.appendChild(contactTitle);
  main.appendChild(phoneContact);
  main.appendChild(addressDiv);
};

export default ContactPage;
