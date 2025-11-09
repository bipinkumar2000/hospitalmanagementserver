import { z } from "zod";

export const PaginationSchema = z.object({
  page: z.string().optional(),
  perPage: z.string().optional(),
  sortBy: z.string().optional(),
  sortDir: z.enum(["asc", "desc"]).optional(),
  search: z.string().optional(),
});

export type PaginationQuerySchema = z.infer<typeof PaginationSchema>;
