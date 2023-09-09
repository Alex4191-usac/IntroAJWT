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

  async function getArticleById(req, res) {
    const id = req.userId;
    console.log('se obtiene el id del usuario', id); 
    try {
      const articles = await articleService.getArticleById(id);
      return res.json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { getAllArticles, getArticleById };