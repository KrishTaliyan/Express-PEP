import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key-change-this';

export const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log("Auth Failed: No token provided");
        return res.status(401).json({
            message: "No token provided",
            date: new Date().toISOString(),
        });
    }

    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log("Auth Checked: Token verified");
        req.user = {
            ...decoded,
            date: new Date().toISOString(),
        };
        return next();
    } catch (error) {
        console.log("Auth Failed: Invalid token", error.message);
        return res.status(401).json({
            message: "Invalid or expired token",
            date: new Date().toISOString(),
            error: error.message,
        });
    }
};