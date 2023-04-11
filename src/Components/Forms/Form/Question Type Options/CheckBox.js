import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box, IconButton, Typography } from '@mui/material';
export default function CheckBox() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
      <IconButton>
        <CheckBoxIcon color="primary" />
      </IconButton>
      <Typography sx={{ margin: "0 .1vw" }}>
        CheckBox
      </Typography>
    </Box>
  );
}