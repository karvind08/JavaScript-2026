function Person(name) {
    this.name= name;
}

const obj = {};

Person.apply(obj, ["Arvind"]);

console.log(obj.name);