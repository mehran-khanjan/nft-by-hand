import {getter} from "../utils/blockchainSetter";
import NFTByHandContractABI from "../blockchain/NFTByHandContract.json";
import {ethers} from "ethers";
import {fetchProfileAssetBlockchainActions} from "./ReduxStore";
import axios from "axios";

export const getProfileAssetBlockchain = ({provider, method}) => {
    return async (dispatch) => {
        try {
            const profileAssets = await getter(
                process.env.REACT_APP_CONTRACT_ADDRESS,
                NFTByHandContractABI.abi,
                provider,
                method,
                []
            );

            // console.log('profile assets: ', profileAssets);

            // const assetCount = profileAssets.length;
            // if (assetCount > 0) {
            //     let fullAssetArray = [];
            //     for (let i = 0; i < parseInt(assetCount.toString()); i++) {
            //
            //         console.log('asset: ', profileAssets[0]);
            //
            //         try {
            //             const axiosOptions = {
            //                 url: profileAssets[i][1],
            //                 method: 'GET',
            //                 // params: {
            //                 //     module: 'stats',
            //                 //     action: 'tokensupply',
            //                 //     contractAddress: tokenContractAddress,
            //                 //     apikey: process.env.REACT_APP_BSC_SCAN_API_KEY
            //                 // }
            //             }
            //             const result = await axios(axiosOptions);
            //             console.log('axios result is: ', result.data);
            //         } catch (e) {
            //             console.log(e);
            //         }
            //
            //         fullAssetArray.push({});
            //     }
            // } else {
                dispatch(fetchProfileAssetBlockchainActions.setProfileAsset(profileAssets));
            // }


        } catch (e) {
            console.log(e);
        }
    }
}