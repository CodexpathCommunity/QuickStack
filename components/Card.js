import { ArrowCircleUpIcon, ChatIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Avatar from "./Avatar";

function Card() {
  return (
    <div className="flex flex-col p-4 items-start  w-full max-w-xs bg-[#35d4fb] m-auto rounded-sm shadow-xl">
      <Avatar url="/public/vercel.svg" className="mb-4" />
      <h2>Amazin Forks WlasticSeard Rebrandin its open search</h2>
      <h3>Today 3m read timw</h3>
      <Image src="/images/learncode.svg" height={40} width={30} />
      <ArrowCircleUpIcon />
      <ChatIcon />
    </div>
  );
}

export default Card;
