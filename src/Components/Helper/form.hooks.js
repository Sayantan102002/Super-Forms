import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Api from "./Api"
import arrayToReducer from './arrayToReducer';
export default function useFormApis() {
  const { user } = useSelector(state => state.auth)
  const [isLoading, setLoading] = useState(false);
  const { formsDictionary, formIds } = useSelector(state => state.forms)
  const dispatch = useDispatch();
  const createForm = async (formName, formDesc, formImg) => {
    // setLoading(true);
    Api.post('/form/create', {
      name: formName,
      description: formDesc,
      image: formImg,
      user: user?._id
    })
      .then((res) => {
        console.log(res);
        const { idArr, newDict } = arrayToReducer(res);
        dispatch({
          type: "AddForm",
          payload: {
            formIds: idArr.reverse(),
            formsDictionary: newDict
          }
        })
        // setLoading(false);
        // console.log(formIds)
      })
  }
  const deleteForm = async (formId) => {
    // setLoading(true);
    Api.post('/form/delete', {
      formId
    })
      .then((res) => {
        console.log(res);
        const { idArr, newDict } = arrayToReducer(res);
        dispatch({
          type: "AddForm",
          payload: {
            formIds: idArr.reverse(),
            formsDictionary: newDict
          }
        })
        // setLoading(false);
      })
  }
  const getForms = async () => {
    setLoading(true);
    Api.post('/form/getForms', {
      user: user?._id
    })
      .then((res) => {
        console.log(res);
        const { idArr, newDict } = arrayToReducer(res);
        dispatch({
          type: "AddForm",
          payload: {
            formIds: idArr.reverse(),
            formsDictionary: newDict
          }
        })
        setLoading(false);
      })
  }
  return {
    createForm,
    deleteForm,
    getForms,
    isLoading
  }
}

