const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await authService.authenticateUser(username, password);
        //Generamos el Token ( recibe un objeto con la info que queremos guardar en el token, la clave secreta y un objeto con opciones)
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
    const bearer = token.split(' ')[1]; // obtenemos la parte del token que nos interesa
    // Bearer "ASLDKFJALSDKFJ"
    jwt.verify(bearer, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message: 'Invalid token'});
        }
        req.userId = decoded.id; // decodeamos el token y obtenemos el id del usuario
        next();
    
    });
}

module.exports = { login, verifyToken };