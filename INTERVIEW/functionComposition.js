// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// Solution 1
function compose(functionList) {
  return function (x) {
    console.log("LINE 6: x ", x);
    for (const fn of functionList.reverse()) {
      x = fn(x);
      console.log("LINE 9: x ", x);
    }
    return x;
  };
}

// Solution 2
function compose2(functionList) {
  return function (x) {
    return functionList.reduceRight((acc, fn) => {
      return fn(acc);
    }, x);
  };
}
const fn = compose2([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
