import React, {useState, useEffect} from 'react';
import {ethers} from "ethers";
import useWeb3Store from "../../../store/web3Store";
import {useNavigate} from 'react-router-dom';

const Wallet = (props) => {
    const setProvider = useWeb3Store(state => state.setProvider);
    const setPublicAddress = useWeb3Store(state => state.setPublicAddress);
    const setNetworkId = useWeb3Store(state => state.setNetworkId);
    const publicAddress = useWeb3Store(state => state.publicAddress);
    const [finalPublicAddress, setFinalPublicAddress] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (publicAddress) {
            setFinalPublicAddress(publicAddress);
        }
    }, [publicAddress]);

    function trimText(txt) {
        const begin = txt.substring(0, 5);
        const finish = txt.substr(38);
        return `${begin}...${finish}`;
    }

    const onClickHandler = async (e) => {
        e.preventDefault();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        setProvider(provider);

        const firstPublicAddress = await provider.getSigner().getAddress();
        setPublicAddress(firstPublicAddress);

        const {chainId} = await provider.getNetwork();
        setNetworkId(chainId);

        if (props.prevRoute) {
            console.log('aa', props.prevRoute);
            return navigate(props.prevRoute);
        }
    }

    return(
        <React.Fragment>
            {/*wallet*/}
            <a href="#" className="header__cta open-modal" onClick={onClickHandler}>
                {!finalPublicAddress &&
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"/>
                        </svg>
                        <span>Connect</span>
                    </>
                }
                {finalPublicAddress &&
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"/>
                        </svg>
                        <span>{trimText(finalPublicAddress)}</span>
                    </>
                }
            </a>
            {/*end wallet*/}
        </React.Fragment>
    )
}

export default Wallet;