function reverseStringsInArray(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Input is not an array.";
  }

  // Iterate through each element in the array
  const reversedArray = arr.map((element) => {
    // Check if the element is a string
    if (typeof element === "string") {
      // Reverse the characters of the string
      return element.split("").reverse().join("");
    } else {
      // If the element is not a string, return it unchanged
      return element;
    }
  });

  return reversedArray;
}

// Example usage
const originalArray = ["hello", "world", 123, "javascript"];
const reversedArray = reverseStringsInArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
