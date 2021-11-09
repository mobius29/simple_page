const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');

router.get('/', ctrl.getList);

module.exports = router;