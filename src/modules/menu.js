const MenuPageTitle = (title) => {
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = title;

  return menuTitle;
};

const menuItems = (title, price, src, alt) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.classList.add("food-img");

  const itemDescription = document.createElement("div");
  itemDescription.classList.add("food-description");

  const menuItemTitle = document.createElement("h2");
  menuItemTitle.textContent = title;

  const menuItemContent = document.createElement("p");
  menuItemContent.textContent = price;

  itemDescription.appendChild(menuItemTitle);
  itemDescription.appendChild(menuItemContent);

  menuItem.appendChild(itemDescription);
  menuItem.appendChild(img);

  return menuItem;
};

const MenuPage = () => {
  const main = document.getElementById("main");
  const menuTitle = MenuPageTitle("MD-5 Mega Menu");

  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");

  let items = [
    menuItems(
      "Jaba Eyes",
      "12CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2018/07/ackbar-ice-cream-tall.jpg",
      "Yummy Jaba Toes img"
    ),
    menuItems(
      "Ship Stew",
      "9CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2019/06/corellian-coffee-tall.jpg",
      "Ship stew "
    ),
    menuItems(
      "Maul Melt",
      "15CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2019/03/darth-maul-quinoa-tall.jpg",
      "Darth Maul food"
    ),
    menuItems(
      "Jawa Smiles",
      "5CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2018/10/ewok-cookies-tall.jpg",
      "ewwww jawa face"
    ),
    menuItems(
      "C3p0 Scrap",
      "2CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2018/12/lemon-tart-tall.jpg",
      "c3p0 food img"
    ),
    menuItems(
      "Unknown",
      "10CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2018/03/porg-puffs-tall.jpg",
      "Random src starwars img"
    ),
    menuItems(
      "Pickled Red stuff...",
      "12CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2019/08/sith-trooper-float-tall-b.jpg",
      "Red stuff img"
    ),
    menuItems(
      "Death Cookies",
      "20CR",
      "https://starwarsblog.starwars.com/wp-content/uploads/2019/06/vader-peanut-butter-blossoms-tall.jpg",
      "Vader  head cookie img"
    ),
  ];

  main.appendChild(menuTitle);
  main.appendChild(menuItemContainer);

  items.forEach((item) => menuItemContainer.appendChild(item));
};

export default MenuPage;
