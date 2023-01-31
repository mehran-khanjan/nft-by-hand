import React from 'react';
import {NavLink} from "react-router-dom";
import finger01 from '../../../assets/img/products/set01/01-finger.jpg';
import {featuredItemsArray} from "../../../utils/helpers";
import AssetItem from "../Shared/AssetItem";
const {v4: uuidv4} = require('uuid');

const FeaturedItems = () => {
    return (
        <React.Fragment>
            {/*games*/}
            <section className="section section--bt">
                <div className="container">
                    <div className="row">
                        {/*section title*/}
                        <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                            <div className="section__title">
                                <strong>Items</strong>
                                <h2>
                                    {/*<a href="aggregator.html">*/}
                                    Featured Items
                                    {/*</a>*/}
                                </h2>
                                {/*<p>*/}
                                {/*    a*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        {/*end section title*/}
                    </div>

                    <div className="row row--grid">

                        {
                            featuredItemsArray().map((item) => {
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
            </section>
            {/*end games*/}
        </React.Fragment>
    )
}

export default FeaturedItems;