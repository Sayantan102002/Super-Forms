import React from 'react'
import { ref, onValue, set, push, remove } from "firebase/database";
import { db } from "../../config/firebase.config";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
// import { useDispatch } from 'react-redux';
const getForms = (dispatch, user) => {
    // const dispatch = useDispatch();
    const formref = ref(db, 'forms/' + user?.uid);
    onValue(formref, (snapshot) => {
        const data = snapshot.val();
        let formIds = data ? [...Object?.keys(data)] : [];
        // console.log(Object?.keys(data), 'forms');
        dispatch({
            type: 'AddForm',
            payload: {
                formIds,
                formsDictionary: data
            }
        })

    });
}
const createForm = (user, formName, formDesc) => {
    const formref = ref(db, 'forms/' + user?.uid);
    push(formref, {
        name: user?.displayName,
        email: user?.email,
        form: {
            formName,
            formDesc,
            createdBy: user?.displayName,
            createdAt: formatRelative(subDays(new Date(), 3), new Date())
        },
    });


}
const deleteForm = (formId) => {
    const formref = ref(db, 'forms/' + formId);
    remove(formref);
}
export {
    getForms,
    createForm,
    deleteForm,
}