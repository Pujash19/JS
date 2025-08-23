let ans=0;
for(let i=1;i<=50;i++){
     ans= ans+i;
}
console.log(ans);

function findSum(num){
let ans=0;
for(let i=1;i<=num;i++){
     ans= ans+i;
}
return ans;
}

console.log("Sum is:",findSum(50)); //two different arguments
console.log("Sum is: "+ findSum(50)); //logs one single string
