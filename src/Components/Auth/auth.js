import { Box } from "@mui/material";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


// import FormTab from "../Helper/FormTab";

export default function About() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const component = (value) => {
    switch (value) {
      case 0:
        return <SignIn onClick={() => { setValue(1) }} />;
      case 1:
        return <SignUp onClick={() => { setValue(0) }} />;
      default:
        return null;
    }
  };
  console.log("This is about page");
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      width: "100%",
      // height: "100vh",
      border: '1px solid red',

    }}>
      {/* <FormTab /> */}
      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          sx={{
            minWidth: "50%",
          }}
          label="Sign In"
        />
        <Tab
          sx={{
            minWidth: "50%",
          }}
          label="Sign Up"
        />
      </Tabs> */}
      {/* {component(value)} */}
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        width: { md: "40%", xs: '100%' },
        m: 3,
        height: '100%'

      }}>
        <SignIn />
      </Box>
    </Box>
  );
}
