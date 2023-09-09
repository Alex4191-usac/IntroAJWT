const  db  = require('../utils/db');

async function getUsers() {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM users');
    connection.release(); 
    return rows;
  } catch (error) {
    throw error; 
  }
}

async function getUserById(userId) {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM users WHERE user_id = ?', [userId]);
    connection.release(); 
    return rows[0];
  } catch (error) {
    throw error; 
  }
}

module.exports = { getUsers, getUserById };

