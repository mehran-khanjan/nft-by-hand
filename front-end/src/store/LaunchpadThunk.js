import axios from 'axios';
import {getJWT, isUserLogin} from "../utils/localStorageActions";
import {
    buyLaunchpadActions, checkTokenContractValidityActions,
    createLaunchpadActions, createLaunchpadBlockchainActions,
    getAllLaunchpadsActions,
    getSingleLaunchpadActions, launchpadsListBlockchainActions, singleLaunchpadBlockchainActions,
    updateLaunchpadDetailedActions
} from "./ReduxStore";
import {getter, setter} from "../utils/blockchainSetter";
import NFTByHandContractABI from '../blockchain/NFTByHandContract.json';
import {ethers} from "ethers";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import {loadingSweetAlertOptions} from "../utils/helpers";
import {errorSweetAlertOptions, successSweetAlertOptions} from "../utils/helpers";

const mySweetAlert = withReactContent(Swal);

export const launchpadParticipateBlockchain = ({provider, launchpadContractAddress, participantAmount}) => {
    return async (dispatch) => {
        mySweetAlert.fire(loadingSweetAlertOptions);

        console.log('bmb amount: ', ethers.utils.parseEther(participantAmount))

        try {
            const {receipt, issuedEvents} = await setter(
                launchpadContractAddress,
                NFTByHandContractABI.abi,
                provider,
                'userDeposit',
                [
                    {value: ethers.utils.parseEther(participantAmount)}],
                'UserDepsitedSuccess',
                dispatch
            );
            const buyerAddress = issuedEvents.buyerAddress;
            const buyValue = issuedEvents.buyValue;

            console.log('buyer address is: ', buyerAddress);
            console.log('buyer address is: ', buyValue);

            const sweetAlertOptions = successSweetAlertOptions({text: 'You deposited correctly.'});
            mySweetAlert.fire(sweetAlertOptions);

        } catch (e) {
            // console.log(e);
            const sweetAlertOptions = errorSweetAlertOptions({text: 'Error'});
            mySweetAlert.fire(sweetAlertOptions);
        }
    }
}

export const getSingleLaunchpadBlockchain = ({provider, launchpadContractAddress}) => {
    return async (dispatch) => {
        try {
            const singleLaunchpadContract = await getter(
                launchpadContractAddress,
                NFTByHandContractABI.abi,
                provider,
                'getPresaleDetails',
                []
            );
            // console.log('presale data is: ', singleLaunchpadContract);

            // console.log('token contract address', singleLaunchpadContract[0].toString());
            // console.log('token price', singleLaunchpadContract[1].toString());
            // console.log('min contribution', ethers.utils.formatUnits(singleLaunchpadContract[2]));
            // console.log('max contribution', ethers.utils.formatUnits(singleLaunchpadContract[3]));
            // console.log('soft cap', ethers.utils.formatUnits(singleLaunchpadContract[4]));
            // console.log('hard cap', ethers.utils.formatUnits(singleLaunchpadContract[5]));
            // console.log('start time', singleLaunchpadContract[6].toString());
            // console.log('stop time', singleLaunchpadContract[7].toString());
            // console.log('pre sale status', singleLaunchpadContract[8].toString());

            const tokenName = await getter(
                singleLaunchpadContract[0].toString(),
                NFTByHandContractABI.abi,
                provider,
                'name',
                []
            );

            const tokenSymbol = await getter(
                singleLaunchpadContract[0].toString(),
                NFTByHandContractABI.abi,
                provider,
                'symbol',
                []
            );

            const tokenDecimals = await getter(
                singleLaunchpadContract[0].toString(),
                NFTByHandContractABI.abi,
                provider,
                'decimals',
                []
            );

            const singleLaunchpad = {
                launchpadContractAddress: launchpadContractAddress,
                tokenContractAddress: singleLaunchpadContract[0].toString(),
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                tokenDecimals: tokenDecimals,
                minContribution: ethers.utils.formatUnits(singleLaunchpadContract[2]),
                maxContribution: ethers.utils.formatUnits(singleLaunchpadContract[3]),
                tokenPrice: singleLaunchpadContract[1].toString(),
                softCap: ethers.utils.formatUnits(singleLaunchpadContract[4]),
                hardCap: ethers.utils.formatUnits(singleLaunchpadContract[5]),
                startTime: singleLaunchpadContract[6].toString(),
                stopTime: singleLaunchpadContract[7].toString(),
                presaleStatus: singleLaunchpadContract[8].toString()
            }

            dispatch(singleLaunchpadBlockchainActions.setLaunchpad(singleLaunchpad));

        } catch (e) {
            console.log(e);
        }
    }
}

