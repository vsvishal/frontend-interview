// function charOccurance(str) {
//   const arr = str.split("");
//   const occurances = {};

//   arr.forEach((char) => {
//     if (occurances.hasOwnProperty(char) === false) {
//       occurances[char] = 1;
//     } else {
//       occurances[char]++;
//     }
//   });
//   return occurances;
// }

// console.log(charOccurance("visshaal"));

let str = "vishhall";

const arr = str.split("").reduce((acc, curr, index) => {
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(arr);
