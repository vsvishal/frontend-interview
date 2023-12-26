let button = document.querySelector(".increment_btn");
let btnPress = document.querySelector(".increment_pressed");
let trigger = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

function debouncing(cb, d) {
  let timer;

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, d);
  };
}

function throttling(cb, d) {
  let last = 0;
  return function () {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    cb();
  };
}

const debounceCount = throttling(() => {
  trigger.innerHTML = ++triggerCount;
}, 800);

button.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount();
});
