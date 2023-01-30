import React, {useState} from 'react';
import DateTimePicker from "react-datetime-picker";
import useWeb3Store from "../../../store/web3Store";
import {useDispatch, useSelector} from "react-redux";
import {
    checkTokenValidity,
    createLaunchpad,
    createLaunchpadBlockchain,
    updateLaunchpad
} from "../../../store/LaunchpadThunk";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import {loadingSweetAlertOptions} from "../../../utils/helpers";
import SectionTitle from "./SectionTitle";

const mySweetAlert = withReactContent(Swal);

const CreateLaunchpadStepOne = (props) => {
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


    const handleFormSubmission = async (e) => {
        e.preventDefault();

        dispatch(createLaunchpadBlockchain({
            provider, tokenContractAddress: props.tokenContractAddress,
            networkId, presaleRate, softCap, hardCap, minBuy, maxBuy,
            startDate: Math.floor(start.getTime() / 1000),
            stopDate: Math.floor(stop.getTime() / 1000),
        }));

        // if (!isUpdated) {
        // add some codes
        // } else {
        // return navigate(`/launchpads/create/${networkId}/${tokenContractAddress}/add-more-details`);
        // }


    }

    // const onNextButtonClickHandle = () => {
    //
    // }

    const onPrevButtonClickHandle = () => {
        props.onPrevStep();
    }

    if (!props.tokenContractAddress) {
        return <div>Loading...</div>;
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

                            <SectionTitle step={2}/>
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

                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <button type="submit" className="form__btn form__btn--small"
                                                    style={{width: '100%'}}
                                                    onClick={onPrevButtonClickHandle}>
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