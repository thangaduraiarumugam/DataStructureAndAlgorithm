const Heap = require("./Heap");

let num = [5, 3, 10, 1, 4, 2];
let heap = new Heap();
let aa = [];
for(let i of num){
    heap.insert(i);
}

let kThElement = (heap ,k)=>{
    
    
    while(true){
        let kth = heap.remove();
        if(k==1){
            return kth;
        }
        k--;
    }
}
/*console.log(heap);
for(let i = 0;i<num.length;i++){
    aa.push(heap.remove())
}*/
/*
let swap = (arr, first, second) => {
  let temp = arr[second];
  arr[second] = arr[first];
  arr[first] = temp;
  return arr;
};

let heapify = (arr, index) => {
  let largerIndex = index;

  let leftIndex = 2 * index + 1;

  if (leftIndex < arr.length && arr[leftIndex] > arr[largerIndex]) {
    largerIndex = leftIndex;
  }

  let rightIndex = 2 * index + 2;

  if (rightIndex < arr.length && arr[rightIndex] > arr[largerIndex]) {
    largerIndex = rightIndex;
  }
  if (index !== largerIndex) {
    swap(arr, index, largerIndex);
    heapify(arr, largerIndex);
  }
};

for (let i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);

// One by one extract an element from heap
for (let i = n - 1; i > 0; i--) {
  // Move current root to end
  let temp = arr[0];
  arr[0] = arr[i];
  arr[i] = temp;

  // call max heapify on the reduced heap
  heapify(arr, i, 0);
}*/
console.log(kThElement(heap,6));
