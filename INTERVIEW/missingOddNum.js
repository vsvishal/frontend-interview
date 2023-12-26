const arr = [5, 9, 11, 15, 17];

const oddArr = [];
for (let i = 1; i < arr.length; i++) {
  let prev = arr[i - 1];
  let curr = arr[i];

  let difference = curr - prev;
  if (difference > 2) {
    console.log(arr[i] - 2);
    return;
  }
}
