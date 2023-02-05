const roles = require('./roles');

module.exports.grantAccess = (action, resource) => {
    return async (req, res, next) => {
        try {
            const permission = roles().can(req.role)[action](resource);
            if (!permission.granted) {
                return res.status(401).json({
                    status: 'error',
                    data: {
                        error: "You don't have enough permission to perform this action"
                    }
                });
            }
            next();
        } catch (error) {
            next(error)
        }
    }
}
