function test(a, b) {
    const show = () => {
        console.log(arguments);
    };

    show();
}

test(10, 20);