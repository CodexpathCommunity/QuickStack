import { useContext } from "react";
import { Context } from "../context";
import Link from "next/link";

function SideNav() {
  const { state, dispatch } = useContext(Context);
  const links = [
    {
      name: "Videos",
      href: "videos",
    },
    {
      name: "Blog",
      href: "blog",
    },
    {
      name: "Topics",
      href: "Topics",
    },
    {
      name: "Resourses",
      href: "resourses",
    },
    {
      name: "Design Trends",
      href: "designtrends",
    },
    {
      name: "Jobs",
      href: "jobs",
    },
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
      {links.map(({ name, href }) => (
        <Link href={`/${href}`} key={href}>
          <h3
            className="p-2 border-b-2 border-transparent hover:border-[#03056b] cursor-pointer"
            onClick={() =>
              dispatch({
                type: "SET_NAV",
                payload: false,
              })
            }
          >
            {name}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default SideNav;
