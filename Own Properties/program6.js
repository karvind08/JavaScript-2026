const person = {
    firstName: "Arvind",
    lastName: "Kumar"
};
const employee = Object.create(person, {
    job: {
        value: {
            profile: "JS Developer"
        },
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(person.firstName);      
console.log(person.lastName);       
console.log(employee.job.profile);  
console.log(employee.firstName);    
console.log(employee.lastName);     