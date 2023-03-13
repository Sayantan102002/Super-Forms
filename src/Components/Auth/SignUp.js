import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
import { auth } from "../../config/firebase.config";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SingUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const SignUp = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // Signed in
        const user = userCredential.user;

        dispatch({
          type: "SET_AUTH_USER",
          user,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        
        // ..
      })
  };
  return (
    <div>
      <Container maxWidth="xl" minWidth="xl">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "90vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              // bgcolor: '#000',
              maxwidth: "90vw",
              minWidth: "25vw",
              height: "65vh",
              minHeight: "52vh",
            }}
          >
            <Paper
              elevation={5}
              sx={{
                Height: "100%",
                minHeight: "100%",
                width: "100%",
                minWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">Sign-Up</Typography>
              <Avatar className="Avatar" sx={{ bgcolor: "blue" }}>
                <LockOutlinedIcon />
              </Avatar>

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                placeholder="Enter Your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                sx={{ width: "70%", margin: "10px" }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                placeholder="Enter Your Passwod"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={"password"}
                sx={{ width: "70%", marginBottom: "10px" }}
              />
              <TextField
                id="outlined-basic"
                label="Confirm Your Passwod"
                variant="outlined"
                placeholder="Confirm Your Passwod"
                type={"password"}
                sx={{ width: "70%", marginBottom: "0px" }}
              />

              <Typography
                sx={{
                  marginTop: "1px",
                  marginRight: "auto",
                  marginLeft: "3.9rem",
                  cursor: "pointer",
                }}
              >
                {/* <Link sx={{ textDecoration: "none" }}>Forgot Password?</Link> */}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  marginTop: "10px",
                  width: "50%",
                  maxHeight: "35px",
                  flex: "1",
                }}
                onClick={SignUp(email, password)}
              >
                {" "}
                Sign UP
              </Button>

              <Typography
                sx={{
                  marginTop: "10px",
                  cursor: "pointer",
                  marginBottom: "9px",
                }}
              >
                Already Have An Account?
                <Link sx={{ textDecoration: "none" }} onClick={props.onClick}> Sign In</Link>
              </Typography>
              <GoogleBtn
                sx={{ marginBottom: "3px", color: "white", bgcolor: "blue" }}
              />
            </Paper>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default SingUp;
