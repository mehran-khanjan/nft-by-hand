const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const launchpadSchema = new Schema({
    tokenContractAddress: {
        type: String,
        required: true
    },
    networkId: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isDeployed: {
        type: Boolean,
        required: true
    },
    // name: {
    //     type: String,
    // },
    contractAddress: {
        type: String
    },
    // tokenAmount: {
    //     type: Number
    // },
    presaleRate: {
        type: Number
    },
    refundType: {
        type: Number
    },
    router: {
        type: Number
    },
    dexLiquidity: {
        type: Number
    },
    dexListingRate: {
        type: Number
    },
    liquidityLockup: {
        type: Number
    },
    softCap: {
        type: Number
    },
    hardCap: {
        type: Number
    },
    minBuy: {
        type: Number
    },
    maxBuy: {
        type: Number
    },
    startDate: {
        type: Number
    },
    stopDate: {
        type: Number
    },
    logoURL: {
        type: String
    },
    websiteURL: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    },
    discord: {
        type: String
    },
    reddit: {
        type: String
    },
    github: {
        type: String
    },
    telegramGroup: {
        type: String
    },
    telegramChannel: {
        type: String
    },
    youtube: {
        type: String
    },
    description: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Launchpad', launchpadSchema);