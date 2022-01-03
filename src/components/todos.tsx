import { StarIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";

export default function Todos() {
  return (
    <div className="w-full px-20 flex items-center mt-10">
      <div className="w-full shadow-2xl bg-white p-3 flex">
        <div className="flex items-center border-r border-black w-1/2">
          <StarIcon className="h-10 w-10 text-yellow-400" />
          <div className="ml-5">
            <h1 className="font-bold text-lg truncate max-w-md">title</h1>
            <h2 className="text-sm">user id</h2>
          </div>
        </div>

        <div className="w-1/2 flex justify-between">
          <div className="flex ml-5 items-center">
            <p className="font-bold text-lg">completed:</p>
            <EmojiHappyIcon className="h-8 w-8 text-green-500 ml-1" />
          </div>

          <div className="flex items-end ml-10">
            <p className="text-lg">task id</p>
            <p className="text-6xl font-bold">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
