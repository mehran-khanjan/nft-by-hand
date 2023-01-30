import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import bigImage from '../../assets/img/games/1-1-big.png';
import {useDispatch, useSelector} from "react-redux";
import {getSingleLaunchpadBlockchain, launchpadParticipateBlockchain} from "../../store/LaunchpadThunk";
import web3Store from "../../store/web3Store";

const LaunchpadSingle = () => {
    const {launchpadContractAddress} = useParams();
    const provider = web3Store(state => state.web3);
    const dispatch = useDispatch();
    const singleLaunchpad = useSelector(state => state.singleLaunchpadBlockchain.singleLaunchpad);
    const [participantAmount, setParticipantAmount] = useState();

    useEffect(() => {
        if (launchpadContractAddress) {
            dispatch(getSingleLaunchpadBlockchain({provider, launchpadContractAddress}))
        }
    }, []);

    const onFormSubmitHandle = (e) => {
        e.preventDefault();

        dispatch(launchpadParticipateBlockchain({
            provider, launchpadContractAddress, participantAmount
        }))
    }

    if (!singleLaunchpad) {
        return <div>Noting!</div>
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${singleLaunchpad.tokenName} | NFT by Hand`}</title>
            </Helmet>

            {/*page head*/}
            <div className="section section--pb0 section--first">
                <div className="section__article-head" style={{backgroundColor: '#2a3755'}}>
                    <div className="container">
                        <div className="row">
                            {/*breadcrumb*/}
                            <div className="col-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb__item"><a href="aggregator.html">Projects</a></li>
                                    <li className="breadcrumb__item breadcrumb__item--active">
                                        {singleLaunchpad.tokenName}
                                    </li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            {/*section title*/}
                            <div className="col-12">
                                <div className="section__title section__title--left section__title--page">
                                    <h1>
                                        {singleLaunchpad.tokenName}
                                    </h1>
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
                        <div className="col-12 col-lg-7">
                            {/*details*/}
                            <div className="details">
                                <img src={bigImage} alt="" style={{width: '100%', borderRadius: '18px'}}/>
                            </div>
                            {/*end details*/}

                            {/*play*/}
                            <div className="play">
                                <div className="play__btns">
                                    <a href="#" className="play__btn"
                                       style={{backgroundColor: 'rgba(170,114,206,0.12)', marginLeft: '5px'}}>
                                        <span>Play</span>
                                    </a>

                                    <a href="#" className="play__btn" style={{marginLeft: '5px'}}>
                                        <span>Details</span>
                                    </a>

                                    <a href="#" className="play__btn" style={{marginLeft: '5px'}}>
                                        <span>More</span>
                                    </a>
                                </div>

                                <div className="play__text" style={{height: '100%'}}>

                                    <p>{singleLaunchpad.tokenName}</p>
                                    <p>{singleLaunchpad.launchpadContractAddress}</p>
                                    <p>{singleLaunchpad.tokenContractAddress}</p>
                                    <p>{singleLaunchpad.tokenName}</p>
                                    <p>{singleLaunchpad.tokenSymbol}</p>
                                    <p>{singleLaunchpad.tokenDecimals}</p>
                                    <p>{singleLaunchpad.minContribution}</p>
                                    <p>{singleLaunchpad.maxContribution}</p>
                                    <p>{singleLaunchpad.tokenPrice}</p>
                                    <p>{singleLaunchpad.softCap}</p>
                                    <p>{singleLaunchpad.hardCap}</p>

                                    <p>start time: {`${new Date(+singleLaunchpad.startTime * 1000)}`}</p>
                                    <p>start time: {`${new Date(+singleLaunchpad.stopTime * 1000)}`}</p>

                                    <p>{singleLaunchpad.startTime}</p>
                                    <p>{singleLaunchpad.stopTime}</p>
                                    <p>{singleLaunchpad.presaleStatus}</p>

                                </div>
                            </div>
                            {/*end play*/}
                        </div>

                        <div className="col-12 col-lg-5">
                            {/*description*/}
                            <div className="description">
                                <h2 className="description__title">Participate</h2>

                                <div className="description__price" style={{width: '100%'}}>
                                    <h3 style={{marginBottom: '10px'}}>Amount (BNB)</h3>
                                    {/*<div className="col-12">*/}
                                    {/*<div className="form__group">*/}
                                    {/*<label htmlFor="tokenContractAddress" className="form__label">*/}
                                    {/*    Amount (BNB)*/}
                                    {/*</label>*/}
                                    <form onSubmit={onFormSubmitHandle}>
                                        <input id="tokenContractAddress" type="text" name="tokenContractAddress"
                                               className="form__input"
                                               onChange={e => setParticipantAmount(e.target.value)}/>
                                        {/*onBlur={}/>*/}
                                        <button type="submit" className="form__btn form__btn--small"
                                                style={{width: '100%'}}>
                                            Buy
                                        </button>
                                    </form>
                                    {/*</div>*/}
                                    {/*</div>*/}
                                </div>

                                <h2 className="description__title">Market data</h2>

                                <div className="description__price">
                                    <h3>Current price (24H)</h3>
                                    <p>$26.74 <span className="green">1.6%</span></p>
                                </div>

                                <table className="description__table">
                                    <tbody>
                                    <tr>
                                        <td>Market cap</td>
                                        <td>$1,870,494</td>
                                    </tr>
                                    <tr>
                                        <td>Fully Diluted Valuation</td>
                                        <td>$26,736,092</td>
                                    </tr>
                                    <tr>
                                        <td>24 Hour Trading Vol</td>
                                        <td>$3,674.85</td>
                                    </tr>
                                    <tr>
                                        <td>Circulating supply</td>
                                        <td>23,004,971.92</td>
                                    </tr>
                                    <tr>
                                        <td>Total supply</td>
                                        <td>3,400</td>
                                    </tr>
                                    <tr>
                                        <td>24h High / 24h Low</td>
                                        <td>$27.19 / $26.27</td>
                                    </tr>
                                    <tr>
                                        <td>All-Time High</td>
                                        <td>$541.81 <span className="red">-95.1%</span></td>
                                    </tr>
                                    <tr>
                                        <td>All-Time Low</td>
                                        <td>$25.2 <span className="green">6.1%</span></td>
                                    </tr>
                                    </tbody>
                                </table>

                                <h2 className="description__title">Information</h2>
                                <span className="description__blockchain">
							Blockchains
							<img src="img/blockchain/3.png" alt=""/>
							<img src="img/blockchain/5.png" alt=""/>
						</span>
                                <ul className="description__list">
                                    <li>
                                        Devices <span className="devices">Web, Android, IOS</span>
                                    </li>
                                    <li>
                                        Free to play <span className="required">NFT Required</span>
                                    </li>
                                    <li>
                                        Play to earn <span className="required">Crypto</span>
                                    </li>
                                    <li>
                                        Status <span className="process">Presale</span>
                                    </li>
                                </ul>

                                <h2 className="description__title">Community</h2>

                                <div className="description__social">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M21.20905,6.41669H22V4.08331H14.51978l-2.48584,9.16663h-.068L9.50269,4.08331H2V6.41663h.76837A.89578.89578,0,0,1,3.5,7.11139v9.83032a.84093.84093,0,0,1-.73163.6416H2v2.33338H8V17.58331H6.5V7.25h.08752L10.0451,19.91669h2.712L16.25989,7.25h.07355V17.58331H14.83337v2.33338H22V17.58331h-.79095a.83931.83931,0,0,1-.70905-.6416V7.11145A.8976.8976,0,0,1,21.20905,6.41669Z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"/>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M10.13831,10.62982h-.00013a1.05288,1.05288,0,1,0,.00013,0Zm3.75427,0a1.14582,1.14582,0,1,0,1.04907,1.14166A1.09586,1.09586,0,0,0,13.89258,10.62982Zm4.99878-8.6297H5.10864A2.11364,2.11364,0,0,0,3,4.119V18.02527A2.11368,2.11368,0,0,0,5.10864,20.1441H16.77258l-.54516-1.90289,1.31653,1.224,1.24462,1.152L21,22.57153V4.119A2.11364,2.11364,0,0,0,18.89136,2.00012ZM14.92114,15.43323v.00006s-.37036-.44232-.67895-.83319a3.2459,3.2459,0,0,0,1.86181-1.224,5.87837,5.87837,0,0,1-1.18286.60681,6.76974,6.76974,0,0,1-1.49145.44232,7.206,7.206,0,0,1-2.66394-.01025,8.64456,8.64456,0,0,1-1.51209-.44226,6.03735,6.03735,0,0,1-.75085-.34973c-.03089-.02063-.06165-.03089-.09253-.05146a.14171.14171,0,0,1-.04114-.03082c-.18506-.10284-.28809-.17487-.28809-.17487A3.19975,3.19975,0,0,0,9.8811,14.57953c-.30847.39093-.68908.8537-.68908.8537a3.72892,3.72892,0,0,1-3.13709-1.56342A13.775,13.775,0,0,1,7.536,7.87323a5.08641,5.08641,0,0,1,2.89026-1.08l.10278.12348A6.93762,6.93762,0,0,0,7.824,8.2641s.22632-.12341.60682-.29828a7.722,7.722,0,0,1,2.335-.64795,1.00465,1.00465,0,0,1,.17492-.02063,8.702,8.702,0,0,1,2.07764-.02051,8.384,8.384,0,0,1,3.096.98737,6.84576,6.84576,0,0,0-2.561-1.30628l.14392-.16449a5.08575,5.08575,0,0,1,2.89026,1.08,13.77368,13.77368,0,0,1,1.4812,5.99652A3.75972,3.75972,0,0,1,14.92114,15.43323Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/*end description*/}
                        </div>

                    </div>
                </div>
            </div>
            {/*end game details*/}
        </React.Fragment>
    )
}

export default LaunchpadSingle;