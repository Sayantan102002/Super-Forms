import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckBox from './QuestionSelectComponents/CheckBox';
import MultipleChoice from './QuestionSelectComponents/MultipleChoice';
import { Paper } from '@mui/material';
import OptCheckBox from './QuestionSelectComponents/InsideDropdown/OptCheckBox';
import { useState,useEffect } from 'react';

export default function QuestionSelect(props) {
//   const [age, setAge] = React.useState('');
const {val,setValue}=props;
const [optionname, setOptionname] = useState('')

useEffect(() => {
  

  console.log(val);
  
}, [val])

const handleChangeOptions =(e,value)=>{
// e.preventDefault();
console.log(value)

}



  const handleChange = (event) => {
    // console.log(event.target.value,val);
    setValue(event.target.value);
    // console.log(event.target.value,val);
  };

  return (
    <Box sx={{ minWidth: 130, }}>
      <FormControl fullWidth>
        <Select
            value={val}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}

        >
          <MenuItem value={1} ><CheckBox/></MenuItem>
          <MenuItem value={2}><MultipleChoice/></MenuItem>
          <MenuItem value={3}>Short Answer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}