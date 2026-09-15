const arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

/*
    Output inplace
    [5,6,7,1,2,3,4]
*/

function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n;

  reverseArr(nums, 0, n - 1);
  reverseArr(nums, 0, k - 1);
  reverseArr(nums, k, n - 1);
}

function reverseArr(nums, left, right) {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

rotateArray(arr, 3);
console.log(arr);

// brute force approach
function rotateArrBruteForceApproach(arr, k) {
  k = k % arr.length;

  for (let i = 0; i < k; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }
}
