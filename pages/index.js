import Head from "next/head";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
} from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <div className="h-screen sm:h-[70vh] w-full text-white  bg-gradient-to-r from-[#03056b] via-[#7703ef] to-[#35d4fb]">
        <div className="flex p-5 items-center w-full">
          <MenuIcon className="h-10 mr-5" />
          <Image
            src="/images/lightlogo.png"
            className=""
            height={40}
            width={200}
          />
        </div>
      </div>
    </div>
  );
}
