import type { Response } from "express";
import HttpResponse from "../types/HttpResponse.interface";
import HttpError from "../types/HttpError.interface";
import z from "zod";

export function sendSuccess<T>(
  res: Response,
  data: T,
  status: number = 200,
  message?: string,
) {
  const response: HttpResponse<T> = { status: "success", data };
  if (message) response.message = message;
  return res.status(status).json(response);
}

export function sendError(
  res: Response,
  message: string = "INTERNAL_SERVER_ERROR",
  code?: string | number,
  statusCode = 400,
  details?: string | z.ZodError,
) {
  const response: HttpError = {
    status: "error",
    error: { message, code, details },
  };
  return res.status(statusCode).json(response);
}
