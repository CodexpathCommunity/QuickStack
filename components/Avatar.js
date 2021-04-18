import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <Image
      src={url}
      loading="lazy"
      className={`h-10 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 ${className} `}
      alt="profile pic"
    />
  );
}

export default Avatar;
