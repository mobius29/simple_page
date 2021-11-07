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

module.exports = {
    SignupForm,
    SigninForm,
}