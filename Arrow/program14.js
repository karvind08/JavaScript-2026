const person = {
    name:"Arvind",
    greet: function(){
        setTimeout(()=>{
            console.log(this.name);
        })
    }
};
person.greet();