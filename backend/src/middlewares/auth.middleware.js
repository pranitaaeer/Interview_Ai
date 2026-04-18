const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const BlacklistModel = require("../models/blacklist.model");

const auth = async (req, res, next) => {
    try {
        // Retrieve the token from either cookies or the authorization header
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token found. Please login first." });
        }

        // Log the length and structure of the token
        const trimmedToken = token.trim();
        
        if (trimmedToken === "") {
            return res.status(400).json({ message: "Token is empty" });
        }

        // Check if the token is in the blacklist
        const TokenInBlacklist = await BlacklistModel.findOne({ token: trimmedToken });

        if (TokenInBlacklist) {
            return res.status(401).json({
                message: "Token is invalid, you are logged out."
            });
        }

        // Decode and verify the JWT token
        let decodedToken;
        try {
            decodedToken = await jwt.verify(trimmedToken, process.env.JWT_SECRET);
        } catch (err) {
            console.log("JWT verification failed:", err.message);
            return res.status(400).json({ message: "Invalid token", error: err.message });
        }

        if (!decodedToken) {
            return res.status(400).json({ message: "Error in token decoding" });
        }

        // Find the user associated with the decoded token
        const user = await UserModel.findById(decodedToken._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;  // Attach user data to request object
        next();  // Continue to next middleware or route handler
    } catch (error) {
        console.log("Error in middleware:", error);
        return res.status(500).json({ message: "Error in middleware", err: error.message });
    }
};

module.exports = auth;