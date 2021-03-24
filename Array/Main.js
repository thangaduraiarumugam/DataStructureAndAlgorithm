const Array = require('./Array');
let arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
console.log(arr);
//console.log(arr.pop());
arr.insertAt(11,1);

//console.log(arr);
console.log(arr.deletAt(1));
console.log(arr);