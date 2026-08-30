function show(user){
    user = (typeof user == 'undefined')? "Hi":"Arvind";
    console.log(user);
    return `${user} is just logged in`;
}
console.log(show());
// console.log(show("Duggu"));