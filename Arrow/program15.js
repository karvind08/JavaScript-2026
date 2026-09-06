function test(a, b) {
    const show = function () {
        console.log(arguments);
    };

    show();
}
test(10, 20);