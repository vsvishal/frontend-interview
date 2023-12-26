function isNumInteger(num) {
  if (num % 1 === 0) {
    console.log("Integer");
  } else {
    console.log("Not Integer");
  }
}

isNumInteger(2);
isNumInteger(2.4);
