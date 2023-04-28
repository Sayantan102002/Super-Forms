import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom"
import GoogleBtn from "../Helper/GoogleBtn";
// import FacebookBtn from "../Helper/FacebookBtn";
import { auth } from "../../config/firebase.config";
import { useDispatch } from "react-redux";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "./actionCodeSettings"
import { useAuthState } from 'react-firebase-hooks/auth'
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
// import Popper from "../Helper/Popper.mui";
// import Poppermui from "../Helper/Popper.mui";


import loginImage from '../../assets/logo/jpg/loginImage.jpg'
import loginImage3 from '../../assets/logo/jpg/loginImage4.jpg'
import loginImage5 from '../../assets/logo/jpg/loginImage5.jpg'
import loginImage6 from '../../assets/logo/jpg/loginimage6.webp'




function SignIn(props) {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  // console.log("This is user")

  // console.log(user)

  // const [loginLoading, setLoginLoading] = useState(false);
  // const [loginError, setLoginError] = useState('');

  const history = useHistory();

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user) {
  //     history.push('/dashboard');
  //   }
  //   else {

  //     Completingsignin();
  //   }

  // }, [user])


  const SignIn = (email) => {
    // setLoginLoading(true);
    // e.preventDefault();
    console.log('Working');
    console.log(email);
    sendSignInLinkToEmail(auth, email, actionCodeSettings
    )
      .then(() => {
        // The link was successfully sent. Inform the user.
        console.log("Send")
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
        console.log(email);
        console.log("hiiiii");
        // ...

      })

      .catch((error) => {
        console.log(email);

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("This is error");
        console.log(errorMessage)
        // ...
      });
    // sendSignInLinkToEmail(auth, email,{
    //   // this is the link where customer will be redirected after mail verification
    //   url:'http://localhost:3000/dashboard',
    //   handleCodeInApp:true,
    // }).then(()=>{
    //   localStorage.setItem('email',email);
    //   setLoginLoading(false);
    //   setLoginError('')
    // }).catch(err=>
    //   {
    //   setLoginLoading(false);
    //   setLoginError(err.message)
    // })




  };


  const Completingsignin = () => {
    // Confirm the link is a sign-in with email link.
    console.log("Hey")
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        console.log('Not email')
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          console.log("This is user");
          console.log(result.user);
          history.push('/dashboard');
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          console.log('This is last error')
          console.log(error.message);
        });
    }
  }
  return (
    <Paper
      // component="img"

      // elevation={5}
      // variant="outlined"
      sx={{
        Height: "80vh",
        minHeight: "80vh",
        width: "100%",
        minWidth: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        py: 1,
        pl: 1,
        // border:'10px solid black ',

        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

        // boxSizing: 'border-box'
      }}
    >

      <Box
        //  component='img'
        sx={{
          // border:'1px solid red',
          width: '50%',
          minWidth: '50%',
          height: '100%',
          backgroundColor: "#3c37ff",
          borderRadius: '1rem',
          // marginRight: '1.2rem',
          display: 'flex',
          alignItems: "center",
          // justifyContent: "center",
          // marginLeft: '2rem',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          "&:hover": {
            cursor: 'pointer',
            boxShadow: " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            transitionDuration: '3000ms',
            color: 'black',
            // width:'90%',

          },

        }}
      //  src={loginImage3}
      >
        <Box
          component="img"
          sx={{
            width: "50%",
            height: "100%",
            minHeight: "70%",
            bgcolor: 'white',
            objectFit: 'cover'

          }}
          src={loginImage6}
        >

        </Box>
        <Typography variant="h6"
          sx={{
            color: 'black',
            marginRight: 'auto',
            marginLeft: '2rem',
            marginTop: '1.5rem',
            fontWeight: 'bold'

          }}
        >Superforms</Typography>
        <Typography variant="h4"
          sx={{
            color: 'black',
            marginRight: 'auto',
            marginLeft: '1rem',
            // marginTop:'1.5rem',
            // fontWeight:'bold'

            fontFamily:
              ['Poppins', "sans-serif"].join(','),

          }}
        >Create with us</Typography>
        <Typography variant="h6"
          sx={{
            color: 'black',
            marginRight: 'auto',
            marginLeft: '1rem',
            // marginTop:'1.5rem',
            // fontWeight:'bold'
            fontFamily:
              ['EB Garamond', "serif"].join(','),

            fontWeight: '400px'
          }}
        >Start your journey  </Typography>

        {/* 
 <Typography variant="h5"
 sx={{
  color:'white',
  marginRight:'auto',
  marginLeft:'1rem',
  // marginTop:'1.5rem',
// fontWeight:'bold'
fontFamily: 
[ 'EB Garamond', "serif"].join(','),
 
fontWeight:'semibold'
 }}
 >
 <Poppermui/> </Typography>
 */}





        {/* <Box
 sx={{
  border:'3px solid white',
  width:'60%',
  height:'30%',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'2rem',
  borderRadius:'15px',
 }}
 >



 </Box> */}
      </Box>


      <Box

        sx={{
          // border:'1px solid red',
          // width:'45%',
          minWidth: '45%',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily:
            ['Poppins', "sans-serif"].join(','),

        }}

      >
        <Typography variant="h5">SIGN UP with us</Typography>
        {/* <Avatar className="Avatar" sx={{ bgcolor: "blue" }}>
              <LockOutlinedIcon />
            </Avatar> */}

        <TextField
          id="basic-outlined"
          label="Email"
          variant="outlined"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}


          sx={{
            //  width: "85%",
            width: '70%',
            // borderRadius:'13px', 
            marginTop: '2rem',
            marginBottom: '2rem',
            padding: '0px',
            //  border:'1px solid red !important',
            // maxHeight: "20rem",
            display: 'flex',
            //  lineHeight:'10%',
            // minHeight:'20%',
            // maxHeight:'20%',
            // borderRadius:'20px'

          }}
          inputProps={{
            style: {
              height: ".5rem",
              display: 'flex',
              justifyContent: 'center',
              border: '1px solid black',
              // borderRadius:'13px',

              alignItems: 'center',
            },
          }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            // border:"1px solid black",


          }}
        >

          <Button
            variant="contained"
            sx={{
              marginTop: "1rem",
              marginBottom: "auto",
              width: "30%",
              maxHeight: "2rem",
              flex: "1",
              borderRadius: '2px',
              maxWidth: '20%',
              marginRight: 'auto',
              marginLeft: '38%',
              marginTop: 'auto'
            }}
            onClick={SignIn(email)}
          >
            {" "}
            Sign In
          </Button>

          <Box
            component="img"
            sx={{
              // border:'1px solid black',
              width: '30%',
              height: '100%',
              marginLeft: 'auto',
              // marginRight:'auto',
              // marginTop:'2rem',
              borderRadius: '15px',
              // marginLeft:'auto'
              display: 'flex',
              justifyContent: 'flex-start',
              // borderTopLeftRadius: "146px 89px",

            }}
            src={loginImage}
          // src={loginImage3}
          >
          </Box>
        </Box>







        <Box

          sx={{
            width: "100%",
            display: "flex",
            // border:"1px solid black",
            // "&:hover":{
            // flexDirection:'row-reverse',
            // transitionDuration:'5s'
            // }

          }}>

          <Box
            component="img"
            sx={{
              // border:'1px solid black',
              width: '25%',
              height: '100%',
              marginRight: 'auto',
              // marginRight:'auto',
              // marginTop:'2rem',
              borderRadius: '15px',
              // marginLeft:'auto'
              display: 'flex',
              justifyContent: 'flex-start',
              // borderTopLeftRadius: "146px 89px",
              "&:hover": {
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset",
                // box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
                cursor: 'pointer'
              }
            }}
            src={loginImage5}
          // src={loginImage3}
          >
          </Box>

          <Box
            sx={{
              marginRight: "38%"
            }}
          >
            <Typography
              sx={{
                marginTop: "2rem",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              Don't Have An Account?
              <Button sx={{ textDecoration: "none" }} onClick={props.onClick}> Sign Up</Button>
            </Typography>
            <GoogleBtn
              sx={{ marginBottom: "3px", color: "white", bgcolor: "blue" }}
            />
          </Box>
        </Box>

      </Box>

    </Paper>


  );
}
export default SignIn;
