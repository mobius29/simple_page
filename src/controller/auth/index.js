const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');

router.get('/sign-up', ctrl.SignupForm);
router.get('/sign-in', ctrl.SigninForm);

module.exports = router;