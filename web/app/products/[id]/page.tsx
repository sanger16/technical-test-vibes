import { ProductCardBig } from "@/app/components/ProductCardBig";
import { Product } from "@ddelgado/shared-types";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const getProduct = async (id: string): Promise<Product> => {
  try {
    const { product } = await fetch(
      `http://localhost:3001/api/products/${id}`,
      {
        next: {
          revalidate: 60 * 60 * 30 * 6,
        },
      }
    ).then((res) => res.json());

    return product;
  } catch (error) {
    notFound();
  }
};
export default async function ProductDetail({ params }: Props) {
  // Waits before use
  const newParams = await params;
  const product = await getProduct(newParams.id);
  return (
    <div className="flex flex-col mx-[200px]">
      <span className="text-5xl p-5 text-center">Detalle de Producto</span>
      <ProductCardBig product={product} />

      <div className="flex justify-center items-center mt-6">
          <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link href="/products" className="text-xl">
                Ir a Listado de Productos
              </Link>
            </span>
          </div>
      </div>
    </div>
  );
}
