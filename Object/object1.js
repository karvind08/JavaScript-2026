let person = {
    first:"Arvind",
    last:"kumar",
    'org type':'Edu'
}
person.last = "Singh";
person.age = 44;
delete person['org type'];
console.log(person);
console.log(person.first);
console.log(person['last']);
console.log("Age: "+person.age);
console.log("Org Type:"+person['org type']);
console.log(person.phone);