export const getAllLaunchpadsBlockchain = ({provider}) => {
    return async (dispatch) => {
        try {
            const launchpadsCount = await getter(
                process.env.REACT_APP_CONTRACT_ADDRESS,
                NFTByHandContractABI.abi,
                provider,
                'getLastLaunchpad',
                []
            );

            console.log('launchpads count: ', launchpadsCount.toString());

            let launchpadsListArray = [];
            for (let i = 1; i <= parseInt(launchpadsCount.toString()); i++) {
                const launchpadContractAddress = await getter(
                    process.env.REACT_APP_CONTRACT_ADDRESS,
                    NFTByHandContractABI.abi,
                    provider,
                    'launchpads',
                    [`${i}`]
                );
                console.log(`launchpads list ${i}: `, launchpadContractAddress);

                const singleLaunchpadContract = await getter(
                    launchpadContractAddress,
                    NFTByHandContractABI.abi,
                    provider,
                    'getPresaleDetails',
                    []
                );
                // console.log('presale data is: ', singleLaunchpadContract);

                // console.log('token contract address', singleLaunchpadContract[0].toString());
                // console.log('token price', singleLaunchpadContract[1].toString());
                // console.log('min contribution', ethers.utils.formatUnits(singleLaunchpadContract[2]));
                // console.log('max contribution', ethers.utils.formatUnits(singleLaunchpadContract[3]));
                // console.log('soft cap', ethers.utils.formatUnits(singleLaunchpadContract[4]));
                // console.log('hard cap', ethers.utils.formatUnits(singleLaunchpadContract[5]));
                // console.log('start time', singleLaunchpadContract[6].toString());
                // console.log('stop time', singleLaunchpadContract[7].toString());
                // console.log('pre sale status', singleLaunchpadContract[8].toString());

                const tokenName = await getter(
                    singleLaunchpadContract[0].toString(),
                    NFTByHandContractABI.abi,
                    provider,
                    'name',
                    []
                );
                // console.log('token name is: ', tokenName);

                launchpadsListArray.push({
                    launchpadContractAddress: launchpadContractAddress,
                    tokenName: tokenName,
                    tokenPrice: singleLaunchpadContract[1].toString(),
                    softCap: ethers.utils.formatUnits(singleLaunchpadContract[4]),
                    hardCap: ethers.utils.formatUnits(singleLaunchpadContract[5]),
                    startTime: singleLaunchpadContract[6].toString(),
                    stopTime: singleLaunchpadContract[7].toString(),
                    presaleStatus: singleLaunchpadContract[8].toString()
                });
            }

            dispatch(launchpadsListBlockchainActions.setLaunchpads(launchpadsListArray));

        } catch (e) {
            console.log(e);
        }
    }
}

export const createLaunchpadBlockchain = (
    {
        provider,
        tokenContractAddress,
        networkId,
        presaleRate,
        softCap,
        hardCap,
        minBuy,
        maxBuy,
        startDate,
        stopDate
    }
) => {
    return async (dispatch) => {
        mySweetAlert.fire(loadingSweetAlertOptions);

        try {
            const {receipt, issuedEvents} = await setter(
                process.env.REACT_APP_CONTRACT_ADDRESS,
                NFTByHandContractABI.abi,
                provider,
                'create',
                /*
                address _sale_token,
                uint256 _token_rate,
                uint256 _raise_min,
                uint256 _raise_max,
                uint256 _softCap,
                uint256 _hardCap,
                bool _whitelist,
                uint256 _presale_start,
                uint256 _presale_end
                */
                // preRate is tokenCount. We should pass with decimals or without decimals?
                [
                    tokenContractAddress,
                    +presaleRate,
                    ethers.utils.parseEther(minBuy),
                    ethers.utils.parseEther(maxBuy),
                    ethers.utils.parseEther(softCap),
                    ethers.utils.parseEther(hardCap),
                    false, +startDate, +stopDate,
                    {value: ethers.utils.parseEther('0.01')}],
                'CreateEvent',
                dispatch
            );
            const preSaleContractAddress = issuedEvents.tokenAddress;
            console.log('new launchpad address is: ', preSaleContractAddress);
            // new contract address: 0xd42a6DcD2BB740F9E46d980781B8EffC69Ec076d
            // new contract address: 0x2e5A920f910F3905Db1c54Cb1d81a9993649fA55

            const sweetAlertOptions = successSweetAlertOptions({text: 'The contract creation was done.'});
            mySweetAlert.fire(sweetAlertOptions)
                .then(() => {
                    dispatch(createLaunchpadBlockchainActions.setLaunchpad(preSaleContractAddress));
                });
        } catch (e) {
            // console.log(e);
            const sweetAlertOptions = errorSweetAlertOptions({text: 'Error'});
            mySweetAlert.fire(sweetAlertOptions);
        }
    }
}

