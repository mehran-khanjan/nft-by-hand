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

import fingerImage03 from '../assets/img/products/set03/01-finger.jpg';
import bigImage1Product03 from '../assets/img/products/set03/01-main.jpg';
import bigImage2Product03 from '../assets/img/products/set03/02.jpg';
import bigImage3Product03 from '../assets/img/products/set03/03.jpg';
import bigImage4Product03 from '../assets/img/products/set03/04.jpg';
import littleImage1Product03 from '../assets/img/products/set03/01-main-160.jpg';
import littleImage2Product03 from '../assets/img/products/set03/02-160.jpg';
import littleImage3Product03 from '../assets/img/products/set03/03-160.jpg';
import littleImage4Product03 from '../assets/img/products/set03/04-160.jpg';

import fingerImage04 from '../assets/img/products/set04/01-finger.jpg';
import bigImage1Product04 from '../assets/img/products/set04/01-main-cropped.jpg';
import bigImage2Product04 from '../assets/img/products/set04/02-crpped.jpg';
import bigImage3Product04 from '../assets/img/products/set04/03.jpg';
import bigImage4Product04 from '../assets/img/products/set04/04-cropped.jpg';
import littleImage1Product04 from '../assets/img/products/set04/01-main-163.jpg';
import littleImage2Product04 from '../assets/img/products/set04/02-160.jpg';
import littleImage3Product04 from '../assets/img/products/set04/03-160.jpg';
import littleImage4Product04 from '../assets/img/products/set04/04-160.jpg';

import fingerImage05 from '../assets/img/products/set05/01-finger.jpg';
import bigImage1Product05 from '../assets/img/products/set05/01-main.jpg';
import bigImage2Product05 from '../assets/img/products/set05/02.jpg';
import bigImage3Product05 from '../assets/img/products/set05/03.jpg';
import bigImage4Product05 from '../assets/img/products/set05/04.jpg';
import littleImage1Product05 from '../assets/img/products/set05/01-main-160.jpg';
import littleImage2Product05 from '../assets/img/products/set05/02-160.jpg';
import littleImage3Product05 from '../assets/img/products/set05/03-160.jpg';
import littleImage4Product05 from '../assets/img/products/set05/04-160.jpg';

import fingerImage06 from '../assets/img/products/set06/01-finger.jpg';
import bigImage1Product06 from '../assets/img/products/set06/01-main.jpg';
import bigImage2Product06 from '../assets/img/products/set06/02.jpg';
import bigImage3Product06 from '../assets/img/products/set06/03.jpg';
import bigImage4Product06 from '../assets/img/products/set06/04.jpg';
import littleImage1Product06 from '../assets/img/products/set06/01-main-160.jpg';
import littleImage2Product06 from '../assets/img/products/set06/02-160.jpg';
import littleImage3Product06 from '../assets/img/products/set06/03-160.jpg';
import littleImage4Product06 from '../assets/img/products/set06/04-160.jpg';

import fingerImage07 from '../assets/img/products/set07/01-finger.jpg';
import bigImage1Product07 from '../assets/img/products/set07/01-main.jpg';
import bigImage2Product07 from '../assets/img/products/set07/02.jpg';
import bigImage3Product07 from '../assets/img/products/set07/03.jpg';
import bigImage4Product07 from '../assets/img/products/set07/04.jpg';
import littleImage1Product07 from '../assets/img/products/set07/01-main-160.jpg';
import littleImage2Product07 from '../assets/img/products/set07/02-160.jpg';
import littleImage3Product07 from '../assets/img/products/set07/03-160.jpg';
import littleImage4Product07 from '../assets/img/products/set07/04-160.jpg';

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
    iconHtml: `<img src="${loadingImage}" alt="loading spinner" style="width: 88px; background-color: #1d263b"/>`,
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

let fingerProduct01 = {
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
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
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

let fingerProduct02 = {
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
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
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

let fingerProduct03 = {
    fingerImage: fingerImage03,
    bigImages: [
        // main image of the asset
        bigImage1Product03,
        bigImage2Product03,
        bigImage3Product03,
        bigImage4Product03
    ],
    littleImages: [
        littleImage1Product03,
        littleImage2Product03,
        littleImage3Product03,
        littleImage4Product03
    ],
    title: '3Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '3',
    description: '3The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'Out of Stock',
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

let fingerProduct04 = {
    fingerImage: fingerImage04,
    bigImages: [
        // main image of the asset
        bigImage1Product04,
        bigImage2Product04,
        bigImage3Product04,
        bigImage4Product04
    ],
    littleImages: [
        littleImage1Product04,
        littleImage2Product04,
        littleImage3Product04,
        littleImage4Product04
    ],
    title: '4Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '4',
    description: '4The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'Out of Stock',
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

let fingerProduct05 = {
    fingerImage: fingerImage05,
    bigImages: [
        // main image of the asset
        bigImage1Product05,
        bigImage2Product05,
        bigImage3Product05,
        bigImage4Product05
    ],
    littleImages: [
        littleImage1Product05,
        littleImage2Product05,
        littleImage3Product05,
        littleImage4Product05
    ],
    title: '5Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '5',
    description: '5The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'Out of Stock',
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

let fingerProduct06 = {
    fingerImage: fingerImage06,
    bigImages: [
        // main image of the asset
        bigImage1Product06,
        bigImage2Product06,
        bigImage3Product06,
        bigImage4Product06
    ],
    littleImages: [
        littleImage1Product06,
        littleImage2Product06,
        littleImage3Product06,
        littleImage4Product06
    ],
    title: '6Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '6',
    description: '6The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'Out of Stock',
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

let fingerProduct07 = {
    fingerImage: fingerImage07,
    bigImages: [
        // main image of the asset
        bigImage1Product07,
        bigImage2Product07,
        bigImage3Product07,
        bigImage4Product07
    ],
    littleImages: [
        littleImage1Product07,
        littleImage2Product07,
        littleImage3Product07,
        littleImage4Product07
    ],
    title: '7Backgammon & Chess Set | Miniature Khatam Marquetry',
    contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
    tokenId: '7',
    description: '7The Backgammon & Chess Set is made from Superior Miniature Khatam with Wood, Brass & Camel Bone Inlaying Decorated with Flower & Bird Miniature on the top & Traditional Multi colour Toranj design. The Khatamkari is Glazed & Coated for a Shiny Long-Lasting Finish.',
    priceWithSymbol: '1.6 BNB',
    price: '1.6',
    chainSymbol: 'bnb',
    chain: 'Binance Chain',
    status: 'Out of Stock',
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
        fingerProduct01, fingerProduct02, fingerProduct03, fingerProduct04,
        fingerProduct05, fingerProduct06, fingerProduct07
    ]
}

export const updateStatus = (tokenId) => {
    console.log('single product1', fingerProduct01.status);
    let singleProduct = `fingerProduct0${tokenId}`;
    let finalSingleProduct = eval(singleProduct);
    finalSingleProduct.status = 'Out of Stock';
    console.log('single product2', fingerProduct01.status);
}