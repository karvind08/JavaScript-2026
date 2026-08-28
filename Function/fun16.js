function loggedinuser(username){
    if(username===undefined){
        console.log('Please enter correct values');
    }
    else{
        return `${username} just signin`;
    }
    
}

console.log(loggedinuser());