import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import QuestionCard from './QuestionCard'
import arrayToReducer from '../../Helper/arrayToReducer'
import { useLocation, useParams } from 'react-router-dom'
import Api from '../../Helper/Api'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import useQuestionApis from '../../Helper/question.hooks'
const Questions = (props) => {
  // const location = useLocation();
  // const { formsDictionary } = useSelector(state => state.forms)
  const { formId } = useParams();
  const { questionIds, questionsDict, loading } = useQuestionApis(formId);
  // const [questions, setQuestions] = useState(location?.state?.questions || []);
  // console.log(questions)

  //🙂🙂🙂🙂🙂🙂TODO: Passing data througe routes has already been setup we have to check if the realtime question changes are being observed.🙂🙂🙂🙂🙂🙂




  // const createQuestion = async () => {
  //   Api.post('/form/question/create', {
  //     form: "643f941f6ab3da43be08007d",
  //     questionText: "Question Sayan",
  //     type: "Long Answer",
  //     user: "6414d0bf2fdd39855faa410d",
  //   }).then((res) => {
  //     console.log(res)
  //     setQuestions(res?.questions)
  //     // setLoading(false);
  //     // console.log(formIds)
  //   })
  // }
  // const updateQuestion = async (questionObj) => {
  //   Api.post('/form/question/update', questionObj).then((res) => {
  //     console.log(res)
  //     setQuestions(res?.questions)
  //     // setLoading(false);
  //     // console.log(formIds)
  //   })
  // }
  // const deleteQuestion = async (questionId) => {
  //   Api.post('/form/question/create', {
  //     questionId
  //   }).then((res) => {
  //     console.log(res)
  //     setQuestions(res?.questions)
  //     // setLoading(false);
  //     // console.log(formIds)
  //   })
  // }



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid blue', alignItems: 'center', justifyContent: 'center', minHeight: "80vh", minWidth: '100%' }}>
      {/* <QuestionCard /> */}
      {!loading ? <>
        {
          questionIds.map((id) => {
            const question = questionsDict[id];
            return (
              <QuestionCard
                key={id}
                question={question}
                formId={formId}
              // updateQuestion={updateQuestion}
              // deleteQuestion={deleteQuestion}
              // createQuestion={createQuestion}
              />
            )
          })
        }</> : <CircularProgress />}



    </Box>
  )
}

export default Questions
