function loggedinuser(username){
    if(username===undefined){
        return 'Please enter correct values';
    }
        return `${username} just signin`;
    
}

console.log(loggedinuser("Arvind"));
console.log(loggedinuser());