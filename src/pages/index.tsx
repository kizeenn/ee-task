import type { NextPage } from "next";

import Dashboard from "../components/dashboard";
import Filters from "../components/filters";
import Todos from "../components/todos";
import { GetServerSideProps } from "next";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();

  return {
    props: {
      todos: todos,
    },
  };
};

const Home: NextPage<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <>
      <Dashboard />
      <Filters />
      <Todos todos={todos} />
    </>
  );
};

export default Home;
