const response = {
    status: 200,
    data: {
        name: "John",
        email: "john@example.com"
    }
};

const { status, data } = response;

console.log(status);
console.log(data);
console.log(data.name);
console.log(data.email);

