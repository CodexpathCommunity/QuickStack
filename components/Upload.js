import { useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function Upload() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sucess, setSucess] = useState(false);
  const [files, setFiles] = useState([]);

  const onFileChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      // add an "id" property to each File object
      setFiles((prevState) => [...prevState, newFile]);
    }
  };

  // the upload task

  const onUploadSubmission = (e) => {
    e.preventDefault(); //preventing refreshing
    const promises = [];
    files.forEach((file) => {
      const uploadTask = firebase
        .storage()
        .ref()
        .child(`course/file/path/${file.name}`)
        .put(file);
      promises.push(uploadTask);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === firebase.storage.TaskState.RUNNING) {
            console.log(`progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref
            .getDownloadURL()
            .then((url) => {
              console.log(url);
            });
          //    then((url) => {
          // db.collection("All_COURSES").add({
          //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          //   title: title,

          //   description: desc,
          // });
          // DO  something with the url
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("All files uploaded"))
      .catch((err) => console.log(err.code));
  };

  return (
    <div className="flex items-center justify-evenly h-screen flex-col">
      <h2
        className={`text-xl text-green-200  ${
          sucess ? "inline-block" : "hidden"
        }`}
      >
        Sucessfully uploaded a content!!!
      </h2>
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
            placeholder="Name of Content"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Thumbnail :</h2>
          <input
            type="file"
            name="myImage"
            accept="image/x-png,image/gif,image/jpeg"
            onChange={onFileChange}
            className="p-2 border-2 w-full rounded-md border-[#03056b] focus:outline-none "
          />
          <h2 className="text-xl font-bold">Video :</h2>
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={onFileChange}
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
          <button
            onClick={onUploadSubmission}
            className="btn w-3/4 m-auto mt-4 text-2xl"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
