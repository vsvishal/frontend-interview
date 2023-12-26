function add(a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
}

function infiniteCurrying(a) {
  return function (b) {
    console.log("b ", b);
    if (b) return infiniteCurrying(a + b);
    return a;
  };
}

console.log(infiniteCurrying(5)(2)(2)(2)());
