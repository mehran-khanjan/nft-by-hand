import {Interface} from "ethers/lib/utils";
import loadingImage from "../assets/img/loading.svg";
import fingerImage01 from '../assets/img/products/set01/01-finger.jpg';


export function formatAddress(value, length = 4) {
    return `${value.substring(0, length + 2)}...${value.substring(value.length - length)}`
}

export const parseLogs = (receipt, eventName, abi) => {

    let iFace = new Interface(abi);

    for (let log of receipt.logs) {
        const data = log.data;
        const topics = log.topics;

        console.log('log data: ', log.data);
        console.log('log topics: ', log.topics);

        // because of this post, I refine the logs array
        // and just check logs have data '0x'
        // https://github.com/ethers-io/ethers.js/discussions/3220
        if (log.data === '0x') {
            let issuedEvent = iFace.parseLog({topics, data});
            console.log('final event: ', issuedEvent);

            if (issuedEvent.name === eventName) {
                const eventNames = issuedEvent.eventFragment.inputs;

                let finalObject = {};

                for (const key in eventNames) {
                    finalObject[eventNames[key].name] = issuedEvent.args[key];
                }

                return finalObject;
            }
        }
    }

}

export function trimTextPrice(txt) {
    const begin = txt.toString().substring(0, 10);
    return `${begin}`;
}

export const loadingSweetAlertOptions = {
    iconHtml: `<img src="${loadingImage}" alt="loading spinner"/>`,
    iconColor: 'white',
    title: 'Loading...',
    text: 'Please wait...',
    background: '#1d263b',
    color: 'white',
    showConfirmButton: false,
    allowOutsideClick: false
}

export const errorSweetAlertOptions = ({text}) => {
    return {
        icon: 'error',
        title: 'Error',
        text: text,
        color: 'white',
        background: '#1d263b',
        allowOutsideClick: false
    }
}

export const successSweetAlertOptions = ({text}) => {
    return {
        icon: 'success',
        title: 'Success',
        text: text,
        color: 'white',
        background: '#1d263b',
        allowOutsideClick: false
    }
}

export const presaleStatus = (currentStatus) => {
    switch (currentStatus) {
        case "1":
            return 'Active';
        case "2":
            return 'Success';
        case "3":
            return 'Failure';
        case "4":
            return 'Canceled';
        default:
            return 'Not Determined'
    }
}

const fingerProduct01 = {
    fingerImage: fingerImage01,
    title: 'Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '1',
    description: 'The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '5 BNB',
    price: '5',
    chain: 'Binance Chain',
    chainSymbol: 'bnb',
    material: 'Wood',
    status: 'In Stock',
};

export const featuredItemsArray = () => {
    return [fingerProduct01]
}

export const exploreListItemsArray = () => {
    return [fingerProduct01]
}

export const singlePageItemsArray = () => {
    return [
        {
            fingerImage: '',
            title: 'Backgammon & Chess Set | Superior Miniature Khatam Marquetry',
            contractAddress: fingerProduct01.contractAddress,
            tokenId: fingerProduct01.tokenId,
            description: fingerProduct01.description,
            price: fingerProduct01.price,
            chain: fingerProduct01.chain,
            chainSymbol: fingerProduct01.chainSymbol,
            status: fingerProduct01.status,
        },
    ]
}