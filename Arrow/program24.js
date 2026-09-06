const person = {
    name:"Arvind",
    greet: function(){
        return this.name;
    }
};
let P1 = person.greet.bind(person);
console.log(P1());