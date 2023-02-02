import React, {useState} from 'react';
import useWeb3Store from "../../../store/web3Store";
import {useDispatch, useSelector} from "react-redux";
import {loadingSweetAlertOptions} from "../../../utils/helpers";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {create as ipfsHttpClient} from 'ipfs-http-client';
import {ethers} from "ethers";
import {Buffer} from 'buffer';
import {setter} from "../../../utils/blockchainSetter";
import NFTByHandContract from '../../../blockchain/NFTByHandContract.json';


const mySweetAlert = withReactContent(Swal);

const projectId = '2L2RCplQN3TceLc0mLOJu5DDmad';
const projectSecret = 'ec32b784b6df4bcb534f8a4e671fcd5e';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

const CreateAsset = () => {
    const [tokenContractAddress, setTokenContractAddress] = useState();
    const provider = useWeb3Store(state => state.web3);
    const publicAddress = useWeb3Store(state => state.publicAddress);
    const networkId = useWeb3Store(state => state.networkId);
    const dispatch = useDispatch();
    const isTokenContractValid = useSelector(state => state.createLaunchpad.isValid);
    const responseNetworkId = useSelector(state => state.createLaunchpad.networkId);
    const responseContractAddress = useSelector(state => state.createLaunchpad.contractAddress);

    async function uploadToIPFS(uploadContent) {
        // const uploadedFile = e.target.files[0]
        //setUploadLoading(true);

        try {
            const added = await client.add(
                uploadContent,
                // Progress: the progress of uploading for large files.
                // It's useful for showing an uploading spinner
                // It's based on size of the uploaded file
                {
                    progress: (progress) => console.log(`received: ${progress}`)
                }
            )
            const url = `https://nft-by-hand.infura-ipfs.io/ipfs/${added.path}`;

            //console.log('added', added);
            console.log('url', url);

            //setFileURL(url);
            //setUploadLoading(false);
            return url;

        } catch (error) {
            console.log('Error uploading file: ', error);
            //setUploadLoading(false);
        }

    }

    async function createNFT(e) {
        e.preventDefault();

        // console.log(e.target.fileUpload.value);
        // console.log(e.target.title.value);
        // console.log(e.target.price.value);
        // console.log(e.target.description.value);

        const fileUpload = e.target.fileUpload.files[0];
        const title = e.target.title.value;
        const price = e.target.price.value;
        const description = e.target.description.value;

        //console.log(provider);

        if (provider) {
            // const fileURL = await uploadToIPFS(fileUpload);

            // const data = JSON.stringify({
            //     name: title,
            //     description,
            //     image: fileURL
            // });
            // console.log('data object', data);
            // const finalData = await uploadToIPFS(data);


            console.log('listing price:', price.toString());
            const finalPrice = ethers.utils.parseUnits(price, 'ether');
            console.log('final price', finalPrice);


            const {
                receipt,
                issuedEvents
            } = await setter(
                process.env.REACT_APP_CONTRACT_ADDRESS,
                    NFTByHandContract.abi,
                    provider,
                    'createToken',
                    // [finalData, finalPrice],
                    ['https://nftbyhand.com/p01.json', finalPrice],
                    'MarketItemCreated'
                );

            console.log('issued events', issuedEvents);
            console.log('receipt', receipt);


            /* next, create the item */

            //let contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
            //let listingPrice = await contract.getListingPrice()
            // listingPrice = listingPrice.toString()
            //let transaction = await contract.createToken(url, price, {value: listingPrice})
            //await transaction.wait()

            // router.push('/');
        } else {
            console.log('Connect Wallet first!');
        }
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        mySweetAlert.fire(loadingSweetAlertOptions);

        if (provider) {
            // if (!isUpdated) {
            // add some codes
            // } else {
            // return navigate(`/launchpads/create/${networkId}/${tokenContractAddress}/add-more-details`);
            // }
        } else {
            console.log('connect wallet first');
        }

        mySweetAlert.close();
    }

    return (
        <React.Fragment>
            <section className="section section--first">

                {/*section head*/}
                <div className="section__article-head">
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">Create a new NFT</li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>Create a new NFT</h1>
                                </div>
                            </div>
                            {/*end section title*/}
                        </div>
                    </div>

                    {/*bg animation*/}
                    <div id="canvas2" className="section__canvas"></div>
                    {/*end bg animation*/}
                </div>
                {/*end section head*/}

                {/*form*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className="form form--big" method="Post" onSubmit={createNFT}>
                                <div className="row">

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="fileUpload" className="form__label">
                                                File
                                            </label>
                                            <input id="fileUpload" type="file" name="fileUpload" className=""
                                            style={{color: 'white'}}/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="title" className="form__label">
                                                Title
                                            </label>
                                            <input id="title" type="text" name="title" className="form__input"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="price" className="form__label">
                                                Price
                                            </label>
                                            <input id="price" type="text" name="price" className="form__input"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="description" className="form__label">Description</label>
                                            <textarea id="description" name="description"
                                                      className="form__textarea"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <button type="submit" className="form__btn form__btn--small"
                                                    style={{width: '100%'}}>
                                                Previous
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <button type="submit" className="form__btn form__btn--small"
                                                    style={{width: '100%'}}>
                                                Next
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*end form*/}
            </section>
        </React.Fragment>
    )
}

export default CreateAsset;