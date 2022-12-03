import { Box, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import CreateFormBtn from './CreateFormBtn';
import FormCards from './FormCards'


export default function Dashboard(props) {
    const [open, setOpen] = useState(false);
    const { loading, setLoading, createForm, setFormName, setFormDesc, formName, formDesc, deleteForm } = props;
    return (
        <Container maxWidth="xl" >
            <CreateFormBtn
                open={open}
                setOpen={setOpen}
                createForm={createForm}
                setFormName={setFormName}
                setFormDesc={setFormDesc}
                formName={formName}
                formDesc={formDesc}
                loading={loading}
                setLoading={setLoading}
            />
            <Box sx={{ flexGrow: 1, margin: '2vh 0' }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                    <FormCards deleteForm={deleteForm} />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <FormCards deleteForm={deleteForm} />
                </Grid>
            </Box>


        </Container>
    )

}
