
const mergeSort=(array)=>{
    //find the middle element
    //sort left and right array
    //merge both the arrays
    if(array.length<2) return array;

    let middle = Math.floor(array.length/2);
    let leftArray = [];
    let rightArray = [];

    for(let i=0;i<middle;i++){
        leftArray.push(array[i]);
    }
    for(let i=middle;i<array.length;i++){
        rightArray.push(array[i]);
    }

    mergeSort(leftArray);
    mergeSort(rightArray);

    let merge = (left,right,array)=>{
        let lftPointer = 0;
        let rghtPointer =0;
        let resultIdx = 0;
        while(lftPointer <left.length && rghtPointer< right.length){
            if(left[lftPointer]<=right[rghtPointer]){
                array[resultIdx] = left[lftPointer++];
            }else{
                array[resultIdx] =  right[rghtPointer++];
            }
            resultIdx++;
        }
        while(lftPointer < left.length ){
            array[resultIdx] = left[lftPointer++];
            resultIdx++;
        }
        while(rghtPointer< right.length){
            array[resultIdx] = right[rghtPointer++];
            resultIdx++;
        }
        
    };
     merge(leftArray,rightArray,array);
     return array;
}

console.log(mergeSort([10,3,2,5,4,1,6]));
console.log(mergeSort([10,3]));
console.log(mergeSort([10]));
console.log(mergeSort([]));