export const checkTokenValidity = ({tokenContractAddress}) => {
    mySweetAlert.fire(loadingSweetAlertOptions);

    return async (dispatch) => {
        try {
            const axiosOptions = {
                url: process.env.REACT_APP_BSC_SCAN_API_URL,
                method: 'GET',
                params: {
                    module: 'stats',
                    action: 'tokensupply',
                    contractAddress: tokenContractAddress,
                    apikey: process.env.REACT_APP_BSC_SCAN_API_KEY
                }
            }
            const result = await axios(axiosOptions);
            // console.log('the BSC api result is: ', result.data);

            if (result.data.result === '0') {
                // console.log('The token contract address is invalid');
                const sweetAlertOptions = errorSweetAlertOptions({text: 'The token contract address is invalid'});
                mySweetAlert.fire(sweetAlertOptions);
            } else {
                // console.log('The token contract address is valid');
                const sweetAlertOptions = successSweetAlertOptions({text: 'The token contract address is valid'});
                mySweetAlert.fire(sweetAlertOptions)
                    .then(() => {
                        dispatch(checkTokenContractValidityActions.setValid({
                            totalSupply: result.data.result,
                            contractAddress: tokenContractAddress
                        }));
                    });
            }

        } catch (e) {
            console.log(e);
        }
    }
}

export const buyLaunchpad = ({provider, buyerAmount, contractAddress}) => {
    return async (dispatch) => {
        try {
            // const axiosOptions = {
            //     url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}`,
            // }
            // const result = await axios(axiosOptions);
            // console.log('buy launchpad result is: ', result);
            // console.log('timestamp: ', (await provider.getBlock(25588425)).timestamp);
            // await getter(
            //     contractAddress,
            //     NFTByHandContractABI.abi,
            //     provider,
            //     'presaleStatus',
            //     []
            // )

            const {receipt, issuedEvents} = await setter(
                contractAddress,
                NFTByHandContractABI.abi,
                provider,
                'userDeposit',
                // preRate is tokenCount. We should pass with decimals or without decimals?
                [
                    {value: ethers.utils.parseEther(buyerAmount)}
                ],
                'UserDepsitedSuccess',
                dispatch
            );
            // no event found because it has no 0x log data!
            console.log('buyer address is: ', issuedEvents.buyerAddress);
            console.log('buyer value is: ', issuedEvents.buyValue)

            dispatch(buyLaunchpadActions.setBuy());
            console.log('buy token done.');

        } catch (e) {
            console.log(e);
        }
    }
}

