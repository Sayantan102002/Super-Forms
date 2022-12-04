import {
  Tabs,
  Tab
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import NavBar from "../NavBar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleBtn from "../Helper/GoogleBtn";
import SignIn from "./SingIn";
import SignUp from "./SignUp";

export default function About() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const component = (value) => {
    switch (value) {
      case 0:
        return <SignIn />;
      case 1:
        return <SignUp />;
      default:
        return null;
    }
  };
  console.log("This is about pageeee");
  return (
    <>
      <NavBar />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="SignIn" />
        <Tab label="SignUp" />
      </Tabs>
      {component(value)}
    </>
  );
}
