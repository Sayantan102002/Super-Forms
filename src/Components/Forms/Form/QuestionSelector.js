import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckBox from './Question Type Options/CheckBox';
import MultipleChoice from './Question Type Options/MultipleChoice';
import { useState, useEffect } from 'react';
import ShortAnswer from './Question Type Options/ShortAnswer';
import LongAnswer from './Question Type Options/LongAnswer';
import Time from './Question Type Options/Time';
import Date from './Question Type Options/Date';
import FileUpload from './Question Type Options/FileUpload';

export default function QuestionSelector(props) {
  //   const [age, setAge] = React.useState('');
  const { val, setValue } = props;
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
          <MenuItem value={1}><CheckBox /></MenuItem>

          <MenuItem value={2}><MultipleChoice /></MenuItem>

          <MenuItem value={3}><ShortAnswer /></MenuItem>

          <MenuItem value={4}><LongAnswer /></MenuItem>

          <MenuItem value={5}><Date /></MenuItem>

          <MenuItem value={6}><Time /></MenuItem>

          <MenuItem value={7}><FileUpload /></MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}