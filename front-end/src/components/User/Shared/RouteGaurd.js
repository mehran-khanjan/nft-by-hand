import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import Header from '../../User/Shared/Header';
import {isUserLogin} from "../../../utils/localStorageActions";
import web3Store from "../../../store/web3Store";

const RouteGuard = () => {
    const web3 = web3Store(state => state.web3);
    const currentRoute = useLocation();

    return (
        // (isUserLogin()) ? <Header/> : <Navigate to="/connect-wallet"/>
        (web3) ? <Header/> : <Navigate to={`/connect-wallet?prevRoute=${currentRoute.pathname}`}/>
    )
};

export default RouteGuard;