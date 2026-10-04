const person ={
    firstName: "Arvind",
    lastName: "Kumar"
};

const employee = Object.create(person, {
    job: {
        value: 'JS Developer',
        enumerable: true
    }
});
console.log(person.firstName);
console.log(person.lastName);
console.log(employee.job);
console.log(Object.getOwnPropertyDescriptors(employee,'job'));
