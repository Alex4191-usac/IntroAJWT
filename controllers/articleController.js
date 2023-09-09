const articleService = require('../services/articleService');

async function getAllArticles(req, res) {
    try {
      const articles = await articleService.getAllArticles();
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = { getAllArticles };