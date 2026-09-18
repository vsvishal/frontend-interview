var a = 10;
(function () {
  console.log(a);
  var a = 20;
})(); // undefined

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456

const result = add(1)(2);
console.log(result); // 3

function add(a) {
  return function (b) {
    return a + b;
  };
}
