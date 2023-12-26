// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(add(2)(4)(2)(2)());

function sub(a) {
  return function (b) {
    if (b) {
      return sub(a - b);
    } else {
      return a;
    }
  };
}

console.log(sub(12)(4)(2)(2)());
