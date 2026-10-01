// Shared methods
const personAction = {
    getFullname() {
        return this.fname + " " + this.lname;
    }
};

// Factory function
function createPerson(fname, lname) {
    const person = Object.create(personAction);

    person.fname = fname;
    person.lname = lname;

    return person;
}

// Create objects
const p1 = createPerson("Arvind", "Kumar");
console.log(p1.getFullname()); // Arvind Kumar

const p2 = createPerson("Yuvaan", "Singh");
console.log(p2.getFullname()); // Yuvaan Singh