import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Api from "./Api"
export default function useOptionApis() {
    const { user } = useSelector(state => state.auth)
    const [options, setOptions] = useState([]);

    const createOption = async (optionObj) => {
        Api.post('/form/option/create', {
            ...optionObj,
            user: user?._id
        }).then((res) => {
            console.log(res)
            setOptions(res?.options)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    const updateOption = async (optionObj) => {
        Api.post('/form/option/update', optionObj).then((res) => {
            console.log(res)
            setOptions(res?.options)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    const deleteOption = async (optionId) => {
        Api.post('/form/option/create', {
            optionId
        }).then((res) => {
            console.log(res)
            setOptions(res?.options)
            // setLoading(false);
            // console.log(formIds)
        })
    }
    return {
        createOption,
        updateOption,
        deleteOption,
        options
    }
}
