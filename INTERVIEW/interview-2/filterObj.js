let arr = [
  { name: "Vishal", gender: "male" },
  { name: "Anna", gender: "female" },
  { name: "Dhoni", gender: "male" },
  { name: "Disha", gender: "female" },
  { name: "Shraddha", gender: "female" },
  { name: "Quenn", gender: "female" },
];

const filteredMales = arr.filter((e) => e.gender === "male");
// console.log(filteredMales);

// arr = filteredMales;
// console.log(arr);

let count = 0;
arr.forEach((e) => {
  if (e.gender !== "male") {
    count++;
  }
});

for (let j = 0; j < arr.length; j++) {
  if (arr[j].gender !== "male") {
    arr.splice(j, 1);
    j--;
  }
}

console.log("arr splice", arr);

// console.log(count);
