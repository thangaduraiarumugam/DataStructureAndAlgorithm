const directions=[[-1,0],[0,1],[1,0],[0,-1]];

let search = (arr) => {

  let values =[];
  let seen = new Array(arr.length).fill(0).map(()=>new Array(arr[0].length).fill(false));

  let DFS =(arr,row,col,values,seen)=>{
    if(row<0 || row>=arr.length || col<0 || col >=arr[0].length || seen[row][col]){
      return;
    }
  
    let item = arr[row][col];
    values.push(item);
    seen[row][col]=true;
    
    for(let i=0;i<directions.length;i++){
      let curRow = directions[i][0]+row;
      let curCol = directions[i][1]+col;
      DFS(arr,curRow,curCol,values,seen);
      
    }
    
  };
  DFS(arr,0,0,values,seen);
  return values;
};

let array2D = [
  [1, 2, 3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
];
console.log(search(array2D));
