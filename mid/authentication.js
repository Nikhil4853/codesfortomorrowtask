const jwt = require('jsonwebtoken');
const jwtKey = 'codeTask';
const authentication = async (req, res, next) => {

    const auth = req.headers['authentication'];
    if (!auth) {
        return res.status(401).json({ message: "authentication token is required." });
    }
    jwt.verify(auth, jwtKey, (error, user) => {
        if (error) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next()
    })
}

module.exports = authentication;