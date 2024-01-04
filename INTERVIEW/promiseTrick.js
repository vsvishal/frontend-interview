const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 value resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 value resolved");
  }, 2000);
});

async function handlePromise() {
  console.log("Hello World!!");

  const val = await p1;
  console.log("Namaster Vishal 1 🤠");
  console.log(val);

  const va2 = await p2;
  console.log("Namaster Vishal 2 🤡");
  console.log(va2);
}

setTimeout(() => {
  Promise.resolve("setTimeout LINE 26 promise resolved!!");
  console.log("SETTIMEOUT");
}, 2000);

handlePromise();

function getData() {
  p1.then((res) => console.log(res, " 1 🐶"));
  p2.then((res) => console.log(res, " 2 🦊"));

  console.log("Hey LINE 17");
}

getData();
