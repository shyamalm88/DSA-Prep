// Given two strings str1 and str2, find the minimum number of insertions and deletions in string str1 required to transform str1 into str2.

// Insertion and deletion of characters can take place at any position in the string.

function minOperations(str1, str2) {
  // intuition is to get the longest common subsequence and subtract from str1.length and again subtract from str2.length
  function lcs(text1, text2) {
    var dp = Array(text1.length)
      .fill(0)
      .map(() => Array(text2.length));
    let dfs = (i, j) => {
      if (i === text1.length || j === text2.length) {
        return 0;
      }
      if (dp[i][j] !== undefined) return dp[i][j];
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dfs(i + 1, j + 1);
      } else {
        dp[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1), dfs(i + 1, j + 1));
      }
      return dp[i][j];
    };
    dfs(0, 0);
    return dp[0][0];
  }
  return str1.length + str2.length - 2 * lcs(str1, str2);
}

console.log(minOperations("flaw", "lawn"));
