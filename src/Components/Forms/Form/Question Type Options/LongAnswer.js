import * as React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

export default function LongAnswer() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
        <IconButton>
          <ViewHeadlineIcon color="primary" />
        </IconButton>
        <Typography sx={{ margin: "0 .1vw" }}>
          Long-Answer Text
        </Typography>
      </Box>
    </>
  );
}
