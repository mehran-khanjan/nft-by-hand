const {body} = require('express-validator');
const User = require('../../mvc/models/User');
const platformRoles = require('../../utils/roles');

module.exports.checkGetNonceValidation = [
    body('publicAddress')
        .not().isEmpty().withMessage('Fill the public address input')
        .isString().withMessage('Enter a string value')
        // it does not work
        // .isEthereumAddress().withMessage('Invalid Ethereum address')
        .trim().escape().withMessage('Sanitization error')
        .isLength({min: 42, max: 42}).withMessage('Invalid Ethereum address')
]

module.exports.checkUserSignupValidation = [
    body('role')
        .not().isEmpty().withMessage('Fill the role input')
        .isString().withMessage('Enter a string value')
        // .contains(['user', 'admin']).withMessage('Invalid role')
        .trim().escape().withMessage('Sanitization error')
        .custom(value => {
            const roles = platformRoles.roles;
            const isValidRole = roles.includes(value);
            if (!isValidRole) {
                throw new Error('Invalid role');
            }
            return true;
        })
];

module.exports.checkUserLoginValidatoin = [
    body('signature')
        .not().isEmpty().withMessage('Fill the signature input')
        .isString().withMessage('Enter a string value')
        .trim().escape().withMessage('Sanitization error')
        .isLength({min: 132, max: 132}).withMessage('Invalid signature')
];

