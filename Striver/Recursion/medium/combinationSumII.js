function combinationSumII(arr, target) {
  arr.sort((a, b) => a - b);
  function dfs(index, result, stack, target) {
    if (target === 0) {
      result.push([...stack]);
      return;
    }

    for (let i = index + 1; i < arr.length; i++) {
      if (i > index && arr[index] === arr[index - 1]) {
        continue;
      }
      if (arr[i] <= target) {
        stack.push(arr[i]);
        dfs(i + 1, result, stack, target - arr[i]);
        stack.pop();
      }
    }
  }
  let result = [];
  dfs(0, result, [], target);
  return result;
}

console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8));
