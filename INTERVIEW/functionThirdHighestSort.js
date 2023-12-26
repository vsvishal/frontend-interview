function thirdHighestNum(arr) {
  arr.sort((a, b) => b - a);

  const thirdHighestNum = arr[2];
  return thirdHighestNum;
}

console.log(thirdHighestNum([4, 2, 9, 20, 15, 1, 10]));
