const express = require('express');
const userAuthController = require('../../mvc/controllers/user/userAuthController');
const userController = require('../../mvc/controllers/user/userController');
const userTransactionController = require('../../mvc/controllers/user/userTransactionController');
const userAuthValidator = require('../../middlewares/validators/userAuthValidators');
const userLaunchpadController = require('../../mvc/controllers/user/userLaunchpadController');
const authenticator = require("../../middlewares/authenticator/authenticator");


const router = express.Router();

// create a new launchpad
router.post('/api/v1/launchpads/:networkId',
    authenticator.isAuthenticate,
    userLaunchpadController.create);
router.get('/api/v1/launchpads/:networkId/:launchpadContractAddress',
    authenticator.isAuthenticate,
    userLaunchpadController.read);
router.get('/api/v1/launchpads/:networkId',
    authenticator.isAuthenticate,
    userLaunchpadController.readAll);
router.patch('/api/v1/launchpads/:networkId/:tokenContractAddress',
    authenticator.isAuthenticate,
    userLaunchpadController.update);
router.delete('/api/v1/launchpads/:networkId/:tokenContractAddress',
    authenticator.isAuthenticate,
    userLaunchpadController.delete)

// User authentication
router.post('/api/v1/get-nonce',
    userAuthValidator.checkGetNonceValidation,
    userAuthController.getNonce)
router.post('/api/v1/signup',
    userAuthValidator.checkGetNonceValidation,
    userAuthValidator.checkUserSignupValidation,
    userAuthController.signup);
router.post('/api/v1/login',
    userAuthValidator.checkGetNonceValidation,
    userAuthValidator.checkUserSignupValidation,
    userAuthValidator.checkUserLoginValidatoin,
    userAuthController.login);

// router.post('/users', userController.create);
// router.get('/users/:publicAddress', userController.read);
// router.patch('/users/:publicAddress', userController.update);
// router.delete('/users/:publicAddress', userController.delete);

// transactions routes
// router.post('/api/v1/admin/transactions', userTransactionController.create);
// router.get('/api/v1/admin/transactions/:txId', userTransactionController.read);
// router.get('/api/v1/admin/transactions', userTransactionController.readAll);
// router.patch('/api/v1/admin/transactions/:txId', userTransactionController.update);
// router.delete('/api/v1/admin/transactions/:txId', userTransactionController.delete);

module.exports = router;