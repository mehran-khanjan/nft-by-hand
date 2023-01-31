import React from 'react';
import {exploreListItemsArray} from "../../../utils/helpers";
import AssetItem from "../Shared/AssetItem";
import {Link} from "react-router-dom";
const {v4: uuidv4} = require('uuid');

const AssetsListComp = (props) => {
    return (
        <React.Fragment>
            <section className="section section--first">
                {/*section head*/}
                <div className="section__head">
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">Explore</li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>Explore handicrafts</h1>
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

                {/*games*/}
                <div className="container">
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
                {/*end games*/}

            </section>
        </React.Fragment>
    )
}

export default AssetsListComp;