function requiredargs(){
    throw new Error("The argument is required");
}

function start(x=requiredargs(),y=requiredargs()){
    return x+y;
}

let res = start(10,20);
console.log(res);
// start(10);