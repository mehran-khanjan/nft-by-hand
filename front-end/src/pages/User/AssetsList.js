import React, {useEffect} from 'react';
import AssetsListComp from "../../components/User/AssetsList/AssetsListComp";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {getAllLaunchpadsBlockchain} from "../../store/LaunchpadThunk";
import web3Store from "../../store/web3Store";

const AssetsList = () => {
    const dispatch = useDispatch();
    const launchpads = useSelector(state => state.launchpadsListBlockchain.launchpadsList);
    const provider = web3Store(state => state.web3);

    // useEffect(() => {
    //     dispatch(getAllLaunchpadsBlockchain({provider}))
    // }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Explore Handicrafts | NFT by Hand</title>
            </Helmet>

            <AssetsListComp launchpadsArray={launchpads}/>

        </React.Fragment>
    )
}

export default AssetsList;