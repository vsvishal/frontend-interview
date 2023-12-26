const str = "saare jahe se acha hindustan hamara";

function reverEachWord(str) {
  const arr = str.split(" ");

  const reversedStr = arr.map((word) => word.split("").reverse().join(""));
  return reversedStr.join(" ");
}

console.log(reverEachWord(str));
