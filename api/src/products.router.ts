import { Router, type Request, type Response } from "express";
import { type Pagination } from "./types.js";
import products from "./data/products.json" with { type: "json" };
import {
  filterProductsByStatus,
  filterProductsByString,
} from "./util/filterProducts.js";
import { sortProducts } from "./util/sort.js";
import { type Product, type ProductResponse, type SearchParams } from "@ddelgado/shared-types";
import { getTopCheapestAvailable } from "./util/getTopCheapestAvailable.js";

// Declare express Router
const productsRouter = Router();

//Endpoints

/**
 * Allows to get filtered products
 *
 */
productsRouter.get("/products", (req: Request, res: Response) => {
  const { search, sort, order, available }: SearchParams = req.query;
  
  // No string types params
  const page: number = parseInt(req.query.page as string) || 1;
  const limit: number = parseInt(req.query.limit as string) || 10;
  const isAvailable: boolean | undefined =
    available === "true" ? true : available === "false" ? false : undefined;

  let productsFound: Product[] = products;

  // Filter by words in name or category
  productsFound = filterProductsByString(productsFound, search);

  // Filter by availability
  productsFound = filterProductsByStatus(productsFound, isAvailable);

  // Sorting
  productsFound = sortProducts(productsFound, { sort, order });

  // Pagination
  const startArray: number = limit * (page - 1);
  const endArray: number = page * limit;
  const pageProducts: Product[] = productsFound.slice(startArray, endArray);
  const total: number = productsFound.length;
  const pages: number = Math.ceil(total / limit);

  // Pagination data to send
  const pagination: Pagination = {
    totalProducts: total,
    totalPages: pages,
    currentPage: page,
    limit,
    next: endArray < total ? page + 1 : null,
    prev: startArray > 0 ? page - 1 : null,
  };

  res
    .status(200)
    .json({ products: pageProducts, pagination } as ProductResponse);
});

/**
 * Get product by product id
 */
productsRouter.get("/products/:id", (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.status(401).send("Bad request");
  }

  const productId: string = req.params.id;

  // Look for product id
  const product = (products as Product[]).find((prod) => prod.id === productId);

  // In case not found a product
  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.status(200).json({ product });
});

/**
 * Get product Top product
 */
productsRouter.get("/top-products", (req: Request, res: Response) => {

  // Look for top products
  const topProducts = getTopCheapestAvailable(products);

  // In case not found a product
  if (!topProducts) {
    return res.status(404).send("Product not found");
  }

  res.status(200).json({ products: topProducts });
});

export default productsRouter;
