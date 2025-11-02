import type { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/http-response";
import logger from "../utils/logger";

export function errorHandler(
  err: Error & { statusCode: number },
  _: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error(err, "Unhandled error");
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  sendError(res, message, "INTERNAL_ERROR", statusCode);
}
