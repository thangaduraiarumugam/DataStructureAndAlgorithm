const UglyNumber = require('./UglyNumber');

let uglyNumber = new UglyNumber();
console.log(uglyNumber.getNthUglyNumber(11));


var mostCommonWord = function(paragraph, banned) {
    let removePunctuation = paragraph.replace(/[^A-Za-z0-9\s]/g,'');
    let strToObj = {};
    for(let str of removePunctuation.toLowerCase()){
        if(banned.indexOf(str)!==-1){
            if(strToObj[str] === undefined){
                strToObj[str]=1;
            }else{
                strToObj[str]+=1;
            }
        }
    }
    let previousWord = '';
    let mostCommonWord = '';
    for(let key in strToObj){
        console.log(key);
        if(strToObj[key] > strToObj[mostCommonWord]){

            mostCommonWord = key;
        }
    }
    return mostCommonWord;
};

var reorderLogFiles = function(logs) {
    
    return logs.sort(function(log1,log2){
        let index1 = log1.indexOf(' ');
        let id1 = log1.substring(0,index1);
        let content1 = log1.substring(index1+1).trim();
        let isDigit1 = isFinite(content1.split('')[0]);
        
        let index2 = log2.indexOf(' ');
        let id2 = log2.substring(0,index2);
        let content2 = log2.substring(index2+1).trim();
        let isDigit2 = isFinite(content2.split('')[0]);
        
        if(!isDigit1 && !isDigit2){
            let compareIndex = content1.localeCompare(content2);
            if(compareIndex === 0){
                return id1.localeCompare(id2);
            }
            return compareIndex;
        }
        return  isDigit1?(isDigit2?0:1):-1;
    });
};