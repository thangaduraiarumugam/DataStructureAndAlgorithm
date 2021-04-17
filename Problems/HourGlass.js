function hourglassSum(arr) {
    
    let maxSum = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            
            let row = i;
            let col = j;
            let topRow = arr[row-1];
            let bottomRow = arr[row+1];
            if(topRow !==undefined && bottomRow !==undefined 
            && topRow[j-1]!==undefined && topRow[j] !== undefined
            && topRow[j+1] !== undefined && bottomRow[j-1] !== undefined
            && bottomRow[j+1] !== undefined && bottomRow[j] !== undefined){
                let topFirst = topRow[j-1];
                let topSecond =topRow[j];
                let topThird =topRow[j+1];
                let middle = arr[row][col];
                let bottomFirst = bottomRow[j-1];
                let bottomSecond = bottomRow[j];
                let bottomThird = bottomRow[j+1];
                let total = topFirst +  topSecond + topThird + middle 
                                + bottomFirst +bottomSecond + bottomThird;
                maxSum = Math.max(maxSum,total);
            }
        }
    }
    return maxSum;
}
console.log(hourglassSum([[0,-4 ,-6, 0, -7, -6],
    [-1 ,-2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]]));