export const createLaunchpad = ({tokenContractAddress, networkId}) => {
    return async (dispatch) => {
        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }
            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}`,
                method: 'post',
                headers: {
                    // "Authorization": `Bearer ${data.token}`
                    "Authorization": `Bearer ${getJWT()}`
                },
                data: {
                    tokenContractAddress,
                    isDeployed: '0'
                }
            }
            const result = await axios(axiosOptions);
            if (result.data.status === 'success') {
                const serverResult = result.data.data;
                console.log('create launchpad result is: ', result.data.data);
                dispatch(createLaunchpadActions.setValid({
                    networkId: serverResult.launchpad.networkId,
                    contractAddress: serverResult.launchpad.tokenContractAddress
                }));
            }


        } catch (e) {
            if (e.response.data.status === 'fail') {
                console.log(e.response.data.data);
            }

        }
    }
}

export const getSingleLaunchpad = ({launchpadContractAddress, networkId}) => {
    return async (dispatch) => {
        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }

            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/${launchpadContractAddress}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                }
            }
            const result = await axios(axiosOptions);
            console.log('the single launchpad is: ', result.data.data.launchpad);

            dispatch(getSingleLaunchpadActions.setSingleLaunchpad(result.data.data.launchpad));
        } catch (e) {
            console.log(e);
        }
    }
}

export const getAllLaunchpads = ({networkId, pageNumber}) => {
    return async (dispatch) => {
        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }

            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/?page=${pageNumber}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                }
            }
            const result = await axios(axiosOptions);
            console.log('get all result is: ', result.data);

            dispatch(getAllLaunchpadsActions.setLaunchpads(result.data.data.launchpads));
        } catch (e) {
            console.log(e);
        }
    }
}

export const updateLaunchpad = (
    {
        provider,
        tokenContractAddress,
        networkId,
        isDeployed,
        presaleRate,
        softCap,
        hardCap,
        minBuy,
        maxBuy,
        refundType,
        router,
        dexLiquidity,
        dexListingRate,
        startDate,
        stopDate,
        liquidityLockup,
        logoURL,
        websiteURL,
        facebook,
        twitter,
        instagram,
        discord,
        reddit,
        github,
        telegramGroup,
        telegramChannel,
        youtube,
        description
    }
) => {
    return async (dispatch) => {

        // await createLaunchpad({tokenContractAddress, networkId});
        await dispatch(createLaunchpad({tokenContractAddress, networkId}));

        try {
            if (!isUserLogin()) {
                console.log('Please login first!');
                // add some showing modal error
                return;
            }

            const axiosOptions = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/${tokenContractAddress}`,
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                },
                data: {
                    isDeployed,
                    presaleRate,
                    softCap,
                    hardCap,
                    minBuy,
                    maxBuy,
                    refundType,
                    router,
                    dexLiquidity,
                    dexListingRate,
                    startDate,
                    stopDate,
                    liquidityLockup,
                    logoURL,
                    websiteURL,
                    facebook,
                    twitter,
                    instagram,
                    discord,
                    reddit,
                    github,
                    telegramGroup,
                    telegramChannel,
                    youtube,
                    description
                }
            }
            const result = await axios(axiosOptions);
            console.log('update launchpad result is: ', result.data);

            // if (presaleRate) {
            dispatch(updateLaunchpadDetailedActions.setUpdate());
            // call blockchain function

            const {receipt, issuedEvents} = await setter(
                process.env.REACT_APP_CONTRACT_ADDRESS,
                NFTByHandContractABI.abi,
                provider,
                'create',
                /*
                address _sale_token,
                uint256 _token_rate,
                uint256 _raise_min,
                uint256 _raise_max,
                uint256 _softCap,
                uint256 _hardCap,
                bool _whitelist,
                uint256 _presale_start,
                uint256 _presale_end
                */
                // preRate is tokenCount. We should pass with decimals or without decimals?
                [
                    tokenContractAddress,
                    +presaleRate,
                    ethers.utils.parseEther(minBuy),
                    ethers.utils.parseEther(maxBuy),
                    ethers.utils.parseEther(softCap),
                    ethers.utils.parseEther(hardCap),
                    false, +startDate, +stopDate,
                    {value: ethers.utils.parseEther('0.01')}],
                'CreateEvent',
                dispatch
            );
            console.log('new launchpad address is: ', issuedEvents.tokenAddress)
            // new contract address: 0xd42a6DcD2BB740F9E46d980781B8EffC69Ec076d
            const preSaleContractAddress = issuedEvents.tokenAddress;

            // update contract's data
            const axiosOptions2 = {
                url: `${process.env.REACT_APP_API_URL}/launchpads/${networkId}/${tokenContractAddress}`,
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${getJWT()}`
                },
                data: {
                    contractAddress: preSaleContractAddress,
                    isDeployed: true
                }
            }
            const result2 = await axios(axiosOptions2);
            console.log('update2 launchpad contract address result is: ', result2.data);

            // } else {
            //     dispatch(updateLaunchpadDetailedActions.setMoreUpdate());
            // }
        } catch (e) {
            console.log(e);
        }
    }
}