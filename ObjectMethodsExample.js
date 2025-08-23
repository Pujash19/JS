function objectmethods(obj){
console.log("object display", obj);

let keys= Object.keys(obj); //if you will call obj.metadata, it will give hobby and color, because to obj it is just value, not key
console.log("After Object.keys()", keys); //returns array of all keys 


let values= Object.values(obj);
console.log("After Object.values()", values); //returns array of all values 

let entries= Object.entries(obj);
console.log("After Object.entries()", entries);  //return array of all key-value pairs

let hasProp= obj.hasOwnProperty("name"); //check if key value is there. return true/false
console.log("After obj.hasOwnProperty ", hasProp); 

let newObj= Object.assign({}, obj, {newProperty: "NewProp"}); //add new property(key-value pair)
console.log("After obj.assign ", newObj); 
}
const user={
    name: "Puja",
    age:23,
    gender: "female",
    metadata:{
        color: "purple",
        hobby: "coding"
    }
}

objectmethods(user);