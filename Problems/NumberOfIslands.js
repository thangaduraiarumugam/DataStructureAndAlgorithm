let dfs = (arr, row, col) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= arr.length ||
    col >= arr[0].length ||
    arr[row][col] === 0
  ) {
    return 0;
  }
  
  arr[row][col] = 0;
  dfs(arr, row - 1, col);
  dfs(arr, row, col + 1);
  dfs(arr, row + 1, col);
  dfs(arr, row, col - 1);
  dfs(arr, row-1, col - 1);
  dfs(arr, row-1, col + 1);
  dfs(arr, row+1, col - 1);
  dfs(arr, row+1, col + 1);
  return 1;
};
let numberOfIslands = (arr) => {
  if (arr ===null || arr.length === 0) return 0;
  let countIslands = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      let currentVal = arr[row][col];
      if (currentVal === 1) {
        countIslands += dfs(arr, row, col);
      }
    }
  }
  return countIslands;
};

let arr = [
[0, 1, 0],
[0, 1, 0],
[0, 0, 0],
[1, 1, 0],
[1, 0, 1],
[0, 1, 1],
[1, 1, 1],
[0, 1, 1],
[1, 0, 1]
];
console.log(numberOfIslands(arr));



let tempa=[];
let final=[];
function backtrack(tempa,nums){
    if(nums.length===0){
        final.push(tempa.slice());
        return;
    }//123 --> 1 --> 2 --> 3
    //23 -->
    //3
    for(let i=0;i<nums.length;i++){
        tempa.push(nums[i]);
        nums.splice(i,1);
        backtrack(tempa,nums,final);
        nums.splice(i,0,tempa.pop());

    }
}
backtrack(tempa,nums,final);
return final;
