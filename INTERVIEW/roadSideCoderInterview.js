let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

console.log("LINE 8", arr.flat(Infinity));

let flatened = [].concat(...arr);
let deptTwo = [].concat(...flatened);

// console.log(deptTwo);

// Promise
function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(text);
    }, time);
  });
}

Promise.allSettled([
  showText("hello vish", 1000),
  Promise.reject("2nd promise"),
  Promise.resolve("hi"),
])
  .then((value) => console.log(value))
  .catch((e) => console.log(e));

// Question Implement this code

const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log("result.total ", result.total);
