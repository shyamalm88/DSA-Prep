let longestSubarray = (nums, k) => {
  const n = nums.length;
  let maxLength = 0;

  for (let startIndex = 0; startIndex < n; startIndex++) {
    for (let endIndex = startIndex; endIndex < n; endIndex++) {
      let currentSum = 0;
      for (let i = startIndex; i < endIndex; i++) {
        currentSum += [nums[i]];
      }
      if (currentSum === k) {
        maxLength = Math.max(maxLength, endIndex - startIndex + 1);
      }
    }
  }

  return maxLength;
};
