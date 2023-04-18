import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Api from './Api';
import arrayToReducer from './arrayToReducer';

export default function useUserApis() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const { usersDictionary, userIds } = useSelector((state) => state.users);
    const getUsers = async () => {
        if (userIds.length > 0)
            return;
        else {
            setLoading(true)
            Api.post('user/getUsers/')
                .then((res) => {
                    console.log(res, 'res')
                    const { idArr, newDict } = arrayToReducer(res);
                    dispatch({
                        type: 'AddUsers',
                        payload: {
                            userIds: idArr,
                            usersDictionary: newDict
                        }
                    })
                })
            setLoading(false)

        }
    }
    return {
        getUsers,
        loading
    }
}
