import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <div className="text-gray-200 ">
        <Image
          src="/images/lightlogo.png"
          className="bg-blue-900 "
          height={50}
          width={300}
        />
        <h2>this is the start of the const</h2>
      </div>
    </div>
  );
}
