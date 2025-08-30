import type { SortParams } from "../types.js";
import { type Product } from "@ddelgado/shared-types";

/**
 * Allows to sort a listo of products using name or price
 *
 * @param param0 Parameters to sort array
 * @param products List of products to sort
 * @returns Listo of products Sorted
 */
export const sortProducts = (
  products: Product[],
  { sort, order }: SortParams
): Product[] => {
  if (!sort || !order) {
    return products;
  }

  // Order by name
  if (sort === "name") {
    return products.sort((el1, el2) =>
      order === "desc"
        ? el2.name.localeCompare(el1.name, "es")
        : order === "asc"
        ? el1.name.localeCompare(el2.name, "es")
        : 0
    );
  }

  // Order by price
  return products.sort((el1, el2) =>
    order === "asc"
      ? el1.price - el2.price
      : order === "desc"
      ? el2.price - el1.price
      : 0
  );
};
