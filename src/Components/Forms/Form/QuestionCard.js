import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton, Paper } from "@mui/material";
import AnswerType from "./answer.type.renderer";
import QuestionSelector from "./QuestionSelector";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useQuestionApis from "../../Helper/question.hooks";
export default function QuestionCard(props) {
  let { question, formId } = props;
  const [questionText, setQuestionText] = useState(question?.questionText || "");
  const [questionImage, setQuestionImage] = useState(question?.questionImage || "");
  const [options, setOptions] = useState(question?.options || "");
  const [optionCols, setOptionCols] = useState(question?.optionCols || "");
  const [type, setType] = useState(question?.type || "Multiple Choice");

  const { createQuestion, deleteQuestion } = useQuestionApis(formId);
  const typeToval = (type) => {
    switch (type) {
      case "Multiple Choice":
        return 2;
      case "Checkbox":
        return 1;
      case "Short Answer":
        return 3;
      case "Long Answer":
        return 4;
      case "Date":
        return 5;
      case "Time":
        return 6;
      case "File Upload":
        return 7;
      case "Linear Scale":
        return 8;
      case "Dropdown":
        return 9;
      case "Multiple Choice Grid":
        return 10;
      case "Checkbox Grid":
        return 11;
      default:
        return 1;
    }
  }
  const [val, setValue] = useState(typeToval(type));
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
          <AddCircleOutlineIcon onClick={() => {
            createQuestion(formId)
          }} />
        </IconButton>
        <IconButton>
          <DeleteOutlineIcon onClick={() => {
            deleteQuestion(question._id)
          }} />
        </IconButton>
      </Box>
    </Paper>
  );
}
