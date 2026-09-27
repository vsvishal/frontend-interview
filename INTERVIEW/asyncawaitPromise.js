let startTime = Date.now();

const p1 = new Promise((resolve, reject) => {
  startTime = Date.now();
  console.log("startTime in p1: ", startTime);

  setTimeout(() => {
    resolve("Promise 1 resolved LINE 3");
    const endTime = Date.now();
    const diffSeconds = Math.floor((endTime - startTime) / 1000);
    console.log("diffSeconds: ", diffSeconds);
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  startTime = Date.now();
  console.log("startTime in p2: ", startTime);

  setTimeout(() => {
    resolve("Promise 2 resolved LINE 9");
    const endTime = Date.now();
    const diffSeconds = Math.floor((endTime - startTime) / 1000);
    console.log("diffSeconds: ", diffSeconds);
  }, 5000);
});

async function hanldePromise() {
  console.log("Inside handlePromise LINe 15");

  const val1 = await p1;
  console.log(val1);

  console.log("-------Between Promise--------");

  const val2 = await p2;
  console.log(val2);

  console.log("--------END------");
}

async function hanldePromise2() {
  console.log("Inside handlePromise2 LINe 44");

  const val1 = await p1;
  console.log(val1);

  console.log("-------Between Promise2--------");

  const val2 = await p2;
  console.log(val2);

  console.log("--------END2------");
}

async function hanldePromise3() {
  console.log("Inside handlePromise3 LINe 59");

  const val1 = await p1;
  console.log(val1);

  console.log("-------Between Promise3--------");

  const val2 = await p2;
  console.log(val2);

  console.log("--------END3------");
}

hanldePromise();
hanldePromise2();
hanldePromise3();

const endTime = Date.now();
const diffSeconds = Math.floor((endTime - startTime) / 1000);
console.log("*** diffSeconds END ***: ", diffSeconds);
