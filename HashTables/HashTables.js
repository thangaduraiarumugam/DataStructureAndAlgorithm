class HashTables{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash=0;

        for(let i=0;i<key.length;i++){
            hash = (hash+key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;

    }
    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];   
        }
        this.data[address].push([key,value]);
    }
    get(key){
        let address = this._hash(key);
        const currentBucket =  this.data[address];
        for(let currentData of currentBucket){
            if(key === currentData[0]){
                return currentData[1];
            }
        }
        return -1;
    }
}
module.exports = HashTables;