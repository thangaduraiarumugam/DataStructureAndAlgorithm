class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * 100
 * / \
 * 10 101
 * /\
 * 2 11
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    let currentNode = this.root;
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    while (true) {
      let leftChild = currentNode.left;
      let rightChild = currentNode.right;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  /**
   * Preorder - root,left,right
   * InOrder - left,root,right
   * Post Order - left,right,root
   */
  preOrderTraversal(node = this.root) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
  postOrderTraversal(node = this.root) {
    if (node === null) {
      return;
    }
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
    console.log(node.value);
  }
  inOrderTraversal(node = this.root) {
    if (node === null) {
      return;
    }
    this.preOrderTraversal(node.left);
    console.log(node.value);
    this.preOrderTraversal(node.right);
  }
  height(node = this.root) {
    if (node === null || (node.left === null && node.right === null)) {
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  min(node = this.root) {
    if (node && node.left === null && node.right === null) return node.value;
    let leftChild = this.min(node.left);
    let rightChild = this.min(node.right);

    return Math.min(Math.min(leftChild, rightChild), node.value);
  }
  lookup(value) {
    let currentNode = this.root;
    if (this.root.value === value) return true;

    while (currentNode !== null) {
      let left = currentNode.left;
      let right = currentNode.right;

      if (value < currentNode.value) {
        currentNode = left;
      } else if (value > currentNode.value) {
        currentNode = right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  //equals(other) {
  // return this.equalsPrivate(other.root, this.root);
  // }
  equals(first, second = this.root) {
    if (first === null && second === null) {
      return true;
    }

    if (second !== null && first !== null) {
      return (
        first.value === second.value &&
        this.equals(first.left, second.left) &&
        this.equals(first.right, second.right)
      );
    }

    return false;
  }
  swapRoot() {
    let tempRight = this.root.right;
    this.root.right = this.root.left;
    this.root.left = tempRight;
  }
  isBinarySearchTree(
    root = this.root,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE
  ) {
    if (root === null) {
      return true;
    }

    if (root.value < min || root.value > max) {
      return false;
    }
    return (
      this.isBinarySearchTree(root.left, min, root.value) &&
      this.isBinarySearchTree(root.right, root.value, max)
    );
  }
  nodesAtKthDistance(k, root = this.root) {
    if (root === null) {
      return;
    }
    if (k === 0) {
      console.log(root.value);
      return;
    }

    this.nodesAtKthDistance(k - 1, root.left);
    this.nodesAtKthDistance(k - 1, root.right);
  }

  countLeaves(root = this.root, counter = 0) {
    if (root.left === null || root.right === null) {
      counter++;
      return counter;
    }
    counter = this.countLeaves(root.left, counter);
    counter = this.countLeaves(root.right, counter);
    return counter;
  }
  maxNode() {
    let currentNode = this.root;
    let previousNode = null;
    while(true){
      if(currentNode===null){
        return previousNode.value;
      }
      previousNode = currentNode;
      currentNode = currentNode.right;
    }
  }
}
module.exports = BinarySearchTree;
