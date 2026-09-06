const person = {
    name: "Arvind",
    greet: function(){
        setTimeout(function(){
            console.log(this.name);
        },3000);
    }
};

person.greet();