import React, { useEffect, useState } from 'react'
import DefaultView from '../Forms/DefaultView';
import NavBar from '../NavBar';
import { ref, onValue, set, push, remove } from "firebase/database";
import { db } from "../../config/firebase.config";
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { Box, Container, height } from '@mui/system';
import Dashboard from '../Forms/Dashboard';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
export default function Home() {
    const { user } = useSelector((state) => (state.auth));
    console.log(user, "user");
    const { formIds } = useSelector((state) => (state.forms));
    const [loading, setLoading] = useState(true);
    const [formName, setFormName] = useState(null);
    const [formDesc, setFormDesc] = useState(null);
    const [formImg, setFormImg] = useState(null);
    const dispatch = useDispatch();
    const getForms = () => {
        // setLoading(true);
        const formref = ref(db, 'forms/' + user?.uid);
        onValue(formref, (snapshot) => {
            const data = snapshot.val();
            let formIds = data ? [...Object?.keys(data)] : [];
            // console.log(Object?.keys(data), 'forms');
            dispatch({
                type: 'AddForm',
                payload: {
                    formIds: formIds.reverse(),
                    formsDictionary: data
                }
            })
            setLoading(false);
        });
    }
    const createForm = () => {
        setLoading(true);
        const formref = ref(db, 'forms/' + user?.uid);
        push(formref, {
            name: user?.displayName,
            email: user?.email,
            form: {
                formName,
                formDesc,
                formImg,
                createdBy: user?.displayName,
                createdAt: formatRelative(subDays(new Date(), 3), new Date())
            },
        });

        setLoading(false);
    }
    const deleteForm = (formId) => {
        setLoading(true);
        const formref = ref(db, 'forms/' + formId);
        remove(formref);
        setLoading(false);
    }
    useEffect(() => {
        getForms();
    }, [loading, user])
    return (
        <>
            <NavBar />
            {loading ? <Container maxWidth="xl">
                <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            </Container> :
                <>{!(formIds.length > 0) ?
                    <DefaultView
                        createForm={createForm}
                        loading={loading}
                        setLoading={setLoading}
                        setFormName={setFormName}
                        setFormDesc={setFormDesc}
                        setFormImg={setFormImg}
                        formName={formName}
                        formDesc={formDesc}
                        formImg={formImg}
                    />
                    : <Dashboard
                        createForm={createForm}
                        loading={loading}
                        setLoading={setLoading}
                        setFormName={setFormName}
                        setFormDesc={setFormDesc}
                        formName={formName}
                        formDesc={formDesc}
                        deleteForm={deleteForm}
                        setFormImg={setFormImg}
                        formImg={formImg}
                    />}
                </>}
        </>
    )
}
