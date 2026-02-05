let success = true;

export const checkAuth = (req, res, next) => {
    if (success) {
        console.log("Auth Checked");
        // Attach user info for downstream handlers. In real apps, derive from token/session.
        req.user = {
            name: process.env.TEST_USER_NAME || "Krish",
            email: process.env.TEST_USER_EMAIL || "krish@example.com",
            date: new Date().toISOString(),
        };
        return next();
    } else {
        console.log("Auth Failed");
        return res.status(401).json({
            message: "Failed auth",
            date: new Date().toISOString(),
        });
    }
};