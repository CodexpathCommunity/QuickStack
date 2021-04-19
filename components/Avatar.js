function Avatar({ url, className, setShowNav }) {
  return (
    <img
      onClick={() => setShowNav(false)}
      src={url}
      loading="lazy"
      className={`h-9 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className} `}
      alt="profile pic"
    />
  );
}

export default Avatar;
