import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton, Paper } from "@mui/material";
import AnswerType from "./answer.type.renderer";
import QuestionSelector from "./QuestionSelector";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function QuestionCard(props) {
  let { question } = props;
  const [questionText, setQuestionText] = useState(question?.questionText || "");
  const [questionImage, setQuestionImage] = useState(question?.questionImage || "");
  const [options, setOptions] = useState(question?.options || "");
  const [optionCols, setOptionCols] = useState(question?.optionCols || "");
  const [type, setType] = useState(question?.type || "Multiple Choice");
  const [val, setValue] = useState(2);
  // const {}
  return (
    <Paper
      component="form"
      sx={{
        // "& > :not(style)": { m: 1, width: "25ch" },
        // border: '1px solid red',
        width: "45%",
        padding: "20px",
        margin: "2vh 0"
      }}
      variant="outlined"
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "60%" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="filled"
            fullWidth
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            sx={{ m: "1" }}
          />
        </Box>
        <Box>
          <QuestionSelector
            val={val}
            setValue={setValue}
          />
        </Box>
      </Box>
      <AnswerType val={val} setType={setType} />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
