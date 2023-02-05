const ethers = require('ethers');
const User = require('../../models/User');
const {recoverPersonalSignature} = require('eth-sig-util');
const {bufferToHex} = require('ethereumjs-util');
const jwt = require('jsonwebtoken');
const {v4: uuidv4} = require('uuid');
const {validationResult} = require('express-validator');

module.exports.checkSignIn = (req, res, next) => {
    const {address} = req.query;

    // *** check for old user or new user
    // let user = users[address]

    // if (!user) {
    // *** create a new user
    //     user = {
    //         address,
    //         nonce: Math.floor(Math.random() * 10000000)
    //     }
    //     users[address] = user
    // } else {
    // *** save nonce for old user
    //     const nonce = Math.floor(Math.random() * 10000000)
    //     user.nonce = nonce
    //     users[address] = user
    // }

    // res.status(200).json(user)

    res.json({
        data: 'Done'
    })
}

module.exports.verify = (req, res, next) => {
    // let authenticated = false
    // const {address, signature} = req.query;
    //
    // // const user = users[address]
    console.log('the uuid is: ', uuidv4());
    const decodedAddress = ethers.utils.verifyMessage(uuidv4(), 'signature')
    // if (address.toLowerCase() === decodedAddress.toLowerCase()) authenticated = true
    // res.status(200).json({authenticated})
}

module.exports.getNonce = async (req, res, next) => {
    // validation error check
    const possibleErrors = validationResult(req);
    if(!possibleErrors.isEmpty()){
        return res.status(400).json({status: 'error', data: {message: 'Validation Error', content: possibleErrors.array()}});
    }

    const publicAddress = req.body.publicAddress;
    const user = await User.findOne({publicAddress: publicAddress.toLowerCase()});
    if (!user) {
        const errorMessage = `User with publicAddress ${publicAddress} is not found in database`;
        return res.status(404).json({status: 'error', data: {message: errorMessage}})
    }

    // update nonce after each login
    res.status(200).json({status: 'success', data: {message: 'The nonce is: ', nonce: user.nonce}});

}

module.exports.signup = async (req, res, next) => {

    const possibleErrors = validationResult(req);
    if (!possibleErrors.isEmpty()) {
        return res.status(400).json({status: 'error', data: {message: 'Validation Error', content: possibleErrors.array()}});
    }

    const publicAddress = req.body.publicAddress;
    const userRole = req.body.role;
    const user = await User.findOne({publicAddress: publicAddress.toLowerCase()});
    if (user) {
        const errorMessage = `User with publicAddress ${publicAddress} was registered.`;
        return res.status(401).json({status: 'error', data: {message: errorMessage}})
    }

    const userConstructorParams = {
        nonce: uuidv4(),
        publicAddress: publicAddress.toLowerCase(),
        role: userRole
    };
    const result = new User(userConstructorParams);

    try {
        const newUser = await result.save();
        return res.status(201).json({
            status: 'success', data: {
                message: 'user created successfully!', nonce: newUser.nonce
            }
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

module.exports.login = async (req, res, next) => {
    const possibleErrors = validationResult(req);
    if(!possibleErrors.isEmpty()) {
        return res.status(400).json({status: 'error', data: {message: 'Validation Error', content: possibleErrors.array()}});
    }

    const {signature, publicAddress} = req.body;

    if (!signature || !publicAddress) {
        return res.status(400)
            .json({status: 'error', data: {message: 'Request should have signature and public Address'}});
    }

    ////////////////////////////////////////////////////
    // Step 1: Get the user with the given publicAddress
    ////////////////////////////////////////////////////

    const user = await User.findOne({publicAddress: publicAddress.toLowerCase()});
    if (!user) {
        const errorMessage = `User with publicAddress ${publicAddress} is not found in database`;
        return res.status(401).json({status: 'error', data: {message: errorMessage}})
    }

    ////////////////////////////////////////////////////
    // Step 2: Verify digital signature
    ////////////////////////////////////////////////////
    // const msg = `I am signing my one-time nonce: ${user.nonce}`;
    const msg = `Welcome to IDO Whale!\n\nClick to sign in.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\nWallet address:\n${publicAddress.toLowerCase()}\n\nNonce:\n${user.nonce}`;

    // We now are in possession of msg, publicAddress and signature. We
    // will use a helper from eth-sig-util to extract the address from the signature
    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const address = recoverPersonalSignature({
        data: msgBufferHex,
        sig: signature,
    });

    // The signature verification is successful if the address found with
    // sigUtil.recoverPersonalSignature matches the initial publicAddress
    // TODO:disable for Postman
    // if (address.toLowerCase() !== publicAddress.toLowerCase()) {
    //     return res.status(401).json({status: 'error', data: {message: 'Signature verification failed'}})
    // }

    ////////////////////////////////////////////////////
    // Step 3: Generate a new nonce for the user
    ////////////////////////////////////////////////////
    user.nonce = uuidv4();
    user.save();


    ////////////////////////////////////////////////////
    // Step 4: Create JWT
    ////////////////////////////////////////////////////

    const token = jwt.sign(
        {
            userId: user.id,
            publicAddress: publicAddress,
            role: user.role
        },
        process.env.JWT_PRIVATE_KEY,
        {
            algorithm: 'HS256',
            expiresIn: '24h'
        }
    );

    if (!token) {
        const newError = new Error('Empty token');
        next(newError);
    }
    res.status(200).json({
        status: 'success', data: {
            message: 'Signature verified.',
            token: token,
            expiresIn: Date.now() + 86400000
        }
    })

}
