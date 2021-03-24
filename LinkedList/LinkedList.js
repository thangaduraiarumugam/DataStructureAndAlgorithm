/*
1 -> 2 ->3 ->4

head : value
        next:{}

tail: value
      next:null
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const currentItem = new Node(value);
    this.tail.next = currentItem;
    this.tail = currentItem;
    this.length++;
    return this;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    let tempList = this.head;
    if (index >= this.length) {
      return this.append(value);
    } else if (index == 0) {
      return this.prepend(value);
    }
    let newNode = new Node(value);
    let previousNode = this.traverseNode(index - 1);
    let holdingPointer = previousNode.next;
    newNode.next = holdingPointer;
    previousNode.next = newNode;
    this.length++;
    return this;
  }
  traverseNode(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else if (index >= this.length) {
      let currentNode = this.traverseNode(this.length - 1);
      currentNode.next = null;
      this.tail = currentNode;
    } else {
      //1,2,3,4
      let leaderNode = this.traverseNode(index - 1);
      let unwantedNode = leaderNode.next;
      leaderNode.next = unwantedNode.next;
    }
    this.length--;
  }
  reverse(){
    let firstNode = this.head;
    let secondNode = this.head.next;
    this.tail = this.head;
    //1-->2|--->3-->4

    while(secondNode){
      let thirdNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = thirdNode;
    }
    this.head.next=null;
    this.head = firstNode;

  }
  printList() {
    let valueList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      valueList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(valueList);
  }
}
module.exports = LinkedList;
