import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import OptCheckBox from "./QuestionSelectComponents/InsideDropdown/OptCheckBox";

export default function ComponentRenderer(props) {
  const { val } = props;
  const valueToOption = (value) => {
    console.log(value);
    switch (value) {
      case 1:
        return <OptCheckBox/>;
      case 2:
        return <div>This is multiple choice componenet</div>;
      case 3:
        return <div>This is Short answer component</div>;
    }
  };
  const [option,setOption]=useState(valueToOption(val));
  useEffect(() => 
  {
    setOption(valueToOption(val));
    console.log(valueToOption(val));
}, [val]);
  return (
    <>
      {/* <Box>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="standard"
          disabled
        />
      </Box> */}
      {option}

    </>
  );
}
