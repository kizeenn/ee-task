import Header from "./header";
import Filters from "./filters";
import Todos from "./todos";
import { useState } from "react";

export interface Filters {
  completed?: boolean;
}

export default function Dashboard() {
  const [filters, setFilters] = useState<Filters>({});

  return (
    <>
      <Header />
      <Filters filters={filters} onFiltersChange={setFilters} />
      <Todos filters={filters} />
    </>
  );
}
