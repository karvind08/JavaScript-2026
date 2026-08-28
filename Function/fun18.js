function loggedinuser(username){
    if(!username){
        return 'Please enter correct values';
    }
    else{
        return `${username} just signin`;
    }
        
    
}

console.log(loggedinuser("Arvind"));
console.log(loggedinuser());