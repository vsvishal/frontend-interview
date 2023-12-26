// reverse number with using inbuilt fun
function reverseNumberWithout(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseNumberWithout(1234));

// reverse number using build int fun
function reverseNumber(num) {
  const reverseStr = num.toString().split("").reverse().join("");
  return Number(reverseStr);
}

// console.log(reverseNumber(21));
