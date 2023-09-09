
const userService = require('../services/userService');

async function getAllUsers(req, res) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUser(req, res) {
  const userId = req.params.userId;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getAllUsers, getUser };