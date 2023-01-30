import axios from 'axios';
import {authActions} from "./ReduxStore";

export const checkNonce = (publicAddress) => {

    return async (dispatch) => {
        try {
            const checkNonceResult = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API_URL}/get-nonce`,
                data: {publicAddress}
            });
            const userNonce = checkNonceResult.data.data.nonce;
            console.log('Thunk: use nonce is: ', userNonce);

            if (userNonce) {
                dispatch(authActions.setNonce(userNonce));
            }

        } catch (e) {
            console.log(e);
            dispatch(authActions.setUserSignedUp());

        }
    }

}

export const web3Signup = (publicAddress) => {
    return async (dispatch) => {
        try {
            const signupResult = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API_URL}/signup`,
                data: {publicAddress}
            });

            const userNonce = signupResult.data.data.nonce;

            if (userNonce) {
                dispatch(authActions.setNonce(userNonce));
            }

        } catch (e) {
            console.log(e);
        }
    }
}

export const web3Login = ({publicAddress, signature,chainId}) => {
    return async (dispatch) => {
        try {
            const loginResult = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API_URL}/login`,
                data: {publicAddress, signature, role: 'admin'}
            });

            const jwt = loginResult.data.data.token;
            const expiresIn = loginResult.data.data.expiresIn;

            localStorage.setItem("token", jwt);
            localStorage.setItem("expiresIn", expiresIn);
            localStorage.setItem("publicAddress", publicAddress);
            localStorage.setItem("networkId", chainId);

            dispatch(authActions.login());

        } catch (e) {
            console.log(e);
        }
    }
}