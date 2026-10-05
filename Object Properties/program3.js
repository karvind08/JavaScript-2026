'use strict';
let person = {};
console.log(person);

Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});
console.log(person.ssn);
delete person.ssn;
console.log(person.ssn);