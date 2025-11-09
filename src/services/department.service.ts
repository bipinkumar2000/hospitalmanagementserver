import { Op, Sequelize } from "sequelize";
import Department from "../models/Department.model";
import { PaginateOptions } from "../types/PaginateOprions.interface";
import { getPaginationOffset } from "../utils/helpers";

export async function fetchDepartments(
  sequelize: Sequelize,
  params: PaginateOptions,
) {
  const { page, perPage, sortBy, sortDir, search } = params;
  const offset = getPaginationOffset(page, perPage);
  const where: any = {};

  if (search && search.trim().length > 0) {
    const s = `%${search.trim()}%`;
    // search by name or description
    where[Op.or] = [
      { name: { [Op.iLike || Op.like]: s } },
      { description: { [Op.iLike || Op.like]: s } },
    ];
  }

  // Use findAndCountAll for pagination
  const { count, rows } = await Department.findAndCountAll({
    where,
    order: [
      [Sequelize.literal(`"${sortBy}"`), sortDir?.toUpperCase() || "ASC"],
    ],
    limit: perPage,
    offset,
  });

  const total = count;
  const totalPages = Math.max(1, Math.ceil(total / (perPage || 20)));

  return {
    data: rows,
    meta: {
      page,
      perPage,
      total,
      totalPages,
    },
  };
}
