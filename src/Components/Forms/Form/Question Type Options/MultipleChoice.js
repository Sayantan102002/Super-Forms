import * as React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Box, IconButton, Typography } from '@mui/material';
export default function MultipleChoice() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
      <IconButton>
        <RadioButtonCheckedIcon color="primary" />
      </IconButton>
      <Typography sx={{ margin: "0 .1vw" }}>
        Multiple Choice
      </Typography>
    </Box>
  );
}