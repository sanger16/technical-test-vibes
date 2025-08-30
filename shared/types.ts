import { type Pagination } from "../api/src/types.js";

export interface Product {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  category: string;
  image: string;
}

export interface ProductResponse {
  products: Product[];
  pagination: Pagination;
}

export interface SearchParams {
  search?: string;
  sort?: "price" | "name";
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
  available?: "true" | "false";
}
