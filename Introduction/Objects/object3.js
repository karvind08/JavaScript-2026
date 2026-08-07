let person = {
    name: "Arvind",
    age: 25
 };
function greet() {
        console.log("Hello, my name is " + this.name);
    }

person.greet = greet;

person.greet();