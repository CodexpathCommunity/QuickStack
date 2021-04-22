import { useContext } from "react";
import { Context } from "../context";

function SideNav() {
  const { state, dispatch } = useContext(Context);
  const links = [
    "courses",
    "Road-Map",
    "Resourses",
    "Design Trends",
    "Jobs",
    "Pricing",
  ];

  return (
    <div
      className={`h-[90%] w-full fixed top-[3.75rem] ${
        state?.openNav ? "left-0" : "left-[-100%] "
      } text-w bg-[#35d4fb] flex flex-col items-center 
            justify-evenly text-2xl font-semibold z-50
            text-white
            `}
    >
      {links.map((link) => (
        <h3
          key={link}
          className="p-2 border-b-2 border-transparent hover:border-[#03056b] cursor-pointer"
          onClick={() =>
            dispatch({
              type: "SET_NAV",
              payload: false,
            })
          }
        >
          {link}
        </h3>
      ))}
    </div>
  );
}

export default SideNav;
