// (function vishOne() {
//   console.log("Hello first");
// })();

// (() => {
//     console.log("DB connected Two");
// })()

//Nullish Coalescing Operator (??): null undefined
let val;

val = null ?? {} ?? 20
console.log(val);