import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Api from "./Api"
import arrayToReducer from './arrayToReducer';
export default function useOptionApis() {
    const { user } = useSelector(state => state.auth)
    const [optionIds, setOptionIds] = useState([]);
    const [optionsDict, setOptionsDict] = useState({});

    const createOption = async (questionId, index) => {
        Api.post('/form/question/option/create', {
            optionObj: {
                user: user?._id,
                question: questionId,
                // optionText: "Option",
            },
            index
        }).then((res) => {
            console.log(res)
            const { idArr, newDict } = arrayToReducer(res?.options)
            setOptionIds([
                ...optionIds.slice(0, index + 1),
                res._id,
                ...optionIds.slice(index + 1)
            ])
            setOptionsDict({
                ...optionsDict,
                ...newDict
            })

            // setOptions(res?.options)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    const updateOption = async (optionObj) => {
        Api.post('/form/question/option/update', optionObj).then((res) => {
            console.log(res)
            const { idArr, newDict } = arrayToReducer([res])
            setOptionIds(idArr)
            setOptionsDict(newDict)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    const deleteOption = async (optionId) => {
        Api.post('/form/question/option/delete', {
            optionId
        }).then((res) => {
            const { idArr, newDict } = arrayToReducer(res?.options)
            console.log(res)
            setOptionIds(idArr)
            setOptionsDict(newDict)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    return {
        createOption,
        updateOption,
        deleteOption,
        optionIds,
        optionsDict,
    }
}
