class Stack{
    constructor(){
        this.items = [];
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
}
class Queue{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.length = 0;
    }
    enqueue(value){
        this.stack1.push(value);
        this.length++;
    }
    dequeue(){
        let trasferStack1to2 = this.transferStacks(this.stack1,this.stack2);
        let deletedNode = this.stack2.pop();
        this.stack1 = this.transferStacks(this.stack2,this.stack1);
        this.length--;
        return deletedNode;
    }
    peek(){
        let trasferStack1to2 = this.transferStacks(this.stack1,this.stack2);
        let topNode = this.stack2.peek();
        this.stack1 = this.transferStacks(this.stack2,this.stack1);
        return topNode;

    }
    transferStacks(source,destination){
        while(source.peek()){
            destination.push(source.pop());
        }
        return destination;
    }
}

module.exports = Queue;