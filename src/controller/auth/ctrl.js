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
        const { userName, password, displayName, introduce, gender } = req.body;

        await AuthDAO.sign_up(userName, password, displayName, introduce, gender);

        res.redirect('/');
    } catch(e){
        next(e);
    }
};

const Signin = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        if(!userName || !password) throw new Error("black is not allowed");

        const get_pw = await AuthDAO.sign_in(userName);
        if(!get_pw) throw new Error("ID is not correct");

        if(get_pw.password === password) res.redirect('/');

        else throw new Error("Password is not correct");
    } catch(e){
        next(e);
    }
}

module.exports = {
    SignupForm,
    SigninForm,
    Signup,
    Signin,
}