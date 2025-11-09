export interface PaginateOptions {
  page?: number; // 1-based
  perPage?: number;
  sortBy?: string; // column name
  sortDir?: "asc" | "desc";
  search?: string;
}
