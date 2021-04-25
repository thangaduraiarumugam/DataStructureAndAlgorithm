let howManyWays = (n)=>{
    let dp =[];
    //if the maximum step, then you can dp[2] = 2
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i=2;i<n;i++){
        //if maximum step is n, then you have to some it n-1 previous steps
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
}
//if the max step count is 3
const stepPerms =(n)=>{
    let dp=[];
    dp[0]=1;
    dp[1]=1;
    dp[2]=2;
    
    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
    } 
    return dp[n];
 };
 
console.log(howManyWays(5));