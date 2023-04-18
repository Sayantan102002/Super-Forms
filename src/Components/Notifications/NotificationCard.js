import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

export default function NotificationCard(props) {
    const { notification } = props;
    // const {
    //     user,
    //     message,
    //     type,
    //     form,
    //     // seen,
    //     // actions,
    // } = notification;
    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2
        }}>
            <Box>
                <Typography>{notification?.form?.name}</Typography>
            </Box>
            <Box>
                <Typography>{notification?.form?.description}</Typography>
            </Box>
            <Box>
                <Typography>{notification?.message}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Button variant="contained" color="error">Reject</Button>
                <Button variant="contained" color="primary">Accept</Button>
            </Box>
        </Paper>
    )
}
