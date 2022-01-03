import type { NextPage } from "next";

import Dashboard from "../components/dashboard";
import Filters from "../components/filters";
import Todos from "../components/todos";

const Home: NextPage = () => {
  return (
    <>
      <Dashboard />
      <Filters />
      <Todos />
    </>
  );
};

export default Home;
