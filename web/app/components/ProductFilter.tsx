import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);

    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearch) {
      newSearchParams.set("search", newSearch);
    } else {
      newSearchParams.delete("search");
    }

    // Move to first page
    newSearchParams.set("page", "1");
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleSortType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value;
    setSearch(newSort);

    const newSearchParams = new URLSearchParams(searchParams);

    if (newSort) {
      newSearchParams.set("sort", newSort);
    } else {
      newSearchParams.delete("sort");
    }

    // Move to first page
    newSearchParams.set("page", "1");
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleSortOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value;
    setSearch(newSort);

    const newSearchParams = new URLSearchParams(searchParams);

    if (newSort) {
      newSearchParams.set("order", newSort);
    } else {
      newSearchParams.delete("order");
    }

    // Move to first page
    newSearchParams.set("page", "1");
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleAvailable = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSearch = event.target.value === "all" ? "" : event.target.value;
    setSearch(newSearch);

    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearch !== "") {
      newSearchParams.set("available", newSearch);
    } else {
      newSearchParams.delete("available");
    }

    // Move to first page
    newSearchParams.set("page", "1");
    router.push(`?${newSearchParams.toString()}`);
  };
  return (
    <div className="bg-blue-100 min-h-[100px] rounded-br-2xl rounded-bl-2xl">
      <div className=" bg-blue-600 rounded-br-2xl w-60 py-1 text-center text-sm mb-5">
        <h3 className="text-2xl text-white">Filtros</h3>
      </div>
      <form className="text-black flex flex-row mx-[60px] justify-between">
        <div className="flex flex-col">
          <label htmlFor="search" className="ml-3">
            Buscar
          </label>
          <div className="flex items-center rounded-xl bg-white/5 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Buscar"
              onChange={handleSearch}
              className="block min-w-0 grow rounded-xl bg-gray-800 py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="sort">Ordenar por:</label>
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="sort"
              name="sort"
              aria-label="sort"
              onChange={handleSortType}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              <option value="">Seleccione..</option>
              <option value="name">Nombre</option>
              <option value="price">Precio</option>
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="order">Ordenar:</label>
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="order"
              name="order"
              aria-label="order"
              onChange={handleSortOrder}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              <option value="">Seleccione..</option>
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="order">Disponibilidad:</label>
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="available"
              name="available"
              aria-label="available"
              onChange={handleAvailable}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            >
              <option value="">Seleccione..</option>
              <option value="true">En Stock</option>
              <option value="false">Sin Stock</option>
              <option value="all">Ver todo</option>
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};
