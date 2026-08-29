const person ={
    name: "Arvind",
    age: 44,
    greet:function(){
        console.log(`My name is ${person.name} and age ${person.age}`);
        console.log(this);
    }
};
console.log(this);
person.greet();