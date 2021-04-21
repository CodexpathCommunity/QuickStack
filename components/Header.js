import Avatar from "./Avatar";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import Modal from "@material-ui/core/Modal";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LoginModal from "./Modals/LoginModal";
import ProfileModal from "./Modals/ProfileModal";
import { Context } from "../context";

function Header({ links }) {
  const [open, setOpen] = useState(false);
  const [openProfle, setOpenProfle] = useState(false);
  const [user] = useAuthState(auth);
  const { state, dispatch } = useContext(Context);

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
        onClick={() =>
          dispatch({
            type: "SET_NAV",
            payload: !state.openNav,
          })
        }
      />
      <Image
        src="/images/lightlogo.png"
        className="mr-2"
        height={30}
        width={200}
        onClick={() =>
          dispatch({
            type: "SET_NAV",
            payload: false,
          })
        }
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
            key={link}
            className="p-2 border-b-2 border-transparent hover:border-[#03056b] cursor-pointer"
            onClick={""}
          >
            {link}
          </h3>
        ))}
      </div>
      {user ? (
        <Avatar
          url="https://avatars.githubusercontent.com/u/69096827?v=4"
          className="ml-auto"
          setOpenProfle={setOpenProfle}
          heading
        />
      ) : (
        <button className="btn ml-auto" onClick={() => setOpen(true)}>
          Login
        </button>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <LoginModal setOpen={setOpen} />
      </Modal>

      <Modal
        open={openProfle}
        onClose={() => setOpenProfle(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ProfileModal setOpen={setOpenProfle} />
      </Modal>
    </div>
  );
}

export default Header;
