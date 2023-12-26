const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// Event Bubbling
// Difference between event.target vs this.target vs event.currentTarget

div.addEventListener(
  "click",
  function (event) {
    // event.stopPropagation();
    alert(`currentTarget = ${event.currentTarget.tagName}, 
    target = ${event.target.tagName}, 
    this = ${this.tagName} `);
  },
  { capture: true }
);

form.addEventListener(
  "click",
  function (event) {
    // event.stopPropagation();
    // event.sto
    alert(`currentTarget = ${event.currentTarget.tagName}, 
    target = ${event.target.tagName}, 
    this = ${this.tagName} `);
  },
  { capture: true }
);

button.addEventListener(
  "click",
  function (event) {
    // event.stopPropagation();
    alert(`currentTarget = ${event.currentTarget.tagName}, 
    target = ${event.target.tagName}, 
    this = ${this.tagName} `);
  },
  { capture: true }
);

// div.addEventListener("click", func, { capture: true });
// form.addEventListener("click", func, { capture: true });
// button.addEventListener("click", func, { capture: true });

// function func(event) {
//   alert(`currentTarget = ${event.currentTarget.tagName},
//     target = ${event.target.tagName},
//     this = ${this.tagName} `);
// }
