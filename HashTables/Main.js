const HashTables = require('./HashTables');

let ht = new HashTables(50);

ht.set('apple',1);
ht.set('orange',2);
ht.set('kiwi',3);
ht.set('banana',4);
ht.set('berry',5);
ht.set('cherry',6);
ht.set('Guava',7);

console.log(ht);
console.log(ht.get('cherry'));
