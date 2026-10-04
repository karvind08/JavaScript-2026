function getUser(id) {
    if(id <= 0) {
        return null;
    }
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}
// console.log(getUser(1));
let user = getUser(1);
let profile = user.profile;
let userName = user.username;
let id1 = user.id;
console.log(id1);
console.log(userName);
console.log(profile);

