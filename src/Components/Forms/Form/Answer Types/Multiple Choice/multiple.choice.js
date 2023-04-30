import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Api from '../../../../Helper/Api';
import arrayToReducer from '../../../../Helper/arrayToReducer';
import useOptionApis from '../../../../Helper/option.question.hooks';
import MultipleChoiceEdit from './multiple.choice.edit';
export default function MultipleChoice(props) {
    const {
        question
    } = props;

    const { user } = useSelector(state => state.auth)
    const [optionIds, setOptionIds] = useState([]);
    const [optionsDict, setOptionsDict] = useState({});
    // const { optionIds, optionsDict } = useOptionApis(options)
    // useEffect(()=>{

    // })
    useEffect(() => {
        console.log(question?.options)
        const { idArr, newDict } = arrayToReducer(question?.options);
        setOptionIds(idArr);
        setOptionsDict(newDict);
    }, [])


    const createOption = async (index) => {
        Api.post('/form/question/option/create', {
            optionObj: {
                user: user?._id,
                question: question?._id,
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
    const deleteOption = async (optionId, index) => {
        Api.post('/form/question/option/delete', {
            optionId
        }).then((res) => {
            const { idArr, newDict } = arrayToReducer(res?.options)
            // console.log(res)
            setOptionIds([
                ...optionIds.slice(0, index),
                ...optionIds.slice(index + 1)

            ])
            setOptionsDict(newDict)
            // setLoading(false);
            // console.log(formIds)
        })
    }



    return (

        <Box>
            {optionIds != 0 ?
                optionIds.map((optionId, index) => {
                    let option = optionsDict[optionId]
                    return <MultipleChoiceEdit
                        optionId={optionId}
                        index={index}
                        option={option}
                        createOption={createOption}
                        updateOption={updateOption}
                        deleteOption={deleteOption}
                    />
                }) : <Button variant="outlined" onClick={() => {
                    createOption(0)
                }} >Create Option</Button>
            }
        </Box>

    )
}
