import React, {useEffect, useState} from 'react';
import {exploreListItemsArray, fetchAssetsArray} from "../../../utils/helpers";
import AssetItem from "../Shared/AssetItem";
import {v4 as uuidv4} from "uuid";
import useWeb3Store from "../../../store/web3Store";
import {useDispatch, useSelector} from "react-redux";
import {getProfileAssetBlockchain} from "../../../store/AssetThunk";

const ProfileTabContentBoughtAsset = () => {
    const provider = useWeb3Store(state => state.web3);
    const dispatch = useDispatch();
    const fetchBoughtAssets = useSelector(state => state.fetchProfileAssetBlockchain.profileAsset);
    const [boughtAssets, setBoughtAssets] = useState([null])

    useEffect(() => {
        dispatch(getProfileAssetBlockchain({provider, method: 'fetchMyNFTs'}))
    }, []);

    useEffect(() => {

        if (fetchBoughtAssets[0] && !(Object.is(fetchBoughtAssets[0][0], null))) {
            let finalArray = []
            fetchBoughtAssets.map((arrItem) => {
                const fetchedItem = fetchAssetsArray().filter((item) => {
                    return (
                        item.chainSymbol === 'bnb' &&
                        item.contractAddress === process.env.REACT_APP_CONTRACT_ADDRESS &&
                        item.tokenId === arrItem[0].toString()
                    )
                });
                finalArray.push(fetchedItem[0]);
            })

            setBoughtAssets(finalArray);
        } else if(!fetchBoughtAssets[0]) {
            setBoughtAssets([]);
        }
    }, [fetchBoughtAssets]);

    return (
        <React.Fragment>
            {/*Loading state*/}
            {boughtAssets && boughtAssets[0] === null &&
                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row">
                        <div className="col-12">
                            {/*play*/}
                            <div className="play">
                                <div className="play__text"
                                     style={{height: '100%', marginTop: 'unset', textAlign: 'center'}}>
                                    <p>
                                        Loading...
                                    </p>
                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>
            }

            {/*No asset exist state*/}
            {boughtAssets && boughtAssets.length === 0 &&
                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row">
                        <div className="col-12">
                            {/*play*/}
                            <div className="play">
                                <div className="play__text"
                                     style={{height: '100%', marginTop: 'unset', textAlign: 'center'}}>
                                    <p>
                                        No NFTs owned
                                    </p>
                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>
            }

            {/*asset*/}
            {boughtAssets && boughtAssets[0] !== null && boughtAssets.length > 0 &&
                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row row--grid">

                        {
                            boughtAssets.map((item) => {
                                return (
                                    <AssetItem
                                        key={uuidv4()}
                                        fingerImage={item.fingerImage}
                                        contractAddress={item.contractAddress}
                                        tokenId={item.tokenId}
                                        title={item.title}
                                        description={item.description}
                                        price={item.priceWithSymbol}
                                        chain={item.chain}
                                        chainSymbol={item.chainSymbol}
                                        material={item.material}
                                        status={item.status}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default ProfileTabContentBoughtAsset;