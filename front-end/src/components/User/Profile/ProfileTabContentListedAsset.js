import React, {useEffect, useState} from 'react';
import {exploreListItemsArray, fetchAssetsArray} from "../../../utils/helpers";
import AssetItem from "../Shared/AssetItem";
import {v4 as uuidv4} from "uuid";
import useWeb3Store from "../../../store/web3Store";
import {useDispatch, useSelector} from "react-redux";
import {getProfileAssetBlockchain} from "../../../store/AssetThunk";

const ProfileTabContentListedAsset = () => {
    const provider = useWeb3Store(state => state.web3);
    const dispatch = useDispatch();
    const fetchListedAssets = useSelector(state => state.fetchProfileAssetBlockchain.profileAsset);
    const [listedAssets, setListedAssets] = useState([null])

    useEffect(() => {
        dispatch(getProfileAssetBlockchain({provider, method: 'fetchItemsListed'}))
    }, []);

    useEffect(() => {
        if (fetchListedAssets[0] !== null) {
            console.log(fetchListedAssets)

            let finalArray = []
            fetchListedAssets.map((arrItem) => {
                const fetchedItem = fetchAssetsArray().filter((item) => {
                    return (
                        item.chainSymbol === 'bnb' &&
                        item.contractAddress === process.env.REACT_APP_CONTRACT_ADDRESS &&
                        item.tokenId === parseInt(arrItem[0].toString)
                    )
                });
                finalArray.concat(fetchedItem);

                //console.log(fetchedItem);
            })

            setListedAssets(finalArray);
        }
    }, [fetchListedAssets]);

    return(
        <React.Fragment>
            {/*Loading state*/}
            {listedAssets && listedAssets[0] === null &&
                <div style={{color: 'white'}}>Loading...</div>
            }

            {/*No asset exist state*/}
            {listedAssets && listedAssets.length === 0 &&
                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row">
                        <div className="col-12">
                            {/*play*/}
                            <div className="play">
                                <div className="play__text"
                                     style={{height: '100%', marginTop: 'unset', textAlign: 'center'}}>
                                    <p>
                                        No NFTs listed
                                    </p>
                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>
            }

            {/*asset*/}
            {listedAssets && listedAssets[0] !== null && listedAssets.length > 0 &&
                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row row--grid">

                        {
                            fetchAssetsArray().map((item) => {
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

export default ProfileTabContentListedAsset;