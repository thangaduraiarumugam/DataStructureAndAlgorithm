function arrayManipulation(n, queries) {
    let arr = new Array(n+1).fill(0);
    let maxVal = Number.MIN_SAFE_INTEGER;
    
    for(let i=0;i<queries.length;i++){
       arr[queries[i][0]-1] += queries[i][2];
       arr[queries[i][1]] = arr[queries[i][1]] - queries[i][2];
    }
    let sum = 0;
    for(let a of arr){
        sum +=a;
        maxVal = Math.max(maxVal,sum);
    }
    return maxVal;
}
let temp = arrayManipulation(10,[[2 ,6 ,8],
    [3 ,5, 7],
    [1, 8, 1],
    [5 ,9, 15]]
    );

console.log(temp);