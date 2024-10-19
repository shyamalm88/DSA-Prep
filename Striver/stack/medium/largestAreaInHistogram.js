const largestRectangleArea = (heights) => {
  let n = heights.length;
  let stack = [];
  let largestArea = 0;
  let area;
  let nse, pse;
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      let ind = stack.pop();
      pse = stack.length ? stack[stack.length - 1] : -1;
      nse = i;
      area = heights[ind] * (nse - pse - 1);
      largestArea = Math.max(largestArea, area);
    }
    stack.push(i);
  }

  while (stack.length) {
    nse = n;
    let ind = stack.pop();
    pse = stack.length ? stack[stack.length - 1] : -1;
    area = heights[ind] * (nse - pse - 1);
    largestArea = Math.max(largestArea, area);
  }

  return largestArea;
};
