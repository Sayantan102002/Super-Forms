import { Box } from '@mui/material'
import React, { useEffect, useState, useCallback } from 'react'
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





  const { user } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [State, setState] = useState(0);
  const [questionIds, setQuestionIds] = useState([])
  const [questionsDict, setQuestionsDict] = useState({})
  // let form = formsDictionary[formId]
  const getForm = useCallback((formId) => {
    // if (questionIds.length == 0) {
    // setLoading(true)
    Api.post("/form/getFormById", {
      formId
    })
      .then((res) => {
        const { idArr, newDict } = arrayToReducer(res?.questions);
        setQuestionIds(idArr)
        setQuestionsDict(newDict)
        // console.log(questionIds, questionsDict)
        // setQuestions(res?.questions)
        // setLoading(false)
      })
    // }
    // else {
    console.log(questionIds, questionsDict);
    // console.log(questions);
    // }
    // return questionIds.length
  }, [questionIds.length])
  useEffect(() => {
    getForm(formId)
    // return {
    // }
  }, [])
  // useEffect(()=>{
  // useEffect(() => {
  //     getForms(formId)
  // }, [getForms, questionIds.length, questionsDict])
  // })
  const createQuestion = async (formId, index) => {
    // setLoading(true)
    Api.post('/form/question/create', {
      questionObj: {
        form: formId,
        user: user?._id,
        type: "Short Answer",
        // questionText: " "
      },
      index

    }).then((res) => {
      console.log(res, "Question Created............")
      const { idArr, newDict } = arrayToReducer([res]);
      setQuestionIds(idArr)
      setQuestionsDict(newDict)
      setQuestionIds([
        ...questionIds.slice(0, index + 1),
        res?._id,
        ...questionIds.slice(index + 1)
      ])
      setQuestionsDict({
        ...questionsDict,
        ...newDict
      })
      // setLoading(false)
      // setLoading(false);
      console.log(questionIds, questionsDict)
      console.log(idArr, newDict)

    })
  }
  const updateQuestion = async (questionObj) => {
    // setLoading(true)
    // Api.post('/form/question/update', questionObj).then((res) => {
    //   const { idArr, newDict } = arrayToReducer([res]);
    //   console.log(res)
    //   setQuestionIds([
    //     ...questionIds,
    //     res?._id
    //   ])
    //   setQuestionsDict({
    //     ...questionsDict,
    //     ...newDict
    //   })
    // setQuestions(res?.questions)
    // setLoading(false)
    // setLoading(false);
    // console.log(formIds)
    // })
  }
  const deleteQuestion = async (questionId) => {
    // setLoading(true)
    Api.post('/form/question/delete', {
      questionId
    }).then((res) => {
      const { idArr, newDict } = arrayToReducer(res?.questions);
      console.log(res)
      setQuestionIds(idArr)
      setQuestionsDict(newDict)
      // setQuestions(res?.questions)
      // setLoading(false)
      // setLoading(false);
      // console.log(formIds)
    })
  }





  // const { questionIds, questionsDict, loading } = useQuestionApis(formId);
  // const [questions, setQuestions] = useState(location?.state?.questions || []);
  // console.log(questions)

  //🙂🙂🙂🙂🙂🙂TODO: Passing data througe routes has already been setup we have to check if the realtime question changes are being observed.🙂🙂🙂🙂🙂🙂







  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: "80vh", minWidth: '100%',
      mb: {
        xs: 8,
        md: 0
      }
    }}>
      {/* <QuestionCard /> */}
      {!loading ? <>
        {
          questionIds.map((id, index) => {
            const question = questionsDict[id];
            return (
              <QuestionCard
                key={id}
                index={index}
                question={question}
                formId={formId}
                // updateQuestion={updateQuestion}
                deleteQuestion={deleteQuestion}
                createQuestion={createQuestion}
              />
            )
          })
        }</> : <CircularProgress />}



    </Box>
  )
}

export default Questions
