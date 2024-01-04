const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      f: "bhau",
    },
  },
  e: 4,
};

const {
  b: {
    d: { f: newFnam },
  },
} = obj;

// console.log(f);
console.log(newFnam);
