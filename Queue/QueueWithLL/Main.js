const Queue = require('./Queue');

let queue = new Queue();
queue.enqueue('1st');
queue.enqueue('2nd');
queue.enqueue('3rd');
queue.deqeueue();
console.log(queue);