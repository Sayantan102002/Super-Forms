import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import { LoadingButton } from '@mui/lab';
import PhotoUploader from './photo.uploader';
export default function CreateFormDialog(props) {
    const { open, setOpen, createForm, setFormName, setFormDesc, formName, formDesc, setFormImg, formImg } = props;
    const [loading, setLoading] = useState(false);
    const handleClose = () => {
        setOpenAl(true);
        setOpen(false);
        setFormName(null);
        setFormDesc(null);
        setLoading(false);
    }
    const [openAl, setOpenAl] = useState(false);
    return (
        <div>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" /*PaperProps={{ sx: { width: "50%", height: "100%" } }}*/>
                <DialogTitle>Create Form</DialogTitle>
                <DialogContent /*PaperProps={{ sx: { height: "100%" } }}*/>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Form title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formName}
                        onChange={(event) => setFormName(event.target.value)}
                        error={formName?.length < 3 && formName !== null}
                        helperText="Form Name must be at least 3 characters"
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Form description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formDesc}
                        onChange={(event) => setFormDesc(event.target.value)}
                        error={formDesc?.length < 5 && formName !== null}
                        helperText="Form Description must be at least 5 characters"
                    />
                    <PhotoUploader setFormImg={setFormImg}
                        formImg={formImg} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="error" startIcon={<DoDisturbAltIcon />}>Cancel</Button>
                    <LoadingButton loading={loading}
                        onClick={() => { setLoading(true); createForm(); handleClose(); }} variant="contained" startIcon={<CheckIcon />}
                        disabled={!(formName?.length > 3 && formDesc?.length > 5)}
                    >Create</LoadingButton>
                </DialogActions>
            </Dialog>
            {/* <Alert type="success" message="Form created Successfully" setOpen={setOpenAl} open={openAl} /> */}
        </div>
    )
}
