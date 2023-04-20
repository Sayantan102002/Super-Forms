import React, { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  Grid,
  Avatar,
  TextField,
  Button,
  Link,
} from "@mui/material";
import Typography from "@mui/material/Typography";
// import React from 'react'
// import NavBar from '../NavBar';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleBtn from "../Helper/GoogleBtn";
// import FacebookBtn from "../Helper/FacebookBtn";
import { auth } from "../../config/firebase.config";
import { useDispatch } from "react-redux";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "./actionCodeSettings"


function SignIn(props) {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const SignIn = (email) => {

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
  };

  return (
    <Paper
      // elevation={5}
      variant="outlined"
      sx={{
        Height: "100%",
        minHeight: "100%",
        width: "100%",
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 3,

        // boxSizing: 'border-box'
      }}
    >
      <Typography variant="h5">Welcome to Super Forms</Typography>
      {/* <Avatar className="Avatar" sx={{ bgcolor: "blue" }}>
              <LockOutlinedIcon />
            </Avatar> */}

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        placeholder="Enter Your Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        sx={{ width: "100%", m: "10px" }}
      />


      <Button
        variant="contained"
        sx={{
          marginTop: "10px",
          marginBottom: "15px",
          width: "80%",
          maxHeight: "35px",
          flex: "1",
        }}
        onClick={SignIn(email)}
      >
        {" "}
        Sign In
      </Button>

      <Typography
        sx={{
          marginTop: "10px",
          cursor: "pointer",
          marginBottom: "9px",
        }}
      >
        Already Have An Account?
        <Button sx={{ textDecoration: "none" }} onClick={props.onClick}> Sign Up</Button>
      </Typography>
      <GoogleBtn
        sx={{ marginBottom: "3px", color: "white", bgcolor: "blue" }}
      />


    </Paper>


  );
}
export default SignIn;
