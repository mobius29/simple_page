const indexPage = async(req, res, next) => {
    try {
        res.render('index.pug');
    } catch(e){
        next(e);
    }
}

module.exports = {
    indexPage,
}