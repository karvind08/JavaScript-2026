const Parent = {
    role:"Teacher",
};
let Child = Object.create(Parent);
console.log(Child);
Child.role = "Student";
console.log(Child.role);
console.log(Parent.role);