const arr = [1, 2, 3, 4, 5, 6, 7];

const sum = arr.reduce((acc, curr) => (acc += curr), 0);
// console.log(sum);

function addIfOnlyNum(arry) {
  const sum = arry.reduce((acc, curr) => {
    if (typeof curr === "number") {
      acc = acc + curr;
    }
    return acc;
  }, 0);

  return sum;
}

console.log(addIfOnlyNum([1, 2, "bhau", "hau", 4, "jau", 6, 2]));
