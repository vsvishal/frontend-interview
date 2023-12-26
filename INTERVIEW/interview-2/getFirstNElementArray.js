// Write a JS function to get the last element of array.
// Passing a paramter n will return last n elements of the array
function lastNelementArr(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  } else {
    console.log("n size greater then arr length");
  }
}

lastNelementArr([1, 2, 3, 4, 5, 6], 4);

// Write a JS function to get the 1st element of array.
// Passing a paramter n will return first n elements of the array

function firstNelementArr(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("n size greater then arr length");
  }
}

// firstNelementArr([7, 2, 3, 4, 5, 6], 4);
