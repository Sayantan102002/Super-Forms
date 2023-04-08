import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers';

export default function TimeSelector() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker />
    </LocalizationProvider>
  );
}