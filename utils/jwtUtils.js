import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const generateToken = (userId, username) => {
    return jwt.sign({ userId, username }, SECRET_KEY);
};

export const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};