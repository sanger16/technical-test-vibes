import { type Product } from "@ddelgado/shared-types";

/**
 * Allows to filter products by String in name and category
 *
 * @param products List of products to filter
 * @param filter String to filter products
 * @returns List of products filtered
 */
export const filterProductsByString = (
  products: Product[],
  filter: string | undefined
): Product[] => {
  if (filter) {
    return products.filter(
      (prod) =>
        prod.name.toLowerCase().includes(filter) ||
        prod.category.toLowerCase().includes(filter)
    );
  }

  return products;
};

/**
 * Allows to filter products by status
 *
 * @param products List of products to filter
 * @param status Availability status
 * @returns List of products filtered
 */
export const filterProductsByStatus = (
  products: Product[],
  status: boolean | undefined
): Product[] => {
  if (typeof status === "boolean") {
    return products.filter((prod) => prod.isAvailable === status);
  }
  return products;
};
