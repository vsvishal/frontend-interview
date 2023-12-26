const obj = {
  name: "vishal",
  age: 26,
};

const user = Object.create(obj);

// delete user.prototype.name;

console.log(user.name);
