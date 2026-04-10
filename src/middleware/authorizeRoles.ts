// src/middleware/authentication.ts
import { Request } from "express";
import jwt from "jsonwebtoken";
import AppError from "../lib/Error";

export function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "jwt") {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Promise.reject(new AppError("Authorization token missing", 401));
    }

    const token = authHeader.split(" ")[1];

    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {
        if (err) {
          reject(new AppError("Invalid token", 401));
        } else {
          // Check if user has required role
          if (scopes && scopes.length > 0) {
            // NOW using decoded.roles (plural) instead of decoded.role
            const userRoles = decoded.roles || [];

            // Check if user has at least one of the required roles
            const hasRequiredRole = scopes.some((scope) =>
              userRoles.includes(scope)
            );

            if (!hasRequiredRole) {
              reject(
                new AppError(
                  "You are not authorized to perform this action",
                  403
                )
              );
            }
          }

          // Attach user info to request for use in controllers
          (request as any).user = decoded;
          resolve(decoded);
        }
      });
    });
  }

  return Promise.reject(new AppError("Unknown security scheme", 401));
}
