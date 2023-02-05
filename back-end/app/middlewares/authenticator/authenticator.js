const jwt = require('jsonwebtoken');

module.exports.isAuthenticate = (req, res, next) => {

    const authHeader = req.get('Authorization');

    // console.log('authHeader', authHeader);

    // Handle by global error middleware
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }

    const token = authHeader.split(' ')[1];

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }


    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }

    //console.log('decoded token is: ', decodedToken);
    req.userId = decodedToken.userId;
    req.publicAddress = decodedToken.publicAddress;
    req.role = decodedToken.role;

    next();
}