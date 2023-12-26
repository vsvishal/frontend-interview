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
  b: newName,
  b: {
    c: { f },
  },
} = obj;

console.log(b);
