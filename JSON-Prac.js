const users={
    Fname: "Puja",
    age: 24,
    gender: "female",
    metadata: {
        hobby: "coding",
        color: "purple"
    }
}

console.log(users.Fname);
console.log(users["Fname"]);  //another way
console.log(users.age);
console.log(users.metadata.hobby);
console.log(users["metadata"]["hobby"]);

const user2={
    Fname: "Gourav",
    age: 24,
    gender: "Male",
    metadata: {
        hobby: "coding",
        color: "Black"
    }
}

const convert2String_User= JSON.stringify(user2); //converst object to string
console.log(convert2String_User);


const convert2Object_User= JSON.parse(convert2String_User);  //converts string to object
console.log(convert2Object_User);
console.log(convert2Object_User.metadata.color);
