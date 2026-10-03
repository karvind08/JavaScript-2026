let person = {
  firstName: 'Arvind',
  lastName: 'Kharwal',
  currentAge: 44
};
let { firstName, middleName = '', lastName,  currentAge} = person;
console.log(firstName);
console.log(middleName); 
console.log(lastName);
console.log(currentAge);