"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterOptions = [
  { filter: "all", label: "All cabins" },
  { filter: "small", label: "1 - 3 guests" },
  { filter: "medium", label: "4 - 7 guests" },
  { filter: "large", label: " 8 - 12 guests" },
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filterOptions.map((item) => (
        <Button
          key={item.filter}
          filter={item.filter}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
