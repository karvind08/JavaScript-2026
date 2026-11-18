let employee = {
    id: 1001,
    fullName: {
        firstName: 'Arvind',
        lastName: 'Kumar'
    }
};

let { id,fullName: {firstName,lastName}} = employee;
console.log(id);
console.log(firstName); 
console.log(lastName); 