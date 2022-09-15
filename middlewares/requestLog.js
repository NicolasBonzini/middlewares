
const requestLog = (req, res, next) => {
    const d = new Date();
    console.log(`${d.toLocaleDateString()} ${d.toLocaleTimeString()} ${req.method} ${req.path}`);
    next();
}

module.exports = requestLog