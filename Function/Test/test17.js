function test(){
    return 100;
}
function display(x = test()){
    console.log(x);
}

display();