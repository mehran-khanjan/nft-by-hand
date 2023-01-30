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
                // add some codes
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

                            <SectionTitle step={3}/>
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