const TokenService = {
    setUser: function (user) {
        localStorage.setItem("USER_DATA", JSON.stringify(user));
    },
    getUser: function () {
        const user = localStorage.getItem("USER_DATA") || null;
        return user ? JSON.parse(user) : null;
    },
    removeUser: function () {
        localStorage.removeItem("USER_DATA");
    },
    getLocalAccessToken: function () {
        const user = this.getUser();
        return user?.authorization ? user.authorization : null;
    }
}

export default TokenService;