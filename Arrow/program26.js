function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

let P1 = new Person("Arvind");
console.log(P1.name);
let P2 = new Person("Yuvaan");
console.log(P2.name);