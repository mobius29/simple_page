const { AuthDAO } = require('../../DAO');

const SignupForm = async (req, res, next) => {
    try {
        res.render('./auth/sign-up.pug');
    } catch(e){
        next(e);
    }
};

const SigninForm = async(req, res, next) => {
    try {
        res.render('./auth/sign-in.pug');
    } catch(e){
        next(e);
    }
};

const Signup = async (req, res, next) => {
    try {
        const { userName } = req.body;
        const { password } = req.body;
        const { displayName } = req.body;
        const { introduce } = req.body;
        const { gender } = req.body;
        
        AuthDAO.sign_up(userName, password, displayName, introduce, gender);

        res.redirect('/');
    } catch(e){
        next(e);
    }
};

module.exports = {
    SignupForm,
    SigninForm,
    Signup,
}