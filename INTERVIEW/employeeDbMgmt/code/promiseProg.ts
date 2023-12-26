const promise: Promise<String> = new Promise((resolve, reject) => {
  let num = 10;

  if (num === 10) {
    resolve("Promise resolved");
  }

  reject("Promise rejected");
});

promise.then((msg) => console.log(msg)).catch((error) => console.log(error));

