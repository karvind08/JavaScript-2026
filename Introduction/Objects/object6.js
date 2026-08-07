let person ={
    firstName: "Arvind",
    lastName: "Kumar",
    greet: function(){
        console.log("Hello");
    },
    getFullName(){
        return this.firstName+" "+this.lastName;
    }
};

person.greet();
console.log(person.getFullName())
