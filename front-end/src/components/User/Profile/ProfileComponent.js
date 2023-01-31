import React, {useState, useEffect} from 'react';
import bigImage from "../../../assets/img/games/1-1-big.png";
import {Link} from "react-router-dom";
import {exploreListItemsArray} from "../../../utils/helpers";
import AssetItem from "../Shared/AssetItem";
import {v4 as uuidv4} from "uuid";

const ProfileComponent = () => {
    useEffect(() => {

    }, [])

    return (
        <React.Fragment>
            {/*page head*/}
            <div className="section section--pb0 section--first">
                <div className="section__article-head" style={{backgroundColor: '#2a3755'}}>
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb__item">Profile</li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>Profile</h1>
                                </div>
                            </div>
                            {/*end section title*/}
                        </div>
                    </div>

                    {/*bg animation*/}
                    <div id="canvas2" className="section__canvas"></div>
                    {/*end bg animation*/}
                </div>
            </div>
            {/*end page head*/}

            {/*game details*/}
            <div className="section section--article">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/*play*/}
                            <div className="play">
                                <div className="play__btns" style={{borderBottom: 'unset', paddingBottom: 'unset'}}>
                                    <a href="#" className="play__btn"
                                       style={{backgroundColor: 'rgba(170,114,206,0.12)', marginLeft: '5px'}}>
                                        <span>Bought NFTs</span>
                                    </a>

                                    <a href="#" className="play__btn" style={{marginLeft: '5px'}}>
                                        <span>Listed NFTs</span>
                                    </a>

                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row">
                        <div className="col-12">
                            {/*play*/}
                            <div className="play">
                                <div className="play__text"
                                     style={{height: '100%', marginTop: 'unset', textAlign: 'center'}}>
                                    <p>
                                        No NFTs owned
                                        No NFTs listed
                                    </p>
                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>

                <div className="container" style={{marginTop: '-20px'}}>
                    <div className="row row--grid">

                        {
                            exploreListItemsArray().map((item) => {
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

            </div>
            {/*end game details*/}
        </React.Fragment>
    )
}

export default ProfileComponent;