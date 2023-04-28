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
      justifyContent: "center",
      width: "100%",
      height: "100%",
      border: '1px solid red',
      // boxSizing: "border-box",

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
        // border: '1px solid',
        width: { md: "80%", xs: '100%' },
        // boxSizing: "border-box",
        // m: 3,
        my: 2,
        // mx: 3,
        height: '80%'

      }}>
        <SignIn />
      </Box>
    </Box>
  );
}
