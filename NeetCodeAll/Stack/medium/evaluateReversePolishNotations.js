var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(parseInt(b / a));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
