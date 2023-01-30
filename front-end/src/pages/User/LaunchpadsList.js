import React, {useEffect} from 'react';
import Launchpads from "../../components/User/LaunchpadsList/Launchpads";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {getAllLaunchpadsBlockchain} from "../../store/LaunchpadThunk";
import web3Store from "../../store/web3Store";

const LaunchpadsList = () => {
    const dispatch = useDispatch();
    const launchpads = useSelector(state => state.launchpadsListBlockchain.launchpadsList);
    const provider = web3Store(state => state.web3);

    useEffect(() => {
        dispatch(getAllLaunchpadsBlockchain({provider}))
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Launchpads List | NFT by Hand</title>
            </Helmet>
            <Launchpads launchpadsArray={launchpads}/>
        </React.Fragment>
    )
}

export default LaunchpadsList;