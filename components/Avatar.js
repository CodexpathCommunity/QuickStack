function Avatar({ url, className, setShowNav, setOpenProfle, modal }) {
  const handleClick = () => {
    setShowNav(false);
    setOpenProfle(true);
  };

  return (
    <img
      onClick={setShowNav && handleClick}
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
