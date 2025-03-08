
const jwt = require('jsonwebtoken');
const jwtKey = 'codeTask';
class AdminContorller {
    static async adminLogin(req, res) {
        try {
            const { email, password } = req.body;
            if (email === "admin@codesfortomorrow.com", password === "Admin123!@#") {
                const jwtToken = await jwt.sign({ email }, jwtKey, { expiresIn: '3h' });

                return res.status(200).json({ token: jwtToken });
            }

            return res.status(401).json({ message: "Invalid email or password" });
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
}

module.exports = AdminContorller;