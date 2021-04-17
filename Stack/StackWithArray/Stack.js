class Stack{
    constructor(){
        this.items = [];
        
    }
    push(value){
        this.items.push(value);
        
    }
    pop(){
        //1,2,3,4,5
        if(this.items.length<=0) return null;
        
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
}
module.exports = Stack;