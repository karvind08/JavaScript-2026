let person = {
  firstName: 'Arvind',
  lastName: 'Kharwal',
  currentAge: 44
};
let { firstName, middleName = '', lastName, currentAge: age = 18 } = person;
console.log(firstName);
console.log(middleName); 
console.log(lastName);
console.log(age);