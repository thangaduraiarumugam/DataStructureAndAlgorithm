let _partition =  (arr,start,end)=>{
        let pivot =arr[end];
        let boundary = start-1;
        
        for(let i=start;i<=end;i++){
            if(arr[i]<pivot){
                _swap(arr,i, ++boundary);
            }
        }
        
        return boundary;
};
let _swap=(arr, first , second)=>{
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second]=temp;
};
class QuickSort{
    constructor(){    }

    sort(arr,start=0,end=arr.length-1){
        if(start>end){
            return;
        }
        let boundary = _partition(arr,start,end);
        this.sort(arr, start, boundary-1)
        this.sort(arr, boundary+1,end);
        
    }
    
    
}
module.exports = QuickSort;