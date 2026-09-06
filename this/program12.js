const person1 = {
    firstName: "Arvind",
    getName: function() {
        return this.firstName;
    }
};

const person2 = {
    firstName: "Yuvaan"
};

console.log(person1.getName.apply(person2));
console.log(person1.getName.apply(person1));
