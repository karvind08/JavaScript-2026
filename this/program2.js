const person ={
    name: "Arvind",
    age: 44,
    greet:function(){
        console.log(this);
    }
};
person.greet();
person.name = "Yuvaan";
person.age = 5;
person.greet();