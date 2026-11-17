const Parent = {
    role:"Teacher",
};

const Child = {
    // role:"Student",
};
Object.setPrototypeOf(Child,Parent);
console.log(Child.role);
console.log(Parent.role);