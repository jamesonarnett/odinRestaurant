const first = console.log("Yaaaaaay");

const Header = (id, text) => {
  const head = document.createElement("header");
  head.setAttribute("id", id);
  head.style.color = "white";
  head.style.backgroundColor = "black";

  const headText = document.createElement("p");
  headText.classList.add("header-text");
  headText.textContent = text;
  head.appendChild(headText);

  return head;
};

const main = () => {};

const Loader = () => {
  const content = document.getElementById("content");

  let header = Header("header", "Star Food");
  content.appendChild(header);
};

export { first, Loader };
