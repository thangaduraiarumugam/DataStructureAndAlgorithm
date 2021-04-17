//"abcdaaefg"

let longestSubstring = (s) => {
  //left pointer
  //loop with right pointer
  //hold seen characters
  //hold longest value size

  let l = 0;
  let seen = {};
  let longSize = 0;
  for (let r = 0; r < s.length; r++) {
    let currenChar = s[r];
    let prevSeen = seen[currenChar];

    if(prevSeen>=l){
        l = prevSeen+1;
    }
    seen[currenChar] = r;
    longSize = Math.max(longSize, r-l+1);
  }
  return longSize;
};
console.log(longestSubstring("abcdabe"));