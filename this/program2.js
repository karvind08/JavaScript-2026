const person ={
    name: "Arvind",
    age: 44,
    greet:function(){
        console.log(this);
    }
};

person.greet();