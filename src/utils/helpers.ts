import { Op, WhereOptions } from "sequelize";
import { PaginateOptions } from "../types/PaginateOprions.interface";

/**
 * Normalize and validate pagination and sorting parameters.
 * Ensures safe defaults and caps on perPage values.
 */
export const normalizePagination = (query: any): Required<PaginateOptions> => {
  const page = Math.max(1, parseInt(query.page as string, 10) || 1);
  const perPage = Math.min(
    100,
    Math.max(1, parseInt(query.perPage as string, 10) || 20)
  );
  const sortBy = (query.sortBy as string) || "id";
  const sortDir =
    (query.sortDir as string)?.toLowerCase() === "desc" ? "desc" : "asc";
  const search = (query.search as string) || "";

  return { page, perPage, sortBy, sortDir, search };
};

/**
 * Calculates the offset for pagination.
 */
export const getPaginationOffset = (page: number = 1, perPage: number = 20) =>
  (page - 1) * perPage;

/**
 * Builds a Sequelize-compatible `where` filter for searching.
 * Supports case-insensitive partial matches on name and description.
 */
export const getPaginationSearch = (
  search?: string
): WhereOptions | undefined => {
  if (search && search.trim().length > 0) {
    const s = `%${search.trim()}%`;
    return {
      [Op.or]: [
        { name: { [Op.iLike]: s } },
        { description: { [Op.iLike]: s } },
      ],
    };
  }

  return undefined;
};
