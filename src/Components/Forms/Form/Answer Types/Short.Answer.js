import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ShortAnswer() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '40%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Short-Answer Text" variant="standard" disabled={true} />

    </Box>
  );
}