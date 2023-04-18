import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import NotificationCard from './Notifications/NotificationCard';
import { Box, Button, Paper, Slide, Typography } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast(props) {
    const { setOpen, open, message, type, notification } = props;
    // const [open, setOpen] = React.useState(true);
    function SlideTransition(props) {
        return <Slide {...props} direction="left" />;
    }
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (

        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            {notification?.type === "Message" ? <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert> :
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
                        <Typography>{message}</Typography>
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
            }
        </Snackbar>

    );
}