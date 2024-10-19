// Given a string s, find the minimum number of insertions needed to make it a palindrome.
// A palindrome is a sequence that reads the same backward as forward.
// You can insert characters at any position in the string.

let minInsertion = (s) => {
  // intuition is to get the longest common subsequence and subtract from s.length
  return s.length - longestPalindromeSubseq(s);
  function longestPalindromeSubseq(s) {
    var dp = Array(s.length)
      .fill(0)
      .map(() => Array(s.length));
    var helper = function (i, j) {
      if (j < i) return 0;
      if (dp[i][j] !== undefined) return dp[i][j];
      if (s[i] === s[j]) {
        dp[i][j] = (i === j ? 1 : 2) + helper(i + 1, j - 1);
      } else {
        dp[i][j] = Math.max(
          helper(i + 1, j),
          helper(i, j - 1),
          helper(i + 1, j - 1)
        );
      }
      return dp[i][j];
    };
    return helper(0, s.length - 1);
  }
};
