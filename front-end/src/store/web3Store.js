import create from 'zustand';

const useWeb3Store = create((set) => {
        return {
            web3: null,
            publicAddress: null,
            networkId: null,
            setProvider: (newWeb3) => {
                set((state) => {
                    return {
                        web3: newWeb3
                    }
                })
            },
            setPublicAddress: (publicAddress) => {
                set((state) => {
                    return {
                        publicAddress: publicAddress
                    }
                })
            },
            setNetworkId: (networkId) => {
                set((state) => {
                    return {
                        networkId: networkId
                    }
                })
            }
        }
    }
);

export default useWeb3Store;