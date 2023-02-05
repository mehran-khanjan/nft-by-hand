const {body} = require('express-validator');
const User = require('../../mvc/model/User');

module.exports.login = [
    body('email')
        .not().isEmpty().withMessage('Fill the email input')
        .isEmail().withMessage('Please enter an email address')
        .normalizeEmail().withMessage('Please enter a valid email')
        .custom((value) => {
            return User.findOne({email: value})
                .then(userDoc => {
                    console.log('userDoc is: ', userDoc);
                    if (!userDoc) {
                        return Promise.reject('This user not found.');
                    } else if (userDoc.role !== 'admin') {
                        return Promise.reject('Just admins can login!');
                    }
                });
        }),
    body('password')
        .not().isEmpty().withMessage('Fill the password input')
        .trim().escape().isLength({min: 8}),

    body('role')
        .not().isEmpty().withMessage('Fill the role input')
        // .contains(['user', 'admin']).withMessage('Invalid role')
        .trim().escape()
        .custom(value => {
            // const roles = ['user', 'admin'];
            // const isValidRole = roles.includes(value);
            if (value !== 'admin') {
                throw new Error('Invalid role');
            }
            return true;
        })
];

