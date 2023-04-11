import { LoadingButton } from '@mui/lab'
import React from 'react'
import CreateFormDialog from './CreateFormDialog'
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Fab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CreateFormBtn(props) {
    const { setOpen, open } = props;
    const theme = createTheme({
        components: {
            MuiFab: {
                styleOverrides: {
                    root: {
                        lineHeight: "normal"
                    }
                }
            }
        }
    })
    return (
        <div>
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                    marginTop: '2vh',
                    mr: "2vw",
                    display: { xs: 'none', md: 'flex' },
                }}
                onClick={() => { setOpen(true) }}
                color="primary">

                Create Form
            </Button>

            <ThemeProvider theme={theme}>
                <Fab sx={{
                    position: 'fixed',
                    bottom: 90,
                    right: 16,
                    display: { xs: 'flex', md: 'none' },
                }}
                    aria-label="Add Form"
                    color="primary"
                    // variant="extended"
                    onClick={() => { setOpen(true) }}
                >
                    <AddIcon />
                    {/* Create Form */}
                </Fab>
            </ThemeProvider>
            <CreateFormDialog
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}
