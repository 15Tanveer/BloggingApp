// middleware/authMiddleware.js
import { verifyToken } from '../utils/jwtUtils.js';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. Token is required." });
    }

    try {
        const decoded = verifyToken(token);
        console.log("decode",decoded)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};

export default authenticateToken;
