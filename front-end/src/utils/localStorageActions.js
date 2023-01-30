const getData = () => {
    const token = localStorage.getItem("token");
    const expiresIn = localStorage.getItem("expiresIn");
    const publicAddress = localStorage.getItem("publicAddress")
    return {
        token,
        expiresIn,
        publicAddress
    }
}

export const getJWT = () => {
    const {token, expiresIn, publicAddress} = getData();
    return token;
}

export const isUserLogin = () => {
    const {token, expiresIn, publicAddress} = getData();
    return expiresIn >= Date.now() && publicAddress === publicAddress;
}

export const userLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("publicAddress");
}