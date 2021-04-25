import { useState } from "react";
import { db, storage, auth } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Upload() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("null");
  const [video, setVideo] = useState(null);
  const [upLoading, setUploading] = useState(true);
  const [user] = useAuthState(auth);

  const imgChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const vidChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  
  const handleUpload = (e) => {
    e.preventDefault();
    setUploading(true);
    storage
      .ref(`content/${title}/image/${image.name}`)
      .put(image)
      .then((snapshot) => {
        storage
          .ref("content")
          .child(`${title}/image/${image.name}`)
          .getDownloadURL()
          .then((url) => {
            const imgUrl = url;
            storage
              .ref(`content/${title}/video/${video.name}`)
              .put(image)
              .then((snapshot) => {
                storage
                  .ref("content")
                  .child(`${title}/video/${video.name}`)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection("content")
                      .doc(user.uid)
                      .collection("upload")
                      .add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        title: title,
                        desc: desc,
                        video: url,
                        image: imgUrl,
                        uploadURL: user.photoURL,
                        viewtime: 0,
                        comment: 0,
                        upvote: 0,
                        size: snapshot._delegate.bytesTransferred,
                      });

                    setUploading(false);
                    setTitle("");
                    setDesc("");
                    setImage(null);
                    setVideo(null);
                    alert("Files has been uploaded");
                  });
              });
          });
      });
  };

  return (
    <div className="flex items-center justify-evenly h-screen flex-col">
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
            placeholder="Title of content - make it brief, include keywords .... "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Thumbnail :</h2>
          <input
            type="file"
            name="myImage"
            accept="image/x-png,image/gif,image/jpeg"
            onChange={imgChange}
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Video :</h2>
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={vidChange}
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Description :</h2>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="
            p-2 border-2 w-full 
            rounded-md border-[#03056b] 
            focus:outline-none resize-none h-36"
          />
          <button onClick={handleUpload} className="btn w-3/4 m-auto  text-2xl">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
