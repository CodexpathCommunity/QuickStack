import Head from "next/head";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Upload from "../components/Upload";

function upload() {
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
