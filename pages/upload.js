import Head from "next/head";

function upload() {
  return (
    <div className="">
      <Head>
        <title>Upload - QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col h-56 border-2 max-w-2xl w-full border-[#03056b] rounded-md">
          <h2 className="text-md">Upload a content</h2>
        </div>
      </div>
    </div>
  );
}

export default upload;
