/**
 * 1. find pivot
 * 2. partition the array
 *     left side - elements less than pivot
 *     right side - elements greater than pivot
 * 3. Once sorted pivot is in the correct position
 * 4.again recursively sort right and left partition
 */
const _swap = (arr, left,right)=>{
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
};
const _partition =(arr,start,end)=>{
    let left = start;
    let boundary = start-1;

    for(let i=start;i<=end;i++){
        if(arr[i]<=arr[end]){
            _swap(arr,i,++boundary);
        }
    }
    return boundary;
}
const _sort =(array,start=0,end=array.length-1)=>{
    if(start>=end) return;
    let boundary = _partition(array,start,end);
    _sort(array,start,boundary-1);
    _sort(array,boundary+1,end);
 }
const quickSort =(array)=>{
    _sort(array,0,array.length-1);
    return array;
}

console.log(quickSort([3,1,5,10,4,6]));