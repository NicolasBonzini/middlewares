
const auth = (req, res, next) => {
    const userName = req.query.user;
    if(userName === "Nicolas"){
        next();
    }else{
        res.render('404');
    }
}

module.exports = auth;