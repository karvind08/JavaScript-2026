function createMachine(name, status) {
    return {
        name: name,
        status: status
    };
}
console.log(createMachine("Computer","Under Trail"));