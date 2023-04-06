import { Box, Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import LoadingButton from '@mui/lab/LoadingButton';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CreateFormDialog from './CreateFormDialog';
import CreateFormBtn from './CreateFormBtn';
export default function DefaultView(props) {
    const { user } = useSelector((state) => (state.auth));
    const [open, setOpen] = useState(false);

    return (
        <Container maxWidth="sm" sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '3vh' }}>
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <CreateFormBtn
                open={open}
                setOpen={setOpen}
            />
        </Container>
    )
}
