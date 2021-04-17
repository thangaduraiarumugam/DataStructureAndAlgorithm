/**
 * @param {string} s
 * @return {string}
 refer this guy's video, cool explanation
 https://www.youtube.com/watch?v=UflHuQj6MVA
 */

var longestPalindrome = function (s) {
  const size = s.length;
  let dp = new Array(size).fill(0).map(() => new Array(size).fill(0));

  let subStringCount = 1;
  let splitS = s.split("");
  let maxCount = 0;
  let longSubString = "";
  while (subStringCount <= size) {
    if (subStringCount === 1) {
      for (let i = 0; i < size; i++) {
        dp[i][i] = 1;
        if (maxCount < subStringCount) {
          maxCount = subStringCount;
          longSubString = s.slice(i, 1);
        }
      }
    } else if (subStringCount === 2) {
      for (let i = 0; i < size; i++) {
        if (splitS[i] === splitS[i + 1]) {
          dp[i][i + 1] = 1;
          if (maxCount < subStringCount) {
            maxCount = subStringCount;
            longSubString = s.slice(i, i + 2);
          }
        }
      }
    } else {
      for (let i = 0; i < size; i++) {
        if (
          splitS[i] === splitS[i + subStringCount - 1] &&
          dp[i + 1][i + subStringCount - 2] === 1
        ) {
          dp[i][i + subStringCount - 1] = 1;
          if (maxCount < subStringCount) {
            maxCount = subStringCount;
            longSubString = s.slice(i, i + subStringCount);
          }
        }
      }
    }
    subStringCount++;
  }
  return longSubString;
};
