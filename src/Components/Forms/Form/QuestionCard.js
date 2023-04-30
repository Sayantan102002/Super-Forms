import React, { useState, useEffect } from "react";
import { useDebounce } from 'react-use';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton, Paper, Typography } from "@mui/material";
import AnswerType from "./answer.type.renderer";
import QuestionSelector from "./QuestionSelector";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useQuestionApis from "../../Helper/question.hooks";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Android12Switch } from "../../Helper/Switch";


export default function QuestionCard(props) {
  let { question, formId, createQuestion, deleteQuestion, index } = props;

  const [questionText, setQuestionText] = useState(question?.questionText || "");
  const [questionImage, setQuestionImage] = useState(question?.questionImage || "");
  const [options, setOptions] = useState(question?.options || "");
  const [optionCols, setOptionCols] = useState(question?.optionCols || "");
  const [type, setType] = useState(question?.type || "Multiple Choice");
  const [status, setStatus] = useState("Saved")
  const [required, setRequired] = useState(question?.required || false)
  const [open, isOpen] = useState(question?.open);
  // const { createQuestion, updateQuestion, deleteQuestion, getForms, questionIds } = useQuestionApis(formId);
  const { updateQuestion } = useQuestionApis(formId);
  // useEffect(() => {
  //   getForms(formId)
  // }, [questionIds.length])
  // useEffect(()=>{
  useDebounce(() => {
    // setStatus("Updating....")
    updateQuestion({
      questionObj: {
        _id: question._id,
        questionText,
        questionImage,
        options,
        optionCols,
        type,
        required,
        open
      }
    })
    setStatus("Saved")
  }, 1500, [questionText, questionImage, options, optionCols, type, required, open])
  // },[questionText,questionImage,options,optionCols,type])
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
        width: {
          lg: "45%",
          xs: "85%",
          md: "50%"
        },
        py: 3,
        px: {
          xs: 2,
          md: 2,
          lg: 4
        },
        margin: "2vh 0",
        borderRadius: 5
      }}
      variant="outlined"
      noValidate
      autoComplete="off"
    >
      <Box sx={{
        display: "flex", justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row"
        }
      }}>
        <Box sx={{
          width: {
            xs: "100%",
            md: "60%",

          }
        }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="filled"
            fullWidth
            value={questionText}
            onChange={(e) => {
              setStatus("Updating....")
              setQuestionText(e.target.value)
            }}
            sx={{ m: "1" }}
          />
        </Box>
        <Box sx={{
          width: {
            xs: "100%",
            md: "fit-content"
            // md: "100%",
            // lg: "100%"
          },
          py: {
            xs: 1,
            md: 0
          }
        }}>
          <QuestionSelector
            val={val}
            setValue={setValue}
            setStatus={setStatus}
          />
        </Box>
      </Box>
      <Box sx={{
        pt: 1,
        width: {
          xs: "100%",
          md: "100%"
        }
      }}>
        <AnswerType val={val} setType={setType} setStatus={setStatus} question={question} />

      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
        <Box>
          {/* This is a component */}
          <FormControlLabel
            control={<Android12Switch checked={open} onChange={(e) => {
              setStatus("Updating....")
              isOpen(e.target.checked)
            }} />}
            label={open ? "Open" : "Closed"}
          />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Typography variant="caption" sx={{
            pr: 2,
            display: {
              xs: "none",
              md: "flex"
            }
          }}>
            {status}
          </Typography>
          <FormControlLabel
            control={<Android12Switch checked={required} onChange={(e) => {
              setStatus("Updating....")
              setRequired(e.target.checked)
            }}
            />}
            label={
              <Typography variant="body1" sx={required ? {
                textDecoration: "none"
              } :
                {
                  textDecoration: "line-through"
                }}>Required</Typography>
            }
          />
          <IconButton onClick={() => {
            createQuestion(formId, index)
            // getForms(formId)
          }} >
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={() => {
            deleteQuestion(question._id)
          }} >
            <DeleteOutlineIcon />
          </IconButton>

        </Box>
      </Box>
    </Paper>
  );
}
