function start(message){
    message = (typeof message !== 'undefined' ? message : 'Hi');
    console.log(message);
}

start("Hello");
start();