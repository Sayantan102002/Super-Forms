import { LoadingButton } from '@mui/lab'
import React from 'react'
import CreateFormDialog from './CreateFormDialog'
import AddIcon from '@mui/icons-material/Add';
import { Button, Container } from '@mui/material';
export default function CreateFormBtn(props) {
    const { setOpen, open } = props;

    return (
        <div>
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{ marginTop: '2vh', marginRight: "2vw" }}
                onClick={() => { setOpen(true) }}
                color="primary">

                Create Form
            </Button>

            <CreateFormDialog
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}
