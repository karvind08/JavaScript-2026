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
let user = getUser(4);
let profile = (user !==null || user!==undefined)? user.profile : undefined;
console.log(profile);
