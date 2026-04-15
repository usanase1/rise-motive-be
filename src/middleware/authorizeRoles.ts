import { Request } from "express";
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import AppError from "../lib/Error";

export function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[],
): Promise<any> {
  if (securityName !== "jwt") {
    return Promise.reject(new AppError("Unknown security scheme", 401));
  }

  const authHeader = request.headers.authorization;
  const isProtected = scopes && scopes.length > 0;

  return new Promise((resolve, reject) => {
    // No token provided
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      if (isProtected) {
        // Route requires auth → block it
        return reject(new AppError("Authentication required", 401));
      }
      // Public route → let it through with no user
      return resolve(null);
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET!, (err: any, decoded: any) => {
      if (err) {
        if (err instanceof TokenExpiredError) {
          return reject(new AppError("Token has expired", 401));
        }
        if (err instanceof JsonWebTokenError) {
          return reject(new AppError("Invalid token", 401));
        }
        return reject(new AppError("Token verification failed", 401));
      }

      // Role-based access check
      if (isProtected) {
        const userRole: string = decoded?.role ?? "";
        const hasRequiredRole = scopes!.includes(userRole);

        if (!hasRequiredRole) {
          return reject(
            new AppError("You are not authorized to perform this action", 403),
          );
        }
      }

      // Attach user to request and resolve
      (request as any).user = decoded;
      resolve(decoded);
    });
  });
}
