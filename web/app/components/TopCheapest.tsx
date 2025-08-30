import { ProductCard } from "./ProductCard";
import { Product } from "@ddelgado/shared-types";

interface Props {
  products: Product[];
}

const API_URL = process.env.NEXT_PUBLIC_API_BASE;

/**
 * Get Top products
 * @param queryParams parameters filters
 * @returns products and pagination
 */
const getTopProducts = async (): Promise<Product[]> => {
  // Filter only params that contains valid values

  // Request to endpoint
  const data = await fetch(`${API_URL}/api/top-products`, {
    // Revalidate data
    next: { revalidate: 60 },
  })
    .then((res) => res.json())
    .catch((error) => {
      return [];
    });

  return data.products;
};

export const TopCheapest = async () => {
  const products = await getTopProducts();
  return (
    <>
      <div className="mt-8 bg-blue-100">
        <div className=" bg-blue-500 rounded-br-2xl w-100 py-1 text-center text-sm">
          <h3 className="text-2xl text-white">Productos de Oportunidad</h3>
        </div>
        <div className="flex flex-row  p-[60px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
