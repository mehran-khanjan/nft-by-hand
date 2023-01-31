import React from 'react';
import {NavLink} from "react-router-dom";

const AssetItem = (props) => {
    return(
        <React.Fragment>
            {/*game*/}
            <div className="col-12 col-md-6 col-xl-4">
                <div className="game">
                    <div className="game__head">
                        <div className="game__cover">
                            <img src={props.fingerImage} alt=""/>
                        </div>

                        <div className="game__title">
                            <h3 className="game__name">
                                <NavLink to={`/assets/${props.chainSymbol}/${props.contractAddress}/${props.tokenId}#top-asset-single`}>
                                    {props.title}
                                </NavLink>
                            </h3>

                        </div>
                    </div>

                    <p className="game__description">
                        {props.description}
                    </p>

                    <ul className="game__list">
                        <li>
                            Price <span className="required">{props.price}</span>
                        </li>
                        <li>
                            Chain <span className="required">{props.chain}</span>
                        </li>
                        <li>
                            Material <span className="required">{props.material}</span>
                        </li>
                        <li>
                            Status <span className="process">{props.status}</span>
                        </li>
                    </ul>


                    <NavLink to={`/assets/${props.chainSymbol}/${props.contractAddress}/${props.tokenId}#top-asset-single`}
                             className="game__more">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                        </svg>
                    </NavLink>
                </div>
            </div>
            {/*end game*/}
        </React.Fragment>
    )
}

export default AssetItem;