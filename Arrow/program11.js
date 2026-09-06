const printEvenNumbers = (arr) => {
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
};

let array1 = [1, 2, 3, 4, 5, 6];
printEvenNumbers(array1);