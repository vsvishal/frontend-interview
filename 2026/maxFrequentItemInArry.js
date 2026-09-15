function maxFrequentItemInArr(arr) {
  const freq = {};
  let maxCount = 0;
  let maxFreqItem = arr[0];

  for (const item of arr) {
    freq[item] = (freq[item] || 0) + 1;

    if (freq[item] > maxCount) {
      maxCount = freq[item];
      maxFreqItem = item;
    }
  }

  return maxFreqItem;
}

console.log(
  maxFrequentItemInArr([1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 7, 8]),
);
