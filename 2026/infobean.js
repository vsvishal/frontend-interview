// [
//   [10, 100 ],                  // digit sum = 1
//   [11, 101, 200 ],               // digit sum = 2
//   [12, 21, 30, 111, 201, 300 ],    // digit sum = 3
//   [31, 22, 40 ],                 // digit sum = 4
//   [222 ]                           // digit sum = 6
// ]

const numbers = [
  10, 11, 12, 21, 30, 31, 22, 40, 100, 101, 111, 200, 201, 300, 222,
];

function getDigitSum(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

function groupByDigitSum(numbers) {
  return Object.values(
    numbers.reduce((groups, number) => {
      const sum = getDigitSum(number);

      (groups[sum] ??= []).push(number);

      return groups;
    }, {}),
  );
}

console.log(groupByDigitSum(numbers));
