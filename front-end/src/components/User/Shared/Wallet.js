import React, {useState, useEffect} from 'react';
import {ethers} from "ethers";
import useWeb3Store from "../../../store/web3Store";
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import {errorSweetAlertOptions} from "../../../utils/helpers";

const mySweetAlert = withReactContent(Swal);

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

    useEffect(() => {

        // it creates a loop
        // window.ethereum.on("connect", () => {
        //     window.location.reload();
        // });
        //
        // window.ethereum.on("disconnect", () => {
        //     window.location.reload();
        // });

        window.ethereum.on("chainChanged", () => {
            window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
            window.location.reload();
        });

        // window.ethereum.addEventListener('chainChanged', () => {
        //     window.location.reload();
        // });
        // window.ethereum.addEventListener('accountsChanged', () => {
        //     window.location.reload();
        // });
        //
        // return () => {
        //     window.removeEventListener("chainChanged", () => {
        //
        //     });
        //     window.removeEventListener("accountsChanged", () => {
        //
        //     });
        // };
    });

    function trimText(txt) {
        const begin = txt.substring(0, 5);
        const finish = txt.substr(38);
        return `${begin}...${finish}`;
    }

    const onClickHandler = async (e) => {
        e.preventDefault();

        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            const firstPublicAddress = await provider.getSigner().getAddress();

            const {chainId} = await provider.getNetwork();
            if (chainId.toString() !== process.env.REACT_APP_CHAIN_ID) {
                const sweetAlertOptions = errorSweetAlertOptions({
                    text: 'Wrong Network! Please switch to Binance chain network'
                });
                mySweetAlert.fire(sweetAlertOptions);

                // send switch network request
                // window.ethereum.request({
                //     method: "wallet_addEthereumChain",
                //     params: [{
                //         chainId: "0x89",
                //         rpcUrls: ["https://rpc-mainnet.matic.network/"],
                //         chainName: "Matic Mainnet",
                //         nativeCurrency: {
                //             name: "MATIC",
                //             symbol: "MATIC",
                //             decimals: 18
                //         },
                //         blockExplorerUrls: ["https://polygonscan.com/"]
                //     }]
                // });
            } else {
                setProvider(provider);
                setPublicAddress(firstPublicAddress);
                setNetworkId(chainId);

                if (props.prevRoute) {
                    console.log('aa', props.prevRoute);
                    return navigate(props.prevRoute);
                }

            }
        } else {
            const sweetAlertOptions = errorSweetAlertOptions({
                text: 'No wallet found! Please install Metamask wallet and try again.'
            });
            mySweetAlert.fire(sweetAlertOptions);
        }

    }

    return (
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