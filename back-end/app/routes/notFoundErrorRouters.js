module.exports.notFoundErrorRouter = (req, res, next) => {
    res.status(404).json(
        {
            status: 'error',
            data: {
                message: '404'
            }
        }
    );
}