import React, {useState} from 'react';
import DateTimePicker from "react-datetime-picker";
import useWeb3Store from "../../../store/web3Store";
import {useDispatch, useSelector} from "react-redux";
import {createLaunchpad, updateLaunchpad} from "../../../store/LaunchpadThunk";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import {loadingSweetAlertOptions} from "../../../utils/helpers";
import SectionTitle from "./SectionTitle";

const mySweetAlert = withReactContent(Swal);

const CreateLaunchpadStepOne = () => {
    const [tokenContractAddress, setTokenContractAddress] = useState();
    const provider = useWeb3Store(state => state.web3);
    const publicAddress = useWeb3Store(state => state.publicAddress);
    const networkId = useWeb3Store(state => state.networkId);
    const dispatch = useDispatch();
    const isTokenContractValid = useSelector(state => state.createLaunchpad.isValid);
    const responseNetworkId = useSelector(state => state.createLaunchpad.networkId);
    const responseContractAddress = useSelector(state => state.createLaunchpad.contractAddress);

    const [presaleRate, setPresaleRate] = useState(null);
    const [softCap, setSoftCap] = useState(null);
    const [hardCap, setHardCap] = useState(null);
    const [minBuy, setMinBuy] = useState(null);
    const [maxBuy, setMaxBuy] = useState(null);
    const [refundType, setRefundType] = useState(null);
    const [router, setRouter] = useState(null);
    const [dexLiquidity, setDexLiquidity] = useState(null);
    const [dexListingRate, setDexListingRate] = useState(null);
    const [start, setStart] = useState(new Date());
    const [stop, setStop] = useState(new Date());
    const [liquidityLockup, setLiquidityLockup] = useState(null);
    const isUpdated = useSelector(state => state.updateLaunchpadDetails.isUpdated);

    const [logoURL, setLogoURL] = useState(null);
    const [websiteURL, setWebsiteURL] = useState(null);
    const [facebook, setFacebook] = useState(null);
    const [twitter, setTwitter] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [discord, setDiscord] = useState(null);
    const [reddit, setReddit] = useState(null);
    const [github, setGithub] = useState(null);
    const [telegramGroup, setTelegramGroup] = useState(null);
    const [telegramChannel, setTelegramChannel] = useState(null);
    const [youtube, setYoutube] = useState(null);
    const [description, setDescription] = useState(null);
    const isMoreUpdated = useSelector(state => state.updateLaunchpadDetails.isMoreUpdated);

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        mySweetAlert.fire(loadingSweetAlertOptions);

        if (provider) {
            // if (!isUpdated) {
                await dispatch(updateLaunchpad({
                    provider, networkId, tokenContractAddress,
                    isDeployed: '0', presaleRate, softCap, hardCap, minBuy, maxBuy,
                    // refundType, router, dexLiquidity, dexListingRate,
                    startDate: Math.floor(start.getTime() / 1000),
                    stopDate: Math.floor(stop.getTime() / 1000),
                    // liquidityLockup,
                    logoURL,
                    websiteURL,
                    facebook,
                    twitter,
                    instagram,
                    discord,
                    reddit,
                    github,
                    telegramGroup,
                    telegramChannel,
                    youtube,
                    description
                }));
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
                                    <li className="breadcrumb__item breadcrumb__item--active">Add a launchpad</li>
                                </ul>
                            </div>
                            {/*end breadcrumb*/}

                            <SectionTitle step={4}/>
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
                            <form className="form form--big" onSubmit={handleFormSubmission}>
                                <div className="row">

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="tokenContractAddress" className="form__label">
                                                Token Contract Address
                                            </label>
                                            <input id="tokenContractAddress" type="text" name="tokenContractAddress"
                                                   className="form__input"
                                                   onChange={e => setTokenContractAddress(e.target.value)}/>
                                            {/*onBlur={}/>*/}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="presaleRate" className="form__label">
                                                Presale Rate
                                            </label>
                                            <input id="presaleRate" type="text" name="presaleRate"
                                                   className="form__input"
                                                   onChange={e => setPresaleRate(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="softCap" className="form__label">Soft Cap</label>
                                            <input id="softCap" type="text" name="softCap" className="form__input"
                                                   onChange={e => setSoftCap(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="hardCap" className="form__label">Hard Cap</label>
                                            <input id="hardCap" type="text" name="hardCap" className="form__input"
                                                   onChange={e => setHardCap(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="minBuy" className="form__label">Minimum Buy</label>
                                            <input id="minBuy" type="text" name="minBuy" className="form__input"
                                                   onChange={e => setMinBuy(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="maxBuy" className="form__label">Maximum Buy</label>
                                            <input id="maxBuy" type="text" name="maxBuy" className="form__input"
                                                   onChange={e => setMaxBuy(e.target.value)}/>
                                        </div>
                                    </div>

                                    {/*<div className="col-12 col-lg-6">*/}
                                    {/*    <div className="form__group">*/}
                                    {/*        <label htmlFor="refundType" className="form__label">Refund type</label>*/}
                                    {/*        <select id="refundType" className="form__select" name="pte">*/}
                                    {/*            <option className="form__select__option" value="0">1</option>*/}
                                    {/*            <option className="form__select__option" value="1">2</option>*/}
                                    {/*            <option className="form__select__option" value="2">3</option>*/}
                                    {/*            <option className="form__select__option" value="3">4</option>*/}
                                    {/*        </select>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col-12 col-lg-6">*/}
                                    {/*    <div className="form__group">*/}
                                    {/*        <label htmlFor="router" className="form__label">Router</label>*/}
                                    {/*        <select id="router" className="form__select" name="pte">*/}
                                    {/*            <option className="form__select__option" value="0">1</option>*/}
                                    {/*            <option className="form__select__option" value="1">2</option>*/}
                                    {/*            <option className="form__select__option" value="2">3</option>*/}
                                    {/*            <option className="form__select__option" value="3">4</option>*/}
                                    {/*        </select>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col-12 col-md-6">*/}
                                    {/*    <div className="form__group">*/}
                                    {/*        <label htmlFor="swapLiquidity" className="form__label">*/}
                                    {/*            Pancake Swap Liquidity*/}
                                    {/*        </label>*/}
                                    {/*        <input id="swapLiquidity" type="text" name="swapLiquidity"*/}
                                    {/*               className="form__input"*/}
                                    {/*               onChange={e => setDexLiquidity(e.target.value)}/>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-12 col-md-6">*/}
                                    {/*    <div className="form__group">*/}
                                    {/*        <label htmlFor="swapListingRate" className="form__label">*/}
                                    {/*            Pancake Swap Listing Rate*/}
                                    {/*        </label>*/}
                                    {/*        <input id="swapListingRate" type="text" name="swapListingRate"*/}
                                    {/*               className="form__input"*/}
                                    {/*               onChange={e => setDexListingRate(e.target.value)}/>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className="col-12 col-md-6">
                                        <div className="form-group col-md-6">
                                            <label className="form__label">Start Time</label>
                                            <DateTimePicker onChange={setStart} value={start}
                                                            className="mb-4" style={{marginTop: '-20px'}}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group col-md-6">
                                            <label className="form__label">End Time</label>
                                            <DateTimePicker onChange={setStop} value={stop}
                                                            className="mb-4" style={{marginTop: '-20px'}}
                                            />
                                        </div>
                                    </div>

                                    {/*<div className="col-12">*/}
                                    {/*    <div className="form__group">*/}
                                    {/*        <label htmlFor="liquidityLockup" className="form__label">*/}
                                    {/*            Liquidity Lockup*/}
                                    {/*        </label>*/}
                                    {/*        <input id="liquidityLockup" type="text" name="liquidityLockup"*/}
                                    {/*               className="form__input"*/}
                                    {/*               onChange={e => setLiquidityLockup(e.target.value)}/>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div className="col-12">*/}
                                    {/*    <div className="form__group">*/}
                                    {/*        <label htmlFor="form__gallery-upload" className="form__label">*/}
                                    {/*            Launchpad Logo*/}
                                    {/*        </label>*/}
                                    {/*        <div className="form__gallery">*/}
                                    {/*            <label id="gallery1" htmlFor="form__gallery-upload">Upload logo</label>*/}
                                    {/*            <input data-name="#gallery1" id="form__gallery-upload" name="gallery"*/}
                                    {/*                   className="form__gallery-upload" type="file"*/}
                                    {/*                   accept=".png, .jpg, .jpeg" multiple/>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="imageURL" className="form__label">
                                                Image URL
                                            </label>
                                            <input id="imageURL" type="text" name="imageURL"
                                                   className="form__input form__input--link"
                                                   onChange={e => setLogoURL(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="website" className="form__label">Website</label>
                                            <input id="website" type="text" name="website"
                                                   className="form__input form__input--link"
                                                   onChange={e => setWebsiteURL(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="twitter" className="form__label">Twitter</label>
                                            <input id="twitter" type="text" name="twitter"
                                                   className="form__input form__input--link"
                                                   onChange={e => setTwitter(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="facebook" className="form__label">Facebook</label>
                                            <input id="facebook" type="text" name="facebook"
                                                   className="form__input form__input--link"
                                                   onChange={e => setFacebook(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="instagram" className="form__label">Instagram</label>
                                            <input id="instagram" type="text" name="instagram"
                                                   className="form__input form__input--link"
                                                   onChange={e => setInstagram(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="discord" className="form__label">Discord</label>
                                            <input id="discord" type="text" name="discord"
                                                   className="form__input form__input--link"
                                                   onChange={e => setDiscord(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="reddit" className="form__label">Reddit</label>
                                            <input id="reddit" type="text" name="reddit"
                                                   className="form__input form__input--link"
                                                   onChange={e => setReddit(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="github" className="form__label">Github</label>
                                            <input id="github" type="text" name="github"
                                                   className="form__input form__input--link"
                                                   onChange={e => setGithub(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="youtube" className="form__label">Youtube</label>
                                            <input id="youtube" type="text" name="youtube"
                                                   className="form__input form__input--link"
                                                   onChange={e => setYoutube(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="telegramChannel" className="form__label">
                                                Telegram Channel
                                            </label>
                                            <input id="telegramChannel" type="text" name="telegramChannel"
                                                   className="form__input form__input--link"
                                                   onChange={e => setTelegramChannel(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-xl-4">
                                        <div className="form__group">
                                            <label htmlFor="telegramGroup" className="form__label">
                                                Telegram Group
                                            </label>
                                            <input id="telegramGroup" type="text" name="telegramGroup"
                                                   className="form__input form__input--link"
                                                   onChange={e => setTelegramGroup(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="description" className="form__label">Description</label>
                                            <textarea id="description" name="description"
                                                      className="form__textarea"
                                                      onChange={e => setDescription(e.target.value)}/>/>
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

export default CreateLaunchpadStepOne;