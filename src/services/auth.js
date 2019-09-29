const isAuthenticated = () => {

    const currentUser = sessionStorage.getItem('TOKEN_KEY');
    if(currentUser){
        return true;
    }

    return false;
}

const setAuthenticated = (token) => {
    sessionStorage.setItem('TOKEN_KEY', token)
}

const logout = () => {
    sessionStorage.removeItem('TOKEN_KEY');
}

const AuthService ={
    isAuthenticated: isAuthenticated,
    setAuthenticated: setAuthenticated,
    logout: logout
};

export default AuthService;