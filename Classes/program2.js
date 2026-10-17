function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}
let name1 = new Person("Arvind Kumar");
console.log(name1.getName());
