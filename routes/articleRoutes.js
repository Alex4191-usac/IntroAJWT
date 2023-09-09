const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { verifyToken} = require('../controllers/authController');

router.get('/' ,articleController.getAllArticles);
router.get('/article', verifyToken, articleController.getArticleById);
module.exports = router;