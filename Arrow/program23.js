"use strict"
const person = {
    name:"Arvind",
    greet: function(){
        return this.name;
    }
};

console.log(person.greet());