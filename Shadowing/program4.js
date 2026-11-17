const person = {
    greet() {
        console.log("Hello");
    }
};
const student = Object.create(person);
student.greet();
console.log(Object.getPrototypeOf(student) === person);
