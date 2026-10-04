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
for(let k in employee){
    console.log(k);    
}