const arr = [5, 1, 3, 2, 6];

const output = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);
