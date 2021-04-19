import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
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
      <MicrophoneIcon className="mr-3 h-6 text-blue-500 border-l-2 pl-4 border-gray-300" />
      <SearchIcon
        className="h-6  text-blue-500 cursor-pointer"
        onClick={search}
      />

      <button hidden type="submit" onClick={search}></button>
    </form>
  );
}

export default SearchBar;
