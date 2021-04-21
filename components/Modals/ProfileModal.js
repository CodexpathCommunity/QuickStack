import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ProfileAvatar,
  AvatarContainer,
  ProfileHeader,
  ProfileContainer,
  HeadeBtn,
} from "./HeaderElement";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 40;
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
    width: 400,
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
      <ProfileHeader>{user?.displayName} </ProfileHeader>
      <AvatarContainer>
        <ProfileAvatar src={user?.photoURL} />
      </AvatarContainer>
      <ProfileContainer>
        <HeadeBtn onClick={signOut}>Logout</HeadeBtn>
        <HeadeBtn>Dashboard</HeadeBtn>
      </ProfileContainer>
    </div>
  );
}

export default ProfileModal;
