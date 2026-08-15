function test(){
    return 10;
}

function start(s = test()){
    console.log(s);
}

start();