import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Api from "./Api"
import arrayToReducer from './arrayToReducer';
export default function useQuestionApis(formId) {
    const { user } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [questionIds, setQuestionIds] = useState([])
    const [questionsDict, setQuestionsDict] = useState({})
    // let form = formsDictionary[formId]
    useEffect(() => {
        setLoading(true)
        Api.post("/form/getFormById", {
            formId
        })
            .then((res) => {
                const { idArr, newDict } = arrayToReducer(res?.questions);
                setQuestionIds(idArr)
                setQuestionsDict(newDict)
                // setQuestions(res?.questions)
                setLoading(false)
            })
    }, [setLoading,
        setQuestionIds,
        setQuestionsDict])

    const createQuestion = async (formId) => {
        // setLoading(true)
        Api.post('/form/question/create', {
            questionObj: {
                form: formId,
                user: user?._id,
                type: "Short Answer",
                questionText: "Question SA 2"
            }
        }).then((res) => {
            console.log([res], "Question Created............")
            const { idArr, newDict } = arrayToReducer([res]);
            setQuestionIds([
                ...questionIds,
                ...idArr
            ])
            setQuestionsDict({
                ...questionsDict,
                ...newDict
            })
            // setLoading(false)
            // setLoading(false);
            console.log(questionsDict)
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
        setLoading(true)
        Api.post('/form/question/delete', {
            questionId
        }).then((res) => {
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
    return {
        createQuestion,
        updateQuestion,
        deleteQuestion,
        questionIds,
        questionsDict,
        loading
    }
}
