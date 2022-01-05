import { StarIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon, EmojiSadIcon } from "@heroicons/react/outline";
import type { Filters } from "./dashboard";
import useSWR from "swr";
import Loading from "./loading";
import Error from "./error";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export default function Todos({ filters }: { filters: Filters }) {
  const url = new URL("https://jsonplaceholder.typicode.com/todos");

  Object.entries(filters).forEach(([key, value]) => {
    value ? url.searchParams.set(key, value) : null;
  });

  const { data, error } = useSWR<Todo[]>(url.toString(), fetcher);
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div className="w-full px-3 lg:px-20 items-center mt-10">
      {data.map((todo) => (
        <div
          key={todo.id}
          className="w-full shadow-xl bg-white p-3 xl:flex mt-5"
        >
          <div className="flex justify-between items-center xl:border-r border-black xl:w-1/2 xl:px-5">
            <div className="flex items-center">
              <StarIcon className="h-10 w-10 text-yellow-400" />
              <h1 className="font-bold text-sm xl:text-lg truncate w-32 sm:w-full xl:max-w-sm ml-5">
                {todo.title}
              </h1>
            </div>

            <div className="flex items-end">
              <p className="text-sm xl:text-lg mr-2">user id</p>
              <p className="font-bold text-base xl:text-3xl">{todo.userId}</p>
            </div>
          </div>

          <div className="xl:w-1/2 flex justify-between xl:px-5">
            <div className="flex items-center">
              <p className="font-bold text-sm xl:text-lg">completed:</p>
              {todo.completed ? (
                <EmojiHappyIcon className="h-8 w-8 text-green-600 ml-1" />
              ) : (
                <EmojiSadIcon className="h-8 w-8 text-rose-500 ml-1" />
              )}
            </div>

            <div className="flex items-end">
              <p className="text-sm xl:text-lg mr-2">task id</p>
              <p className="text-base xl:text-3xl font-bold">{todo.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
