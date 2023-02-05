// Role-Based Access Control
// createOwn - readOwn - updateOwn - deleteOwn
// createAny - readAny - updateAny - deleteAny
const platformRoles = require('../../utils/roles');
const AccessControl = require("accesscontrol");
const ac = new AccessControl();

/*
module.exports.roles = [
    'user',
    'projectOwner',
    'admin'
]
*/

const roles = () => {
    ac.grant(platformRoles.roles[0])
        // .readAny("launchpad")
        // .readOwn("user")
        // .updateOwn('user')


    // ac.grant(platformRoles.roles[1])


    ac.grant(platformRoles.roles[2])
        .createAny("launchpad")
        .readAny("launchpad")
        .updateAny("launchpad")
        .deleteAny("launchpad")
        //
        // .createAny("user")
        // .readAny("user")
        // .updateAny("user")
        // .deleteAny("user")
    return ac;
};

module.exports = roles;