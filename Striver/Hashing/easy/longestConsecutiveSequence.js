let longestConsecutive = (nums) => {
  let set = new Set(nums);
  let longest = 0;
  for (let n of nums) {
    if (!set.has(n - 1)) {
      let length = 1;
      while (set.has(n + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
