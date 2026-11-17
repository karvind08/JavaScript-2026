const Father = {
    vehicle:function(){
        console.log("Scooter");        
    }
};
let Son = Object.create(Father);
Son.vehicle();
Father.vehicle();