"use client";

import { ProductResponse } from "@ddelgado/shared-types";
import { ProductGrid } from "./ProductGrid";
import { ProductFilter } from "./ProductFilter";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  initialData: ProductResponse;
}

export default function ProductList({ initialData }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { currentPage, next, prev } = initialData.pagination;

  // Allows to handle pagination action
  const handlePagination = (newPage: number) => {
    const newSearhParams = new URLSearchParams(searchParams);
    newSearhParams.set("page", newPage.toString());

    // Trigger new search
    router.push(`?${newSearhParams.toString()}`);
    
  };
  
  return (
    <div className="flex flex-col">
      <div>
        <ProductFilter />
      </div>
      <div className="flex flex-wrap gap-[16px] items-center justify-center my-8">
        <ProductGrid products={initialData.products} />
      </div>

      <div className="flex flex-row gap-8 justify-around">
        {prev && (
          <div className="flex justify-center items-center">
            <button
              className="hover:cursor-pointer"
              onClick={() => handlePagination(currentPage - 1)}
            >
              <span className="mt-5">
                <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                  <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span className="text-xl relative block px-8 py-3 bg-[#1A2238] border border-current">
                    Anterior
                  </span>
                </div>
              </span>
            </button>
          </div>
        )}

        {next && (
          <div className="flex justify-center items-center">
            <button
              className="hover:cursor-pointer"
              onClick={() => handlePagination(currentPage + 1)}
            >
              <span className="mt-5">
                <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                  <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span className="text-xl relative block px-8 py-3 bg-[#1A2238] border border-current">
                    Siguiente
                  </span>
                </div>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
