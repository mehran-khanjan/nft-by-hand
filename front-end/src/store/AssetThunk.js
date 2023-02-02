import {getter, setter} from "../utils/blockchainSetter";
import NFTByHandContractABI from "../blockchain/NFTByHandContract.json";
import {ethers} from "ethers";
import {fetchProfileAssetBlockchainActions} from "./ReduxStore";
import axios from "axios";
import {errorSweetAlertOptions, loadingSweetAlertOptions, successSweetAlertOptions} from "../utils/helpers";
import NFTByHandContract from "../blockchain/NFTByHandContract.json";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const mySweetAlert = withReactContent(Swal);

export const buyAssetBlockchain = ({provider, tokenId, price}) => {
    return async (dispatch) => {
        mySweetAlert.fire(loadingSweetAlertOptions);

        //console.log('token Id is: ', tokenId);
        //console.log('price is: ', price);

        try {
            const {receipt, issuedEvents} = await setter(
                process.env.REACT_APP_CONTRACT_ADDRESS,
                NFTByHandContract.abi,
                provider,
                'createMarketSale',
                [tokenId, {value: ethers.utils.parseEther(price)}],
                'unknown'
            );

            const sweetAlertOptions = successSweetAlertOptions({
                text: 'You bought this physical NFT. Check your wallet for the NFT. Please contact us to receive your physical asset.'
            });
            mySweetAlert.fire(sweetAlertOptions);

        } catch (e) {
            // console.log(e);
            const sweetAlertOptions = errorSweetAlertOptions({text: 'Error! Something went wrong.'});
            mySweetAlert.fire(sweetAlertOptions);
        }
    }
}

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