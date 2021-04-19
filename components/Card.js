import Avatar from "./Avatar";

function Card() {
  return (
    <div className="flex flex-col p-4 items-start  w-full max-w-xs bg-[#35d4fb] m-auto rounded-sm shadow-xl">
      <Avatar
        url="https://avatars.githubusercontent.com/u/69096827?v=4"
        className="mb-4"
      />
    </div>
  );
}

export default Card;
