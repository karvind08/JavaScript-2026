function Person(name){
    if(!new.target){
        return new Person(name);
    }
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

let P1 = Person("Arvind");
console.log(P1.getName());