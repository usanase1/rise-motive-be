import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(`[ERROR] ${err.message}`);
  res.status(500).json(new ApiResponse(false, err.message || "Internal server error"));
}

export function notFound(req: Request, res: Response) {
  res.status(404).json(new ApiResponse(false, `Route ${req.originalUrl} not found`));
}