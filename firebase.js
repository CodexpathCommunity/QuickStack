import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0ibC-lumHLMZvC7abTSiSCIvNoIhMmE",
  authDomain: "flexgela.firebaseapp.com",
  projectId: "flexgela",
  storageBucket: "flexgela.appspot.com",
  messagingSenderId: "354254827891",
  appId: "1:354254827891:web:4979137dc1020865051506",
  measurementId: "G-DKFMBLFJGP",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
