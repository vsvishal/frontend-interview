const usersObject = [
  { firstName: "Vishal", lastName: "Sharma", age: 26 },
  { firstName: "Akshay", lastName: "Saini", age: 28 },
  { firstName: "Elon", lastName: "Musk", age: 52 },
  { firstName: "Rohan", lastName: "Dubey", age: 26 },
  { firstName: "Bill", lastName: "Gates", age: 60 },
];

const result = usersObject.reduce((acc, curr, index) => {
  if (acc[curr.age]) {
    ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(result);
