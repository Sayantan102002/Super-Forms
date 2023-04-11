import * as React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ShortTextIcon from '@mui/icons-material/ShortText';

export default function ShortAnswer() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
      <IconButton>
        <ShortTextIcon color="primary" />
      </IconButton>
      <Typography sx={{ margin: "0 .1vw" }}>
        Short-Answer Text
      </Typography>
    </Box>
  );
}
