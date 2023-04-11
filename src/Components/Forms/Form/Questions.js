import { Box } from '@mui/material'
import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import arrayToReducer from '../../Helper/arrayToReducer'
import { useLocation } from 'react-router-dom'
import Api from '../../Helper/Api'
const Questions = (props) => {
  // const { form } = props
  const location = useLocation();
  const [questions, setQuestions] = useState(location?.state?.questions || []);
  // console.log(questions)
  const { idArr, newDict } = arrayToReducer(questions)
  const [questionIds, setQuestionIds] = useState(idArr)
  const [questionsDict, setQuestionsDict] = useState(newDict)

  const createQuestion = async (questionObj) => {
    Api.post('/form/question/create', {
      ...questionObj,
      user: "6414d0bf2fdd39855faa410d",
    }).then((res) => {
      console.log(res)
      setQuestions(res?.questions)
      // setLoading(false);
      // console.log(formIds)
    })
  }
  const updateQuestion = async (questionObj) => {
    Api.post('/form/question/update', questionObj).then((res) => {
      console.log(res)
      setQuestions(res?.questions)
      // setLoading(false);
      // console.log(formIds)
    })
  }
  const deleteQuestion = async (questionId) => {
    Api.post('/form/question/create', {
      questionId
    }).then((res) => {
      console.log(res)
      setQuestions(res?.questions)
      // setLoading(false);
      // console.log(formIds)
    })
  }



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid blue', alignItems: 'center' }}>
      {/* <QuestionCard /> */}
      {
        questionIds.map((id) => {
          const question = questionsDict[id];
          return (
            <QuestionCard
              key={id}
              question={question}
              updateQuestion={updateQuestion}
              deleteQuestion={deleteQuestion}
              createQuestion={createQuestion}
            />
          )
        })
      }



    </Box>
  )
}

export default Questions
