import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import AppError from "../lib/Error";

export type JwtPayload = {
  id: number;
  role: string;
};

export function verifyToken(token: string): JwtPayload {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      throw new AppError("Token has expired", 401);
    }
    if (err instanceof JsonWebTokenError) {
      throw new AppError("Invalid token", 401);
    }
    throw new AppError("Token verification failed", 401);
  }
}