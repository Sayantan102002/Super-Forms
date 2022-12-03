import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alertt = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Alert(props) {
    const { setOpen, open } = props;
    // const [open, setOpen] = React.useState(true);

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

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alertt onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
                {props.message}
            </Alertt>
        </Snackbar>

    );
}