const objOne = {
  name: "Vishal",
  profile: "Software Engineer",
  getName: function () {
    return this.name;
  },
  getRollNo: function () {
    return this.rollNo;
  },
};

const objTwo = {
  age: 26,
  rollNo: 11,
  __proto__: objOne,
};

// console.log(objTwo);

const objThree = {
  class: "BCS",
  __proto__: objTwo,
};

// console.log(objThree);

const array = new Array();
// console.log(array);

const cities = ["Pune", "Mumbai", "Hyderabad", "Manjari"];

Array.prototype.convertArrayToObject = function () {
  let obj = {};
  this.forEach((element, index) => {
    obj[index] = element;
  });
  return obj;
};

// console.log(cities.convertArrayToObject());

Object.prototype.display = function () {
  return this;
};

function MyPrototype(name) {
  this.name = name;
}

MyPrototype.prototype = objTwo;

const myProto = new MyPrototype("Vishal");
console.log(myProto);
