import {notificationActions} from "../store/ReduxStore";
import {ethers} from "ethers";
import {parseLogs} from "./helpers";

export const getter = async (contractAddress, abi, provider, method, args) => {
    try {
        // const contract = await provider.contract().at(contractAddress);
        const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());
        try {
            // console.log('blockchain args are: ', ...args);
            const data = await contract[method](...args);
            // console.log('blockchain data is: ', data);

            return data;
        } catch (e) {
            console.log(e);
        }

    } catch (e) {
        console.log(e);
        // contract not found
    }

}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// export const setter = async (dispatch , provider, method, contractAddress, sendOptions, args) => {
export const setter = async (contractAddress, abi, provider, method, args, eventName, dispatch) => {
    if (provider) {
        try {
            // const contract = await provider.contract().at(contractAddress);
            const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());
            try {
                //const data = await contract[method](...args).send(sendOptions);
                console.log('blockchain args are: ', ...args);
                const tx = await contract[method](...args);
                console.log('tx is: ', tx);

                // const receipt = await data.wait();
                const receipt = await provider.waitForTransaction(tx.hash, 3);
                // console.log('the receipt log is: ', receipt.logs);

                //dispatch(notificationActions.showSnackBar('Transaction sent. Waiting for confirmation'));
                // await timeout(10000);

                let issuedEvents;
                if (eventName) {
                    issuedEvents = parseLogs(receipt, eventName, abi);
                }

                //dispatch(notificationActions.showSnackBar(`Successful transaction: TX id: ${data}`));
                return {
                    receipt,
                    issuedEvents
                };
            } catch (e) {
                //dispatch(notificationActions.showSnackBar(e));
                console.log(`${method} - ${contractAddress} - error:`, e);
            }

        } catch (e) {
            //dispatch(notificationActions.showSnackBar(e));
            console.log(`${method} - ${contractAddress} - error:`, e);
        }

    } else {
        //dispatch(notificationActions.showSnackBar('Connect wallet first'));
    }
}