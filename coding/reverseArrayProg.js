let myString = "My name is Vishal";

function reverseString(str) {
  const strArr = str.split(" ");

  const reversedArray = strArr.map((word) => {
    if (typeof word === "string") {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });

  return reversedArray;
}

console.log(reverseString(myString));
