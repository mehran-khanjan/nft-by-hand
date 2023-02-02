import {Interface} from "ethers/lib/utils";
import loadingImage from "../assets/img/loading.svg";

import fingerImage01 from '../assets/img/products/set01/01-finger.jpg';
import bigImage1Product01 from '../assets/img/products/set01/10-1-main.jpg';
import bigImage2Product01 from '../assets/img/products/set01/1-1.jpg';
import bigImage3Product01 from '../assets/img/products/set01/2-1.jpg';
import bigImage4Product01 from '../assets/img/products/set01/11-1.jpg';

import littleImage1Product01 from '../assets/img/products/set01/10-1-main-163.jpg';
import littleImage2Product01 from '../assets/img/products/set01/1-1-163.jpg';
import littleImage3Product01 from '../assets/img/products/set01/2-1-163.jpg';
import littleImage4Product01 from '../assets/img/products/set01/11-1-163.jpg';

import fingerImage02 from '../assets/img/products/set02/02-finger.jpg';
import bigImage1Product02 from '../assets/img/products/set02/1-1-main.jpg';
import bigImage2Product02 from '../assets/img/products/set02/2-1.jpg';
import bigImage3Product02 from '../assets/img/products/set02/3-1.jpg';
import bigImage4Product02 from '../assets/img/products/set02/8-1.jpg';

import littleImage1Product02 from '../assets/img/products/set02/1-1-main-163.jpg';
import littleImage2Product02 from '../assets/img/products/set02/2-1-163.jpg';
import littleImage3Product02 from '../assets/img/products/set02/3-1-163.jpg';
import littleImage4Product02 from '../assets/img/products/set02/8-1-163.jpg';


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

export const connectWalletSweetAlertOptions = () => {
    return {
        icon: 'error',
        title: 'Connect Wallet',
        text: 'Connect your wallet first, please.',
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
    bigImages: [
        // main image of the asset
        bigImage1Product01,
        bigImage2Product01,
        bigImage3Product01,
        bigImage4Product01
    ],
    littleImages: [
        littleImage1Product01,
        littleImage2Product01,
        littleImage3Product01,
        littleImage4Product01
    ],
    title: 'Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '1',
    description: 'The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '1 BNB',
    price: '1',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'In Stock',
    tokenStandard: 'ERC-721',
    width: '50 cm',
    length: '50 cm',
    height: '5 cm',
    weight: '3500 grams',
    material: 'Wood',
    DetailedMaterial: 'Khatam on Wood on Outside, thin sticks of wood',
    usages: 'Chess & Backgammon Set, Decorative Crafts, Persian Gift',
    originate: 'Handmade in Isfahan / Iran',
    package: 'Chess plate + bag + Backgammon stones',
    dvUS: '35 to 45 Days',
    dvEU: '20 to 30 Days',
    dvAS: '35 to 45 Days',
    loyaltyFee: '0'
};

const fingerProduct02 = {
    fingerImage: fingerImage02,
    bigImages: [
        // main image of the asset
        bigImage1Product02,
        bigImage2Product02,
        bigImage3Product02,
        bigImage4Product02
    ],
    littleImages: [
        littleImage1Product02,
        littleImage2Product02,
        littleImage3Product02,
        littleImage4Product02
    ],
    title: '2Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '2',
    description: '2The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '2 BNB',
    price: '2',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'In Stock',
    tokenStandard: 'ERC-721',
    width: '50 cm',
    length: '50 cm',
    height: '5 cm',
    weight: '3500 grams',
    material: 'Wood',
    DetailedMaterial: 'Khatam on Wood on Outside, thin sticks of wood',
    usages: 'Chess & Backgammon Set, Decorative Crafts, Persian Gift',
    originate: 'Handmade in Isfahan / Iran',
    package: 'Chess plate + bag + Backgammon stones',
    dvUS: '35 to 45 Days',
    dvEU: '20 to 30 Days',
    dvAS: '35 to 45 Days',
    loyaltyFee: '0'
};

const fingerProduct03 = {
    fingerImage: fingerImage01,
    bigImages: [
        // main image of the asset
        bigImage1Product01,
        bigImage2Product01,
        bigImage3Product01,
        bigImage4Product01
    ],
    littleImages: [
        littleImage1Product01,
        littleImage2Product01,
        littleImage3Product01,
        littleImage4Product01
    ],
    title: '3Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '3',
    description: '3The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '3 BNB',
    price: '3',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'In Stock',
    tokenStandard: 'ERC-721',
    width: '50 cm',
    length: '50 cm',
    height: '5 cm',
    weight: '3500 grams',
    material: 'Wood',
    DetailedMaterial: 'Khatam on Wood on Outside, thin sticks of wood',
    usages: 'Chess & Backgammon Set, Decorative Crafts, Persian Gift',
    originate: 'Handmade in Isfahan / Iran',
    package: 'Chess plate + bag + Backgammon stones',
    dvUS: '35 to 45 Days',
    dvEU: '20 to 30 Days',
    dvAS: '35 to 45 Days',
    loyaltyFee: '0'
};

const fingerProduct04 = {
    fingerImage: fingerImage02,
    bigImages: [
        // main image of the asset
        bigImage1Product02,
        bigImage2Product02,
        bigImage3Product02,
        bigImage4Product02
    ],
    littleImages: [
        littleImage1Product02,
        littleImage2Product02,
        littleImage3Product02,
        littleImage4Product02
    ],
    title: '4Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '4',
    description: '4The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '4 BNB',
    price: '4',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'In Stock',
    tokenStandard: 'ERC-721',
    width: '50 cm',
    length: '50 cm',
    height: '5 cm',
    weight: '3500 grams',
    material: 'Wood',
    DetailedMaterial: 'Khatam on Wood on Outside, thin sticks of wood',
    usages: 'Chess & Backgammon Set, Decorative Crafts, Persian Gift',
    originate: 'Handmade in Isfahan / Iran',
    package: 'Chess plate + bag + Backgammon stones',
    dvUS: '35 to 45 Days',
    dvEU: '20 to 30 Days',
    dvAS: '35 to 45 Days',
    loyaltyFee: '0'
};


export const fetchAssetsArray = () => {
    return [
        fingerProduct01, fingerProduct02, fingerProduct03, fingerProduct04
    ]
}