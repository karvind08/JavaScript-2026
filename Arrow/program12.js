const printEvenNumbers = (arr) => {
    for (let i=0;i<arr.length;i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
};

let array1 = [1, 2, 3, 4, 5, 6];
printEvenNumbers(array1);