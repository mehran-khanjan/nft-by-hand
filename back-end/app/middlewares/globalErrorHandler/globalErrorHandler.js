module.exports = (error, req, res, next) => {
    const status = error.statusCode || 500;
    res.status(status).json(
        {
            status: 'error',
            data: {
                message: error.message,
                data: error.data
            }
        }
    );
}