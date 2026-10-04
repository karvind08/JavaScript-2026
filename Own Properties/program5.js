const person = {
    firstName: "Arvind",
    lastName: "Kumar"
};
const employee = Object.create(person, {
    job: {
        value: {
            profile: "Developer",
            company: "IBM"
        },
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(person.firstName);      
console.log(person.lastName);       
console.log(employee.job.company);  
console.log(employee.firstName);    
console.log(employee.lastName);     
console.log(employee.hasOwnProperty('job'));
console.log(employee.hasOwnProperty('firstName'));
console.log(person.hasOwnProperty('firstName'));