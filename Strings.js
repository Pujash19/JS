let str= "Puja Sharma";
function stringOpr(str, target, fnToCall){
console.log("length: "+str.length);
console.log("Index of 'Sharma': "+ str.indexOf(target));
console.log("After slice: ", fnToCall);
}

function sliceExample(str, start, end){
    return str.slice(start, end);
}

stringOpr(str, "Sharma", sliceExample(str, 0, 3)); // 3 is exclusive, will output 0,1,2 pos.

