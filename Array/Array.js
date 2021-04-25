//[1, 11,  2,3,4,5]
// push,pop,insertAt,indexOf,delete,get
//items
//length

class Array {
  constructor() {
    this.items={};
    this.length=0;
  }
  push(item){
    this.items[this.length++] = item;
  }
  pop(){
    let deletedItem = this.items[this.length-1];
    delete this.items[--this.length];
    return deletedItem;
  }
  insertAt(item,index){
    for(let i =this.length;i>=index;i--){
      this.items[i] = this.items[i-1];
    }
    this.items[index]=item; 
    this.length++;  
    return this.items; 
  }
  indexOf(item){
    for(let i = 0 ;i<this.length;i++){
      if(this.items[i] === item){
        return i;
      }
    }
    return -1;
  }
  deletAt(index){
    let deletedItem = this.items[index];
    for(let i = index;i<this.length-1;i++){
      this.items[i] = this.items[i+1];
    }
    this.pop();
    
  }
  get(index){
    return this.items[index];
  }  
}
module.exports = Array;

