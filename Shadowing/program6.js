const Father = {
    vehicle:function(){
        console.log("Scooter");        
    }
};
let Son = Object.create(Father);
Son.vehicle = function(){
    console.log("Bike");
};

Son.vehicle();
Father.vehicle();