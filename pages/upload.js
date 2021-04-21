import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

function upload() {
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [sucess, setSucess] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Upload - QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>
      <Header showNav={showNav} setShowNav={setShowNav} links={links} />
      <SideNav showNav={showNav} setShowNav={setShowNav} links={links} />

      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col border-2 max-w-2xl w-[90%] h-3/4 border-[#03056b] rounded-md p-2 sm:p-5">
          <h2 className="text-md">Upload a content</h2>
        </div>
      </div>
    </div>
  );
}

export default upload;
