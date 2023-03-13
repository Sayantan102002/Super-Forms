import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';

export default function OptCheckBox() {
  return (
    <FormGroup >
      <FormControlLabel control={<Checkbox defaultChecked />} label={<TextField/>} />
    </FormGroup>
  );
}