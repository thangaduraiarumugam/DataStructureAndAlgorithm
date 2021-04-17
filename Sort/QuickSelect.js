
let _swap=(arr, first,second)=>{
    let temp =arr[first];
    arr[first] = arr[second];
    arr[second] =temp;
}

let sort = (arr,k,start = 0, end= arr.length-1, boundary = -1) => {
  let pivot = arr[end];
  while(boundary <end){
      if(arr[start]> pivot){
          start++;
      }else{
          if(boundary>-1){
            _swap(arr,start,boundary);
          }
          boundary++;
          start++;
      }

      if(start===end){
          if(arr[boundary]>arr[end]){
            _swap(arr,boundary,end);
          }
          sort(arr,start,boundary-1);
          sort(arr,boundary+1,end);
      }
      
  }
  return arr[k];
};

console.log(sort([5,4,3,10],1));