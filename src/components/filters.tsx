import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  SortDescendingIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";

const options = [
  {
    first: "Last 7 days",
    second: "Last 14 days",
    third: "Last 31 days",
  },
  {
    first: "Survey Type",
    second: "Another Type",
    third: "Another Type",
  },
  {
    first: "Touchpoint",
    second: "Getpoint",
    third: "Placepoint",
  },
  {
    first: "Country",
    second: "Poland",
    third: "Spain",
  },
  {
    first: "NPS",
    second: "FPS",
    third: "GPS",
  },
];

export default function Dashboard() {
  return (
    <div className="w-full py-2 px-4 lg:px-20 flex items-center bg-gray-50 shadow-xl">
      <div className="flex w-full text-center gap-4">
        <Popover>
          {({ open }) => (
            <>
              <div className="relative ">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <div className="flex items-center md:hidden">
                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:pr-4 md:space-x-4">
                    {options.map((option) => (
                      <select
                        key={option.first}
                        className="bg-gray-50 text-gray-800 focus:bg-gray-100 text-sm sm:text-base"
                      >
                        <option>{option.first}</option>
                        <option>{option.second}</option>
                        <option>{option.third}</option>
                      </select>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden flex">
                    <div className="px-5">
                      <div className="-mr-2">
                        <Popover.Button className="rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>

                    <div className="px-2 pt-2 pb-3 sm:flex justify-center mx-auto gap-6">
                      {options.map((option) => (
                        <select
                          key={option.first}
                          className="bg-white text-gray-800 text-sm sm:text-base"
                        >
                          <option>{option.first}</option>
                          <option>{option.second}</option>
                          <option>{option.third}</option>
                        </select>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      <div className="mt-1 rounded-md shadow-sm w-full flex justify-end items-center">
        <div className="items-center pointer-events-none">
          <SearchIcon
            className="h-5 w-5 text-gray-500 mr-3"
            aria-hidden="true"
          />
        </div>
        <input
          className="block pl-2 sm:text-sm rounded-sm p-2 border border-gray-500 w-44 sm:w-full sm:max-w-sm"
          placeholder="Search..."
        />
        <SortDescendingIcon className="h-7 w-7 text-gray-800 ml-4" />
      </div>
    </div>
  );
}
