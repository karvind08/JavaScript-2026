function fun1(){
    return (new Date());
}
function date(x = fun1()){
    console.log(x);
}

date();