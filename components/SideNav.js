import { useContext } from "react";
import { Context } from "../context";

function SideNav({ links }) {
  const { state, dispatch } = useContext(Context);
  console.log(state);
  return (
    <div
      className={`h-[90%] w-full fixed top-[3.75rem] ${
        state?.openNav ? "left-0" : "left-[-100%] "
      } text-w bg-[#35d4fb] flex flex-col items-center 
            justify-evenly text-2xl font-semibold z-40
            text-white
            `}
    >
      {links.map((link) => (
        <h3
          key={link}
          className="p-2 border-b-2 border-transparent hover:border-[#03056b] cursor-pointer"
        >
          {link}
        </h3>
      ))}
    </div>
  );
}

export default SideNav;
