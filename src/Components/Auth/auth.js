import {
  Tabs,
  Tab
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import NavBar from "../NavBar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleBtn from "../Helper/GoogleBtn";
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
    <>
      <NavBar />
      {/* <FormTab /> */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      {component(value)}
    </>
  );
}
