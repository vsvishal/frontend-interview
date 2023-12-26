const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increement_pressed");
const btnCount = document.querySelector(".increement_count");

let pressedCount = 0;
let triggered = 0;

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttleCount();
});

const customDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = customDebounce(() => {
  btnCount.innerHTML = ++triggered;
}, 800);

//////////////////////////////////////////////////
const customThrottle = (cb, d) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) {
      return;
    }
    last = now;
    return cb(...args);
  };
};

const throttleCount = customThrottle(() => {
  btnCount.innerHTML = ++triggered;
}, 800);

// const throttleCount = _.throttle(() => {
//   btnCount.innerHTML = ++triggered;
// }, 2000);

// const debounceCount = _.debounce(() => {
//   btnCount.innerHTML = ++triggered;
// }, 800);
