function secondMax(arr) {
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  return Math.max(...arr);
}

let numbersArray = [10, 5, 8, 20, 15];
// console.log(secondMax(numbersArray));

function thirdMax(arr) {
  const max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);

  const max2 = Math.max(...arr);
  arr.splice(arr.indexOf(max2), 1);

  return Math.max(...arr);
}

console.log("thirdMax ", thirdMax(numbersArray));
