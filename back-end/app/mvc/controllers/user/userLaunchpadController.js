const Launchpad = require('../../../mvc/models/Launchpad');
const axios = require('axios');
const ethers = require('ethers');


module.exports.create = async (req, res, next) => {
    const tokenContractAddress = req.body.tokenContractAddress;

    try {
        const axiosOptions = {
            url: process.env.BSC_SCAN_API_URL,
            method: 'GET',
            params: {
                module: 'stats',
                action: 'tokensupply',
                contractAddress: tokenContractAddress,
                apikey: process.env.BSC_SCAN_API_KEY
            }
        }
        const result = await axios(axiosOptions);
        // console.log('the BSC api result is: ', result.data);

        if (result.data.result === '0') {
            return res.status(404).json({
                status: 'fail',
                data: {
                    tokenContractAddress: 'The token contract address is invalid'
                }
            });
        }

    } catch (e) {
        console.log(e);
    }

    const userId = req.userId;
    const networkId = req.params.networkId;
    let isDeployed = req.body.isDeployed;
    if (isDeployed === '0') {
        isDeployed = false;
    } else if (isDeployed === '1') {
        isDeployed = true;
    }
    const constructorOptions = {
        tokenContractAddress,
        networkId,
        userId,
        isDeployed,
    }
    try {
        const launchpad = await Launchpad(constructorOptions);
        const processedLaunchpad = await launchpad.save();
        return res.status(201).json({
            status: 'success',
            data: {launchpad: processedLaunchpad}
        });
    } catch (e) {
        console.log(e);
        if (!e.statusCode) {
            e.statusCode = 500;
        }
        next(e);
    }
}

module.exports.read = async (req, res, next) => {
    const {networkId, launchpadContractAddress} = req.params;

    const singleLaunchpad = await Launchpad.findOne({
        networkId,
        contractAddress: launchpadContractAddress
    });

    try {
        if (!singleLaunchpad) {
            const error = new Error('Could not find Launchpad.');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({status: 'success', data: {launchpad: singleLaunchpad}});

    } catch (error) {
        if (!error.statusCode) {
            error.statuCode = 500;
        }
        next(error);
    }
}

module.exports.readAll = async (req, res, next) => {
    const page = parseInt(req.query.page);

    try {
        const launchpadPerPage = 9;
        const totalLaunchpads = await Launchpad.find().count();
        const selectedLaunchpads = await Launchpad.find()
            .skip((page - 1) * launchpadPerPage)
            .limit(launchpadPerPage);

        res.json({
            status: 'success',
            data: {
                totalLaunchpads: totalLaunchpads,
                launchpads: selectedLaunchpads,
                hasNextPage: launchpadPerPage * page < totalLaunchpads,
                nextPage: page + 1,
                hasPreviousPage: page > 1,
                previousPage: page - 1,
                lastPage: Math.ceil(totalLaunchpads / launchpadPerPage)
            }
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports.update = async (req, res, next) => {
    const {
        presaleRate,
        softCap,
        hardCap,
        minBuy,
        maxBuy,
        refundType,
        router,
        dexLiquidity,
        dexListingRate,
        startDate,
        stopDate,
        liquidityLockup,
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
        description,
        contractAddress
    } = req.body;

    // res.status(404).json({
    //     status: 'fail',
    //     data: {
    //         launchpad: 'invalid launchpad'
    //     }
    // });

    const networkId = req.params.networkId;
    const tokenContract = req.params.tokenContractAddress;
    let isDeployed = req.body.isDeployed;
    if (isDeployed === '0') {
        isDeployed = false;
    } else if (isDeployed === '1') {
        isDeployed = true;
    }
    try {
        const updatedLaunchpad = await Launchpad.updateOne(
            {tokenContractAddress: tokenContract, networkId},
            {
                presaleRate,
                softCap,
                hardCap,
                minBuy,
                maxBuy,
                refundType,
                router,
                dexLiquidity,
                dexListingRate,
                startDate,
                stopDate,
                liquidityLockup,
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
                description,
                isDeployed,
                contractAddress
            });

        return res.status(200).json({status: 'success', data: {launchpad: updatedLaunchpad}})

    } catch (e) {
        console.log(e);
    }
}

module.exports.delete = async (req, res, next) => {

}