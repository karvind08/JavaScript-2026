function fun1(){
    // return (new Date()).toLocaleDateString("en-US");
    // return (new Date()).toLocaleDateString("en-IN");
    // return (new Date());
    return (new Date()).toLocaleDateString();
}
function date(x = fun1()){
    console.log(x);
}

date();