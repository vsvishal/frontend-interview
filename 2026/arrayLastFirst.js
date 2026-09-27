function getLastNElementArray(arr, n) {
  if (n > arr.length) return [];

  let startLength = arr.length - n;
  return arr.slice(startLength, arr.length);
}

function getFirstNElementArray(arr, n) {
  if (n > arr.length) return [];

  return arr.slice(0, n);
}

const arr = [1, 3, "bhau", "hau", 4, "jau"];

function addIfOnlyNum(arr) {
  const sum = arr.reduce((acc, curr) => {
    if (Number(curr)) {
      acc += curr;
    }

    return acc;
  }, 0);
}
