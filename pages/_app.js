import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import firebase from "firebase";
import { auth, db } from "../firebase";
import { Provider } from "../context";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoUrl: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  return (
    <Provider>
      <Header />
      <SideNav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
