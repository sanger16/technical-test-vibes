import Link from "next/link";
import Image from "next/image";
import { Product } from "@ddelgado/shared-types";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { id, name, price, isAvailable, category, image } = product;
  return (
    <div className="mx-auto right-0 mt-2 w-60 ">
      <div className="bg-white rounded overflow-hidden shadow-lg relative">
        {isAvailable ? (
          <span className="absolute top-0 right-0 z-10 bg-green-400 text-black rounded-b-2xl w-20 py-1 text-center text-sm">
            En Stock
          </span>
        ) : (
          <span className="absolute top-0 right-0 z-10 bg-gray-500 text-white rounded-2xl w-20 py-1 text-center text-sm">
            Sin Stock
          </span>
        )}
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={product.id}
            height={200}
            width={200}
            alt={name}
            priority={false}
            src={`${image}`}
            className="mt-3"
          />
          <p className="pt-2 text-[16px] font-semibold text-gray-50">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <p className="text-[14px] text-gray-100">${price.toFixed(2)}</p>
          <div className="mt-5">
            <Link
              href={`/products/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Detalles
            </Link>
          </div>
        </div>
        <div className="border-b px-4 py-2 hover:bg-gray-100 flex items-center">
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              {category.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
