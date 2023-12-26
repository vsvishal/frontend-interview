function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

function composeTwoFun(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

const composeTwoArrowFn = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

// const compose = composeTwoArrowFn(add, square);
// console.log(compose(2, 4));

const array1 = ["a", "b", "c"];
const iterator = array1.values();
console.log("iterator ", iterator);
