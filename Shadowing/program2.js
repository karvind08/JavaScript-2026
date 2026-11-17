const Parent = {
    role:"Teacher",
};

let Child = Object.create(Parent);
Child.role = "Student";
console.log(Child.role);