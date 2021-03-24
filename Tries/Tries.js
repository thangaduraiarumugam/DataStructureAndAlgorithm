class Node{
    constructor(value){
        this.value =value;
        this.children = [];
        this.isEndOfWord=false;
    }
}
class Tries{
    constructor(value=null){
        this.root = new Node(value);
    }
    insert(word){
        let current = this.root;

        for(let ch of word.split('')){
            if(current.children[ch] == null){
                current.isEndOfWord = false;
                current.children[ch] = new Node(ch);
                current = current.children[ch];
            }            
            current.isEndOfWord = true;    
        }
    }

}
module.exports = Tries;