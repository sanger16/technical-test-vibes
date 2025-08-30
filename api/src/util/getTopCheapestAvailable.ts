import type { Product } from "@ddelgado/shared-types";
import { filterProductsByStatus } from "./filterProducts.js";
import { sortProducts } from "./sort.js";

/**
 * Allows get products availables and cheapest
 *
 * @param products List of products
 * @param top number of products to return
 * @retrun top products
 */
export const getTopCheapestAvailable = (
  products: Product[],
  top = 3
): Product[] => {
  if (products.length === 0) {
    return [];
  }

  const availableProducts = filterProductsByStatus(products, true);

  const cheapestProducts = sortProducts(availableProducts, {
    sort: "price",
    order: "asc",
  });

  return cheapestProducts.slice(0, top);
};
