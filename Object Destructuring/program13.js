let employee = {
    id: 1001,
    name: {
        firstName: 'Arvind',
        lastName: 'Kumar'
    }
};

let { id,name: {firstName,lastName}} = employee;
console.log(id);
console.log(firstName); 
console.log(lastName); 