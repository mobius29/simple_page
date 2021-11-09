const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');

router.get('/', ctrl.getList);
router.get('/user', ctrl.getUser);

module.exports = router;