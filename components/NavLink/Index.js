import { useState } from "react";
import Select from "./Select";
import SearchBar from "./SearchBar";

function NavLink() {
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
    if (name === "topic") {
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
      name: "Topics",
      state: lineState.ordered,
      value: "topic",
    },
    {
      name: "Upvoted",
      state: lineState.upvoted,
      value: "upvoted",
    },
  ];

  return (
    <div
      className="
       flex flex-col items-start px-5 py-2 z-40 bg-white
        sm:items-center sticky sm:flex-row
        top-14 w-full "
    >
      <div className="flex items-center space-x-2 ">
        {linkData.map(({ state, name, value }) => (
          <Select
            key={name}
            active={state}
            name={name}
            value={value}
            onClick={handleClick}
          />
        ))}
      </div>
      {lineState.search && <SearchBar />}
    </div>
  );
}

export default NavLink;
