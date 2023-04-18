import { Box, Button, Container, Fab, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useNotificationApis from '../Helper/notification.hooks';
import Toast from '../Toast';
import CreateFormBtn from './CreateFormBtn';
import FormCards from './FormCards'

export default function Dashboard(props) {
    const [open, setOpen] = useState(false)
    // const [openAl, setOpenAl] = useState(false);
    // const [showToast, setShowToast] = useState(false);
    const { user } = useSelector(state => state.auth)
    const { notificationIds, notificationsDictionary } = useSelector(state => state.notifications)
    const { sendNotification, getNotifications, openAl, setOpenAl } = useNotificationApis();
    useEffect(() => {
        getNotifications(user?._id)
        console.log(notificationsDictionary[notificationIds[0]]?.message)

    }, [])
    return (
        <Container sx={{
            minWidth: "100%",
            minHeight: "100vh",
            mb: "10vh"
            //  background: "linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )" 
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'flex-start'
        }}
        >
            <Box sx={{

                flexDirection: 'column',
                alignItems: 'flex-end',

            }}>

                <CreateFormBtn
                    open={open}
                    setOpen={setOpen}
                />
                <Button
                    variant="contained"
                    onClick={
                        () => {

                            sendNotification({
                                user: user?._id,
                                receiver: "6414d0bf2fdd39855faa410d",
                                form: "643d22c1bb71539d5c58a8a2",
                                message: "This is a custom notification message",
                                type: "Invitation"
                            })



                        }
                    }
                >
                    Click Me!!!
                </Button>
            </Box>



            <Box sx={{
                flexGrow: 1,
                margin: '2vh 0',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    sx={{ display: { xs: 'none', md: 'flex' }, }}

                >
                    <FormCards />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <FormCards />
                </Grid>
            </Box>
            <Toast type="success" message={notificationsDictionary[notificationIds[0]]?.message} setOpen={setOpenAl} open={openAl} notification={notificationsDictionary[notificationIds[0]]} />

        </Container>
    )

}
