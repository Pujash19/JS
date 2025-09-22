function check(){
    for(let i=30;i>0;i--){
        setTimeout(()=>console.log(i), (30-i)*1000);
    }
}
check();
//another way
function check2(){
let i=20;
let timer=setInterval(()=>{
    console.log(i);
    i--;
    if(i==0)
        clearInterval(timer);
}, 1000);
}
check2();

console.log("Day-1 learnings");
console.log("Day-1 learnings");


