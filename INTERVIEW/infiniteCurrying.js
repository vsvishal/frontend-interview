function add(a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
}

function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }

    return sum(a + b);
  };
}

const result = sum(10)(20)(30)(40)();

console.log(result); // 100
