const {body, param, query} = require('express-validator');
const Launchpad = require('../../mvc/models/Launchpad')

module.exports.checkLaunchpadCreationValidation = [
    body('name')
        .not().isEmpty().withMessage('Fill the name field')
        .isString().withMessage('Enter a string value')
        .trim().escape().withMessage('Sanitization Error')
]

module.exports.checkLaunchpadGetValidation = [

]

module.exports.checkLaunchpadGetAllValidation = []

module.exports.checkLaunchpadUpdateValidation = []

module.exports.checkLaunchpadDeleteValidation = []