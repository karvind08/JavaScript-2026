const add = function(a,b){
    return a+b;
}

const sub = function(a,b){
    return a-b;
}

function start(fun){
    let x=10,y=56;
    console.log(fun(x,y));

}

start(add);
start(sub);