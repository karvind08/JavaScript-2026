const res = (a,b)=>{
    if(b==0){
        return "Please enter positive number";
    }
    else{
        return a/b;
    }
}
console.log(res(20,10));
console.log(res(10,0));