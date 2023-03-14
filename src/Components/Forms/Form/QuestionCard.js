import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
import QuestionSelect from "./QuestionSelect";
import ComponentRenderer from "./Component.render";

export default function QuestionCard() {
    const [val,setValue]=React.useState(2);
  return (
    <Paper
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        
      }}
      noValidate
      autoComplete="off"
    >
        <Box sx={{ display: "flex", minWidth: "100vw", justifyContent: "space-around"}}>
      <TextField id="outlined-basic" label="Name" variant="standard" />
      <QuestionSelect val={val} setValue={setValue}/>
        </Box>
<ComponentRenderer val={val}/>
   </Paper>
  );
}
