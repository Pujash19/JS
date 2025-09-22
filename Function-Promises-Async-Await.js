// //Asynchronous functions example


// console.log("Hi there");

// setTimeout(()=>{
//     console.log("In set timeout");
// }, 10000);

//  const fs= require("fs");
//  fs.readFile("Numbers.js", "utf-8", function (error, data){
//    console.log(data);
// });

// let a=0;
// for(let i=0;i<10;i++){
// a= a+i;
// }

//console.log(a);

//output is:
// Hi there
// 45
// File content
// In set timeout
//both async functions are independent of each other. and dependent on synbchronous loops, 
// only if for loops finishes, even though the async functions finished, will wait until for loop finishes.
// Small file + 10s timeout → file read prints first.
// Big file + 1s timeout → timeout prints first.
// Big loop in between → both wait until loop finishes.


function learnPromise(){
return new Promise((resolve)=>{
setTimeout(resolve, 1000);
});
}

function showOutput(a, b){
  return console.log("show output", a+b);
}

let p= learnPromise();
console.log(p);
p.then(()=>showOutput(2,3));
console.log(p);


function getBadge(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve("Badge Earned")},1000);
  });
}

getBadge().then((value)=>{console.log(value)});

async function setBadge(){
let s= await getBadge();
console.log(s);
}
setBadge();

setBadge();

console.log("Kumari Puja Sharma");
console.log("let's try one more time");

