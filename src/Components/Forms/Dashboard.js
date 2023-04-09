import { Box, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import CreateFormBtn from './CreateFormBtn';
import FormCards from './FormCards'


export default function Dashboard(props) {
    const [open, setOpen] = useState(false);
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}>

                <CreateFormBtn
                    open={open}
                    setOpen={setOpen}
                />
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


        </Container>
    )

}
