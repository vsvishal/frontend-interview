function getSecondHighestNumber(arr) {
  if (arr.length < 2) {
    return;
  }

  arr.sort((a, b) => {
    return b - a;
  });

  const secondHigherNum = arr[1];
  return secondHigherNum;
}

let numbersArray = [10, 5, 8, 20, 15];
console.log(getSecondHighestNumber(numbersArray));

console.log(getSecondHighestNumber([1]));
