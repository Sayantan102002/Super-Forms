import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MultipleSelect from "./QuestionSelectComponents/InsideDropdown/Multiple.Select";
import DateSelecter from "./QuestionSelectComponents/InsideDropdown/Date.Selecter";
import ShortAnswer from "./QuestionSelectComponents/ShortAnswer";
import { TimePicker } from "@mui/x-date-pickers";
import TimeSelector from "./QuestionSelectComponents/InsideDropdown/Time.Selector";
// import MultipleSelect from "./QuestionSelectComponents/InsideDropdown/OptCheckBox";
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
        // return <div>This is Short answer component</div>;
        return <ShortAnswer/>;
      case 4:
        return <div>This is long answer component</div>;
      case 5:
        return <DateSelecter/>;
      case 6:
        return <TimeSelector/>;
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
