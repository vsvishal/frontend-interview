// solution 1
function customFlat1(arr, dept, res = [], curr = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && curr < dept) {
      customFlat1(arr[i], dept, res, curr + 1);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

// const arr = [[1, 2, [3, 3], 4], 6, 7, [8, 9]];
console.log(customFlat1(arr, 2));

// solution 2
function customFlat(arr, dept = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && dept > 0) {
      result.push(...customFlat(ar, dept - 1));
    } else {
      result.push(ar);
    }
  });

  return result;
}

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

// console.log(customFlat(arr, 2));
