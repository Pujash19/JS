console.log("Hello World");
var a=2;
var a=3;
console.log(a);
let b=1;
b=5;
console.log(b);
const c=2;
//c=1; // value won't change
console.log(c);

let Fname= "Puja";
let age=23;
let isInLove= false;
console.log("My name is "+Fname+" and age is "+age);
if(isInLove==true){
    console.log(Fname+" is in Love");
}
else{
    console.log(Fname+" is not in Love");
}
let answer=0;
for(let i=0;i<=100;i++){
    answer=answer+i;
}
console.log(answer);

const allUsers=[{
    Fname: "Puja",
    gender: "Female",
    metaData: {
        age: 18,
        love: "yes"
    }
},{
    Fname: "Gourav",
    gender: "Male",
    metaData: {
        age: 20,
        love: "yes"
    }
}]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["metaData"]["age"]==20){
        console.log(allUsers[i].Fname);
    }
}


 findSum = (a,b, fnToCall)=>{
    let sum =a+b;
    fnToCall(sum);
}

//callback basic example

function displayRes(data){
    console.log("The sum is "+ data);
}

function displayPassiveRes(data){
    console.log("sum's value is: "+data);
}

const ans= findSum(2,3,displayRes);

//simple calculator

 calculatorOperation =(a,b, opr)=>{
const res= opr(a,b);
return res;
}

 function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b!=0)
    return a/b;
}
setTimeout(()=>console.log(calculatorOperation(8,4, sum)), 2000);

 function greet(){
     console.log("Hi");
 }
 setTimeout(greet, 3000);

