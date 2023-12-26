// Write a JS program to find most frequent item of an array

function mostFrequentItemArr(arr) {
  const eleCountObj = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const result = Object.keys(eleCountObj).reduce((acc, curr) => {
    return eleCountObj[acc] > eleCountObj[curr] ? acc : curr;
  });
  return result;
}

console.log(mostFrequentItemArr([1, 2, 2, 3, 3, 4, 4, 4, 7, 8, 8]));
