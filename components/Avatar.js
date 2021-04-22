import { useContext } from "react";
import { Context } from "../context";

function Avatar({ url, className, setOpenProfle, modal, heading }) {
  const { state, dispatch } = useContext(Context);

  return (
    <img
      src={url}
      loading="lazy"
      className={`${
        modal ? "h-40" : "h-9"
      } rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className} `}
      alt="profile pic"
    />
  );
}

export default Avatar;
