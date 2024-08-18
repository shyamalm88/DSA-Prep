var dailyTemperatures = function (temperatures) {
  let res = Array(temperatures.length).fill(0);
  let stack = [];

  for (i = 0; i < temperatures.length; i++) {
    let val = temperatures[i];
    while (stack.length && val > stack[stack.length - 1][0]) {
      let stackIndex = stack.pop()[1];
      res[stackIndex] = i - stackIndex;
    }
    stack.push([val, i]);
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
