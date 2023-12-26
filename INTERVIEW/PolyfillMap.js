Array.prototype.customMap = function (callbackFn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFn(this[i], i, this));
  }
  return newArr;
};

const arr = [1, 2, 3, 7, 8, 9];
// arr.customMap((e) => console.log(e));

Array.prototype.customFilter = function (callbackFn) {
  const filteredArry = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(this, this[i], i, this)) {
      filteredArry.push(this[i]);
    }
  }
  return filteredArry;
};

const filteredArr = arr.customFilter((e) => e > 5);
console.log(filteredArr);
