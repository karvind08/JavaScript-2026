function getPerson(){
    return {
        firstName: "Arvind",
        lastName: "Kumar"
    };
}

let { firstName, lastName } = getPerson();
console.log(firstName, lastName);
