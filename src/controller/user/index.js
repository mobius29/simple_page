const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');

router.get('/', ctrl.getList);
router.get('/users', ctrl.getUser);

module.exports = router;