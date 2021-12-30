import { DownloadIcon } from "@heroicons/react/solid";
import { CollectionIcon } from "@heroicons/react/solid";
import { LoginIcon } from "@heroicons/react/solid";

export default function Dashboard() {
  return (
    <header className="w-full py-6 px-6 lg:px-20 flex border-b-2 border-gray-300 items-center bg-gray-50">
      <p className="text-gray-900 font-bold">Dashboard</p>

      <div className="flex w-full justify-end">
        <DownloadIcon className="h-8 w-8 text-gray-700 mr-4 sm:mr-8" />

        <div className="border-2 border-emerald-400">
          <CollectionIcon className="h-8 w-8 text-emerald-400 p-1" />
        </div>

        <div className="bg-emerald-400 border-2 border-emerald-400">
          <CollectionIcon className="h-8 w-8 text-gray-100 p-1" />
        </div>

        <div className="bg-emerald-400 border-2 border-emerald-400 ml-3">
          <LoginIcon className="h-8 w-8 text-gray-100" />
        </div>
      </div>
    </header>
  );
}
