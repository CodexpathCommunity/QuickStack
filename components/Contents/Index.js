import { useState } from "react";
import Link from "./Link";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

function Contents() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const [lineState, setLineState] = useState({
    search: false,
    popular: true,
    recent: false,
    ordered: false,
    upvoted: false,
  });

  const handleClick = (e) => {
    const name = e.target.getAttribute("value");

    if (name === "search") {
      setLineState({
        search: true,
        popular: false,
        recent: false,
        ordered: false,
        upvoted: false,
      });
    }
    if (name === "popular") {
      setLineState({
        search: false,
        popular: true,
        recent: false,
        ordered: false,
        upvoted: false,
      });
    }
    if (name === "recent") {
      setLineState({
        search: false,
        popular: false,
        recent: true,
        ordered: false,
        upvoted: false,
      });
    }
    if (name === "order") {
      setLineState({
        search: false,
        popular: false,
        recent: false,
        ordered: true,
        upvoted: false,
      });
    }
    if (name === "upvoted") {
      setLineState({
        search: false,
        popular: false,
        recent: false,
        ordered: false,
        upvoted: true,
      });
    }
  };

  const linkData = [
    {
      name: "Search",
      state: lineState.search,
      value: "search",
    },
    {
      name: "Popular",
      state: lineState.popular,
      value: "popular",
    },
    {
      name: "Recent",
      state: lineState.recent,
      value: "recent",
    },
    {
      name: "Laddar",
      state: lineState.ordered,
      value: "order",
    },
    {
      name: "Upvoted",
      state: lineState.upvoted,
      value: "upvoted",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-screen-xl m-auto ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2">
        <div className="flex items-center space-x-2 ">
          {linkData.map(({ state, name, value }) => (
            <Link
              active={state}
              name={name}
              value={value}
              onClick={handleClick}
            />
          ))}
        </div>
        {lineState.search && (
          <form
            className="
        flex flex-grow border px-6 py-2 
         sm:m-auto border-gray-200 rounded-full shadow-lg max-w-3xl items-center mt-2"
          >
            <input
              type="text"
              ref={searchInputRef}
              className="flex-grow w-full focus:outline-none"
              defaultValue={router.query.term}
            />
            <XIcon
              className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
              onClick={() => (searchInputRef.current.value = "")}
            />
            <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
            <SearchIcon
              className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer"
              onClick={search}
            />

            <button hidden type="submit" onClick={search}></button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contents;
