let employee = {
    id: 1001,
    myName: {
        firstName: 'Arvind',
        lastName: 'Kumar'
    }
};

let {myName: {firstName,lastName},myName} = employee;

console.log(firstName); 
console.log(lastName); 
console.log(myName);