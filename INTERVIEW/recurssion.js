function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

// console.log(sumRange(8));

function recurssionSum(n, total = 0) {
  if (n < 1) {
    return total;
  }

  return recurssionSum(n - 1, total + n);
}

console.log(recurssionSum(3));

recurssionSum(3, 0);
recurssionSum(2, 3);
recurssionSum(1, 5);
recurssionSum(0, 6);
return 6;
return 6;
return 6;
return 6;
