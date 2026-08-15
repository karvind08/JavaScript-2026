function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

let r1 = add(10); // 1
console.log(r1);
let r2=add(10, 20); // 2
console.log(r2);
let r3 = add(10, 20, 30); // 3
console.log(r3);