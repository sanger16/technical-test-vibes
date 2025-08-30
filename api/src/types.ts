export interface Origin {
  origin: string[];
}

export interface Pagination {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  next: number | null;
  prev: number | null;
}

export interface SortParams {
  sort: "name" | "price" | undefined;
  order: "asc" | "desc" | undefined;
}
