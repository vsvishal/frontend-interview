let ul = document.querySelector(".list");
let btnAdd = document.querySelector(".add");
let btnRemove = document.querySelector(".remove");

const addBgColor = (e) => {
  if (e.target.matches("li")) {
    e.target.style.backgroundColor = "green";
  }
};

// const eventHandler = ul.addEventListener("click", addBgColor);

btnAdd.addEventListener("click", () =>
  ul.addEventListener("click", addBgColor)
);

btnRemove.addEventListener("click", () =>
  ul.removeEventListener("click", addBgColor)
);

// ul.removeEventListener("click");
