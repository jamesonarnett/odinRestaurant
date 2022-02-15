const MenuPageTitle = (title) => {
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = title;

  return menuTitle;
};

const MenuPage = () => {
  const main = document.getElementById("main");

  const menuTitle = MenuPageTitle("MD-5 Mega Menu");

  main.appendChild(menuTitle);
};

export default MenuPage;
