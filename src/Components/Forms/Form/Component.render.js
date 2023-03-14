import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MultipleSelect from "./QuestionSelectComponents/InsideDropdown/Multiple.Select";
import DateSelecter from "./QuestionSelectComponents/InsideDropdown/Date.Selecter";
import OptCheckBox from "./QuestionSelectComponents/InsideDropdown/OptCheckBox";
export default function ComponentRenderer(props) {
  const { val } = props;
  const valueToOption = (value) => {
    console.log(value);
    switch (value) {
      case 1:
        return <MultipleSelect/>;
      case 2:
        return <div>This is mcq</div>;
      case 3:
        return <div>This is Short answer component</div>;
      case 4:
        return <DateSelecter/>;
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
