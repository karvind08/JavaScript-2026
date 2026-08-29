function outer(){
    let username = "Arvind";
    function inner(){
        let platform = "windows";
        console.log(username);
        console.log(platform);
    }
    // console.log(platform);
    inner();
}
outer();