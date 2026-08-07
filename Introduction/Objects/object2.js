let person = {
    name: "Arvind",
    age: 25
 };
person.greet = function() {
        console.log("Hello, my name is " + this.name);
    }

person.greet();