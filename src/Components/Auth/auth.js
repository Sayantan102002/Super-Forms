import { Box, Container, CssBaseline, Paper } from '@mui/material';
import React from 'react'
import NavBar from '../NavBar';
import GoogleBtn from '../Helper/GoogleBtn';

export default function About() {
    console.log("This is about pageeee");
    return (<>
        <NavBar />
        <CssBaseline />
        <Container maxWidth="xl" >
            <Box sx={{ bgcolor: '#cfe8fc', height: '90vh', width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{
                    // bgcolor: '#000',
                    width: '25vw',
                    height: '50vh',

                }}>
                    <Paper elevation={3} sx={{
                        height: '100%', width: '100%', display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <GoogleBtn />
                    </Paper>
                </Box>
            </Box>
        </Container>
    </>
    )
}
