import { Box, Container, CssBaseline, Paper ,Grid,Avatar,TextField} from '@mui/material';
import Typography from '@mui/material/Typography'
import React from 'react'
import NavBar from '../NavBar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleBtn from '../Helper/GoogleBtn';
import SignIn from './SingIn'

export default function About() {
    console.log("This is about pageeee");
    return (<>
        <NavBar />
        <SignIn/>
        
    </>
    )
}
