function display(x,y=1,z=2){
    console.log(arguments.length);
    return x+y+z;
}
console.log(display());
console.log(display(10));
console.log(display(10,20));
console.log(display(10,20,30));