const User = {
    username: "Arvind",
    platform: "Google"
};

function handleObject(Obj){
    console.log(Obj.username);
    console.log(Obj.platform);
    console.log(`The username ${Obj.username} and platform used ${Obj.platform}`);
}

handleObject(User);