import { ArrowCircleUpIcon, ChatIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Avatar from "./Avatar";

function Card() {
  return (
    <div className="flex flex-col p-4 items-start  w-full max-w-xs bg-[#35d4fb] m-auto rounded-sm shadow-xl">
      <Avatar
        url="https://avatars.githubusercontent.com/u/69096827?v=4"
        className="mb-4"
      />
      <h2>Amazin Forks WlasticSeard Rebrandin its open search</h2>
      <h3>Today 3m read timw</h3>
      <Image
        src="https://avatars.githubusercontent.com/u/69096827?v=4"
        height={40}
        width={30}
      />
      <ArrowCircleUpIcon />
      <ChatIcon />
    </div>
  );
}

export default Card;
