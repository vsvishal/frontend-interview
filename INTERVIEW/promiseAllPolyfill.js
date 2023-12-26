function customPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((error) => reject(error));
    });
  });
}

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

customPromiseAll([
  showText("hello vish", 1000),
  Promise.resolve("2nd promise"),
  Promise.resolve("hi"),
]);
