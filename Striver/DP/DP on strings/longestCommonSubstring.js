let longestCommonSubstr = (str1, str2) => {
  let n = str1.length;
  let m = str2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        ans = Math.max(ans, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return ans;
};

console.log(longestCommonSubstr("abcde", "abfce"));
