const months = ["March", "Jan", "Feb", "Dec"];
const numbs = [1, 30, 4, 21, 100000];

months.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(months);

// months.sort();
// console.log(months);

// console.log(numbs.sort());
