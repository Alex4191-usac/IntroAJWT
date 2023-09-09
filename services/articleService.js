const db = require('../utils/db');

async function getAllArticles() {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM articles');
    connection.release();
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllArticles };