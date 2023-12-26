const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved !!");
  }, 5000);
});

async function handlePromise() {
  console.log("First Line inside async fun");
  const data = await p;
  console.log("2nd log inside promise");
  console.log("data: ", data);
  console.log("4th log");
}

handlePromise();
