const hourglassSum = (arr) => {
    console.log(arr);
    let maxSum = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++){
            let row = i;
            let col = j;
            let topRow = arr[row-1];
            let bottomRow = arr[row+1];
            let topFirst = topRow !==undefined ?topRow[j-1]!=undefined? topRow[j-1]:0:0;
            let topSecond =topRow !==undefined ?topRow[j]!=undefined? topRow[j]:0:0;
            let topThird =topRow !==undefined ?topRow[j+1]!=undefined? topRow[j+1]:0:0;
            let middle = arr[row][col];
            let bottomFirst = bottomRow !== undefined 
                                     ? bottomRow[j-1] !== undefined
                                        ? bottomRow[j-1] : 0 : 0;
            let bottomSecond =bottomRow !== undefined 
                                     ? bottomRow[j] !== undefined
                                        ? bottomRow[j] : 0 : 0;
            let bottomThird =bottomRow !== undefined 
                                     ? bottomRow[j+1] !== undefined
                                        ? bottomRow[j+1] : 0 : 0;
            let total = topFirst +  topSecond + topThird + middle 
                            + bottomFirst +bottomSecond + bottomThird;
             maxSum = Math.max(maxSum,total);
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