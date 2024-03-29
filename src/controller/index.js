const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');
const auth = require('./auth');
const user = require('./user');

router.get('/', ctrl.indexPage);
router.use('/auth', auth);
router.use('/users', user);

module.exports = router;