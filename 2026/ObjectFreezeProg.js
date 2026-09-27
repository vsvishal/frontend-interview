const a = [1, 2, 3, 4];

Object.freeze(a);
const b = a;

console.log(b); // till here no error

b.push(7); // Cannot add property 4, object is not extensible
