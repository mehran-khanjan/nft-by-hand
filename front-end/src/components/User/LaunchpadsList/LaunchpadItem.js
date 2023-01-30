import React from 'react';
import blockchainLogo from '../../../assets/img/blockchain/1.png';
import {Link} from "react-router-dom";
import {presaleStatus} from "../../../utils/helpers";

const LaunchpadItem = (props) => {
    return (
        <React.Fragment>
            {/*game*/}
            <div className="col-12 col-md-6 col-xl-4">
                <div className="game">
                    <div className="game__head">
                        <div className="game__cover">
                            <img src="img/games/1.png" alt=""/>
                        </div>

                        <div className="game__title">
                            <h3 className="game__name">
                                <Link to={`/launchpads/${props.launchpadData.launchpadContractAddress}`}>{props.launchpadData.tokenName}</Link>
                            </h3>
                            <span className="game__blockchain">
									Blockchain
									<img src={blockchainLogo} alt="Binance smart chain logo"/>
								</span>
                        </div>
                    </div>

                    <p className="game__description">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>

                    <ul className="game__list">
                        <li>
                            Price <span style={{color: '#aa72ce'}}>1 BNB = {props.launchpadData.tokenPrice} Token</span>
                        </li>
                        <li>
                            Soft Cap <span>{props.launchpadData.softCap} BNB</span>
                        </li>
                        <li>
                            Hard Cap <span>{props.launchpadData.hardCap} BNB</span>
                        </li>
                        <li>
                            Start Time <span className="required">{`${new Date(+props.launchpadData.startTime * 1000)}`}</span>

                        </li>
                        <li>
                            End Time <span className="required">{`${new Date(+props.launchpadData.stopTime * 1000)}`}</span>
                        </li>
                        <li>
                            Status <span className="process">{presaleStatus(props.launchpadData.presaleStatus)}</span>
                        </li>
                    </ul>

                    <Link to={`/launchpads/${props.launchpadData.launchpadContractAddress}`} className="game__more">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            {/*end game*/}
        </React.Fragment>
    )
}

export default LaunchpadItem;