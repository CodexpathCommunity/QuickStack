// const onFileChange = (e) => {
//   for (let i = 0; i < e.target.files.length; i++) {
//     const newFile = e.target.files[i];
//     newFile["id"] = Math.random();
//     // add an "id" property to each File object
//     setFiles((prevState) => [...prevState, newFile]);
//   }
// };

// the upload task

// const onUploadSubmission = (e) => {
//   e.preventDefault(); //preventing refreshing
//   const promises = [];
//   files.forEach((file) => {
//     const uploadTask = firebase
//       .storage()
//       .ref()
//       .child(`course/file/${title}/${file.name}`)
//       .put(file);
//     promises.push(uploadTask);
//     uploadTask.on(
//       firebase.storage.TaskEvent.STATE_CHANGED,
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         if (snapshot.state === firebase.storage.TaskState.RUNNING) {
//           console.log(`progress: ${progress}%`);
//         }
//       },
//       (error) => console.log(error.code),
//       async () => {
//         const downloadURL = await uploadTask.snapshot.ref
//           .getDownloadURL()
//           .then((url) => {
//             console.log(url);

//             // db.collection("CONTENTS").ADD({
//             //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//             //     title: title,
//             //     description: desc,
//             //     videoUrl: url,
//             //     imageUrl: url,
//             // });
//           });
//       }
//     );
//   });
//   Promise.all(promises)
//     .then(() => alert("All files uploaded"))
//     .catch((err) => console.log(err.code));
// };
