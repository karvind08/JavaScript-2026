const person = {
    name: "arvind",
    age:40
};
const teacher = {
    name:"Master"
};
console.log(Object.getPrototypeOf(person));
console.log(person.__proto__);
Object.setPrototypeOf(teacher,person);
console.log(Object.getPrototypeOf(person));
console.log(person.__proto__);