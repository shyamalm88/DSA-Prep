let longestPalindromicSubsequence = (s) => {
  let str1 = s;
  let str2 = s.split("").reverse().join("");
  function longestCommonSubsequence(str1, str2) {
    let dp = Array(str1.length + 1)
      .fill(0)
      .map(() => Array(str2.length + 1));

    function dfs(i, j) {
      if (i === str1.length || j === str2.length) {
        return 0;
      }
      if (dp[i][j]) {
        return dp[i][j];
      }
      if (str1[i] === str2[j]) {
        dp[i][j] = 1 + dfs(i + 1, j + 1);
      } else {
        dp[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
      }
      return dp[i][j];
    }
    dfs(0, 0);
    return dp[0][0];
  }
  return longestCommonSubsequence(str1, str2);
};

//another version most important which gets run in time complexity
var longestPalindromeSubseq = function (s) {
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
};
