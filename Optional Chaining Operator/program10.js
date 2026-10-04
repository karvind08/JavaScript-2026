function getUser(id) {
  if (id <= 0) {
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
let user = getUser(3);
let avatar = user?.profile?.avatar;
console.log(avatar);