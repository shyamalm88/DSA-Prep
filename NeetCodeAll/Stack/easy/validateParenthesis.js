var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
      continue;
    }
    console.log(stack);
    if (stack.length === 0) return false;

    let peak;
    switch (s[i]) {
      case ")":
        peak = stack.pop();
        if (peak == "{" || peak == "[") {
          return false;
        }
        break;
      case "}":
        peak = stack.pop();
        if (peak == "(" || peak == "[") {
          return false;
        }
        break;
      case "]":
        peak = stack.pop();
        if (peak == "(" || peak == "{") {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
};

console.log(isValid("(([]){})"));
