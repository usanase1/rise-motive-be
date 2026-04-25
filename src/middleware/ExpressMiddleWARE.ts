import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./sharedValues";

export const expressAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    (req as any).user = decoded;

    next();
  } catch (err: any) {
    return res.status(err.statusCode || 401).json({
      error: err.message || "Unauthorized",
    });
  }
};