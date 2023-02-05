const Launchpad = require('../../../mvc/models/Launchpad');
const {validationResult} = require('express-validator');

module.exports.create = async (req, res, next) => {

    // check for validation
    const possibleErrors = validationResult(req);
    if (!possibleErrors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            data: {message: 'Validation Error', content: possibleErrors.array()}
        });
    }

    const launchpadName = req.body.name;
    const userId = req.userId;

    const launchpadConstructorOption = {
        name: launchpadName,
        userId: userId
    }

    try {
        const prepareObject = await new Launchpad(launchpadConstructorOption);
        const newLaunchpad = await prepareObject.save();
        res.status(200).json({status: 'success', data: {message: 'Create successfully', launchpad: newLaunchpad}})
    } catch (e) {
        if (!e.statusCode) {
            e.statusCode = 500;
        }
        next(e);
    }

}

module.exports.read = (req, res, next) => {

}

module.exports.read = (req, res, next) => {

}

module.exports.readAll = (req, res, next) => {

}

module.exports.update = (req, res, next) => {

}

module.exports.delete = (req, res, next) => {

}