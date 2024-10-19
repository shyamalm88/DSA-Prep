const nextLargerElement = (arr) => {
  let ans = Array(arr.length).fill(-1);
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let currEl = arr[i];

    while (stack.length > 0 && stack[stack.length - 1] <= currEl) {
      stack.pop();
    }

    if (stack.length === 0) {
      ans[i] = -1;
    } else {
      ans[i] = stack[stack.length - 1];
    }

    stack.push(currEl);
  }
  return ans;
};
