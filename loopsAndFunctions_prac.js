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

//callback function

function square(val){
     return val*val;
}

function powOfThree(val){
     return val*val*val;
}

function pwoOfFour(val){
     return val*val*val*val;
}

function calculatePow(a,fnTocall){
     console.log(fnTocall);
     return fnTocall(a);
}
console.log(calculatePow(4, square));
setTimeout(()=>console.log(calculatePow(4, square)), 2000);
//anonymous function:  no name to function.

console.log(calculatePow(3, function (val){return val*val})); 
//here we just defined functioned without name, coz anysways if we define name here we won't be able to call anywhere

//async functions:

const fs= require("fs");   //filesystem module
fs.readFile("Numbers.js", "utf-8", function(err, data){  //reads the entire content in the file.
     console.log(data);
     console.log(err);
});