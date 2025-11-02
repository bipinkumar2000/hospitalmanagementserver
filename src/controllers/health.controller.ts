import { Request, Response } from "express";
import { sendSuccess } from "../utils/http-response";

export const fetchHealth = (req: Request, res: Response) => {
  sendSuccess(res, null, 200, "Server is healthy");
};
