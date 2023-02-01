import React, {useState, useEffect} from 'react';
import bigImage from "../../../assets/img/games/1-1-big.png";
import {Link} from "react-router-dom";
import {exploreListItemsArray} from "../../../utils/helpers";
import AssetItem from "../Shared/AssetItem";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {getBoughtAssetBlockchain} from "../../../store/AssetThunk";
import useWeb3Store from "../../../store/web3Store";
import ProfileTabWrapper from "./ProfileTabWrapper";

const ProfileComponent = () => {
    const [tabIndex, setTabIndex] = useState(1);

    const handleTabClick = (e, index) => {
        e.preventDefault();

        setTabIndex(index);
    }

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
                                       onClick={e => handleTabClick(e, 1)}
                                       style={{backgroundColor: 'rgba(170,114,206,0.12)', marginLeft: '5px'}}>
                                        <span>Bought NFTs</span>
                                    </a>

                                    <a href="#" className="play__btn"
                                       onClick={e => handleTabClick(e, 2)}
                                       style={{marginLeft: '5px'}}>
                                        <span>Listed NFTs</span>
                                    </a>

                                </div>
                            </div>
                            {/*end play*/}
                        </div>
                    </div>
                </div>

                <ProfileTabWrapper tabIndex={tabIndex}/>

            </div>
            {/*end game details*/}
        </React.Fragment>
    )
}

export default ProfileComponent;