import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
import QuestionSelect from "./QuestionSelect";
import ComponentRenderer from "./Component.render";

export default function QuestionCard() {
  const [val, setValue] = React.useState(2);
  return (
    <Paper
      component="form"
      sx={{
        // "& > :not(style)": { m: 1, width: "25ch" },
        width: "40%",
        border: '1px solid red',
        padding: "20px"
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "50%" }}>
          <TextField id="outlined-basic" label="Name" variant="filled" fullWidth sx={{ m: "1" }} />
        </Box>
        <Box>
          <QuestionSelect val={val} setValue={setValue} />
        </Box>
      </Box>
      <ComponentRenderer val={val} />
    </Paper>
  );
}
