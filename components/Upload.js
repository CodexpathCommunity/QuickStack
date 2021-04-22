import { useState } from "react";

function Upload() {
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sucess, setSucess] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="
      flex flex-col items-center border-2 
      max-w-2xl w-[90%]  border-[#03056b] 
      text-[#03056b] rounded-md p-2 sm:p-5"
      >
        <img
          src="./images/logos.png"
          alt="logo"
          className="h-20 w-20 object-contain"
        />
        <h2 className="  text-2xl font-bold">Explicitely Upload Content</h2>
        <form className="flex flex-col items-start w-full p-2 space-y-2">
          <h2 className="text-xl font-bold">Title :</h2>
          <input
            type="text"
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Thumbnail :</h2>
          <input
            type="file"
            name="myImage"
            accept="image/x-png,image/gif,image/jpeg"
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Video :</h2>
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Description :</h2>
          <textarea className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none resize-none h-14" />
        </form>
      </div>
    </div>
  );
}

export default Upload;
