import { onValue, push, ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../../config/firebase.config'
import Api from './Api'
import arrayToReducer from './arrayToReducer'

export default function useNotificationApis() {
    const [openAl, setOpenAl] = useState(false);
    const dispatch = useDispatch();
    const sendNotification = async (notificationObj) => {
        let notification = await Api.post('notification/create', notificationObj)
        const createRef = ref(db, `/notifications/${notification?.receiver?._id}`)
        set(push(createRef), notification)

        // push(db, 'notifications/' + notification._id, notificationObj);
    }
    const getNotifications = (receiverId) => {
        setOpenAl(false)
        const notifRef = ref(db, 'notifications/' + receiverId)
        onValue(notifRef, (snapshot) => {
            const data = snapshot.val();

            console.log(Object?.values(data));
            const { idArr, newDict } = arrayToReducer(Object.values(data));
            dispatch({
                type: "AddNotification",
                payload: {
                    notificationIds: idArr.reverse(),
                    notificationsDictionary: newDict
                }
            })
            setOpenAl(true)
        });
    }
    return {
        sendNotification,
        getNotifications,
        openAl,
        setOpenAl
    }
}
