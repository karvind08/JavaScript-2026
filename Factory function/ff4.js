function createPerson(fname,lname){
    return {
        fname,
        lname,
    }
}
var personAction ={
    getFullname(){
        return this.fname+ " "+this.lname;
    }
}

const p1 = createPerson("Arvind", "Kumar");
p1.getFullname = personAction.getFullname;
console.log(p1.getFullname());
const p2 = createPerson("Yuvaan", "Singh");
p2.getFullname = personAction.getFullname;
console.log(p2.getFullname());