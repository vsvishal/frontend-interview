let x = 10,
  y = 5;

x = x + y;
y = x - y;
x = x - y;

// console.log("After Swapping: x = " + x + ", y = " + y);

const userObj = {
  name: "vishal",
  age: 26,
  code: {
    lang: "javascript",
  },
};

console.log(Object.values(userObj));
console.log(Object.keys(userObj));
