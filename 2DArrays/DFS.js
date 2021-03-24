let search = (arr, row = 0, col = 0, arr2 = []) => {
  let item = arr[row][col];
  let rowSize = arr.length - 1
  let columnSize =arr[0].length-1 ;
  
  //console.log(arr[row][col])
  arr2.push(item);
  
  //top
  if (row - 1 >= 0 && arr2.indexOf(arr[row-1][col])==-1) {
    row--;
  } else if (col + 1 <= columnSize && arr2.indexOf(arr[row][col+1])==-1) {
    col++;
  } else if (row + 1 <= rowSize && arr2.indexOf(arr[row+1][col])==-1) {
    row++;
  } else if (col - 1 >= 0 && arr2.indexOf(arr[row][col-1])==-1) {
    col--;
  }else{
      return arr2;
  }

  return search(arr, row, col, arr2);
};

let array2D = [
  [1, 2, 3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
];
console.log(search(array2D));
