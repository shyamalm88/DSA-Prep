var calPoints = function (operations) {
  let stack = [];
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] != "D" && operations[i] != "C" && operations[i] != "+") {
      stack.push(parseInt(operations[i]));
    } else if (operations[i] == "C") {
      stack.pop();
    } else if (operations[i] == "D") {
      let r = stack.length - 1;
      stack.push(stack[r] * 2);
    } else if (operations[i] == "+") {
      sum = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(sum);
    }
  }
  let calculateSum = stack.reduce((acc, c) => acc + c, 0);
  return calculateSum;
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
