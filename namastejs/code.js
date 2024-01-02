// const startTime = Date.now();

// console.log(startTime);

// const endTime = Date.now();

// console.log(endTime - startTime);

// function check(name = "vishal", email) {
//   console.log(name);
//   console.log(email);
// }

// check("Bhau", "bhai@gmail.com");

// console.log(0.1 + 0.2 === 0.3);

// console.log(0015);

// const arr = [1, 2, 3, 4];

// console.log(arr[arr.length - 1]);

// for (const n in arr) {
//   console.log("hey ", n);
// }

// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false,
// };

// const obj2 = {
//   a: "bhau",
//   b: 26,
// };

// console.log({ ...object1, ...obj2 });
// console.log(Object.values(object1));

function customFlatMap(arr, dept, res = [], curr = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && curr < dept) {
      customFlatMap(arr[i], dept, res, curr + 1);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

const arr = [[1, 2, [3, 3], 4], 6, 7, [8, 9]];
console.log(customFlatMap(arr, 2));
