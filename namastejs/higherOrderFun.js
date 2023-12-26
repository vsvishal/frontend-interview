const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

Array.prototype.calculate = (callBackFun) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(callBackFun(radius[i]));
  }
  return output;
};

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// console.log(calculateArea(radius));

// console.log(radius.map(area));

console.log(radius.calculate(area));
