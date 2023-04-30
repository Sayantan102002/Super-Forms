import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Api from "./Api"
import arrayToReducer from './arrayToReducer';
import { useEffectOnce } from 'react-use'
export default function useQuestionApis(formId) {
    const { user } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [State, setState] = useState(0);
    const [questionIds, setQuestionIds] = useState([])
    const [questionsDict, setQuestionsDict] = useState({})
    // let form = formsDictionary[formId]
    // const getForms = useCallback((formId) => {
    //     // if (questionIds.length == 0) {
    //     // setLoading(true)
    //     Api.post("/form/getFormById", {
    //         formId
    //     })
    //         .then((res) => {
    //             const { idArr, newDict } = arrayToReducer(res?.questions);
    //             setQuestionIds(idArr)
    //             setQuestionsDict(newDict)
    //             // console.log(questionIds, questionsDict)
    //             // setQuestions(res?.questions)
    //             // setLoading(false)
    //         })
    //     // }
    //     // else {
    //     console.log(questionIds, questionsDict);
    //     // console.log(questions);
    //     // }
    //     return questionIds.length
    // }, [questionIds.length, Object.keys(questionsDict).length])
    // useEffect(() => {
    //     setState(getForms(formId))
    //     // return {
    //     // }
    // }, [getForms, formId])
    // useEffect(()=>{
    // useEffect(() => {
    //     getForms(formId)
    // }, [getForms, questionIds.length, questionsDict])
    // })
    const createQuestion = async (formId) => {
        // setLoading(true)
        Api.post('/form/question/create', {
            questionObj: {
                form: formId,
                user: user?._id,
                type: "Short Answer",
                questionText: "Ques"
            }
        }).then((res) => {
            console.log(res, "Question Created............")
            const { idArr, newDict } = arrayToReducer([res]);
            setQuestionIds(idArr)
            setQuestionsDict(newDict)
            setQuestionIds((prev) => [
                ...prev,
                res?._id
            ])
            setQuestionsDict((prev) => [{
                ...prev,
                ...newDict
            }])
            // setLoading(false)
            // setLoading(false);
            console.log(questionIds, questionsDict)
            console.log(idArr, newDict)

        })
    }
    const updateQuestion = async (questionObj) => {
        setLoading(true)
        Api.post('/form/question/update', questionObj).then((res) => {
            const { idArr, newDict } = arrayToReducer([res]);
            console.log(res)
            setQuestionIds(idArr)
            setQuestionsDict(newDict)
            setQuestions(res?.questions)
            setLoading(false)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    const deleteQuestion = async (questionId) => {
        // setLoading(true)
        Api.post('/form/question/delete', {
            questionId
        }).then((res) => {
            const { idArr, newDict } = arrayToReducer(res);
            console.log(res)
            setQuestionIds(idArr)
            setQuestionsDict(newDict)
            setQuestions(res?.questions)
            setLoading(false)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    return {
        createQuestion,
        updateQuestion,
        deleteQuestion,
        // getForms,
        questionIds,
        questionsDict,
        loading
    }
}
