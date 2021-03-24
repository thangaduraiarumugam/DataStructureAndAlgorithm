class Heap{
    constructor(){
        this.items=[];
        this.size = 0;
    }
    insert(value){
        this.items.push(value);
        this.size++;
        this.bubbleUp();
    }
    remove(){
        let deletedItem = this.items[0];
        this.items[0] = this.items[this.size-1];
        this.items.pop();
        this.size--;
        this.bubbleDown()
        return deletedItem;
    }
    parent(index){
        return Math.floor((index-1)/2);
    }
    bubbleDown(){
        let index= 0;
        while(index<this.size){
            let leftIndex = (2*index +1);
            let rightIndex = (2*index +2);
            let leftNode = this.items[leftIndex];
            let rightNode = this.items[rightIndex];
            let parentNode = this.items[index];
            if(leftNode >rightNode && leftNode>parentNode){
                this.swap(leftIndex,index);
            }else if(rightNode>parentNode){
                this.swap(rightIndex,index);
            }
            index++;
        }
    }
    bubbleUp(){
        let index = this.size-1;
        while(index > 0 && this.items[index] > this.items[this.parent(index)]){
            this.swap(index,this.parent(index));
            index=this.parent(index);
        }
    }
    swap(first, second){
        let temp = this.items[second];
        this.items[second] = this.items[first];
        this.items[first] = temp;
    }
}
module.exports = Heap;