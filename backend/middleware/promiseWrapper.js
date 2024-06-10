const promiseWrapper = (asyncFn) => {
    return (req, res, next) => {
        Promise.resolve(asyncFn(req, res, next).catch((err) => next(err)));
    }
}

module.exports = promiseWrapper;