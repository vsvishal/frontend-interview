const users = [
  {
    id: 1,
    name: "Vishal",
    age: 26,
    isActive: true,
  },
  {
    id: 2,
    name: "Elon",
    age: 52,
    isActive: true,
  },
  {
    id: 3,
    name: "Bill Gates",
    age: 70,
    isActive: true,
  },
  {
    id: 4,
    name: "Bhau",
    age: 21,
    isActive: false,
  },
];

// function isNameExist(name, users) {
//   const user = users.find((user) => user.name === name);
//   return Boolean(user);
// }

function isNameExist(name, users) {
  const user = users.some((user) => user.name === name);
  return user;
}

// console.log(isNameExist("Vishal", users));

// const arr = [1, 2];

// const append = (arr, ele) => {
//   return [...arr, ele];
// };

// console.log(append(arr, 3));
// console.log("arr ", arr);

const arr = [1, 2, 3, 3, 4, 4, 5];
// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

function uniqueReduce(arr) {
  return arr.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []);
}

// function uniqueIndexOf(arr) {
//     let currentItem = arr[]
// }

console.log(uniqueReduce(arr));

// console.log(uniqueArray(arr));

// const mySet = new Set();
// mySet.add(1);
// mySet.add(4);
// mySet.add(6);
// mySet.add(7);

// // console.log(mySet.has(1));

// for (const [key, valu] of mySet.entries()) {
//   console.log(key + " : " + valu);
// }

// const myMap = new Map();
// myMap.set("a", 100);
// myMap.set("b", 2);
// myMap.set("b", 3);
// myMap.set(null, 4);
// console.log(myMap.get("a"));

// for (const item of myMap) {
//   console.log(item);
// }
