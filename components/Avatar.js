import { useStateValue } from "../StateProvider";

function Avatar({ url, className, setOpenProfle, modal, heading }) {
  const [{}, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: "TOGGLE_NAV",
      navState: false,
    });
    setOpenProfle(true);
  };

  return (
    <img
      onClick={heading && handleClick}
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
