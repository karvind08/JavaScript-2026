function show(a, b) {
    console.log(this.name, a, b);
}
const obj = {
    name: "Arvind"
};
show.call(obj, 10, 20);
show.apply(obj, [10, 20]);
