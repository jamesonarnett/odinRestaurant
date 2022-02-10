const first = console.log("Not so yaaaaaay");

// class makeElement {
//   constructor(type, content) {
//     this.type = type;
//     this.content = content;
//   }

//     newEl = document.createElement(this.type);
// }

const Header = () => {
  const head = document.createElement("div");
  head.id = "header";

  head.textContent("This is supposed to work");
  head.style.color = "white";
  head.style.backgroundColor = "black";

  return head;
};

export { first };
