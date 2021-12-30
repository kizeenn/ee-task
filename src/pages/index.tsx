import type { NextPage } from "next";

import Dashboard from "../components/dashboard";
import Filters from "../components/filters";

const Home: NextPage = () => {
  return (
    <>
      <Dashboard />
      <Filters />
    </>
  );
};

export default Home;
