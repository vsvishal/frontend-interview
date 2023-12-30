const user = {
  a: 1,
  b: {
    name: "Vishal",
    d: {
      name: "Elon",
      d: 12,
    },
  },
  e: 4,
};

function getAllNamesFromObj(obj, values = []) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      getAllNamesFromObj(obj[key], values);
    } else {
      if (key === "name") {
        values.push(obj[key]);
      }
    }
  }
  return values;
}

console.log(getAllNamesFromObj(user));
