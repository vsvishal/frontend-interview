const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: 4,
};

// get values from object with dynamic keys

function getAllValues(obj, value = []) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      getAllValues(obj[key], values);
    } else {
      values.push(obj[key]);
    }
  }
  return values;
}

function getValues(obj, values = []) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      getValues(obj[key], values);
    } else {
      values.push(obj[key]);
    }
  }
  return values;
}

const values = getValues(obj);
// console.log(values); // [1, 2, 3, 4]

const user = {
  a: 1,
  b: {
    name: 2,
    d: {
      name: 11,
      d: 12,
    },
  },
  e: 4,
};

// write a function to return all names from objects
function traverseObj(obj, values = []) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      traverseObj(obj[key], values);
    } else {
      if (key === "name") values.push(obj[key]);
    }
  }
  return values;
}

console.log(traverseObj(user));
