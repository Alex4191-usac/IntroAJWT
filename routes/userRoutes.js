const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUser);
router.post('/login', authController.login);

module.exports = router;