Array.prototype.customFlat = function (dept = 1) {
  const result = [];

  this.forEach((arr) => {
    if (Array.isArray(arr) && dept > 0) {
      result.push(...this.customFlat(arr, dept - 1));
    } else {
      result.push(arr);
    }
  });

  return result;
};
