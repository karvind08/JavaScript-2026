function loggedIn(user){
    if(!user){
        return "Please enter the correct data";
    }
    return `${user} just logged In`;
}
console.log(loggedIn("Arvind"));
console.log(loggedIn());