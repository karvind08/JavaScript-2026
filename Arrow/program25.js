function Person(name){
    this.name = name;
}
Person.getName = function(){
    return this.name;
}

let P1 = new Person("Arvind");
console.log(P1.name);
console.log(Person.getName());