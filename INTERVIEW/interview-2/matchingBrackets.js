let str = "{[([])]}";

function matchingBrackets(str) {
  const stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of str) {
    if (map[char]) {
      if (stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(matchingBrackets(str));
