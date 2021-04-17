/* 
    next
    previous
    value
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);
    if (this.head.next === null) {
      this.head.next = newNode;
      newNode.previous = this.head;
    }
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }
  prepend(value) {
    //1,2,3,4
    // this.head.previous = newNode
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }
  removeAt(index) {
    if (index === 0) {
      let prevNode = this.head.next;
      prevNode.previous = null;
      this.head = prevNode;
    } else if (index >= (this.length-1)) {
      let prevNode = this.tail.previous;
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      let selectedNode = this.traverseNode(index);
      let previousNode = selectedNode.previous;
      let nextNode = selectedNode.next;
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }
    this.length--;
  }
  traverseNode(index) {
    let currentNode = this.head;
    let counter = 0;
    if (index > this.length) {
      return this.tail;
    }
    while (index !== counter) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  printList() {
    let listToArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listToArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listToArray);
  }
}
module.exports = DoublyLinkedList;
