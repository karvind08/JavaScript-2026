function createPerson(fname, lname) {
    return {
        fname,
        lname,
        getFullname: () => {
            return fname + " " + lname;
        }
    };
}

const p1 = createPerson("Arvind", "Kumar");
console.log(p1.getFullname());

const p2 = createPerson("Yuvaan", "Singh");
console.log(p2.getFullname());