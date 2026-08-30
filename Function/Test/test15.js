function loggedin(user){
    if(user==undefined){
        return `Please enter correct data`;
    }
    return `${user} just sign In` ;
}

console.log(loggedin());
console.log(loggedin("Arvind"));