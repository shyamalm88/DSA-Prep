var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let i = 0;
  for (let n of pushed) {
    stack.push(n);
    while (
      stack.length &&
      i < popped.length &&
      popped[i] === stack[stack.length - 1]
    ) {
      stack.pop();
      i++;
    }
  }
  return stack.length === 0;
};
