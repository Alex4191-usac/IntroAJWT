const db = require('../utils/db');

async function authenticateUser(username, password){
    try {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
        connection.release();
        if(rows.length === 0){
            throw new Error('User not found');
        }
        const user = rows[0];
        const isPasswordCorrect = user.password === password;
        // const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            throw new Error('Password incorrect');
        }
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = { authenticateUser };