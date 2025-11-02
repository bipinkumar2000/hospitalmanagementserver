import { z } from "zod";
import { sendError } from "../utils/http-response";
import { NextFunction, Request, Response } from "express";

const validatePayload = (schema: z.ZodTypeAny, schemaName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success)
      return sendError(
        res,
        `Invalid ${schemaName} schema received`,
        "BAD_REQUEST",
        400,
        result.error,
      );

    req.body = result.data;
    next();
  };
};

export default validatePayload;
