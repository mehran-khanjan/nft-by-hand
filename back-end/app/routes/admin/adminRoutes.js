const express = require('express');
const adminLaunchpadController = require('../../mvc/controllers/admin/adminLaunchpadController');
const adminUserController = require('../../mvc/controllers/admin/adminUserController');
const authenticator = require('../../middlewares/authenticator/authenticator');
const adminLaunchpadValidator = require('../../middlewares/validators/launchpadValidators');
const authorization = require('../../middlewares/authorization/authorization');

const router = express.Router();

// router.post('/api/v1/admin/launchpads',
//     authenticator.isAuthenticate,
//     authorization.grantAccess('createAny', 'launchpad'),
//     adminLaunchpadValidator.checkLaunchpadCreationValidation,
//     adminLaunchpadController.create);
// router.get('/api/v1/admin/launchpads/:contractAddress',
//     authenticator.isAuthenticate,
//     authorization.grantAccess('readAny', 'launchpad'),
//     adminLaunchpadValidator.checkLaunchpadGetValidation,
//     adminLaunchpadController.read);
// router.get('/api/v1/admin/launchpads',
//     authenticator.isAuthenticate,
//     authorization.grantAccess('readAny', 'launchpad'),
//     adminLaunchpadValidator.checkLaunchpadGetAllValidation,
//     adminLaunchpadController.readAll);
// router.patch('/api/v1/admin/launchpads/:contractAddress',
//     authenticator.isAuthenticate,
//     authorization.grantAccess('updateAny', 'launchpad'),
//     adminLaunchpadValidator.checkLaunchpadUpdateValidation,
//     adminLaunchpadController.update);
// router.delete('/api/v1/admin/launchpads/:contractAddress',
//     authenticator.isAuthenticate,
//     authorization.grantAccess('deleteAny', 'launchpad'),
//     adminLaunchpadValidator.checkLaunchpadDeleteValidation,
//     adminLaunchpadController.delete);

// router.post('/api/v1/admin/users', adminUserController.create);
// router.get('/api/v1/admin/users/:publicAddress', adminUserController.read);
// router.get('/api/v1/admin/users', adminUserController.readAll);
// router.patch('/api/v1/admin/users/:publicAddress', adminUserController.update);
// router.delete('/api/v1/admin/users/:publicAddress', adminUserController.delete);

module.exports = router;