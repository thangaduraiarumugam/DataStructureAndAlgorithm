class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  deqeueue() {
    if (!this.first) return null;
    let deletedNode = this.first;
    this.first = deletedNode.next;
    this.length--;
    if (this.length === 1) this.last = this.first;
    return deletedNode;
  }
  peek() {
    return this.first;
  }
}
module.exports = Queue;
