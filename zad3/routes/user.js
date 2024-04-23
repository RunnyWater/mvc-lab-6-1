const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/set', userController.getSetUserSession);
router.post('/set', userController.setUserSession);

module.exports = router;
