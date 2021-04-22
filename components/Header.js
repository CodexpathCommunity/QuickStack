import Avatar from "./Avatar";
import Image from "next/image";
import { CloudUploadIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import Modal from "@material-ui/core/Modal";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LoginModal from "./Modals/LoginModal";
import ProfileModal from "./Modals/ProfileModal";
import { Context } from "../context";
import Link from "next/link";

function Header() {
  // open is for the login modal while open profile iis for the profile modal

  const [open, setOpen] = useState(false);
  const [openProfle, setOpenProfle] = useState(false);
  // firebase  user for authenticated state
  const [user] = useAuthState(auth);
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
      className="
        flex px-5 py-2 z-50 text-white
        items-center sticky 
        top-0 w-full 
        border-b-2 border-[#35d4fb]
        bg-gradient-to-r from-[#03056b] via-[#7703ef] to-[#35d4fb]
        "
    >
      {/* this is the toggle icon that dispatches the toggle navstate */}
      <MenuIcon
        className="h-8 mr-1 sm:hidden cursor-pointer"
        onClick={() =>
          dispatch({
            type: "SET_NAV",
            payload: !state.openNav,
          })
        }
      />
      <Link href="/">
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
      </Link>
      <div
        className={`h-[90%] w-full hidden  text-w 
        sm:flex flex-col items-center 
            justify-evenly text-2xl font-semibold 
            sm:flex-row sm:text-base sm:bg-[transparent]
            sm:flex-grow
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

      {user ? (
        <>
          <Link href="/upload" className="link">
            <CloudUploadIcon
              className="h-10 mr-4 ml-4 hidden sm:inline-block"
              className="link"
            />
          </Link>
          <Avatar
            url="https://avatars.githubusercontent.com/u/69096827?v=4"
            className="ml-auto"
            setOpenProfle={setOpenProfle}
            onClick={() => {
              dispatch({
                type: "SET_NAV",
                payload: false,
              });
              setOpenProfle(true);
            }}
          />
        </>
      ) : (
        <button
          className="btn ml-auto"
          onClick={() => {
            dispatch({
              type: "SET_NAV",
              payload: false,
            });
            setOpen(true);
          }}
        >
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
