function combinationSum(arr, target) {
  function dfs(index, result, stack, target) {
    if (target === 0) {
      result.push([...stack]);
      return;
    }
    for (let i = index; i < arr.length; i++) {
      if (arr[i] <= target) {
        stack.push(arr[i]);
        dfs(i, result, stack, target - arr[i]);
        stack.pop();
      }
    }
  }

  const result = [];
  dfs(0, result, [], target);
  return result;
}

console.log(combinationSum([2, 3, 4, 7], 7));
