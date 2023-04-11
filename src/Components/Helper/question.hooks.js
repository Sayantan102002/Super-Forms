import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Api from "./Api"
export default function useQuestionApis() {
    const { user } = useSelector(state => state.auth)
    const [questions, setQuestions] = useState([]);

    const createQuestion = async (questionObj) => {
        Api.post('/form/question/create', {
            ...questionObj,
            user: user?._id
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
    return {
        createQuestion,
        updateQuestion,
        deleteQuestion,
        questions
    }
}
