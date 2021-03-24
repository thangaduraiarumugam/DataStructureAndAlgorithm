let rottenOranges = (arr) => {
  let numberOfMinutes = 0;
  let queues = [];
  let fresh = 0;
  let colLength = arr[0].length;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      let currentItem = arr[row][col];
      if (currentItem === 2) {
        queues.push([row, col]);
      } else if (currentItem === 1) {
        fresh++;
      }
    }
  }
    while (queues.length) {
      let size = queues.length;
      for (let i = 0; i < size; i++) {
        const [row, col] = queues.shift();

        if (row-1 >= 0 && arr[row - 1][col] === 1) {
          queues.push([row - 1, col]);
          arr[row-1][col] = 2;
          fresh--;
        }
        if (row+1 < arr.length && arr[row + 1][col] === 1) {
          queues.push([row + 1, col]);
          arr[row+1][col] = 2;
          fresh--;
        }
        if (col-1 >= 0 && arr[row][col - 1] === 1) {
          queues.push([row, col - 1]);
          arr[row][col-1] = 2;
          fresh--;
        }
        if (col+1 < colLength && arr[row][col + 1] === 1) {
          queues.push([row, col + 1]);
          arr[row][col+1] = 2;
          fresh--;
        }
      }
      if (queues.length > 0) {
        numberOfMinutes++;
      }
    }
  
  return fresh === 0 ? numberOfMinutes : -1;
};

let items = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
];
console.log(rottenOranges(items));
