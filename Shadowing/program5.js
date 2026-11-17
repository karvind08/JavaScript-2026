const person = {
    greet() {
        console.log("Hello");
    }
};
const student = {};
Object.setPrototypeOf(student, person);
student.greet(); 