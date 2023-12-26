function serializeToJson(obj, filter = []) {
  if (filter.length !== 0) {
    return JSON.stringify(obj, filter);
  }

  return JSON.stringify(obj);
}

// console.log(
//   serializeToJson({ name: "vishal", age: 26, city: "Pune" }, ["name", "city"])
// );

const obj = { name: "vishal", age: 26, city: "Pune" };

const serialize = JSON.stringify(
  obj,
  function (key, value) {
    if (key === "city") {
      return undefined;
    }
    return value;
  },
  2
);

console.log(serialize);
