import { Box, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import CreateFormBtn from './CreateFormBtn';
import FormCards from './FormCards'


export default function Dashboard(props) {
    const [open, setOpen] = useState(false);
    const { loading, setLoading, createForm, setFormName, setFormDesc, formName, formDesc, deleteForm, setFormImg, formImg } = props;
    return (
        <Container sx={{ minWidth: "100vw", minHeight: "100vh", background: "linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )" }} >
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
                setFormImg={setFormImg}
                formImg={formImg}
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
