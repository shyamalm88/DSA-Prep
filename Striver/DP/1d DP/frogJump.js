// A frog wants to climb a staircase with n steps.
// Given an integer array heights, where heights[i] contains the height of the ith step.

// To jump from the ith step to the jth step,
// the frog requires abs(heights[i] - heights[j]) energy, where abs() denotes the absolute difference.
// The frog can jump from any step either one or two steps, provided it exists.
// Return the minimum amount of energy required by the frog to go from the 0th step to the (n-1)th step.

function frogJump(heights) {
  let dp = Array(heights.length + 1);

  function helper(index) {
    if (index === 0) return 0;
    if (dp[index]) {
      return dp[index];
    } else {
      let left =
        helper(index - 1) + Math.abs(heights[index] - heights[index - 1]);
      let right = Infinity;

      if (index > 1) {
        right =
          helper(index - 2) + Math.abs(heights[index] - heights[index - 1]);
      }

      dp[index] = Math.min(left, right);

      return dp[index];
    }
  }

  return helper(heights.length - 1);
}

console.log(frogJump([7, 5, 1, 2, 6]));
