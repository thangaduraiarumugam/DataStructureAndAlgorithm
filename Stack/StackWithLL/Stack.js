class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * Plate 3
 * Plate 2
 * Plate 1
 */
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  pop() {
    //remove top
    this.top = this.top.next;
    if (!this.top) {
      this.bottom = this.top = null;
      this.length = 0;
      return this;
    }
    if (!this.top.next) this.bottom = this.top;
    this.length--;
    return this;
  }
  push(value) {
    //push to top
    let newStackData = new Node(value);
    newStackData.next = this.top;
    this.top = newStackData;
    if (!this.bottom) this.bottom = newStackData;
    this.length++;
    return this;
  }
  peek() {
    //View top
    return this.top;
  }
}
module.exports = Stack;
