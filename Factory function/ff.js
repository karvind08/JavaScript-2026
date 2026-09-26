function createPerson(fname,lname){
    const obj = {
    fname:fname,
    lname:lname,
    getFullname(){
        return fname+" "+lname;
    }
}
return obj;
}

const p1 = createPerson("Arvind","Kumar");
console.log(p1.getFullname());
