let str = "{[([])]}";

function matchingBrackets(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(matchingBrackets(str));
