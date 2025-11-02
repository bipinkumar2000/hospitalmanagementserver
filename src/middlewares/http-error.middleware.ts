import type { Request, Response } from "express";
import { sendError } from "../utils/http-response";
import logger from "../utils/logger";

export function errorHandler(
  err: Error & { statusCode: number },
  req: Request,
  res: Response,
) {
  logger.error(err, "Unhandled error");
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  sendError(res, message, "INTERNAL_ERROR", statusCode);
}
