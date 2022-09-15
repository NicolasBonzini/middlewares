
const requestLog = (req, res, next) => {
    req.name = req.query.name;
    next();
}

module.exports = requestLog