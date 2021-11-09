const indexPage = async(req, res, next) => {
    try {
        user = req.session.user;
        res.render('index.pug', {user});
    } catch(e){
        next(e);
    }
}

module.exports = {
    indexPage,
}