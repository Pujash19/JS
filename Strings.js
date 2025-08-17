let str= "Puja Sharma";
function stringOpr(str, target, sliceCall, trimCall){
console.log("length: "+str.length);
console.log("Index of 'Sharma': "+ str.indexOf(target));
console.log("After slice: ", sliceCall);
console.log("Substring: ", str.substr(3,5)); // a Sha
console.log("Slice: ",str.slice(3,5));  //a 
console.log("Replace: ", str.replace("Sharma", "Srivastava"));
// const words= str.split(" ");
console.log("Splits: change the string to array: ", str.split(" "));
console.log("After trim: ", trimCall("    Puja Sharma    ")); //trim the start and end space. no the middle
console.log("All uppercase: ", str.toUpperCase());
console.log("All lowercase: ", str.toLowerCase());
}


function sliceExample(str, start, end){
    return str.slice(start, end);
}

function trimExample(trimWord){
    console.log(trimWord.length); //- 15
    afterTrimWord= trimWord.trim();
    console.log(afterTrimWord.length); // -11
    return afterTrimWord;
}

stringOpr(str, "Sharma", sliceExample(str, 0, 3), trimExample); // for slice, 3 is exclusive, will output 0,1,2 pos.
//trimExample("  Puja Sharma  ");
//in slice example in a calling the function as a argument, and giving values, in trim example i passed function as argument and called it in stringOpr function
