import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckBox from './QuestionSelectComponents/CheckBox';
import MultipleChoice from './QuestionSelectComponents/MultipleChoice';
import { Paper } from '@mui/material';
import MultipleSelect from './QuestionSelectComponents/InsideDropdown/Multiple.Select';
import { useState,useEffect } from 'react';

import OptShortAnswer from './QuestionSelectComponents/InsideDropdown/Short.Answer';
import ShortAnswer from './QuestionSelectComponents/ShortAnswer';


import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LongAnswer from './QuestionSelectComponents/LongAnswer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhotoUploader from '../photo.uploader';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function QuestionSelect(props) {
//   const [age, setAge] = React.useState('');
const {val,setValue}=props;
const [optionname, setOptionname] = useState('')

useEffect(() => {
  

  console.log(val);
  
}, [val])

// const handleChangeOptions = (e,value)=>{
// // e.preventDefault();
// console.log(value)

// }



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
          <MenuItem value={1}><CheckBox/></MenuItem>

          <MenuItem value={2}><MultipleChoice/></MenuItem>

          <MenuItem value={3}><ShortAnswer/></MenuItem>

          <MenuItem value={4}><LongAnswer/></MenuItem>
          
          <MenuItem value={5}> <CalendarTodayIcon/>Date</MenuItem>

          <MenuItem value={6}> <AccessTimeIcon/>Time</MenuItem>

          <MenuItem value={7}><CloudUploadIcon/>File Upload</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}