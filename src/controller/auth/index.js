const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');

router.get('/sign-up', ctrl.SignupForm);
router.get('/sign-in', ctrl.SigninForm);

router.post('/sign-up', ctrl.Signup);
router.post('/sign-in', ctrl.Signin);

router.get('/sign-out', ctrl.Signout);

module.exports = router;