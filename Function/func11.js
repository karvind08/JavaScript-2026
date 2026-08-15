let taxRate = () => 0.1;
function getPrice( price, tax = price * taxRate() ) {
    return price + tax;
}

let res = getPrice(100);
console.log(res); 