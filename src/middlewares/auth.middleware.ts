import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/apiResponse";

const JWT_SECRET = process.env.JWT_SECRET || "rise-motive-secret";

// Extend Request to carry admin info
export interface AuthRequest extends Request {
  admin?: {
    id: number;
    email: string;
    role: "SUPER_ADMIN" | "ADMIN";
  };
}

// TSOA Authentication function
export async function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "bearerAuth") {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Access denied. No token provided.");
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as {
        id: number;
        email: string;
        role: "SUPER_ADMIN" | "ADMIN";
      };

      // Check role-based access if scopes are provided
      if (scopes && scopes.length > 0) {
        if (scopes.includes("SUPER_ADMIN") && decoded.role !== "SUPER_ADMIN") {
          throw new Error("Access denied. Super Admin only.");
        }
      }

      return decoded;
    } catch (error) {
      throw new Error("Invalid or expired token.");
    }
  }

  throw new Error("Unknown security scheme");
}

// Verify JWT token (for manual middleware use)
export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json(new ApiResponse(false, "Access denied. No token provided."));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
      role: "SUPER_ADMIN" | "ADMIN";
    };
    req.admin = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json(new ApiResponse(false, "Invalid or expired token."));
  }
}

// Only super admin can access
export function requireSuperAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (req.admin?.role !== "SUPER_ADMIN") {
    return res
      .status(403)
      .json(new ApiResponse(false, "Access denied. Super Admin only."));
  }
  next();
}

// Both super admin and admin can access
export function requireAdmin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.admin) {
    return res
      .status(401)
      .json(new ApiResponse(false, "Access denied. Login required."));
  }
  next();
}