const arr = [5, 1, 3, 2, 6];

// const output = arr.map((element) => element.toString(2));
// console.log(output);

const users = [
  { firstName: "Vishal", lastName: "Sharma", age: "26" },
  { firstName: "Bhau", lastName: "Khau", age: "26" },
  { firstName: "MS", lastName: "Dhoni", age: "42" },
  { firstName: "Elon", lastName: "Musk", age: "51" },
];

const fstNam = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

console.log(fstNam);

// const fullName = users.map((user) => `${user.firstName} ${user.lastName}`);
// console.log(fullName);

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);
