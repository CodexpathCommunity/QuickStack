import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeadeBtn, LoginHeader } from "./HeaderElement";
import { auth, provider } from "../../firebase";

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

function LoginModal({ setOpen }) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const signIn = () => {
    setOpen(false);
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <LoginHeader>Login to continue</LoginHeader>
      <HeadeBtn onClick={signIn}>Continue With Google </HeadeBtn>
    </div>
  );
}

export default LoginModal;
