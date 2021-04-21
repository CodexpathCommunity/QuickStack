import { ArrowCircleUpIcon, ChatIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Avatar from "./Avatar";

function Card() {
  return (
    <div
      className="
      cursor-pointer
    flex flex-col border-2 border-transparent hover:border-[#7703ef] p-4 
    items-start text-white w-full 
    max-w-xs bg-[#03056b] m-auto 
    rounded-md shadow-md hover:shadow-lg
    "
    >
      <Avatar url="/images/logos.png" className="mb-3" />
      <h2 className="text-xl font-lg mb-1">
        Amazin Forks WlasticSeard Rebrandin its open search
      </h2>
      <h3 className="text-xs font-md">Today 3m read timw</h3>
      <Image
        src="/images/learncode.svg"
        height={400}
        width={500}
        className="w-full"
      />
      <div className="flex items-start space-x-8">
        <div className="flex items-center space-x-2">
          <ArrowCircleUpIcon className="h-5" />{" "}
          <h2 className="text-sm font-lg">1</h2>
        </div>
        <div className="flex items-center space-x-2">
          <ChatIcon className="h-4" /> <h2 className="text-sm font-lg">4</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
