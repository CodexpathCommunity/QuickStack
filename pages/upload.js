import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Upload from "../components/Upload";

function upload() {
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [sucess, setSucess] = useState(false);
  const links = [
    "courses",
    "Road-Map",
    "Resourses",
    "Design Trends",
    "Jobs",
    "Pricing",
  ];
  return (
    <div className="">
      <Head>
        <title>Upload - QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <Header />
      <SideNav />
      <Upload />
    </div>
  );
}

export default upload;
