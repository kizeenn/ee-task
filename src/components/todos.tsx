import { StarIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon, EmojiSadIcon } from "@heroicons/react/outline";
import { Todo } from "../pages";

export default function Todos({ todos }: { todos: Todo[] }) {
  return (
    <div className="w-full px-20 items-center mt-10">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full shadow-xl bg-white p-3 flex mt-5">
          <div className="flex justify-between items-center border-r border-black w-1/2 px-5">
            <StarIcon className="h-10 w-10 text-yellow-400" />
            <h1 className="font-bold text-lg truncate max-w-md ml-5">
              {todo.title}
            </h1>
            <div className="flex items-end">
              <p className="text-lg mr-2">user id</p>
              <p className="font-bold text-3xl">{todo.userId}</p>
            </div>
          </div>

          <div className="w-1/2 flex justify-between px-5">
            <div className="flex items-center">
              <p className="font-bold text-lg">completed:</p>
              {todo.completed ? (
                <EmojiHappyIcon className="h-8 w-8 text-green-600 ml-1" />
              ) : (
                <EmojiSadIcon className="h-8 w-8 text-rose-500 ml-1" />
              )}
            </div>

            <div className="flex items-end">
              <p className="text-lg mr-2">task id</p>
              <p className="text-3xl font-bold">{todo.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
