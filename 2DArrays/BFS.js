//adj List
//seen
//values
//queue

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const bfsTraversal = (arr) => {
  let queue = [[0, 0]];
  let values = [];
  let seen = new Array(arr.length).fill(0).map(()=>new Array(arr[0].length).fill(false));
  while (queue.length) {
      let curIndex = queue.shift();
      let row = curIndex[0];
      let col = curIndex[1];

      if (
        row < 0 ||
        row >= arr.length ||
        col < 0 ||
        col >= arr[0].length ||
        seen[row][col]
      ) {
        continue;
      }
      values.push(arr[row][col]);
      seen[row][col] = true;
      for (let i = 0; i < directions.length; i++) {
        let curRow = directions[i][0] + row;
        let curCol = directions[i][1] + col;
        queue.push([curRow,curCol]);
      }
    }
  
  return values;
};

let array2D = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(bfsTraversal(array2D));
