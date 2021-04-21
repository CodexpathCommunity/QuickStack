import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Avatar from "../Avatar";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    flexDirection: " column",
  },
}));

function ProfileModal({ setOpen }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const signOut = (e) => {
    e.preventDefault();
    setOpen(false);
    auth.signOut();
    router.push("/");
  };
  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="text-xl mb-5">{user?.displayName} </h2>
      <div>
        <Avatar url={user?.photoURL} modal />
      </div>
      <div>
        <button className="btn mt-5" onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileModal;
