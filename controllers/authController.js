const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await authService.authenticateUser(username, password);
        //generate token
        const token = jwt.sign({id: user.user_id}, process.env.JWT_SECRET, {expiresIn: '30s'});
        res.json({ token });
    } catch (error) {
        res.status(401).json({message: 'Invalid username or password'});
    }
}

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if(!token){
        return res.status(401).json({message: 'No token provided'});
    }
    const bearer = token.split(' ')[1];
    // Bearer "ASLDKFJALSDKFJ"
    jwt.verify(bearer, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message: 'Invalid token'});
        }

        req.userId = decoded.id;
        next();
    
    });
}

module.exports = { login, verifyToken };