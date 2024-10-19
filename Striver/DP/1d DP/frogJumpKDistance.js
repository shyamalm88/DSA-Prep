// A frog wants to climb a staircase with n steps.
// Given an integer array heights, where heights[i] contains the height of the ith step, and an integer k.

// To jump from the ith step to the jth step, the frog requires abs(heights[i] - heights[j]) energy, where abs() denotes the absolute difference.
// The frog can jump from the ith step to any step in the range [i + 1, i + k], provided it exists.
// Return the minimum amount of energy required by the frog to go from the 0th step to the (n-1)th step.

function frogJumpKDistance(heights, k) {
  let dp = Array(heights.length).fill(-1);
  function helper(index) {
    if (index === 0) return 0;
    if (dp[index] !== -1) {
      return dp[index];
    }
    let min = Number.POSITIVE_INFINITY;
    //Try all possible steps
    for (let j = 1; j <= k; j++) {
      //Check if ind-j is non negative
      if (index - j >= 0) {
        let jump =
          helper(index - j) + Math.abs(heights[index] - heights[index - j]);

        //Update the mimimum energy
        min = Math.min(jump, min);
      }
    }
    //Return the answer
    //Return the answer
    dp[index] = min;
    return dp[index];
  }

  return helper(heights.length - 1);
}

console.log(frogJumpKDistance([15, 4, 1, 14, 15], 3));
