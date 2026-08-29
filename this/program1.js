const person ={
    name: "Arvind",
    age: 44,
    greet:function(){
        console.log(`My name is ${person.name} and age ${person.age}`);
    }
};

person.greet();
person.name = "Yuvaan";
person.age = 5;
person.greet();