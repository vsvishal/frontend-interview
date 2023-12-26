const arr = [5, 1, 3, 2, 6];

const output = arr.filter((num, ind) => {
  console.log("ind ", ind);
  return num % 2 === 0;
});
console.log(output);

console.log(5 % 2);
