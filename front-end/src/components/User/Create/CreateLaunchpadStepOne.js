import React, {useEffect, useState} from 'react';
import DateTimePicker from "react-datetime-picker";
import useWeb3Store from "../../../store/web3Store";
import {useDispatch, useSelector} from "react-redux";
import {checkTokenValidity, createLaunchpad, updateLaunchpad} from "../../../store/LaunchpadThunk";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import {loadingSweetAlertOptions} from "../../../utils/helpers";
import {ethers} from "ethers";
import {Helmet} from "react-helmet";
import SectionTitle from "./SectionTitle";

const mySweetAlert = withReactContent(Swal);

const CreateLaunchpadStepOne = (props) => {
    const [tokenContractAddress, setTokenContractAddress] = useState();
    const [finalTotalSupply, setFinalTotalSupply] = useState();
    const dispatch = useDispatch();
    const isTokenContractValid = useSelector(state => state.createLaunchpad.isValid);
    const responseNetworkId = useSelector(state => state.createLaunchpad.networkId);
    const responseContractAddress = useSelector(state => state.createLaunchpad.contractAddress);
    const totalSupply = useSelector(state => state.createLaunchpad.totalSupply);

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        // mySweetAlert.fire(loadingSweetAlertOptions);
        await dispatch(checkTokenValidity({tokenContractAddress}));
        // mySweetAlert.close();

        // mySweetAlert.fire({
        //     icon: 'success',
        //     title: 'Token Contract Address is valid.',
        //     text: 'You can go to the next step',
        //     background: '#1d263b',
        //     color: 'white',
        //     allowOutsideClick: false,
        //     confirmButtonText: 'Next Step',
        // }).then(({isConfirmed}) => {
        //     // {
        //     //     isConfirmed: true, isDenied: false, isDismissed : false, value : true
        //     // }
        //     if (isConfirmed) {
        //         props.onNextStep(2);
        //     }
        // });

    }

    return (
        <React.Fragment>

            <Helmet>
                <title>NFT Marketplace for handicrafts | NFT by Hand</title>
            </Helmet>

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

                            <SectionTitle step={1}/>
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

                                    {totalSupply &&
                                        <div className="col-12 token-details-wrapper">
                                            <div className="token-details-container">
                                                <ul className="token-details-list">
                                                    <li>Token Name: <span className="token-details-list-span">-</span>
                                                    </li>
                                                    <li>Token Symbol: <span className="token-details-list-span">-</span>
                                                    </li>
                                                    <li>Total Supply: <span
                                                        className="token-details-list-span">{ethers.utils.formatUnits(totalSupply)}</span>
                                                    </li>
                                                    <li>Decimals: <span className="token-details-list-span">-</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    }

                                    <div className="col-12">
                                        <button type="submit" className="form__btn form__btn--small"
                                                style={{width: '100%'}}>
                                            Next
                                        </button>
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