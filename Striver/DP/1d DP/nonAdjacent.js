// Given an integer array nums of size n.
// Return the maximum sum possible using the elements of nums such that no two elements taken are adjacent in nums.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

function nonAdjacent(nums) {
  let dp = Array(nums.length + 1);

  function helper(index) {
    if (index === 0) return nums[index];
    if (index < 0) return 0;

    if (dp[index]) {
      return dp[index];
    } else {
      let pick = nums[index] + helper(index - 2);
      let notpick = 0 + helper(index - 1);
      dp[index] = Math.max(pick, notpick);
      return dp[index];
    }
  }

  return helper(nums.length - 1);
}

console.log(nonAdjacent([2, 1, 4, 9]));

function nonAdjacentTabulationTechnique(nums) {
  let dp = Array(nums.length + 1);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += dp[i - 2];
    }
    let nonpick = 0 + dp[i - 1];

    dp[i] = Math.max(pick, nonpick);
  }

  return dp[nums.length - 1];
}

console.log(nonAdjacent([2, 1, 4, 9]));
