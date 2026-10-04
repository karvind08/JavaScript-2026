const person = {
    firstName: "Arvind",
    lastName: "Kumar"
};
const employee = Object.create(person, {
    job: {
        value: "JS Developer",
        writable: true,
        enumerable: true,
        configurable: true
    }
});    
console.log(employee.job);  
console.log(employee.firstName);    
console.log(employee.lastName);     
employee.job = "React Developer";
console.log(employee.job);  
