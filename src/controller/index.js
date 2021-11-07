const { Router } = require('express');
const router = Router();

const ctrl = require('./ctrl');

router.get('/', ctrl.indexPage);

module.exports = router;