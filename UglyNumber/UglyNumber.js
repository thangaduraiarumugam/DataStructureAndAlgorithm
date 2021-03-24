class UglyNumber{
    constructor(){
        
    }
    maxDivide(a,b){
        while(a%b===0){
            a =a/b;
        }
        return a;
    }
    isUglyNumber(a){
        a = this.maxDivide(a,2);
        a = this.maxDivide(a,3);
        a = this.maxDivide(a,5);

        if(a === 1) return true;
        else return false;
    }
    getNthUglyNumber(n){
        let counter = 1;
        let number =1;
        while(counter < n){
            number++;
            if(this.isUglyNumber(number)){
                counter++;
            }
        }
        return number;

    }

}
module.exports=UglyNumber;