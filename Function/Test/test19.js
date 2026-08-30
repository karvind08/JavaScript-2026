function requiredarg(){
    throw new Error("Arguments are required");
}
function display(x = requiredarg(),y = requiredarg()){
    return x+y;
}

try{
    console.log(display(10,20));
    console.log(display());
}catch(err){
    console.log(err.message);
}