import Head from "next/head";
import Avatar from "../components/Avatar";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <div className="h-screen sm:h-[70vh] w-full text-white relative bg-gradient-to-r from-[#03056b] via-[#7703ef] to-[#35d4fb]">
        <div className="flex px-5 py-2 items-center w-full border-b-2 border-[#35d4fb]">
          <MenuIcon className="h-8 mr-1 sm:hidden" />
          <Image
            src="/images/lightlogo.png"
            className="mr-2"
            height={30}
            width={200}
          />
          <div className="h-[90%] w-full absolute top-[3.75rem] left-0 text-w bg-[#35d4fb] flex flex-col">
            <p>the terms</p>
            <p>the terms</p>
            <p>the terms</p>
          </div>
          <Avatar
            url="https://avatars.githubusercontent.com/u/69096827?v=4"
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
}
