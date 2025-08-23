class Animals{
    constructor(name, legCount, speaks){
        this.name= name;
        this.legCount= legCount;
        this.speaks= speaks;

    }
     speak(){
console.log("Hi There "+ this.speaks);
}
}
 


let cat= new Animals("cat", 4,"meow meow");
console.log(cat.speaks);
console.log("a");
cat.speak();