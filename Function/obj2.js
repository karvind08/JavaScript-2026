function handleObject(Obj){
    console.log(Obj.username);
    console.log(Obj.platform);
    console.log(`The username ${Obj.username} and platform used ${Obj.platform}`);
}

handleObject({
    username: "Arvind",
    platform: "Windows"
});