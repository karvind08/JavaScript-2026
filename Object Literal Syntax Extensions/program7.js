let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    }
};

server.restart();