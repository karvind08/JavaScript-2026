const animal = {
    sound() {
        console.log("Some sound");
    }
};
const dog = Object.create(animal);
dog.sound();
dog.sound = function() {
    console.log("Bark");
};
dog.sound();    
animal.sound(); 