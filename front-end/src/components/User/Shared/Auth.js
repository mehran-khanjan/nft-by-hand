import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkNonce, web3Login, web3Signup} from "../../../store/AuthenticationThunk";
import useWeb3Store from "../../../store/web3Store";

const Auth = () => {
    const provider = useWeb3Store(state => state.web3);
    const publicAddress = useWeb3Store(state => state.publicAddress);
    const dispatch = useDispatch();
    const userNonce = useSelector(state => state.auth.userNonce);
    const isUserSignedUp = useSelector(state => state.auth.isUserSignedUp);

    useEffect(() => {
        finalCheckNonce();
    }, [publicAddress]);

    useEffect(() => {
        if (!isUserSignedUp && publicAddress) {
            console.log('UseEffect: isUserSignedUp is: ', isUserSignedUp);
            dispatch(web3Signup(publicAddress));
        }

    }, [isUserSignedUp]);

    useEffect(() => {
        if (userNonce && provider) {
            console.log('UseEffect: new user nonce is: ', userNonce);
            // get publicAddress from the API
            // get provider from the zustand
            loginDone(userNonce, provider)
                .then(result => {
                    // get jwt token
                });
        }
    }, [userNonce]);

    const loginDone = async (nonce, provider) => {
        if (publicAddress) {
            const signMessage = `Welcome to NFT by Hand!\n\nClick to sign in.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\nWallet address:\n${publicAddress.toLowerCase()}\n\nNonce:\n${nonce}`;

            const signature = await provider.getSigner().signMessage(signMessage);
            console.log('signature is: ', signature);
            const {chainId} = await provider.getNetwork();
            console.log('chain id: ', chainId);
            dispatch(web3Login({publicAddress, signature,chainId}));
            console.log('login done!');
        }
    }

    const finalCheckNonce = async () => {
        // 1- send the wallet address to server and get a unique nonce or go to signup
        if (publicAddress) {
            await dispatch(checkNonce(publicAddress));
        }

        // 2- signup
        // done with useEffect

        // 3- login: sign the message and return the signature
        // done with loginDone() function
    }
}

export default Auth;