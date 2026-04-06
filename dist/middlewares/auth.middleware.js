"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = expressAuthentication;
exports.authenticate = authenticate;
exports.requireSuperAdmin = requireSuperAdmin;
exports.requireAdmin = requireAdmin;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apiResponse_1 = require("../utils/apiResponse");
const JWT_SECRET = process.env.JWT_SECRET || "rise-motive-secret";
// TSOA Authentication function
async function expressAuthentication(request, securityName, scopes) {
    if (securityName === "bearerAuth") {
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error("Access denied. No token provided.");
        }
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            // Check role-based access if scopes are provided
            if (scopes && scopes.length > 0) {
                if (scopes.includes("SUPER_ADMIN") && decoded.role !== "SUPER_ADMIN") {
                    throw new Error("Access denied. Super Admin only.");
                }
            }
            return decoded;
        }
        catch (error) {
            throw new Error("Invalid or expired token.");
        }
    }
    throw new Error("Unknown security scheme");
}
// Verify JWT token (for manual middleware use)
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json(new apiResponse_1.ApiResponse(false, "Access denied. No token provided."));
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.admin = decoded;
        next();
    }
    catch (error) {
        return res
            .status(401)
            .json(new apiResponse_1.ApiResponse(false, "Invalid or expired token."));
    }
}
// Only super admin can access
function requireSuperAdmin(req, res, next) {
    if (req.admin?.role !== "SUPER_ADMIN") {
        return res
            .status(403)
            .json(new apiResponse_1.ApiResponse(false, "Access denied. Super Admin only."));
    }
    next();
}
// Both super admin and admin can access
function requireAdmin(req, res, next) {
    if (!req.admin) {
        return res
            .status(401)
            .json(new apiResponse_1.ApiResponse(false, "Access denied. Login required."));
    }
    next();
}
