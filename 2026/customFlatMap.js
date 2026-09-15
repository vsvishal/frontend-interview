Array.prototype.customFlatMap = function (cb) {
  const result = [];

  this.forEach((element, index, array) => {
    const mappedValue = cb(element, index, array);

    if (Array.isArray(element)) {
      result.push(...mappedValue);
    } else {
      result.push(mappedValue);
    }
  });

  return result;
};
