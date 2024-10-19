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

const maximalAreaOfSubMatrixOfAll1 = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;

  const prefixSum = Array.from({ length: n }, () => Array(m).fill(0));

  for (let j = 0; j < m; j++) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum += matrix[i][j];
      if (matrix[i][j] == 0) {
        prefixSum[i][j] = 0;
        sum = 0;
      } else {
        prefixSum[i][j] = sum;
      }
    }
  }

  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    const area = this.largestRectangleArea(prefixSum[i]);
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
};
