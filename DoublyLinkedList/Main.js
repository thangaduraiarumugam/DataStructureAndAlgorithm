const DoublyLinkedList = require('./DoublyLinkedList');

let ddl = new DoublyLinkedList(10);
/*ddl.append(1)
ddl.append(2)
ddl.append(3)
ddl.append(4)
ddl.append(5)*/
ddl.prepend(1);
ddl.prepend(2);
ddl.prepend(3);
ddl.prepend(4);
ddl.prepend(5);
ddl.removeAt(3);
ddl.removeAt(3);

console.log(ddl);
ddl.printList();