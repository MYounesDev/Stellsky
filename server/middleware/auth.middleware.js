import { verifyToken } from "../utils/auth.js";

/**
 * Authentication middleware to verify JWT token
 */
export function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed: No token provided",
      });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed: Token expired or invalid",
      });
    }

    // Add user to request object
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Authentication failed: Invalid token",
    });
  }
}
