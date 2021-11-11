const { AuthDAO } = require('../../DAO');
const auth = require('../../lib/authentication');

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

        if(!userName || !password || !displayName || !introduce || !gender) throw new Error("BAD_REQUEST");

        const list = await AuthDAO.chk_dup(userName, displayName);
        if(list) throw new Error("BAD_REQUEST");

        const enc_pw = await auth.generate(password);
        await AuthDAO.sign_up(userName, enc_pw, displayName, introduce, gender);

        res.redirect('/');
    } catch(e){
        next(e);
    }
};

const Signin = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        if(!userName || !password) throw new Error("black is not allowed");

        const get_user = await AuthDAO.sign_in(userName);
        if(!get_user) throw new Error("BAD_REQUEST");
        
        const verify = await auth.verify(password, get_user['password']);
        if(!verify) throw new Error("BAD_REQUEST");

        req.session.user = {
            ID: parseInt(get_user['ID']),
            userName: userName,
            displayName: get_user['displayName'],
            introduce: get_user['introduce'],
            gender: get_user['gender'],
            dateJoined: get_user['dateJoined'],
            isActive: get_user['isActive'],
        };
        
        res.redirect('/');
    } catch(e){
        next(e);
    }
};

const Signout = async (req, res, next) => {
    try {
        req.session.destroy(e => {
            if(e) throw new Error("BAD_REQUEST");
        });
        res.redirect('/');
    } catch(e){
        next (e);
    }
};

module.exports = {
    SignupForm,
    SigninForm,
    Signup,
    Signin,
    Signout,
}