import Image from "next/image";
import { Product } from "@ddelgado/shared-types";
import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductCardBig = ({ product }: Props) => {
  const { id, name, price, isAvailable, category, image } = product;
  return (
    <div className="mx-auto right-0 mt-2 w-[600px] ">
      <div className="bg-white rounded overflow-hidden shadow-lg relative">
        {isAvailable ? (
          <span className="absolute top-0 right-0 z-10 bg-green-400 text-black rounded-2xl w-20 py-1 text-center text-sm">
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
            height={500}
            width={500}
            alt={name}
            priority={false}
            src={`${image}`}
            className="mt-3"
          />
          <p className="pt-2 text-[20px] font-semibold text-gray-50">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <p className="text-[18px] text-gray-100">${price.toFixed(2)}</p>
        </div>
        <div className="border-b px-4 py-4 flex items-center">
          <div className="text-red-600">
            <Link
              href="#"
              className="px-4 py-2 hover:bg-gray-200 flex items-center rounded-2xl bg-gray-100 border-1 border-gray-300"
            >
              <IoHeartOutline size={30} />
              <div className="pl-3">
                <p className="text-[18px] font-medium text-gray-800 leading-none">
                  Agregar a Favoritos
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
