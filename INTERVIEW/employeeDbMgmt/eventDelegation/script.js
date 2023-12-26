const liEventFun = (event) => {
  const target = event.target;

  if (target.tagName === "LI") {
    target.style.backgroundColor = "green";
    // window.location.href = "#" + event.target.innerText;
  }
};

document
  .querySelector("#products")
  .addEventListener("click", () => liEventFun(event));

document.querySelector("#products").removeEventListener("click", liEventFun);

// document.querySelector("#products").addEventListener("click", (event) => {
//   console.log(event);

//   if (event.target.tagName === "LI") {
//     window.location.href += "#" + event.target.innerText;
//     console.log("event.target.id ", event.target.id);
//   }
// });
