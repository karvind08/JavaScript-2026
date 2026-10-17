class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

let obj1 = new Person("Arvind");
let myName = obj1.getName();
console.log(myName);

