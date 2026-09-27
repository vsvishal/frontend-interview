function printOne() {
  console.log("Print");
}

let timerId;

for (let i = 0; i < 100; i++) {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    printOne();
  }, 0);
}

function sumArray(arr) {
  let sum = 0;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      sum += sumArray(element);
    } else {
      sum += element;
    }
  });

  return sum;
}

console.log(sumArray([1, [2, [3, 4]], 5]));

function memoFun2(initialVal) {
  let val = initialVal;

  return function (newValue) {
    if (newValue !== undefined) {
      val = newValue;
    }
    return val;
  };
}

// solution 2
function memoFun(val) {
  return function () {
    if (arguments.length) {
      val = arguments[0];
    }
    return val;
  };
}

var x = memoFun(500);
console.log(x()); // 500
console.log(x(200)); // 200
console.log(x()); // 200
console.log(x(300)); // 300
