
const userAgent = (req, res, next) => {
    const device = req.get('User-Agent');

    if(device.indexOf('jiji') !== -1){
        res.render('promo')
    }else{
        next();
    }
}

module.exports = userAgent