"use strict"
function show(){
    console.log(this===global);
}
show()