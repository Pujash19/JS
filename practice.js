// function fetchData(callback){
//     callback("fetch data");
// }

// function showdata(result){
//     console.log("result is:", result);
// }

// fetchData(showdata);

// fetchData(function showData(result){console.log("Data after callback call is: ", result)});


// function calculator(opr){
//    console.log("value is:",opr(2,3));
// }

// function add(a,b){
//     return a+b;
// }

// function substract(a,b){
//     return a-b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

// calculator(add);


//promise

// function fetchData(){
//     return P= new Promise((resolve)=>{
//         resolve("fetch data");
//     });
// }
// let p= fetchData();
// console.log(p);
// fetchData().then(function (value){console.log("Value after promise call:", value)});
// console.log(fetchData());

// function findSum(n){
//     let ans= 0;
//     for(let i=0;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// function findsumTill100(){
//     return p=new Promise((resolve, reject)=>{
//         resolve(findSum(100));
// });
// }

// findsumTill100().then((value)=>{console.log("value is:",value);});


// const database=[
//     {
//         fname : "Puja",
//         id: 24,
//         post: ["post1", "post2", "post3"]
//     },
//     {
//         fname : "Gourav",
//         id: 25,
//         post: ["post1", "post2", "post3"]
//     }
// ]

// console.log(database[1]);

// function getUser(i, callback){
//     console.log("Getting sue data....");
//     setTimeout(()=>{callback(database[i])}, 2000);
// }

// getUser(1, (value)=>{console.log("user data:", value)});

// //same with promise

// function promiseGetUser(i){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve(database[i])}, 2000);
//     });
// }

// function fetchUserByPromise(value){
//     console.log("user data fetched by promise:", value);
// }

// promiseGetUser(1).then(fetchUserByPromise);


// //by async await

// function asyncGetUser(i){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve(database[i])}, 2000);
//     });
// }

// async function main(){
// let data= await asyncGetUser(1);
// console.log("user data fecthed by asnc",data);
// }

// main();


//next example

// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function quad(n){
//     return n*n*n*n;
// }

// function operation(opr,a,b){
//     let num1= opr(a);
//     let num2= opr(b);
//     return sum= num1+num2;
// }

// console.log("Value is:", operation(square,2,3));

//next one:

// function showAfterOneSec(){
//    return new Promise((resolve, reject)=>
//     {setTimeout(()=>{
//         resolve("Hi There!!!");
//    }, 1000)
// }); 
// }  //here promise resolve with a value.

function showAfterOneSec(){
   return new Promise((resolve, reject)=>
    {setTimeout(resolve, 10000);
}); 
} //here promise value is undefined, it just pastes the console.log
// showAfterOneSec()
// .then(()=>{console.log("Hi There");}); //for the 2nd one

showAfterOneSec()
.then((value)=>{console.log(value); return showAfterOneSec();}); //for the 2nd one
// .then((value)=>{console.log(value); return showAfterOneSec();})
// .then((value)=>{console.log(value); return showAfterOneSec();})
// .then((value)=>{console.log(value); return showAfterOneSec();})
// .then((value)=>{console.log(value)});


// async function runSequential(){
//     for(let i=0;i<5;i++){
//     let data= await showAfterOneSec();
//     console.log(data);}
// }

// runSequential();



