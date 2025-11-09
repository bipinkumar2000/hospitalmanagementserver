import { NextFunction, Request, Response } from "express";
import { PaginationSchema } from "../schemas/Pagination.schema";
import Department from "../models/Department.model";
import { sendError, sendSuccess } from "../utils/http-response";
import { normalizePagination } from "../utils/helpers";
import { fetchDepartments } from "../services/department.service";
import sequelize from "../config/sequelize.config";
import logger from "../utils/logger";

export const getDepartments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const parsed = PaginationSchema.safeParse(req.query);
    if (!parsed.success) {
      return sendError(
        res,
        "Invalid query parameters",
        "BAD_QUERY",
        400,
        parsed.error,
      );
    }

    const { page, perPage, sortBy, sortDir, search } = normalizePagination(
      req.query,
    );
    const departments = await fetchDepartments(sequelize, {
      page,
      perPage,
      sortBy,
      sortDir,
      search: req.query.search as string | undefined,
    });

    logger.info(departments);

    sendSuccess(res, departments.data, 200, "Departments fetched successfully");
  } catch (error) {
    sendError(res, "Could not fetch departments", "INTERNAL_SERVER_ERROR", 500);
  }
};
