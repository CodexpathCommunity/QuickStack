import Avatar from "./Avatar";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";

function Header({ showNav, setShowNav, links }) {
  return (
    <div
      className="
        flex px-5 py-2 z-50 text-white
        items-center sticky 
        top-0 w-full 
        border-b-2 border-[#35d4fb]
        bg-gradient-to-r from-[#03056b] via-[#7703ef] to-[#35d4fb]
        "
    >
      <MenuIcon
        className="h-8 mr-1 sm:hidden cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      />
      <Image
        src="/images/lightlogo.png"
        className="mr-2"
        height={30}
        width={200}
        onClick={() => setShowNav(false)}
      />
      <div
        className={`h-[90%] w-full absolute top-[3.75rem] ${"left-[-100%] "} text-w bg-[#35d4fb] flex flex-col items-center 
            justify-evenly text-2xl font-semibold 
            sm:flex-row sm:text-base sm:bg-[transparent]
            sm:flex-grow
            sm:static`}
      >
        {links.map((link) => (
          <h3
            className="p-2 border-b-2 border-transparent hover:border-[#03056b] cursor-pointer"
            onClick={() => setShowNav(false)}
          >
            {link}
          </h3>
        ))}
      </div>
      {user ? (
        <Avatar
          url="https://avatars.githubusercontent.com/u/69096827?v=4"
          className="ml-auto"
          setShowNav={setShowNav}
        />
      ) : (
        <button>Sign IN</button>
      )}
    </div>
  );
}

export default Header;
