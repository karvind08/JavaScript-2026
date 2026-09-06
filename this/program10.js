function show() {
    console.log(this.name);
}

const user = {
    name: "Arvind"
};

show.apply(user);