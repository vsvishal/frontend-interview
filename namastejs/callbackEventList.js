// function callBackEventList() {
//     let count = 0
//     document.getElementById("btn").addEventListener("click", function xyz() {
//         console.log("Button clicked ", ++count);
//     })
// }

// callBackEventList()
let count = 0;
function callBackEventList() {
  console.log("Button clicked ", ++count);
}

document.getElementById("btn").addEventListener("click", callBackEventList);

setTimeout(() => {
  document
    .getElementById("btn")
    .removeEventListener("click", callBackEventList);
}, 2000);
