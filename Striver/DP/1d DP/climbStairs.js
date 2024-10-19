function climbStairs(n) {
  let dp = Array(n + 1);
  function helper(n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    if (dp[n]) {
      return dp[n];
    } else {
      let left = helper(n - 1);
      let right = helper(n - 2);
      return (dp[n] = left + right);
    }
  }
  return helper(n);
}

console.log(climbStairs(3));
