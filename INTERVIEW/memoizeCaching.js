function myMemoizeCaching(fn) {
  const res = {};
  return function (...args) {
    let argCache = JSON.stringify(args);
    if (!res[argCache]) {
      res[argCache] = fn.call(this, ...args);
    }
    return res[argCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i <= 100000000; i++) {
    return num1 * num2;
  }
};

const memoizeClumsyProduct = myMemoizeCaching(clumsyProduct);

console.time("First call");
console.log(memoizeClumsyProduct(9467, 7649));
console.timeEnd("First call");
