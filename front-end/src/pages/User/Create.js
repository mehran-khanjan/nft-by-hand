import React, {useState, useEffect} from 'react';
import CreateLaunchpadStepOne from "../../components/User/Create/CreateLaunchpadStepOne";
import CreateLaunchpadStepTwo from "../../components/User/Create/CreateLaunchpadStepTwo";
import CreateLaunchpadStepThree from "../../components/User/Create/CreateLaunchpadStepThree";
import CreateLaunchpadStepFour from "../../components/User/Create/CreateLaunchpadStepFour";
import CreateLaunchpadStepFive from "../../components/User/Create/CreateLaunchpadStepFive";
import {useSelector} from "react-redux";

const Create = () => {
    const [step, setStep] = useState(1);
    const isTokenValid = useSelector(state => state.checkTokenContractValidity.isTokenValid);
    const contractAddress = useSelector(state => state.checkTokenContractValidity.contractAddress);
    const preSaleContractAddress = useSelector(state => state.createLaunchpadBlockchain.launchpadContractAddress);

    // Go to the step 2
    useEffect(() => {
        if (isTokenValid) {
            onNextStepHandle();
        }
    }, [isTokenValid]);

    // Go to the step 3
    useEffect(() => {
        if (preSaleContractAddress) {
            onNextStepHandle();
        }
    }, [preSaleContractAddress]);

    const onNextStepHandle = () => {
        setStep(prevState => prevState + 1);
    }

    const onPrevStepHandle = () => {
        setStep(prevState => prevState - 1);
    }

    switch (step) {
        case 1:
            return <CreateLaunchpadStepOne onNextStep={onNextStepHandle}/>
        case 2:
            return <CreateLaunchpadStepTwo onNextStep={onNextStepHandle} onPrevStep={onPrevStepHandle} tokenContractAddress={contractAddress}/>
        case 3:
            return <CreateLaunchpadStepThree onNextStep={onNextStepHandle} onPrevStep={onPrevStepHandle}/>
        case 4:
            return <CreateLaunchpadStepFour onNextStep={onNextStepHandle} onPrevStep={onPrevStepHandle}/>
        case 5:
            return <CreateLaunchpadStepFive onPrevStep={onPrevStepHandle}/>
        default:
            return <CreateLaunchpadStepOne onNextStep={onNextStepHandle}/>
    }
}

export default Create;