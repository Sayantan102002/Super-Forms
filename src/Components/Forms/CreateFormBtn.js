import { LoadingButton } from '@mui/lab'
import React from 'react'
import CreateFormDialog from './CreateFormDialog'
import AddIcon from '@mui/icons-material/Add';
export default function CreateFormBtn(props) {
    const { loading, setLoading, createForm, setFormName, setFormDesc, formName, formDesc, setOpen, open, setFormImg, formImg } = props;
    return (
        <div>
            <LoadingButton variant="outlined" startIcon={<AddIcon />} sx={{ marginTop: '2vh' }} onClick={() => { setOpen(true) }} loading={loading}>
                Create Form
            </LoadingButton>
            <CreateFormDialog
                open={open} setOpen={setOpen} createForm={createForm} setFormName={setFormName} setFormDesc={setFormDesc} formName={formName} formDesc={formDesc} setFormImg={setFormImg}
                formImg={formImg}
            />
        </div>
    )
}
