import { ProductResponse, SearchParams } from "@ddelgado/shared-types";
import ProductList from "../components/ProductList";
import { TopCheapest } from "../components/TopCheapest";

/**
 * Get All products from server
 * @param queryParams parameters filters
 * @returns products and pagination
 */
const getProducts = async (
  queryParams: SearchParams
): Promise<ProductResponse> => {
  // Filter only params that contains valid values
  const validParams = Object.entries(queryParams)
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== ""
    )
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  const params = new URLSearchParams(validParams as Record<string, string>);

  // Request to endpoint
  const data: ProductResponse = await fetch(
    `http://localhost:3001/api/products?${params}`,
    {
      // Revalidate data
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((error) => {
      return [];
    });

  return data;
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const newParams = await searchParams;

  const products = await getProducts({ ...newParams, limit: 10 });

  return (
    <div className="flex flex-col mx-[200px]">
      <span className="text-5xl p-5 text-center">Lista de Productos</span>
        <ProductList initialData={products} />
      <TopCheapest />
    </div>
  );
}
