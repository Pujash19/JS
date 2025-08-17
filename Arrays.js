const initialArray= [1,2,3];
for(i=0;i<initialArray.length;i++){
    console.log(initialArray[i]);
}

function insertAtLast(arr){
     arr.push(2);
     return arr;
}

function removeAtLast(arr){
     arr.pop(); //no need to give number, beacuse anyways t will remove the last irrespective of value given.
     return arr;
}

function insertAtFirst(arr){
    arr.unshift(5);
    return arr;
}

function removeAtFirst(arr){
    arr.shift(); //no need to give number, beacuse anyways t will remove the firt irrespective of value given.
    return arr;
}
let secondArray=[4,5,6];
console.log("Insert the element in the last array: ", insertAtLast(initialArray));
console.log("Delete the element in the last array: ", removeAtLast(initialArray));
console.log("Insert the element in the start array: ", insertAtFirst(initialArray));
console.log("Delete the element in the start array: ", removeAtFirst(initialArray));
console.log("After concat: ", initialArray.concat(secondArray)); //psuh second argument is number, concat second argument is array 

