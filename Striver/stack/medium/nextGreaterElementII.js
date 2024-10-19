const nextLargerElementII = (arr) => {
  let n = arr.length;
  let ans = Array(n).fill(-1);
  let stack = [];

  for (let i = 2 * n - 1; i >= 0; i--) {
    let currEl = arr[i % n];

    while (stack.length > 0 && stack[stack.length - 1] <= currEl) {
      stack.pop();
    }

    if (i < n) {
      ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    }

    stack.push(currEl);
  }
  return ans;
};

console.log(nextLargerElementII([3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]));
