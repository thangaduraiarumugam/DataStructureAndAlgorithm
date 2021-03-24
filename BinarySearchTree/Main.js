const BinarySearchTree = require('./BinarySearchTree');

let bst = new BinarySearchTree();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(11);
bst.insert(5);
bst.insert(3);
bst.insert(12);
bst.insert(10);
bst.insert(13);
bst.insert(100);

/*let bst2 = new BinarySearchTree();
bst2.insert(7);
bst2.insert(4);
bst2.insert(9);
bst2.insert(1);
bst2.insert(6);
bst2.insert(8);
bst2.insert(11);
bst2.insert(5);
bst2.insert(3);
bst2.insert(12);
bst2.insert(10);
bst2.insert(13);
*/
      
//bst.delete(100);
//console.log(bst.lookup(99));
//console.log(bst);
/* 100
10    101
  99     110*/
//bst.preOrderTraversal();
//console.log('.........................')
//bst.postOrderTraversal();
//console.log('.........................')
//bst.inOrderTraversal();
//console.log(bst.height());
//console.log(bst.min());

//console.log(bst.equals(bst2.root));
//console.log(bst.equals(null));
//bst.swapRoot();
//console.log(bst.isBinarySearchTree());
//bst.nodesAtKthDistance(2);
//console.log(bst.countLeaves());
console.log(bst.maxNode());